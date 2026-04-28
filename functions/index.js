const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();

exports.deleteAuthUser = functions.region("asia-northeast3").https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "로그인이 필요합니다.");
  }

  const requesterUid = String(context.auth.uid || "");
  const requesterSnapshot = await admin.database().ref(`users/${requesterUid}/role`).once("value");
  const requesterRole = String(requesterSnapshot.val() || "").toLowerCase();
  const isSystemAdmin = requesterRole === "super_admin" || requesterRole === "admin";

  if (!isSystemAdmin) {
    throw new functions.https.HttpsError("permission-denied", "시스템 관리자만 회원을 삭제할 수 있습니다.");
  }

  const targetUid = String(data?.uid || "").trim();
  if (!targetUid) {
    throw new functions.https.HttpsError("invalid-argument", "삭제할 uid가 필요합니다.");
  }

  try {
    await admin.auth().deleteUser(targetUid);
    return { success: true };
  } catch (error) {
    const code = String(error?.code || "");
    if (code === "auth/user-not-found") {
      // Treat as idempotent success so DB profile cleanup can continue.
      return { success: true, alreadyDeleted: true };
    }

    if (code === "auth/insufficient-permission") {
      throw new functions.https.HttpsError("permission-denied", "Functions 서비스 계정 권한이 부족합니다.");
    }

    throw new functions.https.HttpsError("internal", `Auth 삭제 실패: ${error?.message || "unknown"}`);
  }
});
