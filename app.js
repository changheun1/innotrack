const STORAGE_KEY = "innotrack-projects-v2";
const MILESTONE_STORAGE_KEY = "innotrack-milestones-v1";
const QUALIFICATION_STORAGE_KEY = "innotrack-qualifications-v1";
const DASHBOARD_NOTICE_STORAGE_KEY = "innotrack-dashboard-notices-v1";
const CERTIFICATION_EXAM_STORAGE_KEY = "innotrack-certification-exams-v1";
const EDUCATION_SCHEDULE_STORAGE_KEY = "innotrack-education-schedules-v1";
const EDUCATION_ENROLLMENT_STORAGE_KEY = "innotrack-education-enrollments-v1";
const EDUCATION_COST_DETAIL_STORAGE_KEY = "innotrack-education-cost-details-v1";
const SURVEY_QUESTION_STORAGE_KEY = "innotrack-survey-questions-v1";
const SURVEY_RESPONSE_STORAGE_KEY = "innotrack-survey-responses-v1";
const SURVEY_FORM_STORAGE_KEY = "innotrack-survey-forms-v1";
const CERTIFICATION_EXAM_APPLICATION_STORAGE_KEY = "innotrack-certification-exam-applications-v1";
const REFERENCE_DATE = (() => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
})();
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const TASK_ROWS_PER_PAGE = 14;
const QUALIFICATION_ROWS_PER_PAGE = 14;
const EDUCATION_ADMIN_ROWS_PER_PAGE = 11;
const SURVEY_RESULT_ROWS_PER_PAGE = 8;

const companyOptions = [
  "에이텍",
  "에이텍모빌리티",
  "에이텍시스템",
  "에이텍씨앤",
  "에이텍오토",
  "에이텍컴퓨터",
];
const educationAdminMajorCategoryOptions = ["리더십", "역량", "기타"];
const educationAdminCompletionStateOptions = ["미진행", "진행중", "완료", "취소"];
const educationAdminOperatorDeptOptions = [...companyOptions, "경영혁신실"];
const educationCostCategoryOptions = ["강사비", "시설이용료", "기타경비", "기타"];
const educationRecruitStatusLabels = {
  planned: "모집예정",
  open: "모집중",
  closed: "모집마감",
};

const stageOrder = ["NotStarted", "Define", "Measure", "Analyze", "Improve", "Control", "Completed"];
const stageCheckpointOrder = ["Define", "Measure", "Analyze", "Improve", "Control"];
const stageLabels = {
  NotStarted: "미실행",
  Define: "정의",
  Measure: "측정",
  Analyze: "분석",
  Improve: "개선",
  Control: "관리",
  Completed: "완료",
};

const stageShortLabels = {
  NotStarted: "미",
  Define: "D",
  Measure: "M",
  Analyze: "A",
  Improve: "I",
  Control: "C",
  Completed: "완",
};

const projectTypeOptions = ["6σ", "6S", "R&D", "AI"];
const qualificationTypeOptions = ["6σ", "AICA", "AICE"];
const qualificationGradeOptions = {
  "6σ": ["GB", "BB", "MBB"],
  AICA: ["L2", "L3", "L4"],
  AICE: ["Basic", "Associate", "Professional"],
};
const certificationOperationStatusLabels = {
  planned: "예정",
  in_progress: "진행중",
  completed: "완료",
};
const csfTypeOptions = [
  "매출 증진",
  "수익성 향상",
  "시장경쟁력 확보",
  "사업기반 안정화",
  "고객가치 기반 역량 강화",
  "신기술 확보",
  "영업 프로세스 개선",
  "개발 프로세스 개선",
  "생산 프로세스 개선",
  "서비스 프로세스 개선",
  "지원 프로세스 개선",
];

const healthLabels = {
  "on-track": "정상",
  watch: "관리 필요",
  risk: "위험",
};

const scheduleStatusLabels = {
  "on-track": "정상",
  delayed: "지연",
};

const assessmentWeights = {
  potentialImpact: 15,
  strategicAlignment: 25,
  expectedEffect: 15,
  rippleEffect: 15,
  feasibility: 15,
  urgency: 15,
};

const assessmentLevelLabels = {
  high: "높음",
  medium: "보통",
  low: "낮음",
};

const assessmentLevelScores = {
  high: 9,
  medium: 3,
  low: 1,
};

const milestoneToneLabels = {
  blue: "운영",
  amber: "점검",
  coral: "마감",
};

const milestoneMonthMap = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

const milestones = [
  {
    month: "APR",
    day: "25",
    title: "법인별 4월 리뷰 제출",
    description: "팀리더가 단계별 증빙과 리스크 코멘트를 입력합니다.",
    tone: "blue",
  },
  {
    month: "MAY",
    day: "08",
    title: "혁신실 중간 점검 회의",
    description: "지연 과제 원인 분석 및 코칭 대상 확정",
    tone: "amber",
  },
  {
    month: "MAY",
    day: "31",
    title: "상반기 성과 검증 마감",
    description: "KPI 실적 연결성과 과제 종료 판정 준비",
    tone: "coral",
  },
];

const defaultDashboardNoticeItems = [
  { id: "NOTICE-001", title: "자격검정 접수 일정이 업데이트되었습니다.", date: "2026-04-24" },
  { id: "NOTICE-002", title: "2분기 교육 환급 정산 점검 안내", date: "2026-04-22" },
  { id: "NOTICE-003", title: "혁신과제 월간 리뷰 자료 제출 요청", date: "2026-04-20" },
];

const defaultQualifications = [
  {
    id: "QL-001",
    qualificationType: "6σ",
    grade: "BB",
    certificateNo: "6S-BB-24-001",
    company: "에이텍",
    department: "경영혁신실",
    name: "김도현",
    acquiredDate: "2024-03-15",
  },
  {
    id: "QL-002",
    qualificationType: "6σ",
    grade: "GB",
    certificateNo: "6S-GB-25-014",
    company: "에이텍모빌리티",
    department: "생산혁신팀",
    name: "박서연",
    acquiredDate: "2025-07-22",
  },
  {
    id: "QL-003",
    qualificationType: "6σ",
    grade: "GB",
    certificateNo: "6S-GB-26-003",
    company: "에이텍씨앤",
    department: "영업기획팀",
    name: "윤세진",
    acquiredDate: "2026-02-11",
  },
  {
    id: "QL-004",
    qualificationType: "AICA",
    grade: "L2",
    certificateNo: "AICA-L2-25-021",
    company: "에이텍시스템",
    department: "서비스개발팀",
    name: "오지훈",
    acquiredDate: "2025-08-28",
  },
  {
    id: "QL-005",
    qualificationType: "AICA",
    grade: "L3",
    certificateNo: "AICA-L3-26-004",
    company: "에이텍",
    department: "AI전략팀",
    name: "최하린",
    acquiredDate: "2026-01-30",
  },
  {
    id: "QL-006",
    qualificationType: "AICA",
    grade: "L4",
    certificateNo: "AICA-L4-24-008",
    company: "에이텍컴퓨터",
    department: "데이터혁신팀",
    name: "정하늘",
    acquiredDate: "2024-11-19",
  },
  {
    id: "QL-007",
    qualificationType: "AICE",
    grade: "Basic",
    certificateNo: "AICE-B-25-033",
    company: "에이텍오토",
    department: "품질보증팀",
    name: "강세라",
    acquiredDate: "2025-05-03",
  },
  {
    id: "QL-008",
    qualificationType: "AICE",
    grade: "Associate",
    certificateNo: "AICE-A-26-011",
    company: "에이텍시스템",
    department: "고객경험팀",
    name: "문채원",
    acquiredDate: "2026-03-08",
  },
  {
    id: "QL-009",
    qualificationType: "AICE",
    grade: "Professional",
    certificateNo: "AICE-P-24-002",
    company: "에이텍모빌리티",
    department: "영업관리팀",
    name: "박성호",
    acquiredDate: "2024-09-25",
  },
  {
    id: "QL-010",
    qualificationType: "6σ",
    grade: "BB",
    certificateNo: "6S-BB-23-018",
    company: "에이텍컴퓨터",
    department: "SCM혁신팀",
    name: "한도겸",
    acquiredDate: "2023-12-14",
  },
];

const defaultProjects = [
  {
    id: "IN-26-001",
    name: "구매 프로세스 표준화",
    company: "에이텍씨앤",
    department: "경영혁신실",
    leader: "김민지",
    role: "혁신 PM",
    kpi: "원가절감률",
    kpiTarget: "연 4.2% 절감",
    stage: "Analyze",
    startDate: "2026-03-03",
    progress: 58,
    deadline: "2026-05-15",
    lastUpdated: "2026-04-16",
    health: "watch",
    nextMilestone: "원인분석 리뷰",
    impact: 2.1,
    alignment: 92,
    risk: "협력사 데이터 취합 지연",
    evidence: "원가 구조 분석서 1차 업로드",
    note: "분석 결과에 따라 개선안 우선순위 재조정 예정",
  },
  {
    id: "IN-26-002",
    name: "수주 승인 리드타임 단축",
    company: "에이텍모빌리티",
    department: "영업관리팀",
    leader: "박성호",
    role: "팀장",
    kpi: "리드타임",
    kpiTarget: "평균 3일 단축",
    stage: "Improve",
    startDate: "2026-02-24",
    progress: 82,
    deadline: "2026-05-02",
    lastUpdated: "2026-04-08",
    health: "risk",
    nextMilestone: "개선안 파일럿 완료",
    impact: 1.8,
    alignment: 88,
    risk: "영업 승인 체계 협의 지연",
    evidence: "프로세스 개선안 및 파일럿 체크리스트",
    note: "파일럿 검증 완료 후 Control 단계 전환 가능",
  },
  {
    id: "IN-26-003",
    name: "품질 클레임 대응 자동화",
    company: "에이텍시스템",
    department: "품질보증팀",
    leader: "이은서",
    role: "파트장",
    kpi: "고객 불만 처리시간",
    kpiTarget: "24시간 내 90% 대응",
    stage: "Measure",
    startDate: "2026-03-10",
    progress: 34,
    deadline: "2026-06-10",
    lastUpdated: "2026-04-18",
    health: "on-track",
    nextMilestone: "VOC 데이터 기준선 확정",
    impact: 1.2,
    alignment: 84,
    risk: "현장 VOC 코드 표준화 필요",
    evidence: "VOC 유형 분석 초안",
    note: "기초 데이터 수집은 안정적으로 진행 중",
  },
  {
    id: "IN-26-004",
    name: "월말 마감 자동화 체계 구축",
    company: "에이텍",
    department: "재경팀",
    leader: "최도윤",
    role: "팀장",
    kpi: "마감 정확도",
    kpiTarget: "D+3 마감 정착",
    stage: "Control",
    startDate: "2026-02-17",
    progress: 96,
    deadline: "2026-04-28",
    lastUpdated: "2026-04-19",
    health: "on-track",
    nextMilestone: "운영 점검 및 표준안 배포",
    impact: 2.7,
    alignment: 95,
    risk: "부서 간 예외 처리 기준 점검 필요",
    evidence: "운영 SOP 최종본",
    note: "표준안 전사 배포 후 종료 처리 예정",
  },
  {
    id: "IN-26-005",
    name: "물류비 이상징후 조기 탐지",
    company: "에이텍컴퓨터",
    department: "SCM혁신팀",
    leader: "정하늘",
    role: "혁신리더",
    kpi: "물류비율",
    kpiTarget: "운송비 5% 절감",
    stage: "Analyze",
    startDate: "2026-03-17",
    progress: 61,
    deadline: "2026-05-19",
    lastUpdated: "2026-04-07",
    health: "watch",
    nextMilestone: "이상 패턴 판별 로직 확정",
    impact: 3.4,
    alignment: 90,
    risk: "지역 센터별 데이터 형식 불일치",
    evidence: "센터별 비용 패턴 분석 리포트",
    note: "기준 데이터만 통일되면 개선 속도 상승 예상",
  },
  {
    id: "IN-26-006",
    name: "IoT 장애 대응 체계 고도화",
    company: "에이텍시스템",
    department: "서비스개발팀",
    leader: "오지훈",
    role: "PM",
    kpi: "장애 복구시간",
    kpiTarget: "MTTR 20% 개선",
    stage: "Define",
    startDate: "2026-04-01",
    progress: 18,
    deadline: "2026-06-25",
    lastUpdated: "2026-04-02",
    health: "watch",
    nextMilestone: "평가 기준표 확정",
    impact: 2.9,
    alignment: 72,
    risk: "유관 부서 합의 지연",
    evidence: "",
    note: "KPI 연결 정의 보완이 필요",
  },
  {
    id: "IN-26-007",
    name: "현장 출하검사 체크리스트 디지털화",
    company: "에이텍오토",
    department: "생산혁신팀",
    leader: "강세라",
    role: "팀장",
    kpi: "재작업률",
    kpiTarget: "재작업 20% 감소",
    stage: "Improve",
    startDate: "2026-02-26",
    progress: 74,
    deadline: "2026-05-07",
    lastUpdated: "2026-04-05",
    health: "risk",
    nextMilestone: "현장 적용률 80% 달성",
    impact: 1.5,
    alignment: 86,
    risk: "현장 교육 일정 미확정",
    evidence: "디지털 체크리스트 시범 적용본",
    note: "현장 적응 지원이 없으면 저항 가능성 존재",
  },
  {
    id: "IN-26-008",
    name: "영업 KPI 시각화 대시보드 정비",
    company: "에이텍씨앤",
    department: "영업기획팀",
    leader: "윤세진",
    role: "매니저",
    kpi: "예측 정확도",
    kpiTarget: "Forecast 오차 10% 이내",
    stage: "Control",
    startDate: "2026-03-20",
    progress: 89,
    deadline: "2026-05-30",
    lastUpdated: "2026-04-17",
    health: "on-track",
    nextMilestone: "정기 운영 리뷰 이관",
    impact: 1.9,
    alignment: 91,
    risk: "추가 요구사항 범위 통제 필요",
    evidence: "시각화 템플릿 및 매뉴얼",
    note: "운영팀 이관 준비 중",
  },
  {
    id: "IN-26-009",
    name: "서비스 접수 VOC 분류 정밀화",
    company: "에이텍시스템",
    department: "고객경험팀",
    leader: "문채원",
    role: "CX리더",
    kpi: "고객만족도",
    kpiTarget: "CSAT 4.5 이상",
    stage: "Measure",
    startDate: "2026-03-18",
    progress: 43,
    deadline: "2026-05-21",
    lastUpdated: "2026-04-13",
    health: "on-track",
    nextMilestone: "VOC 카테고리 표준 확정",
    impact: 1.1,
    alignment: 80,
    risk: "콜센터 기준 코드 재정의 필요",
    evidence: "VOC 샘플 검토 결과",
    note: "데이터 정합성 확보 후 속도 개선 가능",
  },
  {
    id: "IN-26-010",
    name: "설비 보전 예측관리 체계화",
    company: "에이텍컴퓨터",
    department: "설비관리팀",
    leader: "한도겸",
    role: "파트장",
    kpi: "가동률",
    kpiTarget: "비가동 시간 12% 절감",
    stage: "Define",
    startDate: "2026-03-01",
    progress: 24,
    deadline: "2026-05-12",
    lastUpdated: "2026-04-01",
    health: "risk",
    nextMilestone: "설비 중요도 분류 승인",
    impact: 2.3,
    alignment: 77,
    risk: "현장 데이터 기준 불명확",
    evidence: "",
    note: "정의 단계 장기 체류로 관리자 개입 필요",
  },
];

const educationStatusLabels = {
  planned: "예정",
  in_progress: "진행중",
  completed_needs_settlement: "완료(정산필요)",
  settled: "정산완료",
};

const educationCoursesMaster = [
  {
    id: "EDU-C-001",
    majorCategory: "리더십",
    subCategory: "리더십 Insight",
    name: "관리자 동영상",
    targetLevel: "관리자(임원/팀장)",
    jobFamily: "리더십",
    track: "Leadership",
    requiredType: "필수",
    durationText: "40분",
    trainingHours: 0.7,
    tuitionCost: 3400000,
    refundAmount: 0,
    instructor: "내부강사",
    curriculum: "리더십 변화관리와 현장 실행 포인트를 영상으로 학습",
    recommendedFor: "임원·팀장",
  },
  {
    id: "EDU-C-002",
    majorCategory: "리더십",
    subCategory: "승진자 교육",
    name: "SerCEO 인사이트코스(社長-코워원)",
    targetLevel: "임원",
    jobFamily: "전사 공통",
    track: "Leadership",
    requiredType: "필수",
    durationText: "4회",
    trainingHours: 16,
    tuitionCost: 11440000,
    refundAmount: 0,
    instructor: "외부강사",
    curriculum: "경영 환경 변화 대응과 중장기 의사결정 역량 강화",
    recommendedFor: "신임 임원",
  },
  {
    id: "EDU-C-003",
    majorCategory: "리더십",
    subCategory: "승진자 교육",
    name: "신임 임원 과정",
    targetLevel: "임원 승진자",
    jobFamily: "리더십",
    track: "Leadership",
    requiredType: "필수",
    durationText: "1일",
    trainingHours: 8,
    tuitionCost: 6250000,
    refundAmount: 5625000,
    instructor: "내부/외부 혼합",
    curriculum: "의사결정·조직관리·재무/전략 관점의 핵심 리더십 과정",
    recommendedFor: "신임 임원",
  },
  {
    id: "EDU-C-004",
    majorCategory: "리더십",
    subCategory: "승진자 교육",
    name: "시니어(책임) 승진자 과정",
    targetLevel: "책임 승진자",
    jobFamily: "직무역량",
    track: "Leadership",
    requiredType: "필수",
    durationText: "1박2일",
    trainingHours: 16,
    tuitionCost: 6507840,
    refundAmount: 1699500,
    instructor: "외부강사",
    curriculum: "팀 운영·협업·성과관리 기반의 실전 리더십 강화",
    recommendedFor: "책임 승진자",
  },
  {
    id: "EDU-C-005",
    majorCategory: "리더십",
    subCategory: "승진자 교육",
    name: "주니어(선임) 승진자 과정",
    targetLevel: "선임 승진자",
    jobFamily: "직무역량",
    track: "Leadership",
    requiredType: "필수",
    durationText: "1박2일",
    trainingHours: 16,
    tuitionCost: 12000000,
    refundAmount: 4078000,
    instructor: "외부강사",
    curriculum: "문제해결·보고서 작성·실무 리더십 기본기 강화",
    recommendedFor: "선임 승진자",
  },
  {
    id: "EDU-C-006",
    majorCategory: "리더십",
    subCategory: "신규 입사자",
    name: "사원 Soft Landing",
    targetLevel: "사원입사자",
    jobFamily: "공통",
    track: "직무역량",
    requiredType: "필수",
    durationText: "1박2일",
    trainingHours: 16,
    tuitionCost: 9273330,
    refundAmount: 2789800,
    instructor: "내부/외부 혼합",
    curriculum: "ATEC Way·핵심가치·생성형 AI 실습 중심 온보딩",
    recommendedFor: "신입 사원",
  },
  {
    id: "EDU-C-007",
    majorCategory: "역량",
    subCategory: "직급별 리더십",
    name: "경력사원 리텐션 과정",
    targetLevel: "경력입사자",
    jobFamily: "직급별",
    track: "직무역량",
    requiredType: "필수",
    durationText: "1일",
    trainingHours: 8,
    tuitionCost: 8000000,
    refundAmount: 3200000,
    instructor: "외부강사",
    curriculum: "조직 적응 가속·핵심업무 연결을 위한 리텐션 프로그램",
    recommendedFor: "경력 입사자",
  },
  {
    id: "EDU-C-008",
    majorCategory: "역량",
    subCategory: "직급별 리더십",
    name: "경력사원 리텐션(관리자) 과정",
    targetLevel: "경력관리자",
    jobFamily: "직급별",
    track: "Leadership",
    requiredType: "필수",
    durationText: "1박2일",
    trainingHours: 16,
    tuitionCost: 8000000,
    refundAmount: 3200000,
    instructor: "외부강사",
    curriculum: "관리자 관점 조직 운영·평가·코칭 실습",
    recommendedFor: "경력 관리자",
  },
  {
    id: "EDU-C-009",
    majorCategory: "역량",
    subCategory: "AI 업무",
    name: "(온라인) 사원 역량향상 과정",
    targetLevel: "전직원",
    jobFamily: "AI/DX",
    track: "AI/DX",
    requiredType: "필수",
    durationText: "7개월",
    trainingHours: 56,
    tuitionCost: 142000000,
    refundAmount: 127800000,
    instructor: "HRD아카이브",
    curriculum: "생성형 AI·데이터 문해력·업무자동화 기초 온라인 트랙",
    recommendedFor: "전직원",
  },
  {
    id: "EDU-C-010",
    majorCategory: "역량",
    subCategory: "업무 자동화",
    name: "(심화) AI 업무 자동화 실습",
    targetLevel: "전사 희망자",
    jobFamily: "AI/DX",
    track: "AI/DX",
    requiredType: "선택",
    durationText: "1일",
    trainingHours: 7,
    tuitionCost: 4500000,
    refundAmount: 4050000,
    instructor: "혁신실/외부코치",
    curriculum: "문서자동화·리서치자동화·시각화 보고서 실습",
    recommendedFor: "AI 실무 활용 희망자",
  },
  {
    id: "EDU-C-011",
    majorCategory: "역량",
    subCategory: "협업 역량",
    name: "Teams 기반 협업회의 운영",
    targetLevel: "전사 희망자",
    jobFamily: "업무기본",
    track: "직무역량",
    requiredType: "선택",
    durationText: "1일",
    trainingHours: 8,
    tuitionCost: 5000000,
    refundAmount: 2000000,
    instructor: "외부강사",
    curriculum: "회의 설계·회의록 자동화·협업 템플릿 운영",
    recommendedFor: "협업 생산성 향상 대상",
  },
  {
    id: "EDU-C-012",
    majorCategory: "리더십",
    subCategory: "신규 입사자",
    name: "(신규) 임원대상 AI 과정",
    targetLevel: "임원",
    jobFamily: "AI/DX",
    track: "AI/DX",
    requiredType: "필수",
    durationText: "1일",
    trainingHours: 4,
    tuitionCost: 5600000,
    refundAmount: 0,
    instructor: "내부강사",
    curriculum: "경영진 대상 생성형 AI 활용 전략 브리핑",
    recommendedFor: "임원",
  },
];

const defaultEducationSchedules = [
  {
    id: "EDU-S-001",
    courseId: "EDU-C-006",
    startDate: "2026-03-05",
    endDate: "2026-03-06",
    location: "KB경인연수원",
    capacity: 30,
    applicationStatus: "closed",
    status: "completed_needs_settlement",
    operatorDept: "모빌리티",
    attendees: 26,
    avgScore: 4.7,
    totalCost: 9273330,
    refundAmount: 2789800,
    note: "신입 사원 온보딩 집중 과정",
  },
  {
    id: "EDU-S-002",
    courseId: "EDU-C-003",
    startDate: "2026-03-03",
    endDate: "2026-03-03",
    location: "ATEC 러닝홀",
    capacity: 10,
    applicationStatus: "closed",
    status: "settled",
    operatorDept: "혁신실",
    attendees: 6,
    avgScore: 4.6,
    totalCost: 11440000,
    refundAmount: 0,
    note: "임원 승진자 필수 과정",
  },
  {
    id: "EDU-S-003",
    courseId: "EDU-C-004",
    startDate: "2026-03-19",
    endDate: "2026-03-20",
    location: "연수원",
    capacity: 24,
    applicationStatus: "closed",
    status: "settled",
    operatorDept: "시스템",
    attendees: 15,
    avgScore: 4.88,
    totalCost: 6507840,
    refundAmount: 1699500,
    note: "시니어 승진자 리더십 과정",
  },
  {
    id: "EDU-S-004",
    courseId: "EDU-C-005",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    location: "연수원",
    capacity: 40,
    applicationStatus: "closed",
    status: "settled",
    operatorDept: "시스템",
    attendees: 36,
    avgScore: 4.8,
    totalCost: 12000000,
    refundAmount: 4078000,
    note: "주니어 승진자 과정",
  },
  {
    id: "EDU-S-005",
    courseId: "EDU-C-012",
    startDate: "2026-02-21",
    endDate: "2026-02-21",
    location: "혁신실",
    capacity: 60,
    applicationStatus: "closed",
    status: "settled",
    operatorDept: "혁신실",
    attendees: 52,
    avgScore: 4.83,
    totalCost: 5600000,
    refundAmount: 0,
    note: "임원 AI 인사이트 과정",
  },
  {
    id: "EDU-S-006",
    courseId: "EDU-C-009",
    startDate: "2026-03-11",
    endDate: "2026-03-20",
    location: "온라인(HRD)",
    capacity: 1200,
    applicationStatus: "open",
    status: "in_progress",
    operatorDept: "각사",
    attendees: 1008,
    avgScore: 4.6,
    totalCost: 142000000,
    refundAmount: 127800000,
    note: "온라인 역량강화 트랙 운영중",
  },
  {
    id: "EDU-S-007",
    courseId: "EDU-C-010",
    startDate: "2026-04-10",
    endDate: "2026-04-10",
    location: "혁신실",
    capacity: 24,
    applicationStatus: "closed",
    status: "completed_needs_settlement",
    operatorDept: "혁신실",
    attendees: 15,
    avgScore: 4.55,
    totalCost: 4500000,
    refundAmount: 4050000,
    note: "업무자동화 고급 실습",
  },
  {
    id: "EDU-S-008",
    courseId: "EDU-C-010",
    startDate: "2026-05-15",
    endDate: "2026-05-15",
    location: "혁신실",
    capacity: 24,
    applicationStatus: "open",
    status: "planned",
    operatorDept: "혁신실",
    attendees: 0,
    avgScore: 0,
    totalCost: 4500000,
    refundAmount: 4050000,
    note: "5월 심화 실습 예정",
  },
  {
    id: "EDU-S-009",
    courseId: "EDU-C-010",
    startDate: "2026-06-12",
    endDate: "2026-06-12",
    location: "혁신실",
    capacity: 24,
    applicationStatus: "open",
    status: "planned",
    operatorDept: "혁신실",
    attendees: 0,
    avgScore: 0,
    totalCost: 4500000,
    refundAmount: 4050000,
    note: "6월 심화 실습 예정",
  },
  {
    id: "EDU-S-010",
    courseId: "EDU-C-011",
    startDate: "2026-07-09",
    endDate: "2026-07-09",
    location: "씨앤",
    capacity: 30,
    applicationStatus: "open",
    status: "planned",
    operatorDept: "씨앤",
    attendees: 0,
    avgScore: 0,
    totalCost: 5000000,
    refundAmount: 2000000,
    note: "협업회의 운영 역량 과정",
  },
  {
    id: "EDU-S-011",
    courseId: "EDU-C-007",
    startDate: "2026-06-18",
    endDate: "2026-06-18",
    location: "컴퓨터 러닝룸",
    capacity: 40,
    applicationStatus: "open",
    status: "planned",
    operatorDept: "컴퓨터",
    attendees: 0,
    avgScore: 0,
    totalCost: 8000000,
    refundAmount: 3200000,
    note: "경력 입사자 리텐션 과정",
  },
  {
    id: "EDU-S-012",
    courseId: "EDU-C-008",
    startDate: "2026-12-17",
    endDate: "2026-12-18",
    location: "시스템 연수원",
    capacity: 24,
    applicationStatus: "open",
    status: "planned",
    operatorDept: "시스템",
    attendees: 0,
    avgScore: 0,
    totalCost: 8000000,
    refundAmount: 3200000,
    note: "연말 관리자 리텐션 과정",
  },
];

const defaultEducationEnrollments = [
  {
    id: "EDU-ENR-001",
    scheduleId: "EDU-S-007",
    employeeId: "demo-user",
    name: "로컬 데모 사용자",
    company: "에이텍",
    department: "경영혁신실",
    appliedAt: "2026-04-02",
    completed: false,
    satisfaction: null,
    certificateNo: "",
  },
  {
    id: "EDU-ENR-002",
    scheduleId: "EDU-S-005",
    employeeId: "demo-user",
    name: "로컬 데모 사용자",
    company: "에이텍",
    department: "경영혁신실",
    appliedAt: "2026-02-05",
    completed: true,
    satisfaction: 4.8,
    certificateNo: "CERT-26-0105",
  },
  {
    id: "EDU-ENR-003",
    scheduleId: "EDU-S-001",
    employeeId: "demo-user",
    name: "로컬 데모 사용자",
    company: "에이텍",
    department: "경영혁신실",
    appliedAt: "2026-02-25",
    completed: true,
    satisfaction: 4.7,
    certificateNo: "CERT-26-0306",
  },
  {
    id: "EDU-ENR-004",
    scheduleId: "EDU-S-006",
    employeeId: "atec-min091",
    name: "민원규",
    company: "에이텍",
    department: "금융사업부",
    appliedAt: "2026-03-10",
    completed: false,
    satisfaction: null,
    certificateNo: "",
  },
];

const defaultSurveyQuestions = [
  { id: "SVQ-001", type: "scale", text: "[종합] 전반적으로 입사자 과정에 만족한다.", active: true, order: 1 },
  { id: "SVQ-002", type: "scale", text: "[종합] 과정의 학습 방법은 내용 전달에 적절하였다.", active: true, order: 2 },
  { id: "SVQ-003", type: "scale", text: "[종합] 본 과정의 전반적인 운영(사전 안내 / 과정 운영 / 현장 응대 등)에 만족한다.", active: true, order: 3 },
  { id: "SVQ-004", type: "scale", text: "[종합] 교육편의시설(강의장, 식사, 숙소 등) 사용에 만족한다.", active: true, order: 4 },
  { id: "SVQ-005", type: "scale", text: "[종합] 본 과정을 예비 신규입사자에게 추천하고 싶다.", active: true, order: 5 },
  { id: "SVQ-006", type: "text", text: "[종합] 위 5번 문항에서 해당점수를 선택한 이유는?", active: true, order: 6 },
  { id: "SVQ-007", type: "scale", text: "[과정별 만족도] 1일차_ATEC Way 경영철학_신승영 회장", active: true, order: 7 },
  { id: "SVQ-008", type: "text", text: "[과정별 만족도] 위 과정의 좋았던 점 또는 아쉬운 점은 무엇인가요?", active: true, order: 8 },
  { id: "SVQ-009", type: "scale", text: "[과정별 만족도] 1일차_ATEC Way 조직문화_이동은 이사", active: true, order: 9 },
  { id: "SVQ-010", type: "text", text: "[과정별 만족도] 위 과정의 좋았던 점 또는 아쉬운 점은 무엇인가요?", active: true, order: 10 },
  { id: "SVQ-011", type: "scale", text: "[과정별 만족도] 1일차_ATEC 핵심가치내재화(AI활용)_박서연 강사", active: true, order: 11 },
  { id: "SVQ-012", type: "text", text: "[과정별 만족도] 위 과정의 좋았던 점 또는 아쉬운 점은 무엇인가요?", active: true, order: 12 },
  { id: "SVQ-013", type: "scale", text: "[과정별 만족도] 2일차_매너있는 에이텍人_신혜수 선", active: true, order: 13 },
  { id: "SVQ-014", type: "text", text: "[과정별 만족도] 위 과정의 좋았던 점 또는 아쉬운 점은 무엇인가요?", active: true, order: 14 },
  { id: "SVQ-015", type: "scale", text: "[과정별 만족도] 2일차_일의구조(보고기술)_김레진 강사", active: true, order: 15 },
  { id: "SVQ-016", type: "text", text: "[과정별 만족도] 위 과정의 좋았던 점 또는 아쉬운 점은 무엇인가요?", active: true, order: 16 },
  { id: "SVQ-017", type: "scale", text: "[과정별 만족도] 2일차_AI 비즈니스 스킬_송유이 강사", active: true, order: 17 },
  { id: "SVQ-018", type: "text", text: "[과정별 만족도] 위 과정의 좋았던 점 또는 아쉬운 점은 무엇인가요?", active: true, order: 18 },
  { id: "SVQ-019", type: "text", text: "[종합] 본 과정에서 좋았던 점은 무엇인가요?", active: true, order: 19 },
  { id: "SVQ-020", type: "text", text: "[종합] 본 과정에서 아쉬운 점은 무엇인가요?", active: true, order: 20 },
  { id: "SVQ-021", type: "text", text: "[종합] 신규입사자 과정에 추가 되었으면 하는 것이 있다면 무엇인가요?", active: true, order: 21 },
  { id: "SVQ-022", type: "text", text: "[기타] 운영진들에게 하고 싶은 이야기를 자유롭게 남겨주세요.", active: true, order: 22 },
];

let projects = loadProjects();
let milestoneItems = loadMilestones();
let qualifications = loadQualifications();
let dashboardNoticeItems = loadDashboardNotices();
let certificationExams = loadCertificationExams();
let certificationExamApplications = loadCertificationExamApplications();
let surveyForms = loadSurveyForms();
let educationSchedules = loadEducationSchedules();
let educationEnrollments = loadEducationEnrollments();
let educationCostDetailsBySchedule = loadEducationCostDetails();
let surveyResponses = loadSurveyResponses();

const state = {
  activePage: "dashboard",
  activeTab: "all",
  search: "",
  company: "all",
  year: String(REFERENCE_DATE.getFullYear()),
  stage: "all",
  health: "all",
  taskPage: 1,
  selectedId: projects[0]?.id ?? null,
  selectedTaskIds: [],
  qualificationSearch: "",
  qualificationYear: String(REFERENCE_DATE.getFullYear()),
  qualificationType: "all",
  qualificationGrade: "all",
  qualificationCompany: "all",
  qualificationPage: 1,
  selectedQualificationId: qualifications[0]?.id ?? null,
  selectedQualificationIds: [],
  educationLevel: "all",
  educationJob: "all",
  educationTrack: "all",
  educationMonth: `${REFERENCE_DATE.getFullYear()}-${String(REFERENCE_DATE.getMonth() + 1).padStart(2, "0")}`,
  selectedEducationDate: toIsoDate(REFERENCE_DATE),
  selectedEducationScheduleId: educationSchedules[0]?.id ?? null,
  selectedCalendarEventType: "education",
  educationExpandedDate: null,
  educationApplyFormScheduleId: null,
  certificationApplyFormExamId: null,
  certificationApplicantScope: "selected",
  selectedCertificationApplicantIds: [],
  educationAdminStatus: "all",
  educationAdminSearch: "",
  educationAdminYear: String(REFERENCE_DATE.getFullYear()),
  educationAdminDivision: "all",
  educationEnrollmentScope: "selected",
  educationEnrollmentSearch: "",
  selectedEducationEnrollmentIds: [],
  myLearningEvaluationEnrollmentId: null,
  selectedSurveyFormId: surveyForms[0]?.id ?? null,
  surveyQuestionDraftType: "scale",
  surveyResultMajorFilter: "all",
  surveyResultMiddleFilter: "all",
  surveyResultSmallSearch: "",
  surveyResultPage: 1,
  educationAdminPage: 1,
  selectedEducationAdminId: educationSchedules[0]?.id ?? null,
  selectedEducationAdminIds: [],
  educationAdminModalMode: "create",
  editingEducationAdminId: null,
  qualificationModalMode: "create",
  editingQualificationId: null,
  selectedCertificationExamId: certificationExams[0]?.id ?? null,
  selectedCertificationExamIds: [],
  certificationExamModalMode: "create",
  editingCertificationExamId: null,
  selectedAdminNoticeId: dashboardNoticeItems[0]?.id ?? null,
  selectedAdminDashboardMilestoneId: milestoneItems[0]?.id ?? null,
  selectedMilestoneId: milestoneItems[0]?.id ?? null,
  modalMode: "create",
  editingId: null,
  milestoneModalMode: "create",
  editingMilestoneId: null,
};

const elements = {
  taskTableBody: document.querySelector("#task-table-body"),
  taskPagination: document.querySelector("#task-pagination"),
  companyFilter: document.querySelector("#company-filter"),
  yearFilter: document.querySelector("#year-filter"),
  stageFilter: document.querySelector("#stage-filter"),
  healthFilter: document.querySelector("#health-filter"),
  searchInput: document.querySelector("#search-input"),
  qualificationSearchInput: document.querySelector("#qualification-search-input"),
  heroTitle: document.querySelector(".hero-card-wide h3"),
  leagueTitle: document.querySelector("#league-board")?.closest(".board-card")?.querySelector("h3"),
  taskDetailButton: document.querySelector("#task-detail-button"),
  taskEditButton: document.querySelector("#task-edit-button"),
  taskDeleteButton: document.querySelector("#task-delete-button"),
  addQualificationButton: document.querySelector("#add-qualification-button"),
  editQualificationButton: document.querySelector("#edit-qualification-button"),
  deleteQualificationButton: document.querySelector("#delete-qualification-button"),
  addCertificationExamButton: document.querySelector("#add-certification-exam-button"),
  editCertificationExamButton: document.querySelector("#edit-certification-exam-button"),
  deleteCertificationExamButton: document.querySelector("#delete-certification-exam-button"),
  navItems: Array.from(document.querySelectorAll("[data-page-target]")),
  navGroupToggles: Array.from(document.querySelectorAll("[data-nav-group-toggle]")),
  educationNavGroupShell: document.querySelector('[data-nav-group-shell="education"]'),
  educationNavParent: document.querySelector('[data-nav-group-toggle="education"]'),
  familySiteSelect: document.querySelector("#family-site-select"),
  pageViews: Array.from(document.querySelectorAll("[data-page-view]")),
  metricTotal: document.querySelector("#metric-total"),
  metricOnTrack: document.querySelector("#metric-on-track"),
  metricDelay: document.querySelector("#metric-delay"),
  metricCompleted: document.querySelector("#metric-completed"),
  metricProgress: document.querySelector("#metric-progress"),
  qualificationMetricTotal: document.querySelector("#qualification-metric-total"),
  qualificationMetricSixSigma: document.querySelector("#qualification-metric-sixsigma"),
  qualificationMetricAica: document.querySelector("#qualification-metric-aica"),
  qualificationMetricAice: document.querySelector("#qualification-metric-aice"),
  qualificationMetricCurrentYear: document.querySelector("#qualification-metric-current-year"),
  leagueBoard: document.querySelector("#league-board"),
  detailCard: document.querySelector("#detail-card"),
  qualificationCompanyBoard: document.querySelector("#qualification-company-board"),
  qualificationTypeBoard: document.querySelector("#qualification-type-board"),
  qualificationTypeFilter: document.querySelector("#qualification-type-filter"),
  qualificationYearFilter: document.querySelector("#qualification-year-filter"),
  qualificationGradeFilter: document.querySelector("#qualification-grade-filter"),
  qualificationCompanyFilter: document.querySelector("#qualification-company-filter"),
  qualificationTableBody: document.querySelector("#qualification-table-body"),
  certificationExamTableBody: document.querySelector("#certification-exam-table-body"),
  certificationExamDetailCard: document.querySelector("#certification-exam-detail-card"),
  certificationApplicantSelectedMeta: document.querySelector("#certification-applicant-selected-meta"),
  certificationApplicantScopeFilter: document.querySelector("#certification-applicant-scope-filter"),
  certificationApplicantTableBody: document.querySelector("#certification-applicant-table-body"),
  certificationApplicantCompleteButton: document.querySelector("#certification-applicant-complete-button"),
  certificationApplicantCancelCompleteButton: document.querySelector("#certification-applicant-cancel-complete-button"),
  certificationApplicantDeleteButton: document.querySelector("#certification-applicant-delete-button"),
  dashboardNoticeList: document.querySelector("#dashboard-notice-list"),
  dashboardMilestoneList: document.querySelector("#dashboard-milestone-list"),
  dashboardInnovationCompanyChart: document.querySelector("#dashboard-innovation-company-chart"),
  dashboardQualificationStackedChart: document.querySelector("#dashboard-qualification-stacked-chart"),
  dashboardQualificationYearlyChart: document.querySelector("#dashboard-qualification-yearly-chart"),
  dashboardCertificationPassChart: document.querySelector("#dashboard-certification-pass-chart"),
  dashboardEducationKpiChart: document.querySelector("#dashboard-education-kpi-chart"),
  adminNoticeTableBody: document.querySelector("#admin-notice-table-body"),
  adminAddNoticeButton: document.querySelector("#admin-add-notice-button"),
  adminEditNoticeButton: document.querySelector("#admin-edit-notice-button"),
  adminDeleteNoticeButton: document.querySelector("#admin-delete-notice-button"),
  adminDashboardMilestoneTableBody: document.querySelector("#admin-dashboard-milestone-table-body"),
  adminAddDashboardMilestoneButton: document.querySelector("#admin-add-dashboard-milestone-button"),
  adminEditDashboardMilestoneButton: document.querySelector("#admin-edit-dashboard-milestone-button"),
  adminDeleteDashboardMilestoneButton: document.querySelector("#admin-delete-dashboard-milestone-button"),
  qualificationPagination: document.querySelector("#qualification-pagination"),
  milestoneList: document.querySelector("#milestone-list"),
  addMilestoneButton: document.querySelector("#add-milestone-button"),
  editMilestoneButton: document.querySelector("#edit-milestone-button"),
  deleteMilestoneButton: document.querySelector("#delete-milestone-button"),
  heroInsight: document.querySelector("#hero-insight"),
  heroSubcopy: document.querySelector("#hero-subcopy"),
  heroTags: document.querySelector("#hero-tags"),
  addProjectButton: document.querySelector("#add-project-button"),
  downloadReportButton: document.querySelector("#download-report-button"),
  projectModal: document.querySelector("#project-modal"),
  qualificationModal: document.querySelector("#qualification-modal"),
  projectModalTitle: document.querySelector("#project-modal-title"),
  qualificationModalTitle: document.querySelector("#qualification-modal-title"),
  projectForm: document.querySelector("#project-form"),
  qualificationForm: document.querySelector("#qualification-form"),
  projectFormSubmit: document.querySelector("#project-form-submit"),
  qualificationFormSubmit: document.querySelector("#qualification-form-submit"),
  projectModalClose: document.querySelector("#project-modal-close"),
  qualificationModalClose: document.querySelector("#qualification-modal-close"),
  projectFormCancel: document.querySelector("#project-form-cancel"),
  qualificationFormCancel: document.querySelector("#qualification-form-cancel"),
  certificationExamModal: document.querySelector("#certification-exam-modal"),
  certificationExamModalTitle: document.querySelector("#certification-exam-modal-title"),
  certificationExamForm: document.querySelector("#certification-exam-form"),
  certificationExamFormSubmit: document.querySelector("#certification-exam-form-submit"),
  certificationExamModalClose: document.querySelector("#certification-exam-modal-close"),
  certificationExamFormCancel: document.querySelector("#certification-exam-form-cancel"),
  projectName: document.querySelector("#project-name"),
  projectCompany: document.querySelector("#project-company"),
  qualificationType: document.querySelector("#qualification-type"),
  qualificationGrade: document.querySelector("#qualification-grade"),
  qualificationNumber: document.querySelector("#qualification-number"),
  qualificationCompany: document.querySelector("#qualification-company"),
  qualificationDepartment: document.querySelector("#qualification-department"),
  qualificationName: document.querySelector("#qualification-name"),
  qualificationAcquiredDate: document.querySelector("#qualification-acquired-date"),
  certificationExamTitle: document.querySelector("#certification-exam-title"),
  certificationExamType: document.querySelector("#certification-exam-type"),
  certificationExamGrade: document.querySelector("#certification-exam-grade"),
  certificationExamTarget: document.querySelector("#certification-exam-target"),
  certificationExamRequirement: document.querySelector("#certification-exam-requirement"),
  certificationExamPassCriteria: document.querySelector("#certification-exam-pass-criteria"),
  certificationExamApplicationStartDate: document.querySelector("#certification-exam-application-start-date"),
  certificationExamApplicationEndDate: document.querySelector("#certification-exam-application-end-date"),
  certificationExamDateTime: document.querySelector("#certification-exam-datetime"),
  certificationExamResultDate: document.querySelector("#certification-exam-result-date"),
  certificationExamLocation: document.querySelector("#certification-exam-location"),
  certificationExamCapacity: document.querySelector("#certification-exam-capacity"),
  certificationExamStatus: document.querySelector("#certification-exam-status"),
  certificationExamNote: document.querySelector("#certification-exam-note"),
  projectDepartment: document.querySelector("#project-department"),
  projectLeader: document.querySelector("#project-leader"),
  projectRole: document.querySelector("#project-role"),
  projectTeamMembers: document.querySelector("#project-team-members"),
  projectType: document.querySelector("#project-type"),
  projectLink: document.querySelector("#project-link"),
  projectKpi: document.querySelector("#project-kpi"),
  projectKpiTarget: document.querySelector("#project-kpi-target"),
  projectCsfType: document.querySelector("#project-csf-type"),
  projectStage: document.querySelector("#project-stage"),
  projectStartDate: document.querySelector("#project-start-date"),
  projectDeadline: document.querySelector("#project-deadline"),
  assessmentPotentialImpact: document.querySelector("#assessment-potential-impact"),
  assessmentStrategicAlignment: document.querySelector("#assessment-strategic-alignment"),
  assessmentExpectedEffect: document.querySelector("#assessment-expected-effect"),
  assessmentRippleEffect: document.querySelector("#assessment-ripple-effect"),
  assessmentFeasibility: document.querySelector("#assessment-feasibility"),
  assessmentUrgency: document.querySelector("#assessment-urgency"),
  assessmentTotalScore: document.querySelector("#assessment-total-score"),
  assessmentTotalGrade: document.querySelector("#assessment-total-grade"),
  milestoneModal: document.querySelector("#milestone-modal"),
  milestoneModalTitle: document.querySelector("#milestone-modal-title"),
  milestoneForm: document.querySelector("#milestone-form"),
  milestoneFormSubmit: document.querySelector("#milestone-form-submit"),
  milestoneModalClose: document.querySelector("#milestone-modal-close"),
  milestoneFormCancel: document.querySelector("#milestone-form-cancel"),
  milestoneTitle: document.querySelector("#milestone-title"),
  milestoneDate: document.querySelector("#milestone-date"),
  milestoneDescription: document.querySelector("#milestone-description"),
  educationLevelFilter: document.querySelector("#education-level-filter"),
  educationJobFilter: document.querySelector("#education-job-filter"),
  educationTrackFilter: document.querySelector("#education-track-filter"),
  educationMonthPrevButton: document.querySelector("#education-month-prev"),
  educationMonthNextButton: document.querySelector("#education-month-next"),
  educationMonthLabel: document.querySelector("#education-month-label"),
  educationCalendarGrid: document.querySelector("#education-calendar-grid"),
  educationScheduleDetail: document.querySelector("#education-schedule-detail"),
  educationMetricMonthly: document.querySelector("#education-metric-monthly"),
  educationMetricOpen: document.querySelector("#education-metric-open"),
  educationMetricApplied: document.querySelector("#education-metric-applied"),
  educationMetricScore: document.querySelector("#education-metric-score"),
  myLearningMetricApplied: document.querySelector("#my-learning-metric-applied"),
  myLearningMetricProgress: document.querySelector("#my-learning-metric-progress"),
  myLearningMetricCompleted: document.querySelector("#my-learning-metric-completed"),
  myLearningMetricScore: document.querySelector("#my-learning-metric-score"),
  myLearningTableBody: document.querySelector("#my-learning-table-body"),
  myLearningUpcomingList: document.querySelector("#my-learning-upcoming-list"),
  myLearningEvaluationPanel: document.querySelector("#my-learning-evaluation-panel"),
  educationAdminSearchInput: document.querySelector("#education-admin-search-input"),
  educationAdminYearFilter: document.querySelector("#education-admin-year-filter"),
  educationAdminDivisionFilter: document.querySelector("#education-admin-division-filter"),
  educationAdminStatusFilter: document.querySelector("#education-admin-status-filter"),
  addEducationAdminButton: document.querySelector("#add-education-admin-button"),
  editEducationAdminButton: document.querySelector("#edit-education-admin-button"),
  deleteEducationAdminButton: document.querySelector("#delete-education-admin-button"),
  educationAdminTableBody: document.querySelector("#education-admin-table-body"),
  educationAdminPagination: document.querySelector("#education-admin-pagination"),
  educationAdminDetailCard: document.querySelector("#education-admin-detail-card"),
  educationEnrollmentSelectedMeta: document.querySelector("#education-enrollment-selected-meta"),
  educationEnrollmentScopeFilter: document.querySelector("#education-enrollment-scope-filter"),
  educationEnrollmentSearchInput: document.querySelector("#education-enrollment-search-input"),
  educationEnrollmentCompleteButton: document.querySelector("#education-enrollment-complete-button"),
  educationEnrollmentIncompleteButton: document.querySelector("#education-enrollment-incomplete-button"),
  educationEnrollmentCancelButton: document.querySelector("#education-enrollment-cancel-button"),
  educationEnrollmentTableBody: document.querySelector("#education-enrollment-table-body"),
  educationFeedbackSelectedMeta: document.querySelector("#education-feedback-selected-meta"),
  educationFeedbackTableBody: document.querySelector("#education-feedback-table-body"),
  educationCostSelectedMeta: document.querySelector("#education-cost-selected-meta"),
  educationCostAddRowButton: document.querySelector("#education-cost-add-row-button"),
  educationCostTableBody: document.querySelector("#education-cost-table-body"),
  educationCostTotal: document.querySelector("#education-cost-total"),
  educationCostRefund: document.querySelector("#education-cost-refund"),
  educationCostNet: document.querySelector("#education-cost-net"),
  educationCostPerPerson: document.querySelector("#education-cost-perperson"),
  educationCostAllocationGrid: document.querySelector("#education-cost-allocation-grid"),
  educationAdminMetricTotal: document.querySelector("#education-admin-metric-total"),
  educationAdminMetricPlanned: document.querySelector("#education-admin-metric-planned"),
  educationAdminMetricProgress: document.querySelector("#education-admin-metric-progress"),
  educationAdminMetricPending: document.querySelector("#education-admin-metric-pending"),
  educationAdminMetricSettled: document.querySelector("#education-admin-metric-settled"),
  educationAdminMetricRefundRate: document.querySelector("#education-admin-metric-refund-rate"),
  educationAdminGuard: document.querySelector("#education-admin-guard"),
  educationAdminWorkspace: document.querySelector("#education-admin-workspace"),
  surveyManagementGuard: document.querySelector("#survey-management-guard"),
  surveyManagementWorkspace: document.querySelector("#survey-management-workspace"),
  surveyFormSelect: document.querySelector("#survey-form-select"),
  surveyFormNameInput: document.querySelector("#survey-form-name-input"),
  surveyFormRenameButton: document.querySelector("#survey-form-rename-button"),
  surveyFormAddButton: document.querySelector("#survey-form-add-button"),
  surveyFormDeleteButton: document.querySelector("#survey-form-delete-button"),
  surveyQuestionForm: document.querySelector("#survey-question-form"),
  surveyQuestionType: document.querySelector("#survey-question-type"),
  surveyQuestionText: document.querySelector("#survey-question-text"),
  surveyQuestionTableBody: document.querySelector("#survey-question-table-body"),
  surveyResultTableBody: document.querySelector("#survey-result-table-body"),
  surveyResultMajorFilter: document.querySelector("#survey-result-major-filter"),
  surveyResultMiddleFilter: document.querySelector("#survey-result-middle-filter"),
  surveyResultSmallSearch: document.querySelector("#survey-result-small-search"),
  surveyResultSmallOptions: document.querySelector("#survey-result-small-options"),
  surveyResultPagination: document.querySelector("#survey-result-pagination"),
  educationAdminModal: document.querySelector("#education-admin-modal"),
  educationAdminModalTitle: document.querySelector("#education-admin-modal-title"),
  educationAdminForm: document.querySelector("#education-admin-form"),
  educationAdminFormSubmit: document.querySelector("#education-admin-form-submit"),
  educationAdminModalClose: document.querySelector("#education-admin-modal-close"),
  educationAdminFormCancel: document.querySelector("#education-admin-form-cancel"),
  educationAdminMajorCategory: document.querySelector("#education-admin-major-category"),
  educationAdminMiddleCategory: document.querySelector("#education-admin-middle-category"),
  educationAdminSmallCategory: document.querySelector("#education-admin-small-category"),
  educationAdminRecommendedTarget: document.querySelector("#education-admin-recommended-target"),
  educationAdminSurveyForm: document.querySelector("#education-admin-survey-form"),
  educationAdminRequiredType: document.querySelector("#education-admin-required-type"),
  educationAdminDaysText: document.querySelector("#education-admin-days-text"),
  educationAdminOvernightStay: document.querySelector("#education-admin-overnight-stay"),
  educationAdminHoursText: document.querySelector("#education-admin-hours-text"),
  educationAdminSeasonText: document.querySelector("#education-admin-season-text"),
  educationAdminTargetDateText: document.querySelector("#education-admin-target-date-text"),
  educationAdminStartDate: document.querySelector("#education-admin-start-date"),
  educationAdminEndDate: document.querySelector("#education-admin-end-date"),
  educationAdminApplicationStartDate: document.querySelector("#education-admin-application-start-date"),
  educationAdminApplicationEndDate: document.querySelector("#education-admin-application-end-date"),
  educationAdminStatusField: document.querySelector("#education-admin-status"),
  educationAdminCompletionState: document.querySelector("#education-admin-completion-state"),
  educationAdminOperatorDept: document.querySelector("#education-admin-operator-dept"),
  educationAdminApplicationStatus: document.querySelector("#education-admin-application-status"),
  educationAdminAttendees: document.querySelector("#education-admin-attendees"),
  educationAdminAvgScore: document.querySelector("#education-admin-avg-score"),
  educationAdminCapacity: document.querySelector("#education-admin-capacity"),
  educationAdminLocation: document.querySelector("#education-admin-location"),
  educationAdminTotalCost: document.querySelector("#education-admin-total-cost"),
  educationAdminRefundAmount: document.querySelector("#education-admin-refund-amount"),
  educationAdminNote: document.querySelector("#education-admin-note"),
  adminExportProjectsButton: document.querySelector("#admin-export-projects-button"),
  adminImportProjectsButton: document.querySelector("#admin-import-projects-button"),
  adminImportProjectsFile: document.querySelector("#admin-import-projects-file"),
  adminExportQualificationsButton: document.querySelector("#admin-export-qualifications-button"),
  adminImportQualificationsButton: document.querySelector("#admin-import-qualifications-button"),
  adminImportQualificationsFile: document.querySelector("#admin-import-qualifications-file"),
  adminExportEducationSchedulesButton: document.querySelector("#admin-export-education-schedules-button"),
  adminImportEducationSchedulesButton: document.querySelector("#admin-import-education-schedules-button"),
  adminImportEducationSchedulesFile: document.querySelector("#admin-import-education-schedules-file"),
  adminExportEducationEnrollmentsButton: document.querySelector("#admin-export-education-enrollments-button"),
  adminExportEducationFeedbackButton: document.querySelector("#admin-export-education-feedback-button"),
  adminExportEducationCostsButton: document.querySelector("#admin-export-education-costs-button"),
  adminExportSurveyResultsButton: document.querySelector("#admin-export-survey-results-button"),
};

function setEducationAdminSelectOptions(selectField, options, fallbackValue) {
  if (!selectField || selectField.tagName !== "SELECT") {
    return;
  }

  const currentValue = String(selectField.value || "").trim();
  selectField.replaceChildren();
  options.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionValue;
    selectField.append(option);
  });

  const nextValue = options.includes(currentValue)
    ? currentValue
    : (options.includes(fallbackValue) ? fallbackValue : options[0]);
  selectField.value = nextValue;
}

function replaceEducationAdminFieldWithSelect(field, options, fallbackValue) {
  if (!field) {
    return null;
  }

  let selectField = field;
  if (field.tagName !== "SELECT") {
    selectField = document.createElement("select");
    selectField.id = field.id;
    selectField.name = field.name;
    selectField.required = field.required;
    selectField.disabled = field.disabled;
    selectField.className = field.className;
    field.replaceWith(selectField);
  }

  setEducationAdminSelectOptions(selectField, options, fallbackValue);
  return selectField;
}

function setEducationAdminFieldSpan(field, span) {
  if (!field) {
    return;
  }
  const wrapper = field.closest(".form-field");
  if (!wrapper) {
    return;
  }
  wrapper.className = wrapper.className.replace(/\bform-field-span-\d+\b/g, `form-field-span-${span}`);
}

function removeEducationAdminField(fieldKey) {
  const field = elements[fieldKey];
  if (!field) {
    return;
  }
  const wrapper = field.closest(".form-field");
  if (wrapper) {
    wrapper.remove();
  } else {
    field.remove();
  }
  elements[fieldKey] = null;
}

function ensureEducationAdminSelectOption(selectField, value, label = value) {
  if (!selectField || selectField.tagName !== "SELECT" || value == null) {
    return;
  }

  const token = String(value);
  const hasOption = Array.from(selectField.options).some((option) => option.value === token);
  if (hasOption) {
    return;
  }

  const option = document.createElement("option");
  option.value = token;
  option.textContent = String(label || value);
  selectField.append(option);
}

function parseEducationAdminDaysInfo(value) {
  const token = String(value || "").trim();
  const lodgingMatch = token.match(/(\d+)\s*박\s*(\d+)\s*일/);
  if (lodgingMatch) {
    const daysCount = clampNumber(parseNumber(lodgingMatch[2], 1), 1, 31);
    return {
      daysCount,
      overnight: daysCount >= 2,
    };
  }

  const daysMatch = token.match(/(\d+)\s*일/);
  if (daysMatch) {
    return {
      daysCount: clampNumber(parseNumber(daysMatch[1], 1), 1, 31),
      overnight: false,
    };
  }

  const numeric = parseNumber(token, 1);
  if (Number.isFinite(numeric) && numeric > 0) {
    return {
      daysCount: clampNumber(Math.round(numeric), 1, 31),
      overnight: false,
    };
  }

  return { daysCount: 1, overnight: false };
}

function formatEducationAdminDaysText(daysCount, overnight) {
  const safeDays = clampNumber(Math.round(parseNumber(daysCount, 1)), 1, 31);
  if (overnight && safeDays >= 2) {
    return `${safeDays - 1}박${safeDays}일`;
  }
  return `${safeDays}일`;
}

function parseEducationAdminHoursCount(value) {
  const token = String(value || "").trim();
  const hourMatch = token.match(/(\d+)\s*시간/);
  if (hourMatch) {
    return clampNumber(parseNumber(hourMatch[1], 8), 1, 100);
  }

  const numeric = parseNumber(token, 8);
  if (Number.isFinite(numeric) && numeric > 0) {
    return clampNumber(Math.round(numeric), 1, 100);
  }

  return 8;
}

function formatEducationAdminHoursText(hoursCount) {
  const safeHours = clampNumber(Math.round(parseNumber(hoursCount, 8)), 1, 100);
  return `${safeHours}시간`;
}

function configureEducationAdminFormControls() {
  const majorCategoryField = replaceEducationAdminFieldWithSelect(
    elements.educationAdminMajorCategory,
    educationAdminMajorCategoryOptions,
    educationAdminMajorCategoryOptions[0],
  );
  if (majorCategoryField) {
    elements.educationAdminMajorCategory = majorCategoryField;
    const label = majorCategoryField.closest(".form-field")?.querySelector("span");
    if (label) {
      label.textContent = "대분류";
    }
  }

  const dayOptions = Array.from({ length: 31 }, (_, index) => `${index + 1}일`);
  const daysTextField = replaceEducationAdminFieldWithSelect(
    elements.educationAdminDaysText,
    dayOptions,
    "1일",
  );
  if (daysTextField) {
    elements.educationAdminDaysText = daysTextField;
    const label = daysTextField.closest(".form-field")?.querySelector("span");
    if (label) {
      label.textContent = "교육일수";
    }
  }

  const hourOptions = Array.from({ length: 100 }, (_, index) => `${index + 1}시간`);
  const hoursTextField = replaceEducationAdminFieldWithSelect(
    elements.educationAdminHoursText,
    hourOptions,
    "8시간",
  );
  if (hoursTextField) {
    elements.educationAdminHoursText = hoursTextField;
  }

  if (!elements.educationAdminOvernightStay && elements.educationAdminDaysText) {
    const daysWrapper = elements.educationAdminDaysText.closest(".form-field");
    if (daysWrapper && daysWrapper.parentElement) {
      const overnightField = document.createElement("div");
      overnightField.className = "form-field form-field-span-1 education-admin-overnight-field";

      const title = document.createElement("span");
      title.textContent = "숙박여부";

      const toggle = document.createElement("label");
      toggle.className = "education-admin-overnight-toggle";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "education-admin-overnight-stay";
      checkbox.name = "overnightStay";
      checkbox.value = "yes";

      const toggleText = document.createElement("span");
      toggleText.textContent = "숙박";

      toggle.append(checkbox, toggleText);
      overnightField.append(title, toggle);
      daysWrapper.insertAdjacentElement("afterend", overnightField);
      elements.educationAdminOvernightStay = checkbox;
    }
  }

  setEducationAdminFieldSpan(elements.educationAdminRecommendedTarget, 3);
  setEducationAdminFieldSpan(elements.educationAdminSurveyForm, 3);
  setEducationAdminFieldSpan(elements.educationAdminRequiredType, 1);
  setEducationAdminFieldSpan(elements.educationAdminDaysText, 1);
  setEducationAdminFieldSpan(elements.educationAdminOvernightStay, 1);
  setEducationAdminFieldSpan(elements.educationAdminHoursText, 1);
  setEducationAdminFieldSpan(elements.educationAdminStartDate, 3);
  setEducationAdminFieldSpan(elements.educationAdminEndDate, 3);
  setEducationAdminFieldSpan(elements.educationAdminApplicationStartDate, 3);
  setEducationAdminFieldSpan(elements.educationAdminApplicationEndDate, 3);
  setEducationAdminFieldSpan(elements.educationAdminStatusField, 3);
  setEducationAdminFieldSpan(elements.educationAdminLocation, 2);

  const applicationStartWrapper = elements.educationAdminApplicationStartDate?.closest(".form-field");
  const applicationEndWrapper = elements.educationAdminApplicationEndDate?.closest(".form-field");
  const educationStartWrapper = elements.educationAdminStartDate?.closest(".form-field");
  const educationEndWrapper = elements.educationAdminEndDate?.closest(".form-field");

  const applicationStartLabel = applicationStartWrapper?.querySelector("span");
  const applicationEndLabel = applicationEndWrapper?.querySelector("span");
  const educationStartLabel = educationStartWrapper?.querySelector("span");
  const educationEndLabel = educationEndWrapper?.querySelector("span");

  if (applicationStartLabel) {
    applicationStartLabel.textContent = "접수시작일";
  }
  if (applicationEndLabel) {
    applicationEndLabel.textContent = "접수종료일";
  }
  if (educationStartLabel) {
    educationStartLabel.textContent = "교육시작일";
  }
  if (educationEndLabel) {
    educationEndLabel.textContent = "교육종료일";
  }
  const statusLabel = elements.educationAdminStatusField?.closest(".form-field")?.querySelector("span");
  if (statusLabel) {
    statusLabel.textContent = "교육진행상태";
  }

  if (applicationStartWrapper && applicationEndWrapper && educationStartWrapper && educationEndWrapper) {
    applicationStartWrapper.insertAdjacentElement("afterend", applicationEndWrapper);
    applicationEndWrapper.insertAdjacentElement("afterend", educationStartWrapper);
    educationStartWrapper.insertAdjacentElement("afterend", educationEndWrapper);
  }

  removeEducationAdminField("educationAdminSeasonText");
  removeEducationAdminField("educationAdminTargetDateText");
  removeEducationAdminField("educationAdminCompletionState");
  removeEducationAdminField("educationAdminApplicationStatus");
  removeEducationAdminField("educationAdminAttendees");
  removeEducationAdminField("educationAdminAvgScore");
  removeEducationAdminField("educationAdminTotalCost");
  removeEducationAdminField("educationAdminRefundAmount");

  const operatorDeptField = replaceEducationAdminFieldWithSelect(
    elements.educationAdminOperatorDept,
    educationAdminOperatorDeptOptions,
    "경영혁신실",
  );
  if (operatorDeptField) {
    elements.educationAdminOperatorDept = operatorDeptField;
    const label = operatorDeptField.closest(".form-field")?.querySelector("span");
    if (label) {
      label.textContent = "운영담당자";
    }
  }
  setEducationAdminFieldSpan(elements.educationAdminOperatorDept, 3);
  const surveyFormWrapper = elements.educationAdminSurveyForm?.closest(".form-field");
  const statusWrapper = elements.educationAdminStatusField?.closest(".form-field");
  if (surveyFormWrapper && statusWrapper) {
    statusWrapper.insertAdjacentElement("afterend", surveyFormWrapper);
  }

  const hoursWrapper = elements.educationAdminHoursText?.closest(".form-field");
  const capacityWrapper = elements.educationAdminCapacity?.closest(".form-field");
  if (hoursWrapper && capacityWrapper) {
    hoursWrapper.insertAdjacentElement("afterend", capacityWrapper);
  }

  if (elements.educationAdminModalTitle) {
    elements.educationAdminModalTitle.textContent = "신규 교육 등록";
  }
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeCsvValue(value) {
  const raw = value == null ? "" : String(value);
  if (/[",\n]/.test(raw)) {
    return `"${raw.replace(/"/g, "\"\"")}"`;
  }
  return raw;
}

function buildCsvContent(columns = [], rows = []) {
  const header = columns.map((column) => escapeCsvValue(column.label)).join(",");
  const body = rows.map((row) => (
    columns.map((column) => escapeCsvValue(row[column.key])).join(",")
  )).join("\n");
  return `${header}\n${body}`;
}

function downloadCsvFile(filename, columns = [], rows = []) {
  const csv = buildCsvContent(columns, rows);
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function parseCsvLine(line = "") {
  const values = [];
  let current = "";
  let inQuote = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\"") {
      if (inQuote && line[index + 1] === "\"") {
        current += "\"";
        index += 1;
      } else {
        inQuote = !inQuote;
      }
    } else if (char === "," && !inQuote) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values.map((value) => value.trim());
}

function parseCsvText(csvText = "") {
  const normalized = String(csvText || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  if (!normalized) {
    return [];
  }
  const lines = normalized.split("\n").filter((line) => line.trim().length > 0);
  if (lines.length < 2) {
    return [];
  }
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return headers.reduce((row, header, index) => {
      row[header] = values[index] ?? "";
      return row;
    }, {});
  });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("파일 읽기에 실패했습니다."));
    reader.readAsText(file, "utf-8");
  });
}

function exportProjectsCsv() {
  const columns = [
    { key: "id", label: "관리번호" },
    { key: "name", label: "과제명" },
    { key: "company", label: "법인" },
    { key: "department", label: "부서" },
    { key: "leader", label: "팀리더" },
    { key: "role", label: "직책" },
    { key: "teamMembers", label: "팀원" },
    { key: "projectType", label: "과제종류" },
    { key: "stage", label: "진행상태" },
    { key: "startDate", label: "시작일" },
    { key: "deadline", label: "종료일" },
    { key: "projectLink", label: "과제링크" },
    { key: "kpi", label: "KPI" },
    { key: "kpiTarget", label: "KPI목표" },
    { key: "csfType", label: "CSF유형" },
    { key: "health", label: "건강도" },
    { key: "progress", label: "진행률" },
    { key: "alignment", label: "정렬점수" },
    { key: "impact", label: "영향도" },
    { key: "evidence", label: "근거자료" },
    { key: "note", label: "비고" },
  ];
  downloadCsvFile(`혁신과제현황_${toIsoDate(REFERENCE_DATE)}.csv`, columns, projects);
}

function exportQualificationsCsv() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "qualificationType", label: "자격구분" },
    { key: "grade", label: "등급" },
    { key: "certificateNo", label: "자격번호" },
    { key: "company", label: "법인" },
    { key: "department", label: "부서" },
    { key: "name", label: "이름" },
    { key: "acquiredDate", label: "취득일자" },
  ];
  downloadCsvFile(`자격현황_${toIsoDate(REFERENCE_DATE)}.csv`, columns, qualifications);
}

function exportEducationSchedulesCsv() {
  const columns = [
    { key: "id", label: "일정ID" },
    { key: "majorCategory", label: "대분류" },
    { key: "middleCategory", label: "중분류" },
    { key: "smallCategory", label: "소분류" },
    { key: "requiredType", label: "필수교육" },
    { key: "recommendedTarget", label: "추천대상자" },
    { key: "surveyFormId", label: "설문지ID" },
    { key: "startDate", label: "교육시작일" },
    { key: "endDate", label: "교육종료일" },
    { key: "applicationStartDate", label: "접수시작일" },
    { key: "applicationEndDate", label: "접수종료일" },
    { key: "status", label: "교육진행상태" },
    { key: "operatorDept", label: "운영담당자" },
    { key: "capacity", label: "정원" },
    { key: "location", label: "장소" },
    { key: "daysText", label: "교육일수" },
    { key: "hoursText", label: "교육시간" },
    { key: "totalCost", label: "총교육비" },
    { key: "refundAmount", label: "환급액" },
    { key: "note", label: "비고" },
  ];
  downloadCsvFile(`교육운영관리_${toIsoDate(REFERENCE_DATE)}.csv`, columns, educationSchedules);
}

function exportEducationEnrollmentsCsv() {
  const rows = educationEnrollments.map((enrollment) => {
    const schedule = getEducationScheduleById(enrollment.scheduleId);
    const course = schedule ? getEducationCourseById(schedule.courseId) : null;
    return {
      courseName: schedule ? getEducationAdminDisplayCourseName(schedule, course) : "삭제된 강의",
      company: enrollment.company,
      department: enrollment.department,
      name: enrollment.name,
      position: enrollment.position,
      phone: enrollment.phone,
      email: enrollment.email,
      residentRegistrationNo: enrollment.residentRegistrationNo,
      notebookRequired: enrollment.notebookRequired,
      appliedAt: enrollment.appliedAt,
      completed: enrollment.completed ? "수료완료" : "미수료",
    };
  });
  const columns = [
    { key: "courseName", label: "강의명" },
    { key: "company", label: "법인명" },
    { key: "department", label: "부서" },
    { key: "name", label: "성명" },
    { key: "position", label: "직급" },
    { key: "phone", label: "휴대전화번호" },
    { key: "email", label: "이메일" },
    { key: "residentRegistrationNo", label: "주민등록번호" },
    { key: "notebookRequired", label: "노트북 지참여부" },
    { key: "appliedAt", label: "신청일" },
    { key: "completed", label: "상태" },
  ];
  downloadCsvFile(`교육신청자리스트_${toIsoDate(REFERENCE_DATE)}.csv`, columns, rows);
}

function exportEducationFeedbackCsv() {
  const rows = surveyResponses.flatMap((response) => response.answers
    .filter((answer) => answer.type === "text" && String(answer.value || "").trim())
    .map((answer) => ({
      courseName: response.courseName,
      surveyFormName: response.surveyFormName || "기본 설문",
      question: getSurveyQuestionLabelFromResponse(response, answer.questionId),
      feedback: String(answer.value || "").trim(),
      respondent: response.respondentName,
      submittedAt: response.submittedAt,
    })));
  const columns = [
    { key: "courseName", label: "강의명" },
    { key: "surveyFormName", label: "설문지" },
    { key: "question", label: "문항" },
    { key: "feedback", label: "서술형 의견" },
    { key: "respondent", label: "응답자" },
    { key: "submittedAt", label: "응답일" },
  ];
  downloadCsvFile(`과정별서술형의견_${toIsoDate(REFERENCE_DATE)}.csv`, columns, rows);
}

function exportEducationCostDetailsCsv() {
  const rows = Object.entries(educationCostDetailsBySchedule).flatMap(([scheduleId, items]) => {
    const schedule = getEducationScheduleById(scheduleId);
    const course = schedule ? getEducationCourseById(schedule.courseId) : null;
    const courseName = schedule ? getEducationAdminDisplayCourseName(schedule, course) : "삭제된 강의";
    return (Array.isArray(items) ? items : []).map((item) => ({
      courseName,
      category: item.category,
      detail: item.detail,
      unitCost: item.unitCost,
      quantity: item.quantity,
      estimatedCost: item.estimatedCost,
      note: item.note,
    }));
  });
  const columns = [
    { key: "courseName", label: "강의명" },
    { key: "category", label: "구분" },
    { key: "detail", label: "세부 내용" },
    { key: "unitCost", label: "단가" },
    { key: "quantity", label: "수량" },
    { key: "estimatedCost", label: "예상비용" },
    { key: "note", label: "비고" },
  ];
  downloadCsvFile(`교육비용환급상세_${toIsoDate(REFERENCE_DATE)}.csv`, columns, rows);
}

function exportSurveyResultsCsv() {
  const rows = surveyResponses.map((response) => ({
    courseName: response.courseName,
    respondentName: response.respondentName,
    submittedAt: response.submittedAt,
    averageScore: response.averageScore ?? "",
    surveyFormName: response.surveyFormName || "기본 설문",
    textAnswerCount: response.answers.filter((answer) => answer.type === "text" && String(answer.value || "").trim()).length,
  }));
  const columns = [
    { key: "courseName", label: "과정명" },
    { key: "respondentName", label: "응답자" },
    { key: "submittedAt", label: "응답일" },
    { key: "averageScore", label: "평균점수(5점)" },
    { key: "surveyFormName", label: "설문지" },
    { key: "textAnswerCount", label: "서술응답수" },
  ];
  downloadCsvFile(`설문결과이력_${toIsoDate(REFERENCE_DATE)}.csv`, columns, rows);
}

async function importProjectsCsv(file) {
  const text = await readFileAsText(file);
  const rows = parseCsvText(text);
  if (!rows.length) {
    window.alert("업로드할 데이터가 없습니다.");
    return;
  }
  projects = rows.map((row, index) => normalizeProject({
    id: row["관리번호"],
    name: row["과제명"],
    company: row["법인"],
    department: row["부서"],
    leader: row["팀리더"],
    role: row["직책"],
    teamMembers: row["팀원"],
    projectType: row["과제종류"],
    stage: row["진행상태"],
    startDate: row["시작일"],
    deadline: row["종료일"],
    projectLink: row["과제링크"],
    kpi: row["KPI"],
    kpiTarget: row["KPI목표"],
    csfType: row["CSF유형"],
    health: row["건강도"],
    progress: row["진행률"],
    alignment: row["정렬점수"],
    impact: row["영향도"],
    evidence: row["근거자료"],
    note: row["비고"],
  }, `IN-26-${String(index + 1).padStart(3, "0")}`));
  saveProjects();
  state.selectedId = projects[0]?.id ?? null;
}

async function importQualificationsCsv(file) {
  const text = await readFileAsText(file);
  const rows = parseCsvText(text);
  if (!rows.length) {
    window.alert("업로드할 데이터가 없습니다.");
    return;
  }
  qualifications = rows.map((row, index) => normalizeQualification({
    id: row.ID,
    qualificationType: row["자격구분"],
    grade: row["등급"],
    certificateNo: row["자격번호"],
    company: row["법인"],
    department: row["부서"],
    name: row["이름"],
    acquiredDate: row["취득일자"],
  }, `QL-${String(index + 1).padStart(3, "0")}`));
  saveQualifications();
  state.selectedQualificationId = qualifications[0]?.id ?? null;
}

async function importEducationSchedulesCsv(file) {
  const text = await readFileAsText(file);
  const rows = parseCsvText(text);
  if (!rows.length) {
    window.alert("업로드할 데이터가 없습니다.");
    return;
  }
  educationSchedules = rows.map((row, index) => normalizeEducationSchedule({
    id: row["일정ID"],
    majorCategory: row["대분류"],
    middleCategory: row["중분류"],
    smallCategory: row["소분류"],
    requiredType: row["필수교육"],
    recommendedTarget: row["추천대상자"],
    surveyFormId: row["설문지ID"],
    startDate: row["교육시작일"],
    endDate: row["교육종료일"],
    applicationStartDate: row["접수시작일"],
    applicationEndDate: row["접수종료일"],
    status: row["교육진행상태"],
    operatorDept: row["운영담당자"],
    capacity: row["정원"],
    location: row["장소"],
    daysText: row["교육일수"],
    hoursText: row["교육시간"],
    totalCost: row["총교육비"],
    refundAmount: row["환급액"],
    note: row["비고"],
  }, `EDU-S-${String(index + 1).padStart(3, "0")}`));
  saveEducationSchedules();
  state.selectedEducationScheduleId = educationSchedules[0]?.id ?? null;
  state.selectedEducationAdminId = educationSchedules[0]?.id ?? null;
}

function toIsoDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return "";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function getDefaultDeadline() {
  const date = new Date(REFERENCE_DATE);
  date.setDate(date.getDate() + 45);
  return toIsoDate(date);
}

function getDefaultStartDate() {
  const date = new Date(REFERENCE_DATE);
  date.setDate(date.getDate() - 14);
  return toIsoDate(date);
}

function getInferredStartDate(deadlineString) {
  const deadline = parseDate(deadlineString || getDefaultDeadline());
  const start = new Date(deadline);
  start.setDate(start.getDate() - 84);
  return toIsoDate(start);
}

function getInferredLastUpdated(project) {
  const offsetsByHealth = {
    risk: 18,
    watch: 11,
    "on-track": 5,
  };
  const offset = offsetsByHealth[project.health] ?? 7;
  const date = new Date(REFERENCE_DATE);
  date.setDate(date.getDate() - offset);
  return toIsoDate(date);
}

function isValidDateString(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) {
    return false;
  }

  return !Number.isNaN(new Date(`${value}T00:00:00`).getTime());
}

function getDefaultMilestoneDate() {
  const date = new Date(REFERENCE_DATE);
  date.setDate(date.getDate() + 7);
  return toIsoDate(date);
}

function getDefaultQualificationDate() {
  const date = new Date(REFERENCE_DATE);
  date.setMonth(date.getMonth() - 2);
  return toIsoDate(date);
}

function getQualificationGradeList(type) {
  return qualificationGradeOptions[type] || [];
}

function getAllQualificationGrades() {
  return qualificationTypeOptions.flatMap((type) => getQualificationGradeList(type));
}

function getLegacyMilestoneDate(milestone) {
  const monthToken = String(milestone.month || "").toUpperCase();
  const mappedMonth = milestoneMonthMap[monthToken];
  const day = clampNumber(parseNumber(milestone.day, 1), 1, 31);

  if (!mappedMonth) {
    return getDefaultMilestoneDate();
  }

  return `${REFERENCE_DATE.getFullYear()}-${String(mappedMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getMilestoneToneLabel(tone) {
  return milestoneToneLabels[tone] || milestoneToneLabels.blue;
}

function getMilestoneDateParts(dateString) {
  const date = parseDate(dateString);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: `${date.getMonth() + 1}월`,
  };
}

function isModalVisible(modal) {
  return Boolean(modal) && !modal.hidden;
}

function syncBodyModalState() {
  const hasOpenModal = [
    elements.projectModal,
    elements.qualificationModal,
    elements.milestoneModal,
    elements.educationAdminModal,
  ]
    .some((modal) => isModalVisible(modal));
  document.body.classList.toggle("modal-open", hasOpenModal);
}

function getStageLabel(stage) {
  return stageShortLabels[stage] || "D";
}

function getStageKor(stage) {
  return stageLabels[stage] || "정의";
}

function getHealthLabel(health) {
  return healthLabels[health] || "관리 필요";
}

function getScheduleStatusLabel(status) {
  return scheduleStatusLabels[status] || scheduleStatusLabels["on-track"];
}

function getAssessmentLevelLabel(level) {
  return assessmentLevelLabels[level] || "보통";
}

function getAssessmentGrade(score) {
  if (score >= 57) {
    return "S";
  }

  if (score >= 51) {
    return "A";
  }

  if (score >= 45) {
    return "B";
  }

  if (score >= 39) {
    return "C";
  }

  return "D";
}

function getAssessmentGradeClass(score) {
  return `grade-${String(getAssessmentGrade(score)).toLowerCase()}`;
}

function getProgressFromStage(stage) {
  const progressMap = {
    NotStarted: 0,
    Define: 20,
    Measure: 40,
    Analyze: 60,
    Improve: 80,
    Control: 100,
    Completed: 100,
  };

  return progressMap[stage] ?? 20;
}

function getProgressFromSchedule(startDate, deadline, referenceDate = REFERENCE_DATE) {
  if (!isValidDateString(startDate) || !isValidDateString(deadline)) {
    return 0;
  }

  const start = parseDate(startDate);
  const end = parseDate(deadline);

  if (end <= start) {
    return referenceDate >= end ? 100 : 0;
  }

  if (referenceDate <= start) {
    return 0;
  }

  if (referenceDate >= end) {
    return 100;
  }

  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / MS_PER_DAY));
  const elapsedDays = clampNumber(
    Math.ceil((referenceDate.getTime() - start.getTime()) / MS_PER_DAY),
    0,
    totalDays,
  );

  return Math.round((elapsedDays / totalDays) * 100);
}

function getStageRank(stage) {
  const rankMap = {
    NotStarted: 0,
    Define: 1,
    Measure: 2,
    Analyze: 3,
    Improve: 4,
    Control: 5,
    Completed: 6,
  };

  return rankMap[stage] ?? 0;
}

function getHealthFromStage(stage) {
  if (stage === "Completed" || stage === "Control") {
    return "on-track";
  }

  if (stage === "NotStarted") {
    return "watch";
  }

  return "on-track";
}

function getAssessmentKeys() {
  return Object.keys(assessmentWeights);
}

function inferAssessmentLevelFromScore(score) {
  if (score >= 57) {
    return "high";
  }

  if (score >= 39) {
    return "medium";
  }

  return "low";
}

function inferAssessment(project = {}) {
  const alignmentScore = clampNumber(Math.round(parseNumber(project.alignment, 45)), 0, 63);
  const impact = clampNumber(parseNumber(project.impact, 1), 0, 999);
  const urgencyDays = isValidDateString(project.deadline) ? getDaysUntil(project.deadline) : 30;

  return {
    potentialImpact: impact >= 2.5 ? "high" : impact >= 1.2 ? "medium" : "low",
    strategicAlignment: inferAssessmentLevelFromScore(alignmentScore),
    expectedEffect: impact >= 2 ? "high" : impact >= 1 ? "medium" : "low",
    rippleEffect: alignmentScore >= 57 || impact >= 3 ? "high" : alignmentScore >= 39 ? "medium" : "low",
    feasibility: project.health === "on-track" ? "high" : project.health === "watch" ? "medium" : "low",
    urgency: urgencyDays <= 14 ? "high" : urgencyDays <= 35 ? "medium" : "low",
  };
}

function normalizeAssessment(assessment, project = {}) {
  const fallback = inferAssessment(project);

  return getAssessmentKeys().reduce((result, key) => {
    const level = assessment && typeof assessment === "object" ? assessment[key] : undefined;
    result[key] = Object.prototype.hasOwnProperty.call(assessmentLevelLabels, level) ? level : fallback[key];
    return result;
  }, {});
}

function computeAssessmentScore(assessment) {
  return getAssessmentKeys().reduce((total, key) => {
    const level = assessment[key];
    const baseScore = key === "strategicAlignment"
      ? { high: 18, medium: 6, low: 1 }[level]
      : assessmentLevelScores[level];
    return total + (baseScore ?? assessmentLevelScores.medium);
  }, 0);
}

function getAssessmentSummary(assessment) {
  const score = computeAssessmentScore(assessment);
  return {
    score,
    grade: getAssessmentGrade(score),
  };
}

function formatMonthDay(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "numeric",
    day: "numeric",
  }).format(date);
}

function getWeekRange(referenceDate = REFERENCE_DATE) {
  const start = new Date(referenceDate);
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  start.setDate(start.getDate() + diff);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  end.setHours(0, 0, 0, 0);

  return { start, end };
}

function isDateWithinRange(dateString, startDate, endDate) {
  const date = parseDate(dateString);
  return date >= startDate && date <= endDate;
}

function getDaysSince(dateString, referenceDate = REFERENCE_DATE) {
  const date = parseDate(dateString);
  return Math.max(0, Math.ceil((referenceDate.getTime() - date.getTime()) / MS_PER_DAY));
}

function getExpectedProgress(project) {
  const start = parseDate(project.startDate);
  const end = parseDate(project.deadline);
  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / MS_PER_DAY));
  const elapsedDays = clampNumber(
    Math.ceil((REFERENCE_DATE.getTime() - start.getTime()) / MS_PER_DAY),
    0,
    totalDays,
  );

  return Math.round((elapsedDays / totalDays) * 100);
}

function getStageTargetDates(project) {
  if (!isValidDateString(project.startDate) || !isValidDateString(project.deadline)) {
    return null;
  }

  const start = parseDate(project.startDate);
  const end = parseDate(project.deadline);
  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / MS_PER_DAY));

  return stageCheckpointOrder.reduce((result, stage, index) => {
    const checkpointDate = new Date(start);
    const daysOffset = Math.ceil((totalDays * (index + 1)) / stageCheckpointOrder.length);
    checkpointDate.setDate(checkpointDate.getDate() + daysOffset);
    result[stage] = toIsoDate(checkpointDate > end ? end : checkpointDate);
    return result;
  }, {});
}

function getExpectedStageByDate(project, referenceDate = REFERENCE_DATE) {
  const targets = getStageTargetDates(project);

  if (!targets || !isValidDateString(project.startDate)) {
    return "NotStarted";
  }

  const startDate = parseDate(project.startDate);
  if (referenceDate < startDate) {
    return "NotStarted";
  }

  const expectedStage = stageCheckpointOrder.find((stage) => referenceDate <= parseDate(targets[stage]));
  return expectedStage || "Control";
}

function getScheduleStatus(project, referenceDate = REFERENCE_DATE) {
  const expectedStage = getExpectedStageByDate(project, referenceDate);
  const expectedRank = getStageRank(expectedStage);
  const currentRank = getStageRank(project.stage);
  const status = currentRank >= expectedRank ? "on-track" : "delayed";

  return {
    status,
    label: getScheduleStatusLabel(status),
    expectedStage,
    expectedStageKor: getStageKor(expectedStage),
    targetDates: getStageTargetDates(project),
  };
}

function getProgressGap(project) {
  return Math.max(0, getExpectedProgress(project) - project.progress);
}

function hasEvidenceMissing(project) {
  return !String(project.evidence || "").trim();
}

function getProjectSignals(project, weekRange = getWeekRange()) {
  const daysUntilDeadline = getDaysUntil(project.deadline);
  const daysSinceLastUpdated = getDaysSince(project.lastUpdated);
  const expectedProgress = getExpectedProgress(project);
  const progressGap = getProgressGap(project);
  const scheduleStatus = getScheduleStatus(project);
  const overdue = daysUntilDeadline < 0;
  const stagnant = daysSinceLastUpdated >= 14;
  const behindExpected = progressGap >= 12 || scheduleStatus.status === "delayed";
  const missingEvidence = hasEvidenceMissing(project);
  const dueThisWeek = isDateWithinRange(project.deadline, weekRange.start, weekRange.end);
  const updatedThisWeek = isDateWithinRange(project.lastUpdated, weekRange.start, weekRange.end);

  return {
    daysUntilDeadline,
    daysSinceLastUpdated,
    expectedProgress,
    progressGap,
    overdue,
    stagnant,
    behindExpected,
    missingEvidence,
    dueThisWeek,
    updatedThisWeek,
    scheduleStatus,
  };
}

function getUrgencyScore(project, signals) {
  let score = 0;

  if (signals.overdue) {
    score += 6;
  }

  if (signals.dueThisWeek) {
    score += 4;
  } else if (signals.daysUntilDeadline <= 30) {
    score += 2;
  }

  if (signals.behindExpected) {
    score += signals.progressGap >= 20 ? 4 : 2;
  }

  if (signals.stagnant) {
    score += 2;
  }

  if (signals.missingEvidence) {
    score += 2;
  }

  if (project.health === "risk") {
    score += 3;
  } else if (project.health === "watch") {
    score += 1;
  }

  if (project.alignment < 80) {
    score += 1;
  }

  return score;
}

function buildWeeklyInsight(filteredProjects) {
  const weekRange = getWeekRange();

  if (!filteredProjects.length) {
    return null;
  }

  const analyzedProjects = filteredProjects.map((project) => {
    const signals = getProjectSignals(project, weekRange);
    return {
      project,
      signals,
      urgencyScore: getUrgencyScore(project, signals),
    };
  });

  const dueThisWeek = analyzedProjects.filter((item) => item.signals.dueThisWeek);
  const behindExpected = analyzedProjects.filter((item) => item.signals.behindExpected);
  const stagnant = analyzedProjects.filter((item) => item.signals.stagnant);
  const missingEvidence = analyzedProjects.filter((item) => item.signals.missingEvidence);
  const overdue = analyzedProjects.filter((item) => item.signals.overdue);
  const companySummary = aggregateByCompany(filteredProjects);
  const lowestCompany = companySummary.length ? companySummary[companySummary.length - 1] : null;

  const priorityGroups = [
    { key: "dueThisWeek", label: "이번 주 마감", count: dueThisWeek.length, severity: 5, items: dueThisWeek },
    { key: "behindExpected", label: "기대 진행률 대비 지연", count: behindExpected.length, severity: 4, items: behindExpected },
    { key: "stagnant", label: "정체", count: stagnant.length, severity: 3, items: stagnant },
    { key: "missingEvidence", label: "증빙 미첨부", count: missingEvidence.length, severity: 2, items: missingEvidence },
  ]
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }

      return right.severity - left.severity;
    });

  const primaryIssue = priorityGroups[0];
  let headline = "이번 주 요약";
  const totalCount = filteredProjects.length;
  const delayedCount = behindExpected.length;
  const lowestCompanyName = lowestCompany ? escapeHtml(lowestCompany.company) : "집계 대상 법인";
  const lowestCompanyProgress = lowestCompany?.progress ?? 0;
  const hasCompanyTie = companySummary.length > 1
    && companySummary.every((company) => company.progress === companySummary[0].progress);
  const lowestProgressCompanies = companySummary
    .filter((company) => company.progress === lowestCompanyProgress)
    .map((company) => escapeHtml(company.company));

  let actionCopy = "전체 과제 기준 지연 과제와 법인별 진행률을 함께 점검해 주세요.";
  let summaryHtml = `총 <span class="hero-summary-count">${totalCount}건</span>의 과제 중 <span class="hero-summary-count">${delayedCount}건</span>이 지연되고 있으므로 만회계획이 필요하며, <span class="hero-summary-target">${lowestCompanyName}</span>의 진행률이 <span class="hero-summary-count">${lowestCompanyProgress}%</span>로 가장 낮으므로 조치가 필요합니다.`;

  if (hasCompanyTie) {
    summaryHtml = `총 <span class="hero-summary-count">${totalCount}건</span>의 과제 중 <span class="hero-summary-count">${delayedCount}건</span>이 지연되고 있으므로 만회계획이 필요하며, 법인별 평균 진행률이 모두 <span class="hero-summary-count">${lowestCompanyProgress}%</span>로 동일해 전사 공통 개선이 필요합니다.`;
  } else if (lowestProgressCompanies.length > 1) {
    summaryHtml = `총 <span class="hero-summary-count">${totalCount}건</span>의 과제 중 <span class="hero-summary-count">${delayedCount}건</span>이 지연되고 있으므로 만회계획이 필요하며, <span class="hero-summary-target">${lowestProgressCompanies.join(", ")}</span>의 진행률이 <span class="hero-summary-count">${lowestCompanyProgress}%</span>로 최저 동률이어서 우선 점검이 필요합니다.`;
  }

  if (!totalCount) {
    actionCopy = "표시할 과제가 없습니다.";
    summaryHtml = "현재 집계할 과제가 없습니다.";
  }

  return {
    weekLabel: `${formatMonthDay(weekRange.start)} - ${formatMonthDay(weekRange.end)}`,
    dueThisWeekCount: dueThisWeek.length,
    behindExpectedCount: behindExpected.length,
    stagnantCount: stagnant.length,
    missingEvidenceCount: missingEvidence.length,
    updatedThisWeekCount: analyzedProjects.filter((item) => item.signals.updatedThisWeek).length,
    overdueCount: overdue.length,
    leadingCompany: companySummary[0] || null,
    headline,
    actionCopy,
    summaryHtml,
  };
}

function normalizeMilestone(milestone, fallbackId = "") {
  const tone = Object.prototype.hasOwnProperty.call(milestoneToneLabels, milestone.tone) ? milestone.tone : "blue";
  const date = isValidDateString(milestone.date)
    ? milestone.date
    : getLegacyMilestoneDate(milestone);

  return {
    id: milestone.id || fallbackId || generateMilestoneId(),
    date,
    title: String(milestone.title || "").trim(),
    description: String(milestone.description || "").trim(),
    tone,
  };
}

function normalizeProject(project, fallbackId = "") {
  const stage = stageOrder.includes(project.stage) ? project.stage : "Define";
  const health = Object.prototype.hasOwnProperty.call(healthLabels, project.health)
    ? project.health
    : getHealthFromStage(stage);
  const company = project.company === "에이텍아이오티"
    ? "에이텍시스템"
    : (companyOptions.includes(project.company) ? project.company : companyOptions[0]);
  const deadline = isValidDateString(project.deadline) ? project.deadline : getDefaultDeadline();
  const rawStartDate = isValidDateString(project.startDate) ? project.startDate : getInferredStartDate(deadline);
  const startDate = parseDate(rawStartDate) <= parseDate(deadline) ? rawStartDate : deadline;
  const lastUpdated = isValidDateString(project.lastUpdated) ? project.lastUpdated : getInferredLastUpdated({ ...project, health });
  const progress = clampNumber(Math.round(parseNumber(project.progress, getProgressFromStage(stage))), 0, 100);
  const impact = clampNumber(Number(parseNumber(project.impact, 0).toFixed(1)), 0, 999);
  const assessment = normalizeAssessment(project.assessment, { ...project, health, deadline, impact });
  const alignment = computeAssessmentScore(assessment);
  const projectType = projectTypeOptions.includes(project.projectType) ? project.projectType : "";
  const csfType = csfTypeOptions.includes(project.csfType) ? project.csfType : "";
  const scheduleStatus = getScheduleStatus({ ...project, stage, startDate, deadline });

  return {
    id: project.id || fallbackId || generateProjectId(),
    name: String(project.name || "").trim(),
    company,
    department: String(project.department || "").trim(),
    leader: String(project.leader || "").trim(),
    role: String(project.role || "").trim(),
    teamMembers: String(project.teamMembers || "").trim(),
    projectType,
    projectLink: String(project.projectLink || "").trim(),
    csfType,
    kpi: String(project.kpi || "").trim(),
    kpiTarget: String(project.kpiTarget || "").trim(),
    stage,
    stageLabel: getStageLabel(stage),
    stageKor: getStageKor(stage),
    startDate,
    progress,
    deadline,
    lastUpdated,
    health,
    healthLabel: getHealthLabel(health),
    scheduleStatus: scheduleStatus.status,
    scheduleStatusLabel: scheduleStatus.label,
    expectedStage: scheduleStatus.expectedStage,
    expectedStageKor: scheduleStatus.expectedStageKor,
    stageTargetDates: scheduleStatus.targetDates,
    nextMilestone: String(project.nextMilestone || "").trim(),
    impact,
    alignment,
    assessment,
    risk: String(project.risk || "").trim(),
    evidence: String(project.evidence || "").trim(),
    note: String(project.note || "").trim(),
    createdByUid: String(project.createdByUid || "").trim(),
    createdByName: String(project.createdByName || "").trim(),
  };
}

function normalizeQualification(qualification, fallbackId = "") {
  const qualificationType = qualificationTypeOptions.includes(qualification.qualificationType)
    ? qualification.qualificationType
    : qualificationTypeOptions[0];
  const gradeOptions = getQualificationGradeList(qualificationType);
  const grade = gradeOptions.includes(qualification.grade) ? qualification.grade : (gradeOptions[0] || "");
  const company = companyOptions.includes(qualification.company) ? qualification.company : companyOptions[0];
  const acquiredDate = isValidDateString(qualification.acquiredDate)
    ? qualification.acquiredDate
    : getDefaultQualificationDate();
  const certificateNo = String(qualification.certificateNo || "").trim();

  return {
    id: qualification.id || fallbackId || generateQualificationId(),
    qualificationType,
    grade,
    certificateNo: certificateNo || `${qualificationType}-${String(REFERENCE_DATE.getFullYear()).slice(-2)}-${String(fallbackId || generateQualificationId()).slice(-3)}`,
    company,
    department: String(qualification.department || "").trim(),
    name: String(qualification.name || "").trim(),
    acquiredDate,
  };
}

function normalizeCertificationOperationStatus(status) {
  return Object.prototype.hasOwnProperty.call(certificationOperationStatusLabels, status)
    ? status
    : "planned";
}

function normalizeCertificationExam(exam, fallbackId = "") {
  const examType = qualificationTypeOptions.includes(exam.examType)
    ? exam.examType
    : qualificationTypeOptions[0];
  const gradeOptions = getQualificationGradeList(examType);
  const examGrade = gradeOptions.includes(exam.examGrade) ? exam.examGrade : (gradeOptions[0] || "");
  const legacyTitle = [exam.qualificationType, exam.grade].filter(Boolean).join(" ");
  const examTitle = String(exam.examTitle || legacyTitle || "").trim();
  const targetAudience = String(exam.targetAudience || exam.name || "").trim();
  const qualificationRequirement = String(exam.qualificationRequirement || "").trim();
  const passCriteria = String(exam.passCriteria || exam.certificateNo || "").trim();
  const applicationStartDate = isValidDateString(exam.applicationStartDate)
    ? exam.applicationStartDate
    : toIsoDate(REFERENCE_DATE);
  const applicationEndDate = isValidDateString(exam.applicationEndDate)
    ? exam.applicationEndDate
    : applicationStartDate;
  const safeApplicationEndDate = parseDate(applicationEndDate) >= parseDate(applicationStartDate)
    ? applicationEndDate
    : applicationStartDate;
  const examDateTime = String(exam.examDateTime || "").trim();
  const resultAnnouncementDate = isValidDateString(exam.resultAnnouncementDate)
    ? exam.resultAnnouncementDate
    : safeApplicationEndDate;
  const capacity = Math.max(1, Math.round(parseNumber(exam.capacity, 30)));
  const applicantsCount = Math.max(0, Math.round(parseNumber(exam.applicantsCount, 0)));
  const passedCount = Math.max(0, Math.round(parseNumber(exam.passedCount, 0)));

  return {
    id: exam.id || fallbackId || generateCertificationExamId(),
    examType,
    examGrade,
    examTitle,
    targetAudience,
    qualificationRequirement,
    passCriteria,
    applicationStartDate,
    applicationEndDate: safeApplicationEndDate,
    examDateTime,
    resultAnnouncementDate,
    capacity,
    applicantsCount,
    passedCount,
    examLocation: String(exam.examLocation || exam.company || "").trim(),
    operationStatus: normalizeCertificationOperationStatus(exam.operationStatus),
    note: String(exam.note || "").trim(),
  };
}

function normalizeEducationSchedule(schedule, fallbackId = "") {
  const defaultCourseId = educationCoursesMaster[0]?.id || "";
  const hasCourse = educationCoursesMaster.some((course) => course.id === schedule.courseId);
  const matchedCourse = hasCourse
    ? educationCoursesMaster.find((course) => course.id === schedule.courseId)
    : null;
  const status = Object.prototype.hasOwnProperty.call(educationStatusLabels, schedule.status)
    ? schedule.status
    : "planned";
  const startDate = isValidDateString(schedule.startDate) ? schedule.startDate : toIsoDate(REFERENCE_DATE);
  const endDate = isValidDateString(schedule.endDate) ? schedule.endDate : startDate;
  const safeEndDate = parseDate(endDate) >= parseDate(startDate) ? endDate : startDate;
  const applicationStartDate = isValidDateString(schedule.applicationStartDate) ? schedule.applicationStartDate : startDate;
  const applicationEndDate = isValidDateString(schedule.applicationEndDate) ? schedule.applicationEndDate : applicationStartDate;
  const safeApplicationEndDate = parseDate(applicationEndDate) >= parseDate(applicationStartDate)
    ? applicationEndDate
    : applicationStartDate;
  const defaultSurveyFormId = surveyForms[0]?.id || "";
  const hasSurveyForm = surveyForms.some((form) => form.id === schedule.surveyFormId);

  return {
    id: schedule.id || fallbackId || `EDU-S-${String(Date.now()).slice(-6)}`,
    courseId: hasCourse ? schedule.courseId : defaultCourseId,
    startDate,
    endDate: safeEndDate,
    applicationStartDate,
    applicationEndDate: safeApplicationEndDate,
    applicationStatus: getEducationRecruitStatusKey({
      applicationStartDate,
      applicationEndDate: safeApplicationEndDate,
      startDate,
    }),
    location: String(schedule.location || "미정").trim(),
    capacity: Math.max(1, Math.round(parseNumber(schedule.capacity, 20))),
    status,
    majorCategory: normalizeEducationAdminMajorCategory(
      schedule.majorCategory || matchedCourse?.majorCategory || "기타",
    ),
    middleCategory: String(schedule.middleCategory || matchedCourse?.subCategory || "기타").trim(),
    smallCategory: String(schedule.smallCategory || matchedCourse?.name || "미등록 과정").trim(),
    recommendedTarget: String(schedule.recommendedTarget || matchedCourse?.recommendedFor || matchedCourse?.targetLevel || "").trim(),
    requiredType: String(schedule.requiredType || matchedCourse?.requiredType || "필수").trim(),
    surveyFormId: hasSurveyForm ? String(schedule.surveyFormId || "").trim() : defaultSurveyFormId,
    daysText: String(schedule.daysText || matchedCourse?.durationText || "1일").trim(),
    hoursText: String(schedule.hoursText || (matchedCourse?.trainingHours ? `${matchedCourse.trainingHours}시간` : "-")).trim(),
    seasonText: String(schedule.seasonText || getEducationAdminDefaultSeason(startDate)).trim(),
    targetDateText: String(schedule.targetDateText || getEducationAdminDefaultTargetDate(startDate, safeEndDate)).trim(),
    completionState: normalizeEducationAdminCompletionState(
      schedule.completionState || getEducationAdminDefaultCompletionState(status),
      status,
    ),
    year: /^\d{4}$/.test(String(schedule.year || "").trim())
      ? String(schedule.year).trim()
      : String(startDate).slice(0, 4),
    operatorDept: normalizeEducationAdminOperatorDept(schedule.operatorDept || "경영혁신실"),
    attendees: Math.max(0, Math.round(parseNumber(schedule.attendees, 0))),
    avgScore: Number(Math.max(0, parseNumber(schedule.avgScore, 0)).toFixed(2)),
    totalCost: Math.max(0, Math.round(parseNumber(schedule.totalCost, 0))),
    refundAmount: Math.max(0, Math.round(parseNumber(schedule.refundAmount, 0))),
    note: String(schedule.note || "").trim(),
  };
}

function normalizeEducationEnrollment(enrollment, fallbackId = "") {
  const hasSchedule = defaultEducationSchedules.some((schedule) => schedule.id === enrollment.scheduleId)
    || educationSchedules?.some?.((schedule) => schedule.id === enrollment.scheduleId);
  const appliedAt = isValidDateString(enrollment.appliedAt) ? enrollment.appliedAt : toIsoDate(REFERENCE_DATE);
  const satisfaction = enrollment.satisfaction == null
    ? null
    : Number(Math.max(0, parseNumber(enrollment.satisfaction, 0)).toFixed(2));

  return {
    id: enrollment.id || fallbackId || `EDU-ENR-${String(Date.now()).slice(-6)}`,
    scheduleId: hasSchedule ? enrollment.scheduleId : (defaultEducationSchedules[0]?.id || ""),
    employeeId: String(enrollment.employeeId || "demo-user").trim(),
    name: String(enrollment.name || "로컬 데모 사용자").trim(),
    company: String(enrollment.company || companyOptions[0]).trim(),
    department: String(enrollment.department || "").trim(),
    position: String(enrollment.position || "").trim(),
    email: String(enrollment.email || "").trim(),
    phone: String(enrollment.phone || "").trim(),
    notebookRequired: String(enrollment.notebookRequired || "").trim(),
    residentRegistrationNo: String(enrollment.residentRegistrationNo || "").trim(),
    appliedAt,
    completed: Boolean(enrollment.completed),
    satisfaction,
    certificateNo: String(enrollment.certificateNo || "").trim(),
  };
}

function generateEducationCostItemId() {
  return `EDU-COST-${String(Date.now()).slice(-6)}-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;
}

function normalizeEducationCostCategory(value) {
  const token = String(value || "").trim();
  return educationCostCategoryOptions.includes(token) ? token : educationCostCategoryOptions[0];
}

function toRoundedPositiveInteger(value, fallback = 0) {
  return Math.max(0, Math.round(parseNumber(value, fallback)));
}

function toRoundedPositiveDecimal(value, fallback = 0) {
  return Number(Math.max(0, parseNumber(value, fallback)).toFixed(2));
}

function calculateEducationCostEstimated(unitCost, quantity) {
  return toRoundedPositiveInteger(toRoundedPositiveInteger(unitCost, 0) * toRoundedPositiveDecimal(quantity, 0), 0);
}

function normalizeEducationCostItem(item, fallbackId = "") {
  const unitCost = toRoundedPositiveInteger(item.unitCost, 0);
  const quantity = toRoundedPositiveDecimal(item.quantity, 0);
  const estimatedCost = calculateEducationCostEstimated(unitCost, quantity);

  return {
    id: item.id || fallbackId || generateEducationCostItemId(),
    category: normalizeEducationCostCategory(item.category),
    detail: String(item.detail || "").trim(),
    unitCost,
    quantity,
    estimatedCost,
    note: String(item.note || "").trim(),
  };
}

function loadEducationCostDetails() {
  try {
    const stored = window.localStorage.getItem(EDUCATION_COST_DETAIL_STORAGE_KEY);
    if (!stored) {
      return {};
    }

    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }

    return Object.entries(parsed).reduce((accumulator, [scheduleId, items]) => {
      if (!Array.isArray(items)) {
        return accumulator;
      }

      accumulator[scheduleId] = items.map((item, index) =>
        normalizeEducationCostItem(item, `${scheduleId}-COST-${String(index + 1).padStart(3, "0")}`));
      return accumulator;
    }, {});
  } catch (error) {
    return {};
  }
}

function loadEducationSchedules() {
  try {
    const stored = window.localStorage.getItem(EDUCATION_SCHEDULE_STORAGE_KEY);

    if (!stored) {
      return defaultEducationSchedules.map((schedule, index) =>
        normalizeEducationSchedule(schedule, `EDU-S-${String(index + 1).padStart(3, "0")}`));
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) {
      return defaultEducationSchedules.map((schedule, index) =>
        normalizeEducationSchedule(schedule, `EDU-S-${String(index + 1).padStart(3, "0")}`));
    }

    return parsed.map((schedule, index) =>
      normalizeEducationSchedule(schedule, `EDU-S-${String(index + 1).padStart(3, "0")}`));
  } catch (error) {
    return defaultEducationSchedules.map((schedule, index) =>
      normalizeEducationSchedule(schedule, `EDU-S-${String(index + 1).padStart(3, "0")}`));
  }
}

function loadEducationEnrollments() {
  try {
    const stored = window.localStorage.getItem(EDUCATION_ENROLLMENT_STORAGE_KEY);

    if (!stored) {
      return defaultEducationEnrollments.map((enrollment, index) =>
        normalizeEducationEnrollment(enrollment, `EDU-ENR-${String(index + 1).padStart(3, "0")}`));
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return defaultEducationEnrollments.map((enrollment, index) =>
        normalizeEducationEnrollment(enrollment, `EDU-ENR-${String(index + 1).padStart(3, "0")}`));
    }

    return parsed.map((enrollment, index) =>
      normalizeEducationEnrollment(enrollment, `EDU-ENR-${String(index + 1).padStart(3, "0")}`));
  } catch (error) {
    return defaultEducationEnrollments.map((enrollment, index) =>
      normalizeEducationEnrollment(enrollment, `EDU-ENR-${String(index + 1).padStart(3, "0")}`));
  }
}

function loadMilestones() {
  try {
    const stored = window.localStorage.getItem(MILESTONE_STORAGE_KEY);

    if (!stored) {
      return milestones.map((milestone, index) => normalizeMilestone(milestone, `MS-${String(index + 1).padStart(3, "0")}`));
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) {
      return milestones.map((milestone, index) => normalizeMilestone(milestone, `MS-${String(index + 1).padStart(3, "0")}`));
    }

    return parsed.map((milestone, index) => normalizeMilestone(milestone, `MS-${String(index + 1).padStart(3, "0")}`));
  } catch (error) {
    return milestones.map((milestone, index) => normalizeMilestone(milestone, `MS-${String(index + 1).padStart(3, "0")}`));
  }
}

function loadProjects() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return defaultProjects.map((project, index) => normalizeProject(project, `IN-26-${String(index + 1).padStart(3, "0")}`));
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) {
      return defaultProjects.map((project, index) => normalizeProject(project, `IN-26-${String(index + 1).padStart(3, "0")}`));
    }

    return parsed.map((project, index) => normalizeProject(project, `IN-26-${String(index + 1).padStart(3, "0")}`));
  } catch (error) {
    return defaultProjects.map((project, index) => normalizeProject(project, `IN-26-${String(index + 1).padStart(3, "0")}`));
  }
}

function loadQualifications() {
  try {
    const stored = window.localStorage.getItem(QUALIFICATION_STORAGE_KEY);

    if (!stored) {
      return defaultQualifications.map((qualification, index) =>
        normalizeQualification(qualification, `QL-${String(index + 1).padStart(3, "0")}`));
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) {
      return defaultQualifications.map((qualification, index) =>
        normalizeQualification(qualification, `QL-${String(index + 1).padStart(3, "0")}`));
    }

    return parsed.map((qualification, index) =>
      normalizeQualification(qualification, `QL-${String(index + 1).padStart(3, "0")}`));
  } catch (error) {
    return defaultQualifications.map((qualification, index) =>
      normalizeQualification(qualification, `QL-${String(index + 1).padStart(3, "0")}`));
  }
}

function loadCertificationExams() {
  try {
    const stored = window.localStorage.getItem(CERTIFICATION_EXAM_STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map((exam, index) =>
      normalizeCertificationExam(exam, `CEX-${String(index + 1).padStart(3, "0")}`));
  } catch (error) {
    return [];
  }
}

function loadCertificationExamApplications() {
  try {
    const stored = window.localStorage.getItem(CERTIFICATION_EXAM_APPLICATION_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed
      .map((item, index) => ({
        id: String(item?.id || `CEX-APP-${String(index + 1).padStart(3, "0")}`).trim(),
        examId: String(item?.examId || "").trim(),
        employeeId: String(item?.employeeId || "").trim(),
        company: String(item?.company || "").trim(),
        department: String(item?.department || "").trim(),
        name: String(item?.name || "").trim(),
        position: String(item?.position || "").trim(),
        email: String(item?.email || "").trim(),
        phone: String(item?.phone || "").trim(),
        certificateNo: String(item?.certificateNo || "").trim(),
        acquiredDate: isValidDateString(item?.acquiredDate) ? item.acquiredDate : "",
        completed: Boolean(item?.completed),
        qualificationId: String(item?.qualificationId || "").trim(),
        appliedAt: isValidDateString(item?.appliedAt) ? item.appliedAt : toIsoDate(REFERENCE_DATE),
      }))
      .filter((item) => item.examId);
  } catch (error) {
    return [];
  }
}

function loadDashboardNotices() {
  try {
    const stored = window.localStorage.getItem(DASHBOARD_NOTICE_STORAGE_KEY);
    if (!stored) {
      return defaultDashboardNoticeItems.map((item, index) => ({
        id: item.id || `NOTICE-${String(index + 1).padStart(3, "0")}`,
        title: String(item.title || "").trim(),
        date: isValidDateString(item.date) ? item.date : toIsoDate(REFERENCE_DATE),
      }));
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.length) {
      return defaultDashboardNoticeItems.map((item, index) => ({
        id: item.id || `NOTICE-${String(index + 1).padStart(3, "0")}`,
        title: String(item.title || "").trim(),
        date: isValidDateString(item.date) ? item.date : toIsoDate(REFERENCE_DATE),
      }));
    }
    return parsed.map((item, index) => ({
      id: String(item?.id || `NOTICE-${String(index + 1).padStart(3, "0")}`).trim(),
      title: String(item?.title || "").trim() || `공지 ${index + 1}`,
      date: isValidDateString(item?.date) ? item.date : toIsoDate(REFERENCE_DATE),
    }));
  } catch (error) {
    return defaultDashboardNoticeItems.map((item, index) => ({
      id: item.id || `NOTICE-${String(index + 1).padStart(3, "0")}`,
      title: String(item.title || "").trim(),
      date: isValidDateString(item.date) ? item.date : toIsoDate(REFERENCE_DATE),
    }));
  }
}

function normalizeSurveyQuestion(question, fallbackId = "", fallbackOrder = 1) {
  const type = String(question?.type || "scale").toLowerCase() === "text" ? "text" : "scale";
  const text = String(question?.text || "").trim();
  return {
    id: String(question?.id || fallbackId || `SVQ-${String(Date.now()).slice(-6)}`).trim(),
    type,
    text: text || "문항을 입력해 주세요.",
    active: question?.active !== false,
    order: Math.max(1, Math.round(parseNumber(question?.order, fallbackOrder))),
  };
}

function normalizeSurveyForm(form, fallbackId = "", fallbackOrder = 1) {
  const id = String(form?.id || fallbackId || `SVF-${String(Date.now()).slice(-6)}`).trim();
  const name = String(form?.name || "").trim() || `설문지${fallbackOrder}`;
  const questions = Array.isArray(form?.questions)
    ? form.questions.map((question, index) => normalizeSurveyQuestion(question, `SVQ-${String(index + 1).padStart(3, "0")}`, index + 1))
    : [];
  return {
    id,
    name,
    order: Math.max(1, Math.round(parseNumber(form?.order, fallbackOrder))),
    questions: questions.sort((left, right) => left.order - right.order),
  };
}

function normalizeSurveyResponse(response, fallbackId = "") {
  const answers = Array.isArray(response?.answers)
    ? response.answers.map((answer) => ({
      questionId: String(answer?.questionId || "").trim(),
      type: String(answer?.type || "scale").toLowerCase() === "text" ? "text" : "scale",
      value: answer?.value,
    }))
    : [];
  const scaleAnswers = answers
    .filter((answer) => answer.type === "scale")
    .map((answer) => parseNumber(answer.value, 0))
    .filter((score) => score > 0);
  const averageScore = scaleAnswers.length
    ? Number((scaleAnswers.reduce((sum, score) => sum + score, 0) / scaleAnswers.length).toFixed(2))
    : null;
  return {
    id: String(response?.id || fallbackId || `SVR-${String(Date.now()).slice(-6)}`).trim(),
    surveyFormId: String(response?.surveyFormId || "").trim(),
    surveyFormName: String(response?.surveyFormName || "").trim(),
    enrollmentId: String(response?.enrollmentId || "").trim(),
    scheduleId: String(response?.scheduleId || "").trim(),
    respondentName: String(response?.respondentName || "").trim(),
    courseName: String(response?.courseName || "").trim(),
    submittedAt: isValidDateString(response?.submittedAt) ? response.submittedAt : toIsoDate(REFERENCE_DATE),
    answers,
    averageScore,
  };
}

function loadSurveyQuestions() {
  try {
    const stored = window.localStorage.getItem(SURVEY_QUESTION_STORAGE_KEY);
    const source = stored ? JSON.parse(stored) : defaultSurveyQuestions;
    if (!Array.isArray(source) || !source.length) {
      return defaultSurveyQuestions.map((question, index) => normalizeSurveyQuestion(question, `SVQ-${String(index + 1).padStart(3, "0")}`, index + 1));
    }
    return source
      .map((question, index) => normalizeSurveyQuestion(question, `SVQ-${String(index + 1).padStart(3, "0")}`, index + 1))
      .sort((left, right) => left.order - right.order);
  } catch (error) {
    return defaultSurveyQuestions.map((question, index) => normalizeSurveyQuestion(question, `SVQ-${String(index + 1).padStart(3, "0")}`, index + 1));
  }
}

function loadSurveyForms() {
  try {
    const storedForms = window.localStorage.getItem(SURVEY_FORM_STORAGE_KEY);
    if (storedForms) {
      const parsedForms = JSON.parse(storedForms);
      if (Array.isArray(parsedForms) && parsedForms.length) {
        return parsedForms
          .map((form, index) => normalizeSurveyForm(form, `SVF-${String(index + 1).padStart(3, "0")}`, index + 1))
          .sort((left, right) => left.order - right.order);
      }
    }

    // Backward compatibility: migrate single survey question storage into first survey form.
    const legacyQuestions = loadSurveyQuestions();
    return [
      normalizeSurveyForm({
        id: "SVF-001",
        name: "설문지1",
        order: 1,
        questions: legacyQuestions,
      }, "SVF-001", 1),
    ];
  } catch (error) {
    return [
      normalizeSurveyForm({
        id: "SVF-001",
        name: "설문지1",
        order: 1,
        questions: defaultSurveyQuestions,
      }, "SVF-001", 1),
    ];
  }
}

function loadSurveyResponses() {
  try {
    const stored = window.localStorage.getItem(SURVEY_RESPONSE_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed
      .map((response, index) => normalizeSurveyResponse(response, `SVR-${String(index + 1).padStart(3, "0")}`))
      .sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
  } catch (error) {
    return [];
  }
}

function saveProjects() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveProjects?.(projects);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveMilestones() {
  try {
    window.localStorage.setItem(MILESTONE_STORAGE_KEY, JSON.stringify(milestoneItems));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveMilestones?.(milestoneItems);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveQualifications() {
  try {
    window.localStorage.setItem(QUALIFICATION_STORAGE_KEY, JSON.stringify(qualifications));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveQualifications?.(qualifications);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveCertificationExams() {
  try {
    window.localStorage.setItem(CERTIFICATION_EXAM_STORAGE_KEY, JSON.stringify(certificationExams));
  } catch (error) {
    // local fallback only
  }

  try {
    const saveResult = window.innotrackFirebase?.saveCertificationExams?.(certificationExams);
    if (saveResult && typeof saveResult.then === "function") {
      saveResult
        .then((synced) => {
          if (!synced) {
            window.alert("클라우드 저장에 실패했습니다. 현재 계정 권한(user/admin)과 로그인 상태를 확인해 주세요.");
          }
        })
        .catch((error) => {
          const message = error?.message || "";
          window.alert(`클라우드 저장 중 오류가 발생했습니다.\n${message}`.trim());
        });
    } else if (saveResult === false) {
      window.alert("클라우드 저장에 실패했습니다. 현재 계정 권한(user/admin)과 로그인 상태를 확인해 주세요.");
    }
  } catch (error) {
    window.alert(`클라우드 저장 중 오류가 발생했습니다.\n${error?.message || ""}`.trim());
  }
}

function saveCertificationExamApplications() {
  try {
    window.localStorage.setItem(CERTIFICATION_EXAM_APPLICATION_STORAGE_KEY, JSON.stringify(certificationExamApplications));
  } catch (error) {
    // local fallback only
  }

  try {
    const saveResult = window.innotrackFirebase?.saveCertificationExamApplications?.(certificationExamApplications);
    if (saveResult && typeof saveResult.then === "function") {
      saveResult
        .then((synced) => {
          if (!synced) {
            window.alert("클라우드 저장에 실패했습니다. 현재 계정 권한(user/admin)과 로그인 상태를 확인해 주세요.");
          }
        })
        .catch((error) => {
          const message = error?.message || "";
          window.alert(`클라우드 저장 중 오류가 발생했습니다.\n${message}`.trim());
        });
    } else if (saveResult === false) {
      window.alert("클라우드 저장에 실패했습니다. 현재 계정 권한(user/admin)과 로그인 상태를 확인해 주세요.");
    }
  } catch (error) {
    window.alert(`클라우드 저장 중 오류가 발생했습니다.\n${error?.message || ""}`.trim());
  }
}

function saveDashboardNotices() {
  try {
    window.localStorage.setItem(DASHBOARD_NOTICE_STORAGE_KEY, JSON.stringify(dashboardNoticeItems));
  } catch (error) {
    // local fallback only
  }
}

function saveEducationSchedules() {
  try {
    window.localStorage.setItem(EDUCATION_SCHEDULE_STORAGE_KEY, JSON.stringify(educationSchedules));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveEducationSchedules?.(educationSchedules);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveEducationEnrollments() {
  try {
    window.localStorage.setItem(EDUCATION_ENROLLMENT_STORAGE_KEY, JSON.stringify(educationEnrollments));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveEducationEnrollments?.(educationEnrollments);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveEducationCostDetails() {
  try {
    window.localStorage.setItem(EDUCATION_COST_DETAIL_STORAGE_KEY, JSON.stringify(educationCostDetailsBySchedule));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveEducationCostDetails?.(educationCostDetailsBySchedule);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveSurveyQuestions() {
  try {
    window.localStorage.setItem(SURVEY_FORM_STORAGE_KEY, JSON.stringify(surveyForms));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveSurveyForms?.(surveyForms);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function saveSurveyResponses() {
  try {
    window.localStorage.setItem(SURVEY_RESPONSE_STORAGE_KEY, JSON.stringify(surveyResponses));
  } catch (error) {
    // local fallback only
  }

  try {
    window.innotrackFirebase?.saveSurveyResponses?.(surveyResponses);
  } catch (error) {
    // ignore remote sync failures and keep local persistence
  }
}

function persistProjectsLocally() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (error) {
    return;
  }
}

function persistMilestonesLocally() {
  try {
    window.localStorage.setItem(MILESTONE_STORAGE_KEY, JSON.stringify(milestoneItems));
  } catch (error) {
    return;
  }
}

function persistQualificationsLocally() {
  try {
    window.localStorage.setItem(QUALIFICATION_STORAGE_KEY, JSON.stringify(qualifications));
  } catch (error) {
    return;
  }
}

function persistCertificationExamsLocally() {
  try {
    window.localStorage.setItem(CERTIFICATION_EXAM_STORAGE_KEY, JSON.stringify(certificationExams));
  } catch (error) {
    return;
  }
}

function persistCertificationExamApplicationsLocally() {
  try {
    window.localStorage.setItem(CERTIFICATION_EXAM_APPLICATION_STORAGE_KEY, JSON.stringify(certificationExamApplications));
  } catch (error) {
    return;
  }
}

function persistEducationSchedulesLocally() {
  try {
    window.localStorage.setItem(EDUCATION_SCHEDULE_STORAGE_KEY, JSON.stringify(educationSchedules));
  } catch (error) {
    return;
  }
}

function persistEducationEnrollmentsLocally() {
  try {
    window.localStorage.setItem(EDUCATION_ENROLLMENT_STORAGE_KEY, JSON.stringify(educationEnrollments));
  } catch (error) {
    return;
  }
}

function persistEducationCostDetailsLocally() {
  try {
    window.localStorage.setItem(EDUCATION_COST_DETAIL_STORAGE_KEY, JSON.stringify(educationCostDetailsBySchedule));
  } catch (error) {
    return;
  }
}

function persistSurveyFormsLocally() {
  try {
    window.localStorage.setItem(SURVEY_FORM_STORAGE_KEY, JSON.stringify(surveyForms));
  } catch (error) {
    return;
  }
}

function persistSurveyResponsesLocally() {
  try {
    window.localStorage.setItem(SURVEY_RESPONSE_STORAGE_KEY, JSON.stringify(surveyResponses));
  } catch (error) {
    return;
  }
}

function replaceProjectsFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  projects = sourceList.map((project, index) => normalizeProject(project, `IN-26-${String(index + 1).padStart(3, "0")}`));
  pruneSelectedTaskIds();
  state.selectedId = projects.find((project) => project.id === state.selectedId)?.id ?? projects[0]?.id ?? null;
  persistProjectsLocally();
  render();
}

function replaceMilestonesFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  milestoneItems = sourceList.map((milestone, index) => normalizeMilestone(milestone, `MS-${String(index + 1).padStart(3, "0")}`));
  state.selectedMilestoneId = getSortedMilestones(milestoneItems)[0]?.id ?? null;
  persistMilestonesLocally();
  render();
}

function replaceQualificationsFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  qualifications = sourceList.map((qualification, index) =>
    normalizeQualification(qualification, `QL-${String(index + 1).padStart(3, "0")}`));
  pruneSelectedQualificationIds();
  state.selectedQualificationId = qualifications.find((qualification) => qualification.id === state.selectedQualificationId)?.id
    ?? qualifications[0]?.id
    ?? null;
  persistQualificationsLocally();
  render();
}

function replaceCertificationExamsFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  certificationExams = sourceList.map((exam, index) =>
    normalizeCertificationExam(exam, `CEX-${String(index + 1).padStart(3, "0")}`));
  pruneSelectedCertificationExamIds();
  state.selectedCertificationExamId = certificationExams.find((exam) => exam.id === state.selectedCertificationExamId)?.id
    ?? certificationExams[0]?.id
    ?? null;
  persistCertificationExamsLocally();
  render();
}

function replaceCertificationExamApplicationsFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  certificationExamApplications = sourceList
    .map((item, index) => ({
      id: String(item?.id || `CEX-APP-${String(index + 1).padStart(3, "0")}`).trim(),
      examId: String(item?.examId || "").trim(),
      employeeId: String(item?.employeeId || "").trim(),
      company: String(item?.company || "").trim(),
      department: String(item?.department || "").trim(),
      name: String(item?.name || "").trim(),
      position: String(item?.position || "").trim(),
      email: String(item?.email || "").trim(),
      phone: String(item?.phone || "").trim(),
      certificateNo: String(item?.certificateNo || "").trim(),
      acquiredDate: isValidDateString(item?.acquiredDate) ? item.acquiredDate : "",
      completed: Boolean(item?.completed),
      qualificationId: String(item?.qualificationId || "").trim(),
      appliedAt: isValidDateString(item?.appliedAt) ? item.appliedAt : toIsoDate(REFERENCE_DATE),
    }))
    .filter((item) => item.examId);

  state.selectedCertificationApplicantIds = state.selectedCertificationApplicantIds
    .filter((id) => certificationExamApplications.some((item) => item.id === id));
  persistCertificationExamApplicationsLocally();
  render();
}

function replaceEducationSchedulesFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  educationSchedules = sourceList.map((schedule, index) =>
    normalizeEducationSchedule(schedule, `EDU-S-${String(index + 1).padStart(3, "0")}`));
  syncAllEducationScheduleCostSummaries();
  state.selectedEducationScheduleId = educationSchedules.find((schedule) => schedule.id === state.selectedEducationScheduleId)?.id
    ?? educationSchedules[0]?.id
    ?? null;
  state.selectedEducationAdminId = educationSchedules.find((schedule) => schedule.id === state.selectedEducationAdminId)?.id
    ?? educationSchedules[0]?.id
    ?? null;
  persistEducationSchedulesLocally();
  render();
}

function replaceEducationEnrollmentsFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  educationEnrollments = sourceList.map((enrollment, index) =>
    normalizeEducationEnrollment(enrollment, `EDU-ENR-${String(index + 1).padStart(3, "0")}`));
  pruneSelectedEducationEnrollmentIds();
  state.myLearningEvaluationEnrollmentId = educationEnrollments.some(
    (enrollment) => enrollment.id === state.myLearningEvaluationEnrollmentId,
  )
    ? state.myLearningEvaluationEnrollmentId
    : null;
  persistEducationEnrollmentsLocally();
  render();
}

function replaceEducationCostDetailsFromExternal(value = {}) {
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  educationCostDetailsBySchedule = Object.entries(source).reduce((accumulator, [scheduleId, items]) => {
    if (!Array.isArray(items)) {
      return accumulator;
    }

    accumulator[scheduleId] = items.map((item, index) =>
      normalizeEducationCostItem(item, `${scheduleId}-COST-${String(index + 1).padStart(3, "0")}`));
    return accumulator;
  }, {});
  syncAllEducationScheduleCostSummaries();
  persistEducationCostDetailsLocally();
  render();
}

function replaceSurveyFormsFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  surveyForms = sourceList
    .map((form, index) => normalizeSurveyForm(form, `SVF-${String(index + 1).padStart(3, "0")}`, index + 1))
    .sort((left, right) => left.order - right.order);
  state.selectedSurveyFormId = surveyForms.find((form) => form.id === state.selectedSurveyFormId)?.id
    ?? surveyForms[0]?.id
    ?? null;
  persistSurveyFormsLocally();
  render();
}

function replaceSurveyResponsesFromExternal(list = []) {
  const sourceList = Array.isArray(list) ? list : [];
  surveyResponses = sourceList
    .map((response, index) => normalizeSurveyResponse(response, `SVR-${String(index + 1).padStart(3, "0")}`))
    .sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
  persistSurveyResponsesLocally();
  render();
}

function generateMilestoneId() {
  const nextIndex = milestoneItems.reduce((max, milestone) => {
    const numeric = Number(String(milestone.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;

  return `MS-${String(nextIndex).padStart(3, "0")}`;
}

function generateProjectId() {
  const nextIndex = projects.reduce((max, project) => {
    const numeric = Number(String(project.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;

  return `IN-26-${String(nextIndex).padStart(3, "0")}`;
}

function generateQualificationId() {
  const nextIndex = qualifications.reduce((max, qualification) => {
    const numeric = Number(String(qualification.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;

  return `QL-${String(nextIndex).padStart(3, "0")}`;
}

function generateCertificationExamId() {
  const nextIndex = certificationExams.reduce((max, exam) => {
    const numeric = Number(String(exam.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;

  return `CEX-${String(nextIndex).padStart(3, "0")}`;
}

function generateEducationScheduleId() {
  const nextIndex = educationSchedules.reduce((max, schedule) => {
    const numeric = Number(String(schedule.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;

  return `EDU-S-${String(nextIndex).padStart(3, "0")}`;
}

function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId) || null;
}

function getQualificationById(qualificationId) {
  return qualifications.find((qualification) => qualification.id === qualificationId) || null;
}

function getCertificationExamById(examId) {
  return certificationExams.find((exam) => exam.id === examId) || null;
}

function getSelectedQualificationIds() {
  return Array.isArray(state.selectedQualificationIds) ? state.selectedQualificationIds : [];
}

function getSelectedTaskIds() {
  return Array.isArray(state.selectedTaskIds) ? state.selectedTaskIds : [];
}

function getSelectedEducationAdminIds() {
  return Array.isArray(state.selectedEducationAdminIds) ? state.selectedEducationAdminIds : [];
}

function getSelectedCertificationExamIds() {
  return Array.isArray(state.selectedCertificationExamIds) ? state.selectedCertificationExamIds : [];
}

function pruneSelectedQualificationIds() {
  const validIdSet = new Set(qualifications.map((qualification) => qualification.id));
  state.selectedQualificationIds = getSelectedQualificationIds()
    .filter((qualificationId) => validIdSet.has(qualificationId));
}

function pruneSelectedTaskIds() {
  const validIdSet = new Set(projects.map((project) => project.id));
  state.selectedTaskIds = getSelectedTaskIds()
    .filter((projectId) => validIdSet.has(projectId));
}

function pruneSelectedCertificationExamIds() {
  const validIdSet = new Set(certificationExams.map((exam) => exam.id));
  state.selectedCertificationExamIds = getSelectedCertificationExamIds()
    .filter((examId) => validIdSet.has(examId));
}

function pruneSelectedEducationAdminIds() {
  const validIdSet = new Set(educationSchedules.map((schedule) => schedule.id));
  state.selectedEducationAdminIds = getSelectedEducationAdminIds()
    .filter((scheduleId) => validIdSet.has(scheduleId));
}

function hasCheckedQualification(qualificationId) {
  return getSelectedQualificationIds().includes(qualificationId);
}

function hasCheckedTask(projectId) {
  return getSelectedTaskIds().includes(projectId);
}

function hasCheckedCertificationExam(examId) {
  return getSelectedCertificationExamIds().includes(examId);
}

function hasCheckedEducationAdmin(scheduleId) {
  return getSelectedEducationAdminIds().includes(scheduleId);
}

function getSelectedEducationEnrollmentIds() {
  return Array.isArray(state.selectedEducationEnrollmentIds) ? state.selectedEducationEnrollmentIds : [];
}

function toggleSelectedEducationEnrollment(enrollmentId) {
  const currentIds = getSelectedEducationEnrollmentIds();
  if (currentIds.includes(enrollmentId)) {
    state.selectedEducationEnrollmentIds = currentIds.filter((id) => id !== enrollmentId);
    return;
  }
  state.selectedEducationEnrollmentIds = [...currentIds, enrollmentId];
}

function toggleCheckedQualification(qualificationId) {
  const currentIds = getSelectedQualificationIds();

  if (currentIds.includes(qualificationId)) {
    state.selectedQualificationIds = currentIds.filter((id) => id !== qualificationId);
    return;
  }

  state.selectedQualificationIds = [...currentIds, qualificationId];
}

function toggleCheckedTask(projectId) {
  const currentIds = getSelectedTaskIds();

  if (currentIds.includes(projectId)) {
    state.selectedTaskIds = currentIds.filter((id) => id !== projectId);
    return;
  }

  state.selectedTaskIds = [...currentIds, projectId];
}

function toggleCheckedCertificationExam(examId) {
  const currentIds = getSelectedCertificationExamIds();

  if (currentIds.includes(examId)) {
    state.selectedCertificationExamIds = currentIds.filter((id) => id !== examId);
    return;
  }

  state.selectedCertificationExamIds = [...currentIds, examId];
}

function toggleCheckedEducationAdmin(scheduleId) {
  const currentIds = getSelectedEducationAdminIds();

  if (currentIds.includes(scheduleId)) {
    state.selectedEducationAdminIds = currentIds.filter((id) => id !== scheduleId);
    return;
  }

  state.selectedEducationAdminIds = [...currentIds, scheduleId];
}

function getMilestoneById(milestoneId) {
  return milestoneItems.find((milestone) => milestone.id === milestoneId) || null;
}

function getSortedMilestones(list = milestoneItems) {
  return [...list].sort((left, right) => left.date.localeCompare(right.date));
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatDateWithYear(dateString) {
  if (!isValidDateString(dateString)) {
    return "-";
  }

  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatSlashDate(dateString) {
  if (!isValidDateString(dateString)) {
    return "-";
  }

  const date = parseDate(dateString);
  return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
}

function formatWon(value) {
  return `${Math.max(0, Math.round(parseNumber(value, 0))).toLocaleString("ko-KR")}원`;
}

function getEducationCourseById(courseId) {
  return educationCoursesMaster.find((course) => course.id === courseId) || null;
}

function getEducationScheduleById(scheduleId) {
  return educationSchedules.find((schedule) => schedule.id === scheduleId) || null;
}

function getEducationEnrollmentCount(scheduleId) {
  if (!scheduleId) {
    return 0;
  }
  return educationEnrollments.filter((enrollment) => enrollment.scheduleId === scheduleId).length;
}

function getEducationStatusLabel(status) {
  return educationStatusLabels[status] || educationStatusLabels.planned;
}

function getEducationRecruitStatusKey(schedule, referenceDate = REFERENCE_DATE) {
  const referenceToken = referenceDate instanceof Date
    ? toIsoDate(referenceDate)
    : (isValidDateString(referenceDate) ? referenceDate : toIsoDate(REFERENCE_DATE));
  const startDate = isValidDateString(schedule?.applicationStartDate)
    ? schedule.applicationStartDate
    : (isValidDateString(schedule?.startDate) ? schedule.startDate : referenceToken);
  const endSource = isValidDateString(schedule?.applicationEndDate) ? schedule.applicationEndDate : startDate;
  const endDate = parseDate(endSource) >= parseDate(startDate) ? endSource : startDate;
  const capacity = Math.max(0, Math.round(parseNumber(schedule?.capacity, 0)));
  const enrollmentCount = getEducationEnrollmentCount(schedule?.id);
  const isCapacityClosed = capacity > 0 && enrollmentCount >= capacity;

  if (isCapacityClosed) {
    return "closed";
  }
  if (referenceToken < startDate) {
    return "planned";
  }
  if (referenceToken > endDate) {
    return "closed";
  }
  return "open";
}

function getEducationRecruitStatusLabel(schedule, referenceDate = REFERENCE_DATE) {
  return educationRecruitStatusLabels[getEducationRecruitStatusKey(schedule, referenceDate)] || educationRecruitStatusLabels.planned;
}

function getEducationCalendarChipStatus(schedule, referenceDate = REFERENCE_DATE) {
  const referenceToken = referenceDate instanceof Date
    ? toIsoDate(referenceDate)
    : (isValidDateString(referenceDate) ? referenceDate : toIsoDate(REFERENCE_DATE));
  const endDate = isValidDateString(schedule?.endDate)
    ? schedule.endDate
    : (isValidDateString(schedule?.startDate) ? schedule.startDate : referenceToken);

  if (referenceToken > endDate) {
    return { label: "강의종료", className: "is-ended", icon: "✅" };
  }

  const recruitStatus = getEducationRecruitStatusKey(schedule, referenceToken);
  if (recruitStatus === "planned") {
    return { label: "접수예정", className: "is-planned", icon: "🕒" };
  }
  if (recruitStatus === "open") {
    return { label: "접수중", className: "is-open", icon: "🟢" };
  }
  return { label: "접수완료", className: "is-done", icon: "🔒" };
}

function getCertificationExamCalendarChipStatus(exam, referenceDate = REFERENCE_DATE) {
  const referenceToken = referenceDate instanceof Date
    ? toIsoDate(referenceDate)
    : (isValidDateString(referenceDate) ? referenceDate : toIsoDate(REFERENCE_DATE));
  const examDateToken = isValidDateString(String(exam?.examDateTime || "").slice(0, 10))
    ? String(exam.examDateTime).slice(0, 10)
    : referenceToken;
  if (referenceToken > examDateToken) {
    return { label: "시험종료", className: "is-ended", icon: "✅" };
  }

  const startDate = isValidDateString(exam?.applicationStartDate) ? exam.applicationStartDate : examDateToken;
  const endDateSource = isValidDateString(exam?.applicationEndDate) ? exam.applicationEndDate : startDate;
  const endDate = parseDate(endDateSource) >= parseDate(startDate) ? endDateSource : startDate;
  if (referenceToken < startDate) {
    return { label: "접수예정", className: "is-planned", icon: "🕒" };
  }
  if (referenceToken > endDate) {
    return { label: "접수완료", className: "is-done", icon: "🔒" };
  }
  return { label: "접수중", className: "is-open", icon: "🟢" };
}

function getCertificationExamsOnDate(dateToken, sourceExams = certificationExams) {
  if (!isValidDateString(dateToken)) {
    return [];
  }
  return sourceExams.filter((exam) => String(exam.examDateTime || "").slice(0, 10) === dateToken);
}

function getCertificationExamApplicationCount(examId) {
  if (!examId) {
    return 0;
  }
  return certificationExamApplications.filter((item) => item.examId === examId).length;
}

function getCertificationExamPassedCount(examId) {
  if (!examId) {
    return 0;
  }
  return certificationExamApplications.filter((item) => item.examId === examId && item.completed).length;
}

function getCertificationExamApplicationById(applicationId) {
  return certificationExamApplications.find((item) => item.id === applicationId) || null;
}

function getSelectedCertificationApplicantIds() {
  return Array.isArray(state.selectedCertificationApplicantIds) ? state.selectedCertificationApplicantIds : [];
}

function hasCheckedCertificationApplicant(applicationId) {
  return getSelectedCertificationApplicantIds().includes(applicationId);
}

function toggleCheckedCertificationApplicant(applicationId) {
  const currentIds = getSelectedCertificationApplicantIds();
  if (currentIds.includes(applicationId)) {
    state.selectedCertificationApplicantIds = currentIds.filter((id) => id !== applicationId);
    return;
  }
  state.selectedCertificationApplicantIds = [...currentIds, applicationId];
}

function pruneSelectedCertificationApplicantIds() {
  const validIdSet = new Set(certificationExamApplications.map((item) => item.id));
  state.selectedCertificationApplicantIds = getSelectedCertificationApplicantIds()
    .filter((applicationId) => validIdSet.has(applicationId));
}

function updateCertificationExamApplicationField(applicationId, field, value) {
  const index = certificationExamApplications.findIndex((item) => item.id === applicationId);
  if (index < 0) {
    return;
  }

  if (field === "certificateNo") {
    certificationExamApplications[index].certificateNo = String(value || "").trim();
  } else if (field === "acquiredDate") {
    certificationExamApplications[index].acquiredDate = isValidDateString(value) ? value : "";
  }
  saveCertificationExamApplications();
}

function deleteCertificationExamApplication(applicationId) {
  const target = getCertificationExamApplicationById(applicationId);
  if (!target) {
    return;
  }
  const shouldDelete = window.confirm("선택한 시험 접수 내역을 삭제할까요?");
  if (!shouldDelete) {
    return;
  }
  certificationExamApplications = certificationExamApplications.filter((item) => item.id !== applicationId);
  pruneSelectedCertificationApplicantIds();
  saveCertificationExamApplications();
  render();
}

function deleteCertificationExamApplications(applicationIds = []) {
  const targetIds = Array.from(new Set(
    applicationIds.filter((applicationId) => getCertificationExamApplicationById(applicationId)),
  ));
  if (!targetIds.length) {
    return;
  }
  const shouldDelete = window.confirm(`선택한 접수 내역 ${targetIds.length}건을 삭제할까요?`);
  if (!shouldDelete) {
    return;
  }
  certificationExamApplications = certificationExamApplications.filter((item) => !targetIds.includes(item.id));
  pruneSelectedCertificationApplicantIds();
  saveCertificationExamApplications();
  render();
}

function completeCertificationExamApplication(applicationId, options = {}) {
  const { silent = false } = options;
  const application = getCertificationExamApplicationById(applicationId);
  if (!application) {
    return false;
  }
  if (application.completed) {
    if (!silent) {
      window.alert("이미 합격 처리된 내역입니다.");
    }
    return false;
  }
  if (!application.certificateNo) {
    if (!silent) {
      window.alert("자격증번호를 입력해 주세요.");
    }
    return false;
  }
  if (!isValidDateString(application.acquiredDate)) {
    if (!silent) {
      window.alert("취득일자를 입력해 주세요.");
    }
    return false;
  }

  const exam = getCertificationExamById(application.examId);
  if (!exam) {
    if (!silent) {
      window.alert("연결된 시험 정보를 찾을 수 없습니다.");
    }
    return false;
  }

  const normalizedQualification = normalizeQualification({
    qualificationType: exam.examType,
    grade: exam.examGrade,
    certificateNo: application.certificateNo,
    company: application.company,
    department: application.department,
    name: application.name,
    acquiredDate: application.acquiredDate,
  });
  qualifications.unshift(normalizedQualification);
  saveQualifications();

  const index = certificationExamApplications.findIndex((item) => item.id === applicationId);
  if (index >= 0) {
    certificationExamApplications[index].completed = true;
    certificationExamApplications[index].qualificationId = normalizedQualification.id;
  }
  saveCertificationExamApplications();
  if (!silent) {
    window.alert("합격 처리되어 자격현황에 반영되었습니다.");
    render();
  }
  return true;
}

function cancelCertificationExamCompletion(applicationId, options = {}) {
  const { silent = false } = options;
  const application = getCertificationExamApplicationById(applicationId);
  if (!application) {
    return false;
  }
  if (!application.completed) {
    if (!silent) {
      window.alert("아직 합격 처리되지 않은 내역입니다.");
    }
    return false;
  }

  const qualificationId = String(application.qualificationId || "").trim();
  const exam = getCertificationExamById(application.examId);
  let removed = false;

  if (qualificationId) {
    const beforeCount = qualifications.length;
    qualifications = qualifications.filter((qualification) => qualification.id !== qualificationId);
    removed = qualifications.length !== beforeCount;
  }

  // Backward compatibility: previously completed records may not have qualificationId.
  // In that case, remove by matching key fields generated during "합격" 처리.
  if (!removed) {
    const beforeCount = qualifications.length;
    const examType = String(exam?.examType || "").trim();
    const examGrade = String(exam?.examGrade || "").trim();
    const certificateNo = String(application.certificateNo || "").trim();
    const acquiredDate = String(application.acquiredDate || "").trim();
    const name = String(application.name || "").trim();
    const company = String(application.company || "").trim();
    const department = String(application.department || "").trim();

    qualifications = qualifications.filter((qualification) => {
      const isCandidate =
        String(qualification.qualificationType || "").trim() === examType
        && String(qualification.grade || "").trim() === examGrade
        && String(qualification.certificateNo || "").trim() === certificateNo
        && String(qualification.acquiredDate || "").trim() === acquiredDate
        && String(qualification.name || "").trim() === name
        && String(qualification.company || "").trim() === company
        && String(qualification.department || "").trim() === department;
      return !isCandidate;
    });
    removed = qualifications.length !== beforeCount;
  }

  if (removed) {
    saveQualifications();
  }

  const index = certificationExamApplications.findIndex((item) => item.id === applicationId);
  if (index >= 0) {
    certificationExamApplications[index].completed = false;
    certificationExamApplications[index].qualificationId = "";
  }
  saveCertificationExamApplications();
  if (!silent) {
    window.alert("합격 처리가 취소되어 자격현황에서 제거되었습니다.");
    render();
  }
  return true;
}

function completeCertificationExamApplications(applicationIds = []) {
  const targetIds = Array.from(new Set(
    applicationIds.filter((applicationId) => getCertificationExamApplicationById(applicationId)),
  ));
  if (!targetIds.length) {
    return;
  }
  let successCount = 0;
  targetIds.forEach((applicationId) => {
    if (completeCertificationExamApplication(applicationId, { silent: true })) {
      successCount += 1;
    }
  });
  if (successCount === 0) {
    window.alert("합격 처리할 수 있는 내역이 없습니다. 자격증번호/취득일자를 확인해 주세요.");
    return;
  }
  pruneSelectedCertificationApplicantIds();
  window.alert(`${successCount}건이 합격 처리되어 자격현황에 반영되었습니다.`);
  render();
}

function cancelCertificationExamCompletions(applicationIds = []) {
  const targetIds = Array.from(new Set(
    applicationIds.filter((applicationId) => getCertificationExamApplicationById(applicationId)),
  ));
  if (!targetIds.length) {
    return;
  }
  let successCount = 0;
  targetIds.forEach((applicationId) => {
    if (cancelCertificationExamCompletion(applicationId, { silent: true })) {
      successCount += 1;
    }
  });
  if (successCount === 0) {
    window.alert("합격취소할 수 있는 내역이 없습니다.");
    return;
  }
  pruneSelectedCertificationApplicantIds();
  window.alert(`${successCount}건의 합격 처리가 취소되어 자격현황에서 제거되었습니다.`);
  render();
}

function getEducationAdminListStatusInfo(status) {
  if (status === "completed") {
    return { label: "완료", classKey: "completed" };
  }

  const safeStatus = Object.prototype.hasOwnProperty.call(educationStatusLabels, status)
    ? status
    : "planned";
  return {
    label: educationStatusLabels[safeStatus],
    classKey: safeStatus,
  };
}

function getEducationDateRangeLabel(startDate, endDate) {
  if (!isValidDateString(startDate)) {
    return "-";
  }

  if (!isValidDateString(endDate) || startDate === endDate) {
    return formatDateWithYear(startDate);
  }

  return `${formatDateWithYear(startDate)} ~ ${formatDateWithYear(endDate)}`;
}

function getEducationAdminDefaultSeason(dateString) {
  if (!isValidDateString(dateString)) {
    return "-";
  }

  const month = Number(String(dateString).slice(5, 7));
  return Number.isFinite(month) && month > 0 ? `${month}월` : "-";
}

function getEducationAdminDefaultTargetDate(startDate, endDate) {
  if (!isValidDateString(startDate)) {
    return "-";
  }

  const startLabel = formatDate(startDate).replace(/\.$/, "");
  if (!isValidDateString(endDate) || startDate === endDate) {
    return startLabel;
  }

  const endLabel = formatDate(endDate).replace(/\.$/, "");
  return `${startLabel} ~ ${endLabel}`;
}

function normalizeEducationAdminMajorCategory(value) {
  const token = String(value || "").trim();
  return educationAdminMajorCategoryOptions.includes(token) ? token : "기타";
}

function getEducationAdminDefaultCompletionState(status) {
  if (status === "settled" || status === "completed_needs_settlement") {
    return "완료";
  }
  if (status === "in_progress") {
    return "진행중";
  }
  return "미진행";
}

function normalizeEducationAdminCompletionState(value, status = "planned") {
  const token = String(value || "").trim();
  if (!token) {
    return getEducationAdminDefaultCompletionState(status);
  }

  const completionStateAliasMap = {
    예정: "미진행",
    미진행: "미진행",
    진행중: "진행중",
    완료: "완료",
    취소: "취소",
    cancelled: "취소",
    canceled: "취소",
  };
  const normalized = completionStateAliasMap[token] || token;
  return educationAdminCompletionStateOptions.includes(normalized)
    ? normalized
    : getEducationAdminDefaultCompletionState(status);
}

function normalizeEducationAdminOperatorDept(value) {
  const token = String(value || "").trim();
  if (!token) {
    return "경영혁신실";
  }
  if (educationAdminOperatorDeptOptions.includes(token)) {
    return token;
  }

  const operatorAliasMap = {
    혁신실: "경영혁신실",
    경영혁신: "경영혁신실",
    모빌리티: "에이텍모빌리티",
    시스템: "에이텍시스템",
    씨앤: "에이텍씨앤",
    컴퓨터: "에이텍컴퓨터",
    오토: "에이텍오토",
    각사: "에이텍",
  };
  const mapped = operatorAliasMap[token];
  return educationAdminOperatorDeptOptions.includes(mapped) ? mapped : "경영혁신실";
}

function getEducationAdminCompletionStateLabel(schedule) {
  return normalizeEducationAdminCompletionState(schedule.completionState, schedule.status);
}

function getEducationAdminScheduleYear(schedule) {
  const yearToken = String(schedule.year || "").trim();
  if (/^\d{4}$/.test(yearToken)) {
    return yearToken;
  }
  return String(schedule.startDate || "").slice(0, 4);
}

function getEducationAdminDivisionValue(schedule, course = null) {
  return String(schedule.majorCategory || course?.majorCategory || "").trim() || "기타";
}

function getEducationAdminDisplayCourseName(schedule, course = null) {
  return String(schedule.smallCategory || course?.name || "").trim() || "미등록 과정";
}

function getEducationAdminRefundRate(schedule) {
  const total = Math.max(0, parseNumber(schedule.totalCost, 0));
  if (!total) {
    return 0;
  }
  return Math.round((Math.max(0, parseNumber(schedule.refundAmount, 0)) / total) * 100);
}

function resolveEducationCourseIdByTitle(title, fallbackCourseId = "") {
  const normalizedTitle = String(title || "").trim();
  if (!normalizedTitle) {
    return fallbackCourseId || educationCoursesMaster[0]?.id || "";
  }

  const matched = educationCoursesMaster.find((course) =>
    String(course.name || "").trim().toLowerCase() === normalizedTitle.toLowerCase());
  return matched?.id || fallbackCourseId || educationCoursesMaster[0]?.id || "";
}

function getEducationCurrentIdentity() {
  const profile = window.innotrackFirebase?.getCurrentUserProfile?.() || null;

  if (!profile) {
    return {
      role: "demo",
      employeeId: "demo-user",
      name: "로컬 데모 사용자",
      company: companyOptions[0],
      department: "경영혁신실",
      email: "demo@innotrack.local",
      position: "수석",
      phone: "",
    };
  }

  return {
    role: String(profile.role || "").toLowerCase(),
    employeeId: String(profile.uid || profile.email || "unknown-user"),
    name: String(profile.name || profile.email?.split("@")[0] || "사용자"),
    company: String(profile.company || companyOptions[0]),
    department: String(profile.department || ""),
    email: String(profile.email || ""),
    position: String(profile.position || profile.jobTitle || ""),
    phone: String(profile.phone || profile.mobile || ""),
  };
}

function normalizeAppRole(value) {
  const role = String(value || "").trim().toLowerCase();
  if (role === "admin") {
    return "super_admin";
  }
  return role;
}

function hasEducationApplyAccess() {
  const identity = getEducationCurrentIdentity();
  const role = normalizeAppRole(identity.role);
  return role === "user" || role === "innovation_manager" || role === "education_manager" || role === "super_admin";
}

function hasEducationAdminAccess() {
  const identity = getEducationCurrentIdentity();
  const role = normalizeAppRole(identity.role);
  return role === "education_manager" || role === "super_admin";
}

function hasSystemAdminAccess() {
  const identity = getEducationCurrentIdentity();
  const role = normalizeAppRole(identity.role);
  return role === "super_admin";
}

function getEducationMonthCursorDate() {
  const [yearToken, monthToken] = String(state.educationMonth || "").split("-");
  const year = Math.max(2000, Math.round(parseNumber(yearToken, REFERENCE_DATE.getFullYear())));
  const month = clampNumber(Math.round(parseNumber(monthToken, REFERENCE_DATE.getMonth() + 1)), 1, 12);
  return new Date(year, month - 1, 1);
}

function getEducationMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function shiftEducationMonth(offset) {
  const cursor = getEducationMonthCursorDate();
  cursor.setMonth(cursor.getMonth() + offset);
  state.educationMonth = getEducationMonthKey(cursor);
  state.selectedEducationDate = toIsoDate(cursor);
  state.selectedEducationScheduleId = null;
}

function getEducationMonthRange() {
  const cursor = getEducationMonthCursorDate();
  const monthStart = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const monthEnd = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);

  return {
    start: toIsoDate(monthStart),
    end: toIsoDate(monthEnd),
    cursor,
  };
}

function getEducationSchedulesOnDate(dateString, schedules = educationSchedules) {
  return schedules
    .filter((schedule) => schedule.startDate <= dateString && schedule.endDate >= dateString)
    .sort((left, right) => left.startDate.localeCompare(right.startDate) || left.id.localeCompare(right.id));
}

function getEducationFilterTokens(schedule) {
  const course = getEducationCourseById(schedule.courseId);
  return {
    major: String(schedule.majorCategory || course?.majorCategory || "").trim(),
    middle: String(schedule.middleCategory || course?.subCategory || "").trim(),
    small: String(schedule.smallCategory || course?.name || "").trim(),
  };
}

function getEducationFilterOptions() {
  const tokens = educationSchedules.map((schedule) => getEducationFilterTokens(schedule));
  const levels = Array.from(new Set(tokens.map((item) => item.major).filter(Boolean))).sort((a, b) => a.localeCompare(b, "ko-KR"));
  const middleSource = tokens.filter((item) =>
    state.educationLevel === "all" || item.major === state.educationLevel);
  const jobs = Array.from(new Set(middleSource.map((item) => item.middle).filter(Boolean))).sort((a, b) => a.localeCompare(b, "ko-KR"));
  const smallSource = middleSource.filter((item) =>
    state.educationJob === "all" || item.middle === state.educationJob);
  const tracks = Array.from(new Set(smallSource.map((item) => item.small).filter(Boolean))).sort((a, b) => a.localeCompare(b, "ko-KR"));

  return { levels, jobs, tracks };
}

function buildEducationFilterOptions() {
  const { levels, jobs, tracks } = getEducationFilterOptions();

  if (state.educationLevel !== "all" && !levels.includes(state.educationLevel)) {
    state.educationLevel = "all";
  }
  if (state.educationJob !== "all" && !jobs.includes(state.educationJob)) {
    state.educationJob = "all";
  }
  if (state.educationTrack !== "all" && !tracks.includes(state.educationTrack)) {
    state.educationTrack = "all";
  }

  if (elements.educationLevelFilter) {
    elements.educationLevelFilter.innerHTML = [
      '<option value="all">전체 대분류</option>',
      ...levels.map((level) => `<option value="${escapeHtml(level)}">${escapeHtml(level)}</option>`),
    ].join("");
    elements.educationLevelFilter.value = state.educationLevel;
  }

  if (elements.educationJobFilter) {
    elements.educationJobFilter.innerHTML = [
      '<option value="all">전체 중분류</option>',
      ...jobs.map((job) => `<option value="${escapeHtml(job)}">${escapeHtml(job)}</option>`),
    ].join("");
    elements.educationJobFilter.value = state.educationJob;
  }

  if (elements.educationTrackFilter) {
    elements.educationTrackFilter.innerHTML = [
      '<option value="all">전체 소분류</option>',
      ...tracks.map((track) => `<option value="${escapeHtml(track)}">${escapeHtml(track)}</option>`),
    ].join("");
    elements.educationTrackFilter.value = state.educationTrack;
  }
}

function getFilteredEducationSchedules() {
  return educationSchedules.filter((schedule) => {
    const tokens = getEducationFilterTokens(schedule);
    const levelToken = tokens.major;
    const jobToken = tokens.middle;
    const trackToken = tokens.small;
    const matchesLevel = state.educationLevel === "all" || levelToken === state.educationLevel;
    const matchesJob = state.educationJob === "all" || jobToken === state.educationJob;
    const matchesTrack = state.educationTrack === "all" || trackToken === state.educationTrack;

    return matchesLevel && matchesJob && matchesTrack;
  });
}

function getEducationSchedulesInCurrentMonth(filteredSchedules = getFilteredEducationSchedules()) {
  const { start, end } = getEducationMonthRange();

  return filteredSchedules
    .filter((schedule) => schedule.startDate <= end && schedule.endDate >= start)
    .sort((left, right) => left.startDate.localeCompare(right.startDate) || left.id.localeCompare(right.id));
}

function hasEducationCostDetails(scheduleId) {
  return Object.prototype.hasOwnProperty.call(educationCostDetailsBySchedule, scheduleId);
}

function getEducationCostItems(scheduleId) {
  const items = educationCostDetailsBySchedule[scheduleId];
  return Array.isArray(items) ? items : [];
}

function ensureEducationCostItems(scheduleId) {
  if (!hasEducationCostDetails(scheduleId)) {
    educationCostDetailsBySchedule[scheduleId] = [];
  }
  return getEducationCostItems(scheduleId);
}

function formatEducationCostFormulaNumber(value) {
  return Math.max(0, Math.round(parseNumber(value, 0))).toLocaleString("ko-KR");
}

function getEducationRefundRuleComponents(schedule) {
  if (!schedule) {
    return {
      hours: 0,
      mealCost: 0,
      lodgingCost: 0,
      attendees: 0,
      refundPerPerson: 0,
      refundAmount: 0,
    };
  }

  const hoursToken = String(schedule.hoursText || "").trim();
  const hoursMatch = hoursToken.match(/(\d+)\s*시간/);
  const hours = hoursMatch
    ? clampNumber(parseNumber(hoursMatch[1], 0), 1, 100)
    : 0;
  const mealCost = hours >= 5 ? 3300 : 0;
  const daysInfo = parseEducationAdminDaysInfo(schedule.daysText);
  const lodgingCost = daysInfo.overnight ? 14000 : 0;
  const enrollmentCount = getEducationEnrollmentCount(schedule.id);
  const attendees = enrollmentCount > 0
    ? enrollmentCount
    : Math.max(0, Math.round(parseNumber(schedule.attendees, 0)));
  const refundPerPerson = (6000 * hours) + mealCost + lodgingCost;

  return {
    hours,
    mealCost,
    lodgingCost,
    attendees,
    refundPerPerson,
    refundAmount: Math.max(0, Math.round(refundPerPerson * attendees)),
  };
}

function getEducationRefundByRule(schedule) {
  return getEducationRefundRuleComponents(schedule).refundAmount;
}

function getEducationCostSummary(schedule, items = []) {
  const totalCost = items.reduce((sum, item) => sum + toRoundedPositiveInteger(item.estimatedCost, 0), 0);
  const refundAmount = getEducationRefundByRule(schedule);
  return {
    totalCost,
    refundAmount,
    netCost: Math.max(0, totalCost - refundAmount),
  };
}

function syncEducationScheduleCostSummary(scheduleId) {
  const schedule = getEducationScheduleById(scheduleId);
  if (!schedule) {
    return;
  }

  if (hasEducationCostDetails(scheduleId)) {
    const summary = getEducationCostSummary(schedule, getEducationCostItems(scheduleId));
    schedule.totalCost = summary.totalCost;
  }
  schedule.refundAmount = getEducationRefundByRule(schedule);
}

function syncAllEducationScheduleCostSummaries() {
  educationSchedules.forEach((schedule) => {
    syncEducationScheduleCostSummary(schedule.id);
  });
}

function getMyLearningEnrollments() {
  const identity = getEducationCurrentIdentity();

  return educationEnrollments
    .filter((enrollment) => enrollment.employeeId === identity.employeeId
      || (enrollment.name === identity.name && enrollment.company === identity.company))
    .sort((left, right) => right.appliedAt.localeCompare(left.appliedAt));
}

function getEducationNetCost(schedule) {
  return Math.max(0, parseNumber(schedule.totalCost, 0) - parseNumber(schedule.refundAmount, 0));
}

function getEducationCostPerPerson(schedule) {
  const enrollmentCount = getEducationEnrollmentCount(schedule.id);
  const attendees = enrollmentCount > 0
    ? enrollmentCount
    : Math.max(0, Math.round(parseNumber(schedule.attendees, 0)));
  if (!attendees) {
    return 0;
  }

  return Math.round(getEducationNetCost(schedule) / attendees);
}

function getEducationLearningStatus(enrollment, schedule) {
  if (enrollment.completed) {
    return { key: "completed", label: "수료" };
  }

  if (schedule?.status === "in_progress") {
    return { key: "in_progress", label: "진행중" };
  }

  if (schedule?.status === "planned") {
    return { key: "planned", label: "신청완료" };
  }

  return { key: "applied", label: "신청완료" };
}

function generateEducationEnrollmentId() {
  const nextIndex = educationEnrollments.reduce((max, enrollment) => {
    const numeric = Number(String(enrollment.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;

  return `EDU-ENR-${String(nextIndex).padStart(3, "0")}`;
}

function applyEducationSchedule(scheduleId, applicationDraft = {}) {
  const schedule = getEducationScheduleById(scheduleId);
  if (!schedule) {
    return;
  }

  if (!hasEducationApplyAccess()) {
    window.alert("교육 신청은 승인된 사용자 계정에서만 가능합니다.");
    return;
  }

  const identity = getEducationCurrentIdentity();
  const recruitStatusKey = getEducationRecruitStatusKey(schedule);
  if (recruitStatusKey !== "open") {
    window.alert("모집이 마감되었거나 신청 가능 기간이 아닙니다.");
    return;
  }
  const alreadyApplied = educationEnrollments.some((enrollment) =>
    enrollment.scheduleId === scheduleId && enrollment.employeeId === identity.employeeId
  );

  if (alreadyApplied) {
    window.alert("이미 신청한 과정입니다.");
    return;
  }

  educationEnrollments.unshift(normalizeEducationEnrollment({
    id: generateEducationEnrollmentId(),
    scheduleId,
    employeeId: identity.employeeId,
    name: identity.name,
    company: identity.company,
    department: identity.department,
    position: String(applicationDraft.position || identity.position || "").trim(),
    email: String(applicationDraft.email || identity.email || "").trim(),
    phone: String(applicationDraft.phone || identity.phone || "").trim(),
    notebookRequired: String(applicationDraft.notebookRequired || "").trim(),
    residentRegistrationNo: String(applicationDraft.residentRegistrationNo || "").trim(),
    appliedAt: toIsoDate(REFERENCE_DATE),
    completed: false,
    satisfaction: null,
    certificateNo: "",
  }));
  saveEducationEnrollments();
  window.alert("교육 신청이 완료되었습니다.");
  render();
}

function generateCertificationExamApplicationId() {
  const nextIndex = certificationExamApplications.reduce((max, item) => {
    const numeric = Number(String(item.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;
  return `CEX-APP-${String(nextIndex).padStart(3, "0")}`;
}

function applyCertificationExam(examId, applicationDraft = {}) {
  const exam = getCertificationExamById(examId);
  if (!exam) {
    return;
  }
  if (!hasEducationApplyAccess()) {
    window.alert("시험 접수는 승인된 사용자 계정에서만 가능합니다.");
    return;
  }
  const identity = getEducationCurrentIdentity();
  const status = getCertificationExamCalendarChipStatus(exam);
  if (status.label !== "접수중") {
    window.alert("접수 가능 기간이 아닙니다.");
    return;
  }
  const alreadyApplied = certificationExamApplications.some((item) =>
    item.examId === examId && item.employeeId === identity.employeeId
  );
  if (alreadyApplied) {
    window.alert("이미 접수한 시험입니다.");
    return;
  }

  certificationExamApplications.unshift({
    id: generateCertificationExamApplicationId(),
    examId,
    employeeId: identity.employeeId,
    company: identity.company,
    department: identity.department,
    name: identity.name,
    position: String(applicationDraft.position || identity.position || "").trim(),
    email: String(applicationDraft.email || identity.email || "").trim(),
    phone: String(applicationDraft.phone || identity.phone || "").trim(),
    certificateNo: "",
    acquiredDate: "",
    completed: false,
    qualificationId: "",
    appliedAt: toIsoDate(REFERENCE_DATE),
  });
  saveCertificationExamApplications();
  window.alert("시험 접수가 완료되었습니다.");
  render();
}

function markEducationSettlementDone(scheduleId) {
  const index = educationSchedules.findIndex((schedule) => schedule.id === scheduleId);
  if (index < 0) {
    return;
  }

  educationSchedules[index] = {
    ...educationSchedules[index],
    status: "settled",
    completionState: "완료",
  };
  saveEducationSchedules();
  render();
}

function getDaysUntil(dateString) {
  const target = new Date(`${dateString}T00:00:00`);
  const diff = target.getTime() - REFERENCE_DATE.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function aggregateByCompany(list) {
  const map = new Map();

  list.forEach((project) => {
    const entry = map.get(project.company) || {
      company: project.company,
      progressTotal: 0,
      count: 0,
      delayedCount: 0,
    };

    entry.progressTotal += project.progress;
    entry.count += 1;
    if (project.scheduleStatus === "delayed") {
      entry.delayedCount += 1;
    }

    map.set(project.company, entry);
  });

  return Array.from(map.values())
    .map((entry) => ({
      company: entry.company,
      progress: Math.round(entry.progressTotal / entry.count),
      count: entry.count,
      delayedCount: entry.delayedCount,
    }))
    .sort((left, right) => right.progress - left.progress);
}

function syncMetricCardCopy() {
  const dashboardYear = String(REFERENCE_DATE.getFullYear());
  const metricCopy = [
    {
      element: elements.metricTotal,
      title: `${dashboardYear}년 운영과제 수`,
      caption: `${dashboardYear}년 프로젝트 시작 기준 전체 과제`,
    },
    {
      element: elements.metricOnTrack,
      title: "정상과제 수",
      caption: "정상 진행 중인 과제",
    },
    {
      element: elements.metricDelay,
      title: "지연과제 수",
      caption: "만회 조치가 필요한 과제",
    },
    {
      element: elements.metricCompleted,
      title: "완료건수",
      caption: "완료 처리된 과제",
    },
    {
      element: elements.metricProgress,
      title: "평균진행률",
      caption: "전체 과제 평균 진행률",
    },
  ];

  metricCopy.forEach(({ element, title, caption }) => {
    const card = element?.closest(".metric-card");
    const titleNode = card?.querySelector("p");
    const captionNode = card?.querySelector("span");

    if (titleNode) {
      titleNode.textContent = title;
    }

    if (captionNode) {
      captionNode.textContent = caption;
    }
  });
}

function setActivePage(page) {
  const availablePages = elements.pageViews.map((view) => view.dataset.pageView);
  let nextPage = availablePages.includes(page) ? page : "innovation";
  if ((nextPage === "education-calendar" || nextPage === "my-learning") && !hasEducationApplyAccess()) {
    window.alert("교육/학습 페이지는 승인된 사용자 계정에서만 이용할 수 있습니다.");
    nextPage = "innovation";
  }
  if ((nextPage === "education-admin" || nextPage === "certification-management" || nextPage === "survey-management") && !hasEducationAdminAccess()) {
    window.alert("교육관리/자격검정관리/설문관리 페이지는 관리자 권한이 필요합니다.");
    nextPage = "innovation";
  }
  if (nextPage === "admin" && !hasSystemAdminAccess()) {
    window.alert("관리자 전용 페이지는 관리자 권한이 필요합니다.");
    nextPage = "innovation";
  }
  const educationPages = ["education-calendar", "my-learning", "education-admin", "certification-management", "survey-management"];
  const isEducationPage = educationPages.includes(nextPage);
  state.activePage = nextPage;

  elements.navItems.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pageTarget === nextPage);
  });

  if (elements.educationNavGroupShell) {
    elements.educationNavGroupShell.classList.toggle("is-active", isEducationPage);
    if (isEducationPage) {
      elements.educationNavGroupShell.classList.add("is-expanded");
    }
  }

  if (elements.educationNavParent) {
    elements.educationNavParent.classList.toggle("is-active", isEducationPage);
    elements.educationNavParent.setAttribute(
      "aria-expanded",
      elements.educationNavGroupShell?.classList.contains("is-expanded") ? "true" : "false",
    );
  }

  elements.pageViews.forEach((view) => {
    const isActive = view.dataset.pageView === nextPage;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });

  if (nextPage !== "innovation") {
    closeProjectModal();
    closeMilestoneModal();
  }

  if (nextPage !== "qualification") {
    closeQualificationModal();
  }

  if (nextPage !== "education-admin") {
    closeEducationAdminModal();
  }

  if (nextPage !== "certification-management") {
    closeCertificationExamModal();
  }
}

function syncEducationAdminMenuVisibility() {
  const canAccessEducationAdmin = hasEducationAdminAccess();
  const canAccessSystemAdmin = hasSystemAdminAccess();
  const educationAdminMenuTargets = ["education-admin", "certification-management", "survey-management"];
  educationAdminMenuTargets.forEach((target) => {
    const menuButton = elements.navItems.find((button) => button.dataset.pageTarget === target);
    if (menuButton) {
      menuButton.hidden = !canAccessEducationAdmin;
    }
  });
  const systemAdminButton = elements.navItems.find((button) => button.dataset.pageTarget === "admin");
  if (systemAdminButton) {
    systemAdminButton.hidden = !canAccessSystemAdmin;
  }

  if ((!canAccessEducationAdmin && educationAdminMenuTargets.includes(state.activePage)) || (!canAccessSystemAdmin && state.activePage === "admin")) {
    setActivePage("innovation");
  }
}

function toggleNavGroup(groupKey) {
  const groupShell = document.querySelector(`[data-nav-group-shell="${groupKey}"]`);
  const groupToggle = document.querySelector(`[data-nav-group-toggle="${groupKey}"]`);

  if (!groupShell || !groupToggle) {
    return;
  }

  groupShell.classList.toggle("is-expanded");
  const expanded = groupShell.classList.contains("is-expanded");
  groupToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
}

function buildCompanyOptions() {
  elements.companyFilter.innerHTML = [
    '<option value="all">전체 법인</option>',
    ...companyOptions.map((company) => `<option value="${company}">${company}</option>`),
  ].join("");

  elements.projectCompany.innerHTML = companyOptions
    .map((company) => `<option value="${company}">${company}</option>`)
    .join("");

  if (elements.qualificationCompanyFilter) {
    elements.qualificationCompanyFilter.innerHTML = [
      '<option value="all">전체 법인</option>',
      ...companyOptions.map((company) => `<option value="${company}">${company}</option>`),
    ].join("");
  }

  if (elements.qualificationCompany) {
    elements.qualificationCompany.innerHTML = companyOptions
      .map((company) => `<option value="${company}">${company}</option>`)
      .join("");
  }

  if (elements.qualificationTypeFilter) {
    elements.qualificationTypeFilter.innerHTML = [
      '<option value="all">전체 자격</option>',
      ...qualificationTypeOptions.map((type) => `<option value="${type}">${type}</option>`),
    ].join("");
  }

  if (elements.qualificationType) {
    elements.qualificationType.innerHTML = qualificationTypeOptions
      .map((type) => `<option value="${type}">${type}</option>`)
      .join("");
  }
  if (elements.certificationExamType) {
    elements.certificationExamType.innerHTML = qualificationTypeOptions
      .map((type) => `<option value="${type}">${type}</option>`)
      .join("");
  }

  renderQualificationGradeFilterOptions();
  renderQualificationGradeFieldOptions(elements.qualificationType?.value || qualificationTypeOptions[0]);
  if (elements.certificationExamType) {
    renderCertificationExamGradeFieldOptions(elements.certificationExamType.value || qualificationTypeOptions[0]);
  }
}

function getProjectYearOptions() {
  return Array.from(new Set(
    projects
      .map((project) => String(project.startDate || "").slice(0, 4))
      .filter((year) => /^\d{4}$/.test(year)),
  ))
    .sort((left, right) => right.localeCompare(left));
}

function renderProjectYearFilterOptions() {
  if (!elements.yearFilter) {
    return;
  }

  const yearOptions = getProjectYearOptions();
  if (state.year !== "all" && !yearOptions.includes(state.year)) {
    const currentYear = String(REFERENCE_DATE.getFullYear());
    state.year = yearOptions.includes(currentYear) ? currentYear : "all";
  }

  elements.yearFilter.innerHTML = [
    '<option value="all">전체 연도</option>',
    ...yearOptions.map((year) => `<option value="${year}">${year}년</option>`),
  ].join("");
  elements.yearFilter.value = state.year;
}

function getQualificationYearOptions() {
  return Array.from(new Set(
    qualifications
      .map((qualification) => String(qualification.acquiredDate || "").slice(0, 4))
      .filter((year) => /^\d{4}$/.test(year)),
  ))
    .sort((left, right) => right.localeCompare(left));
}

function renderQualificationYearFilterOptions() {
  if (!elements.qualificationYearFilter) {
    return;
  }

  const yearOptions = getQualificationYearOptions();
  if (state.qualificationYear !== "all" && !yearOptions.includes(state.qualificationYear)) {
    const currentYear = String(REFERENCE_DATE.getFullYear());
    state.qualificationYear = yearOptions.includes(currentYear) ? currentYear : "all";
  }

  elements.qualificationYearFilter.innerHTML = [
    '<option value="all">전체 연도</option>',
    ...yearOptions.map((year) => `<option value="${year}">${year}년</option>`),
  ].join("");
  elements.qualificationYearFilter.value = state.qualificationYear;
}

function readAssessmentFromForm() {
  return {
    potentialImpact: elements.assessmentPotentialImpact.value,
    strategicAlignment: elements.assessmentStrategicAlignment.value,
    expectedEffect: elements.assessmentExpectedEffect.value,
    rippleEffect: elements.assessmentRippleEffect.value,
    feasibility: elements.assessmentFeasibility.value,
    urgency: elements.assessmentUrgency.value,
  };
}

function renderAssessmentSummary(assessment = readAssessmentFromForm()) {
  if (!elements.assessmentTotalScore || !elements.assessmentTotalGrade) {
    return;
  }

  const normalizedAssessment = normalizeAssessment(assessment);
  const summary = getAssessmentSummary(normalizedAssessment);
  elements.assessmentTotalScore.textContent = `${summary.score}점`;
  elements.assessmentTotalGrade.textContent = summary.grade;
}

function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesQuery = [project.name, project.company, project.leader, project.department, project.teamMembers, project.projectType, project.kpi, project.kpiTarget, project.csfType]
      .concat(project.projectLink || "")
      .join(" ")
      .toLowerCase()
      .includes(state.search.toLowerCase());

    const matchesCompany = state.company === "all" || project.company === state.company;
    const projectYear = String(project.startDate || "").slice(0, 4);
    const matchesYear = state.year === "all" || projectYear === state.year;
    const matchesStage = state.stage === "all" || project.stage === state.stage;
    const matchesHealth = state.health === "all" || project.scheduleStatus === state.health;

    const daysUntil = getDaysUntil(project.deadline);
    const matchesTab =
      state.activeTab === "all" ||
      (state.activeTab === "delayed" && (daysUntil < 0 || project.scheduleStatus === "delayed")) ||
      (state.activeTab === "deadline" && daysUntil >= 0 && daysUntil <= 30) ||
      (state.activeTab === "high-risk" && project.alignment < 80);

    return matchesQuery && matchesCompany && matchesYear && matchesStage && matchesHealth && matchesTab;
  });
}

function renderMetrics() {
  const dashboardYear = String(REFERENCE_DATE.getFullYear());
  const sourceProjects = projects.filter((project) =>
    String(project.startDate || "").startsWith(`${dashboardYear}-`)
  );
  const total = sourceProjects.length;
  const averageProgress = total
    ? Math.round(sourceProjects.reduce((sum, project) => sum + project.progress, 0) / total)
    : 0;
  const completedCount = sourceProjects.filter((project) => project.stage === "Completed").length;
  const delayedCount = sourceProjects.filter((project) => {
    if (project.stage === "Completed") {
      return false;
    }

    const daysUntil = getDaysUntil(project.deadline);
    return daysUntil < 0 || project.scheduleStatus === "delayed";
  }).length;
  const onTrackCount = sourceProjects.filter((project) => {
    if (project.stage === "Completed") {
      return false;
    }

    const daysUntil = getDaysUntil(project.deadline);
    return !(daysUntil < 0 || project.scheduleStatus === "delayed");
  }).length;

  elements.metricTotal.textContent = String(total);
  elements.metricOnTrack.textContent = String(onTrackCount);
  elements.metricDelay.textContent = String(delayedCount);
  elements.metricCompleted.textContent = String(completedCount);
  elements.metricProgress.textContent = `${averageProgress}%`;
}

function renderDashboardSimpleList(targetNode, items = [], emptyMessage = "표시할 항목이 없습니다.", options = {}) {
  const { showTypeBadge = false } = options;
  if (!targetNode) {
    return;
  }
  if (!items.length) {
    targetNode.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }
  targetNode.innerHTML = items.map((item, index) => `
    <article style="display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;padding:5px 4px;margin:0;background:transparent;border-bottom:${index < items.length - 1 ? "1px solid #e9f1ff" : "none"};">
      <div style="display:grid;grid-template-columns:${showTypeBadge ? "auto 1fr" : "1fr"};gap:${showTypeBadge ? "8px" : "0"};align-items:center;min-width:0;">
        ${showTypeBadge
    ? `<span style="display:inline-flex;align-items:center;justify-content:center;min-width:34px;padding:1px 6px;border-radius:999px;font-size:10px;font-weight:800;line-height:1;white-space:nowrap;color:${item.type === "exam" ? "#15503a" : "#1b4f9d"};background:${item.type === "exam" ? "#e8f8f0" : "#e9f1ff"};">${item.type === "exam" ? "시험" : "교육"}</span>`
    : ""}
        <p style="margin:0;font-weight:600;font-size:15px;color:#102f63;line-height:1.2;min-width:0;">${escapeHtml(item.title || "-")}</p>
      </div>
      <span style="font-size:12px;font-weight:600;color:#5e79a5;white-space:nowrap;line-height:1;">${escapeHtml(formatDateWithYear(item.date || toIsoDate(REFERENCE_DATE)))}</span>
    </article>
  `).join("");
}

function renderDashboardBarList(targetNode, rows = [], valueSuffix = "", emptyMessage = "데이터가 없습니다.") {
  if (!targetNode) {
    return;
  }
  if (!rows.length) {
    targetNode.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }
  const maxValue = rows.reduce((max, row) => Math.max(max, parseNumber(row.value, 0)), 0) || 1;
  targetNode.innerHTML = rows.map((row) => {
    const value = Math.max(0, parseNumber(row.value, 0));
    const width = Math.max(4, Math.round((value / maxValue) * 100));
    return `
      <div style="display:grid;grid-template-columns:140px 1fr auto;gap:12px;align-items:center;margin:8px 0;">
        <strong>${escapeHtml(row.label)}</strong>
        <div style="height:10px;background:#eef4ff;border-radius:999px;overflow:hidden;">
          <span style="display:block;height:100%;width:${width}%;background:#2f6df6;border-radius:999px;"></span>
        </div>
        <span>${escapeHtml(`${value}${valueSuffix}`)}</span>
      </div>
    `;
  }).join("");
}

function renderDashboardPage() {
  renderDashboardSimpleList(
    elements.dashboardNoticeList,
    dashboardNoticeItems
      .slice()
      .sort((left, right) => String(right.date).localeCompare(String(left.date)))
      .slice(0, 7),
    "등록된 공지사항이 없습니다.",
  );

  const todayToken = toIsoDate(REFERENCE_DATE);
  const calendarEvents = [
    ...educationSchedules
      .filter((schedule) => isValidDateString(schedule.startDate))
      .map((schedule) => ({
        title: getEducationAdminDisplayCourseName(schedule, getEducationCourseById(schedule.courseId)),
        date: schedule.startDate,
        type: "education",
      })),
    ...certificationExams
      .map((exam) => ({
        title: exam.examTitle || `${exam.examType || "시험"} ${exam.examGrade || ""}`.trim(),
        date: String(exam.examDateTime || "").slice(0, 10),
        type: "exam",
      }))
      .filter((item) => isValidDateString(item.date)),
  ]
    .filter((item) => isValidDateString(item.date) && item.date >= todayToken)
    .sort((left, right) => String(left.date).localeCompare(String(right.date)))
    .slice(0, 3);

  renderDashboardSimpleList(
    elements.dashboardMilestoneList,
    calendarEvents,
    "캘린더 일정 데이터가 없습니다.",
    { showTypeBadge: true },
  );

  const innovationRows = companyOptions.map((company) => {
    const companyProjects = projects.filter((project) => project.company === company);
    const avgProgress = companyProjects.length
      ? Math.round(companyProjects.reduce((sum, project) => sum + parseNumber(project.progress, 0), 0) / companyProjects.length)
      : 0;
    return { label: company, value: companyProjects.length, sub: avgProgress };
  })
    .sort((left, right) => {
      if (right.value !== left.value) {
        return right.value - left.value;
      }
      if (right.sub !== left.sub) {
        return right.sub - left.sub;
      }
      return left.label.localeCompare(right.label);
    });

  if (elements.dashboardInnovationCompanyChart) {
    const maxTaskCount = innovationRows.reduce((max, row) => Math.max(max, row.value), 0);
    const countChart = innovationRows.map((row) => {
      const width = maxTaskCount > 0 ? Math.round((row.value / maxTaskCount) * 100) : 0;
      return `
        <div class="dashboard-chart-row" style="display:grid;grid-template-columns:120px 1fr auto;gap:14px;align-items:center;margin:13px 0;">
          <strong style="font-size:0.9rem;line-height:1.2;">${escapeHtml(row.label)}</strong>
          <div class="dashboard-bar-track" style="height:12px;background:#eef4ff;border-radius:999px;overflow:hidden;" title="${escapeHtml(`${row.label}: ${row.value}건`)}">
            <span class="dashboard-bar-fill-x dashboard-bar-fill-blue" style="display:block;height:100%;width:${width}%;background:#2056c8;border-radius:999px;"></span>
          </div>
          <span style="font-size:0.84rem;line-height:1;">${escapeHtml(`${row.value}건`)}</span>
        </div>
      `;
    }).join("");

    const progressChart = innovationRows.map((row) => `
      <div class="dashboard-chart-row" style="display:grid;grid-template-columns:120px 1fr auto;gap:14px;align-items:center;margin:13px 0;">
        <strong style="font-size:0.9rem;line-height:1.2;">${escapeHtml(row.label)}</strong>
        <div class="dashboard-bar-track" style="height:12px;background:#eef4ff;border-radius:999px;overflow:hidden;" title="${escapeHtml(`${row.label}: ${row.sub}%`)}">
          <span class="dashboard-bar-fill-x dashboard-bar-fill-green" style="display:block;height:100%;width:${Math.max(0, Math.min(100, row.sub))}%;background:#22a06b;border-radius:999px;"></span>
        </div>
        <span style="font-size:0.84rem;line-height:1;">${escapeHtml(`${row.sub}%`)}</span>
      </div>
    `).join("");

    elements.dashboardInnovationCompanyChart.innerHTML = `
      <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;padding:4px 2px 6px;">
        <section>
          <p style="margin:0 0 12px;color:#49648d;font-size:0.88rem;font-weight:700;">법인별 혁신과제 건수</p>
          ${countChart}
        </section>
        <section>
          <p style="margin:0 0 12px;color:#49648d;font-size:0.88rem;font-weight:700;">법인별 혁신과제 진행률</p>
          ${progressChart}
        </section>
      </div>
    `;
  }

  const stackedRows = companyOptions.map((company) => {
    const items = qualifications.filter((qualification) => qualification.company === company);
    return { company, total: items.length };
  })
    .sort((left, right) => {
      if (right.total !== left.total) {
        return right.total - left.total;
      }
      return left.company.localeCompare(right.company);
    });

  if (elements.dashboardQualificationStackedChart) {
    const maxQualificationCount = stackedRows.reduce((max, row) => Math.max(max, row.total), 0);
    const bars = stackedRows.map((row) => {
      const height = maxQualificationCount > 0 ? Math.round((row.total / maxQualificationCount) * 100) : 0;
      return `
        <div class="dashboard-chart-col" style="display:flex;flex-direction:column;align-items:center;gap:11px;min-width:78px;">
          <div class="dashboard-col-track" style="height:124px;width:36px;background:#eef4ff;border-radius:10px;display:flex;align-items:flex-end;overflow:hidden;" title="${escapeHtml(`${row.company}: ${row.total}건`)}">
            <span class="dashboard-bar-fill-y dashboard-bar-fill-blue" style="display:block;width:100%;height:${height}%;background:#2f6df6;"></span>
          </div>
          <strong style="font-size:0.9rem;line-height:1.2;text-align:center;white-space:nowrap;">${escapeHtml(row.company)}</strong>
          <span style="color:#5b7196;font-size:0.84rem;line-height:1;">${escapeHtml(`${row.total}건`)}</span>
        </div>
      `;
    }).join("");

    elements.dashboardQualificationStackedChart.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:18px;padding:10px 6px 4px;min-height:228px;">
        ${bars}
      </div>
    `;
  }

  const passTypeRows = qualificationTypeOptions.map((type) => {
    const relatedExamIds = certificationExams.filter((exam) => exam.examType === type).map((exam) => exam.id);
    const applicants = certificationExamApplications.filter((item) => relatedExamIds.includes(item.examId));
    const passed = applicants.filter((item) => item.completed).length;
    const rate = applicants.length ? Math.round((passed / applicants.length) * 100) : 0;
    return { label: type, value: rate, sub: `${passed}/${applicants.length}` };
  });
  if (elements.dashboardCertificationPassChart) {
    const bars = passTypeRows.map((row) => `
      <div class="dashboard-chart-col" style="display:flex;flex-direction:column;align-items:center;gap:10px;min-width:62px;">
        <div class="dashboard-col-track" style="height:96px;width:26px;background:#eef4ff;border-radius:9px;display:flex;align-items:flex-end;overflow:hidden;" title="${escapeHtml(`${row.label}: ${row.value}% (${row.sub})`)}">
          <span class="dashboard-bar-fill-y dashboard-bar-fill-green" style="display:block;width:100%;height:${Math.max(0, Math.min(100, row.value))}%;background:#22a06b;"></span>
        </div>
        <strong style="font-size:0.9rem;line-height:1.2;">${escapeHtml(row.label)}</strong>
        <span style="color:#5b7196;font-size:0.84rem;line-height:1;">${escapeHtml(`${row.value}% (${row.sub})`)}</span>
      </div>
    `).join("");

    elements.dashboardCertificationPassChart.innerHTML = `
      <div style="display:flex;justify-content:space-around;align-items:flex-end;gap:16px;padding:10px 6px 4px;min-height:228px;">
        ${bars}
      </div>
    `;
  }
}

function renderAdminDashboardDataBoards() {
  if (elements.adminNoticeTableBody) {
    if (!dashboardNoticeItems.length) {
      elements.adminNoticeTableBody.innerHTML = '<tr><td colspan="2" class="empty-cell">등록된 공지사항이 없습니다.</td></tr>';
    } else {
      if (!dashboardNoticeItems.some((item) => item.id === state.selectedAdminNoticeId)) {
        state.selectedAdminNoticeId = dashboardNoticeItems[0]?.id ?? null;
      }
      elements.adminNoticeTableBody.innerHTML = dashboardNoticeItems
        .slice()
        .sort((left, right) => String(right.date).localeCompare(String(left.date)))
        .map((item) => `
          <tr class="${item.id === state.selectedAdminNoticeId ? "is-selected" : ""}" data-admin-notice-id="${escapeHtml(item.id)}">
            <td>${escapeHtml(item.title)}</td>
            <td>${escapeHtml(formatDateWithYear(item.date))}</td>
          </tr>
        `)
        .join("");
    }
  }

  if (elements.adminDashboardMilestoneTableBody) {
    const sortedMilestones = getSortedMilestones();
    if (!sortedMilestones.length) {
      elements.adminDashboardMilestoneTableBody.innerHTML = '<tr><td colspan="2" class="empty-cell">등록된 주요 일정이 없습니다.</td></tr>';
    } else {
      if (!sortedMilestones.some((item) => item.id === state.selectedAdminDashboardMilestoneId)) {
        state.selectedAdminDashboardMilestoneId = sortedMilestones[0]?.id ?? null;
      }
      elements.adminDashboardMilestoneTableBody.innerHTML = sortedMilestones
        .map((item) => `
          <tr class="${item.id === state.selectedAdminDashboardMilestoneId ? "is-selected" : ""}" data-admin-dashboard-milestone-id="${escapeHtml(item.id)}">
            <td>${escapeHtml(item.title)}</td>
            <td>${escapeHtml(formatDateWithYear(item.date))}</td>
          </tr>
        `)
        .join("");
    }
  }
}

function getQualificationTypeClass(type) {
  if (type === "6σ") {
    return "type-six-sigma";
  }

  if (type === "AICA") {
    return "type-aica";
  }

  return "type-aice";
}

function renderQualificationMetrics() {
  const currentYear = String(REFERENCE_DATE.getFullYear());
  const total = qualifications.length;
  const sixSigmaCount = qualifications.filter((item) => item.qualificationType === "6σ").length;
  const aicaCount = qualifications.filter((item) => item.qualificationType === "AICA").length;
  const aiceCount = qualifications.filter((item) => item.qualificationType === "AICE").length;
  const currentYearCount = qualifications.filter((item) => String(item.acquiredDate || "").startsWith(`${currentYear}-`)).length;

  if (elements.qualificationMetricTotal) {
    elements.qualificationMetricTotal.textContent = String(total);
  }

  if (elements.qualificationMetricSixSigma) {
    elements.qualificationMetricSixSigma.textContent = String(sixSigmaCount);
  }

  if (elements.qualificationMetricAica) {
    elements.qualificationMetricAica.textContent = String(aicaCount);
  }

  if (elements.qualificationMetricAice) {
    elements.qualificationMetricAice.textContent = String(aiceCount);
  }

  if (elements.qualificationMetricCurrentYear) {
    elements.qualificationMetricCurrentYear.textContent = String(currentYearCount);
  }
}

function renderQualificationGradeFilterOptions() {
  if (!elements.qualificationGradeFilter) {
    return;
  }

  const gradeOptions = state.qualificationType === "all"
    ? getAllQualificationGrades()
    : getQualificationGradeList(state.qualificationType);

  if (state.qualificationGrade !== "all" && !gradeOptions.includes(state.qualificationGrade)) {
    state.qualificationGrade = "all";
  }

  elements.qualificationGradeFilter.innerHTML = [
    '<option value="all">전체 등급</option>',
    ...gradeOptions.map((grade) => `<option value="${grade}">${grade}</option>`),
  ].join("");
  elements.qualificationGradeFilter.value = state.qualificationGrade;
}

function renderQualificationGradeFieldOptions(type, selectedGrade = "") {
  if (!elements.qualificationGrade) {
    return;
  }

  const gradeOptions = getQualificationGradeList(type);
  const safeGrade = gradeOptions.includes(selectedGrade) ? selectedGrade : (gradeOptions[0] || "");

  elements.qualificationGrade.innerHTML = gradeOptions
    .map((grade) => `<option value="${grade}">${grade}</option>`)
    .join("");
  elements.qualificationGrade.value = safeGrade;
}

function getCertificationOperationStatusLabel(status) {
  return certificationOperationStatusLabels[status] || certificationOperationStatusLabels.planned;
}

function renderCertificationExamGradeFieldOptions(type, selectedGrade = "") {
  if (!elements.certificationExamGrade) {
    return;
  }
  const gradeOptions = getQualificationGradeList(type);
  const safeGrade = gradeOptions.includes(selectedGrade) ? selectedGrade : (gradeOptions[0] || "");
  elements.certificationExamGrade.innerHTML = gradeOptions
    .map((grade) => `<option value="${grade}">${grade}</option>`)
    .join("");
  elements.certificationExamGrade.value = safeGrade;
}

function formatCertificationApplicationPeriod(startDate, endDate) {
  if (!isValidDateString(startDate) || !isValidDateString(endDate)) {
    return "-";
  }
  return `${formatDateWithYear(startDate)} ~ ${formatDateWithYear(endDate)}`;
}

function renderCertificationExamTable() {
  if (!elements.certificationExamTableBody) {
    return;
  }

  pruneSelectedCertificationExamIds();

  if (!certificationExams.length) {
    elements.certificationExamTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-cell">등록된 자격검정 운영 항목이 없습니다. 상단의 등록 버튼으로 시작하세요.</td>
      </tr>
    `;
    return;
  }

  if (!certificationExams.some((exam) => exam.id === state.selectedCertificationExamId)) {
    state.selectedCertificationExamId = certificationExams[0]?.id ?? null;
  }

  elements.certificationExamTableBody.innerHTML = certificationExams
    .map((exam) => {
      const isSelected = exam.id === state.selectedCertificationExamId;
      const isChecked = hasCheckedCertificationExam(exam.id);
      return `
        <tr class="qualification-row ${isSelected ? "is-selected" : ""}" data-certification-exam-id="${exam.id}">
          <td class="selection-cell qualification-selection-cell">
            <span
              class="selection-box ${isChecked ? "is-selected" : ""}"
              data-certification-exam-select="${exam.id}"
              role="button"
              tabindex="0"
              aria-pressed="${isChecked ? "true" : "false"}"
              aria-label="${escapeHtml(`${exam.examTitle || "-"} 선택`)}"
            ></span>
          </td>
          <td>
            <div class="qualification-title-block">
              <strong>${escapeHtml(exam.examTitle || "-")}</strong>
              <span class="qualification-title-meta">${escapeHtml(`${exam.examType || "-"} ${exam.examGrade || "-"}`)}</span>
            </div>
          </td>
          <td>${escapeHtml(formatCertificationApplicationPeriod(exam.applicationStartDate, exam.applicationEndDate))}</td>
          <td>${escapeHtml(exam.examDateTime ? exam.examDateTime.replace("T", " ") : "-")}</td>
          <td>${formatDateWithYear(exam.resultAnnouncementDate)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCertificationExamDetailCard() {
  if (!elements.certificationExamDetailCard) {
    return;
  }

  if (!certificationExams.length) {
    elements.certificationExamDetailCard.innerHTML = '<div class="empty-state">선택 가능한 자격검정 항목이 없습니다.</div>';
    return;
  }

  const selectedExam = getCertificationExamById(state.selectedCertificationExamId) || certificationExams[0];
  if (!selectedExam) {
    elements.certificationExamDetailCard.innerHTML = '<div class="empty-state">선택된 자격검정 항목이 없습니다.</div>';
    return;
  }

  const applicantsCount = getCertificationExamApplicationCount(selectedExam.id);
  const capacity = Math.max(0, Math.round(parseNumber(selectedExam.capacity, 0)));
  const denominator = applicantsCount > 0 ? applicantsCount : 0;
  const passedCount = getCertificationExamPassedCount(selectedExam.id);
  const passRate = denominator > 0 ? Math.round((passedCount / denominator) * 100) : 0;

  elements.certificationExamDetailCard.innerHTML = `
    <div class="detail-card-top">
      <div>
        <h4>${escapeHtml(selectedExam.examTitle || "-")}</h4>
        <p class="detail-subtitle">${escapeHtml(`${selectedExam.examType || "-"} · ${selectedExam.examGrade || "-"}`)}</p>
      </div>
      <div class="detail-card-actions">
        <span class="education-status-pill is-${selectedExam.operationStatus || "planned"}">${escapeHtml(getCertificationOperationStatusLabel(selectedExam.operationStatus))}</span>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-metric">
        <span>신청인원/정원</span>
        <strong>${escapeHtml(`${applicantsCount}/${capacity}`)}</strong>
      </div>
      <div class="detail-metric">
        <span>시험합격률</span>
        <strong>${escapeHtml(`${passedCount}/${denominator}명 (${passRate}%)`)}</strong>
      </div>
    </div>
    <ul class="detail-list">
      <li><span class="detail-label">응시대상</span><strong>${escapeHtml(selectedExam.targetAudience || "-")}</strong></li>
      <li><span class="detail-label">자격요건</span><strong>${escapeHtml(selectedExam.qualificationRequirement || "-")}</strong></li>
      <li><span class="detail-label">합격기준</span><strong>${escapeHtml(selectedExam.passCriteria || "-")}</strong></li>
      <li><span class="detail-label">접수기간</span><strong>${escapeHtml(formatCertificationApplicationPeriod(selectedExam.applicationStartDate, selectedExam.applicationEndDate))}</strong></li>
      <li><span class="detail-label">시험일시</span><strong>${escapeHtml(selectedExam.examDateTime ? selectedExam.examDateTime.replace("T", " ") : "-")}</strong></li>
      <li><span class="detail-label">결과발표일</span><strong>${escapeHtml(formatDateWithYear(selectedExam.resultAnnouncementDate))}</strong></li>
      <li><span class="detail-label">시험장소</span><strong>${escapeHtml(selectedExam.examLocation || "-")}</strong></li>
      <li><span class="detail-label">비고</span><strong>${escapeHtml(selectedExam.note || "-")}</strong></li>
    </ul>
  `;
}

function renderCertificationApplicantTable() {
  if (!elements.certificationApplicantTableBody) {
    return;
  }

  const scope = state.certificationApplicantScope === "all" ? "all" : "selected";
  if (elements.certificationApplicantScopeFilter) {
    elements.certificationApplicantScopeFilter.value = scope;
  }

  const selectedExam = getCertificationExamById(state.selectedCertificationExamId);
  const sourceRows = scope === "all"
    ? [...certificationExamApplications]
    : certificationExamApplications.filter((item) => item.examId === state.selectedCertificationExamId);

  const rows = sourceRows
    .map((item) => ({
      ...item,
      exam: getCertificationExamById(item.examId),
    }))
    .filter((item) => item.exam)
    .sort((left, right) => String(right.appliedAt || "").localeCompare(String(left.appliedAt || "")));
  pruneSelectedCertificationApplicantIds();

  if (elements.certificationApplicantSelectedMeta) {
    if (scope === "all") {
      elements.certificationApplicantSelectedMeta.textContent = `전체 시험 기준 응시자 ${rows.length}건`;
    } else if (selectedExam) {
      const examTitle = selectedExam.examTitle || `${selectedExam.examType || "시험"} ${selectedExam.examGrade || ""}`.trim();
      elements.certificationApplicantSelectedMeta.textContent = `${examTitle} 응시자 ${rows.length}건`;
    } else {
      elements.certificationApplicantSelectedMeta.textContent = "선택한 시험이 없습니다.";
    }
  }

  if (!rows.length) {
    elements.certificationApplicantTableBody.innerHTML = `
      <tr>
        <td colspan="9" class="empty-cell">${scope === "all" ? "등록된 시험응시자 정보가 없습니다." : "선택한 시험의 응시자 정보가 없습니다."}</td>
      </tr>
    `;
    return;
  }

  elements.certificationApplicantTableBody.innerHTML = rows.map((row) => {
    const examTitle = row.exam?.examTitle || `${row.exam?.examType || "시험"} ${row.exam?.examGrade || ""}`.trim();
    const examSubtitle = `${row.exam?.examType || "-"} · ${row.exam?.examGrade || "-"}`;
    const isChecked = hasCheckedCertificationApplicant(row.id);
    return `
      <tr>
        <td class="selection-cell qualification-selection-cell">
          <span
            class="selection-box ${isChecked ? "is-selected" : ""}"
            data-certification-application-select="${escapeHtml(row.id)}"
            role="button"
            tabindex="0"
            aria-pressed="${isChecked ? "true" : "false"}"
            aria-label="${escapeHtml(`${row.name || "-"} 선택`)}"
          ></span>
        </td>
        <td>
          <div class="qualification-title-block">
            <strong>${escapeHtml(examTitle)}</strong>
            <span class="qualification-title-meta">${escapeHtml(examSubtitle)}</span>
          </div>
        </td>
        <td>
          <div class="qualification-title-block">
            <strong>${escapeHtml(`${row.name || "-"} / ${row.position || "-"}`)}</strong>
            <span class="qualification-title-meta">${escapeHtml(`${row.company || "-"} / ${row.department || "-"}`)}</span>
          </div>
        </td>
        <td>${escapeHtml(row.email || "-")}</td>
        <td>${escapeHtml(row.phone || "-")}</td>
        <td>
          <input
            class="user-edit-input"
            type="text"
            value="${escapeHtml(row.certificateNo || "")}"
            placeholder="자격증번호"
            data-certification-application-id="${escapeHtml(row.id)}"
            data-certification-application-field="certificateNo"
          >
        </td>
        <td>
          <input
            class="user-edit-input"
            type="date"
            value="${escapeHtml(row.acquiredDate || "")}"
            data-certification-application-id="${escapeHtml(row.id)}"
            data-certification-application-field="acquiredDate"
          >
        </td>
        <td>${escapeHtml(formatDateWithYear(row.appliedAt))}</td>
      </tr>
    `;
  }).join("");
}

function getFilteredQualifications() {
  return qualifications
    .filter((qualification) => {
      const matchesQuery = [
        qualification.qualificationType,
        qualification.grade,
        qualification.certificateNo,
        qualification.company,
        qualification.department,
        qualification.name,
      ]
        .join(" ")
        .toLowerCase()
        .includes(state.qualificationSearch.toLowerCase());

      const matchesType = state.qualificationType === "all" || qualification.qualificationType === state.qualificationType;
      const matchesGrade = state.qualificationGrade === "all" || qualification.grade === state.qualificationGrade;
      const matchesCompany = state.qualificationCompany === "all" || qualification.company === state.qualificationCompany;
      const qualificationYear = String(qualification.acquiredDate || "").slice(0, 4);
      const matchesYear = state.qualificationYear === "all" || qualificationYear === state.qualificationYear;

      return matchesQuery && matchesType && matchesGrade && matchesCompany && matchesYear;
    })
    .sort((left, right) => {
      const leftDate = String(left.acquiredDate || "");
      const rightDate = String(right.acquiredDate || "");
      if (leftDate !== rightDate) {
        return rightDate.localeCompare(leftDate);
      }
      return String(left.name || "").localeCompare(String(right.name || ""), "ko-KR");
    });
}

function getQualificationTablePageInfo(filteredQualifications) {
  const totalPages = Math.max(1, Math.ceil(filteredQualifications.length / QUALIFICATION_ROWS_PER_PAGE));
  const currentPage = clampNumber(state.qualificationPage, 1, totalPages);

  if (state.qualificationPage !== currentPage) {
    state.qualificationPage = currentPage;
  }

  const startIndex = (currentPage - 1) * QUALIFICATION_ROWS_PER_PAGE;

  return {
    currentPage,
    totalPages,
    pagedQualifications: filteredQualifications.slice(startIndex, startIndex + QUALIFICATION_ROWS_PER_PAGE),
  };
}

function renderQualificationPagination(totalPages, currentPage) {
  if (!elements.qualificationPagination) {
    return;
  }

  if (totalPages <= 1) {
    elements.qualificationPagination.innerHTML = "";
    return;
  }

  elements.qualificationPagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;

    return `<span class="task-page-number ${isActive ? "is-active" : ""}" data-qualification-page="${page}" role="button" tabindex="0" aria-current="${isActive ? "page" : "false"}">${page}</span>`;
  }).join("");
}

function renderQualificationTable(filteredQualifications) {
  if (!elements.qualificationTableBody) {
    return;
  }

  pruneSelectedQualificationIds();

  if (!filteredQualifications.length) {
    elements.qualificationTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">조건에 맞는 자격 정보가 없습니다. 검색어 또는 필터를 조정해 주세요.</td>
      </tr>
    `;
    renderQualificationPagination(0, 1);
    return;
  }

  const { currentPage, totalPages, pagedQualifications } = getQualificationTablePageInfo(filteredQualifications);

  if (!pagedQualifications.some((qualification) => qualification.id === state.selectedQualificationId)) {
    state.selectedQualificationId = pagedQualifications[0]?.id ?? filteredQualifications[0]?.id ?? null;
  }

  elements.qualificationTableBody.innerHTML = pagedQualifications
    .map((qualification, index) => {
      const isSelected = qualification.id === state.selectedQualificationId;
      const isChecked = hasCheckedQualification(qualification.id);
      const qualificationDepartment = qualification.department || "-";
      const qualificationCompany = qualification.company || "-";
      const qualificationName = qualification.qualificationType || "-";
      const qualificationGrade = qualification.grade || "-";
      const ownerName = qualification.name || "-";
      const certificateNo = qualification.certificateNo || "-";

      return `
        <tr class="qualification-row ${isSelected ? "is-selected" : ""} fade-up" data-qualification-id="${qualification.id}" style="animation-delay:${index * 40}ms">
          <td class="selection-cell qualification-selection-cell">
            <span
              class="selection-box ${isChecked ? "is-selected" : ""}"
              data-qualification-select="${qualification.id}"
              role="button"
              tabindex="0"
              aria-label="${escapeHtml(`${qualificationName} 선택`)}"
              aria-pressed="${isChecked ? "true" : "false"}"
            ></span>
          </td>
          <td class="qualification-title-cell">
            <div class="qualification-title-block">
              <strong>${escapeHtml(qualificationName)}</strong>
              <span class="qualification-title-meta">${escapeHtml(qualificationGrade)}</span>
            </div>
          </td>
          <td class="qualification-cert-cell">${escapeHtml(certificateNo)}</td>
          <td class="qualification-company-cell">
            <div class="qualification-company-block">
              <strong>${escapeHtml(qualificationCompany)}</strong>
              <span class="qualification-company-meta">${escapeHtml(qualificationDepartment)}</span>
            </div>
          </td>
          <td class="qualification-owner-cell">${escapeHtml(ownerName)}</td>
          <td class="qualification-date-cell">${formatDateWithYear(qualification.acquiredDate)}</td>
        </tr>
      `;
    })
    .join("");

  renderQualificationPagination(totalPages, currentPage);
}

function buildQualificationCompanySummary(filteredQualifications) {
  return companyOptions
    .map((company) => {
      const companyItems = filteredQualifications.filter((qualification) => qualification.company === company);
      const typeCounts = qualificationTypeOptions.map((type) => ({
        type,
        count: companyItems.filter((qualification) => qualification.qualificationType === type).length,
      }));

      return {
        company,
        total: companyItems.length,
        typeCounts,
      };
    })
    .filter((entry) => entry.total > 0)
    .sort((left, right) => right.total - left.total || left.company.localeCompare(right.company, "ko-KR"));
}

function buildQualificationTypeSummary(filteredQualifications) {
  return qualificationTypeOptions.map((type) => ({
    type,
    total: filteredQualifications.filter((qualification) => qualification.qualificationType === type).length,
  }));
}

function renderQualificationCompanyBoard(filteredQualifications) {
  if (!elements.qualificationCompanyBoard) {
    return;
  }

  const summary = buildQualificationCompanySummary(filteredQualifications);

  if (!summary.length) {
    elements.qualificationCompanyBoard.innerHTML = '<div class="empty-state">표시할 법인별 자격 집계가 없습니다.</div>';
    return;
  }

  const maxTotal = Math.max(...summary.map((entry) => entry.total), 1);
  const legend = qualificationTypeOptions
    .map((type) => {
      const typeClass = getQualificationTypeClass(type);
      return `
        <span class="qualification-chart-legend-item">
          <span class="qualification-chart-dot ${typeClass}"></span>
          <span>${escapeHtml(type)}</span>
        </span>
      `;
    })
    .join("");

  const rows = summary
    .map((entry, index) => {
      const segments = entry.typeCounts
        .filter((item) => item.count > 0)
        .map((item) => {
          const typeClass = getQualificationTypeClass(item.type);
          const width = (item.count / maxTotal) * 100;
          return `<span class="qualification-company-segment ${typeClass}" style="width:${width}%"></span>`;
        })
        .join("");

      return `
        <div class="qualification-company-row fade-up" style="animation-delay:${index * 45}ms">
          <div class="qualification-company-label">${escapeHtml(entry.company)}</div>
          <div class="qualification-company-chart-track">${segments}</div>
          <div class="qualification-company-value">${entry.total}건</div>
        </div>
      `;
    })
    .join("");

  elements.qualificationCompanyBoard.innerHTML = `
    <div class="qualification-chart-legend">${legend}</div>
    <div class="qualification-company-chart">
      ${rows}
    </div>
  `;
}

function renderQualificationTypeBoard(filteredQualifications) {
  if (!elements.qualificationTypeBoard) {
    return;
  }

  const summary = buildQualificationTypeSummary(filteredQualifications);
  const hasData = summary.some((entry) => entry.total > 0);

  if (!hasData) {
    elements.qualificationTypeBoard.innerHTML = '<div class="empty-state">표시할 자격유형 분포가 없습니다.</div>';
    return;
  }

  const total = summary.reduce((sum, entry) => sum + entry.total, 0);
  let angleCursor = 0;
  const colorStops = [];

  summary.forEach((entry) => {
    if (!entry.total) {
      return;
    }

    const ratio = entry.total / total;
    const nextAngle = angleCursor + (ratio * 360);
    const color = entry.type === "6σ"
      ? "#5a9ff2"
      : entry.type === "AICA"
        ? "#39b39a"
        : "#eea54a";

    colorStops.push(`${color} ${angleCursor}deg ${nextAngle}deg`);
    angleCursor = nextAngle;
  });

  const chartStyle = colorStops.length
    ? `background: conic-gradient(${colorStops.join(", ")});`
    : "background: #f3eadc;";

  angleCursor = 0;
  const chartLabels = summary
    .filter((entry) => entry.total > 0)
    .map((entry) => {
      const ratio = total ? (entry.total / total) : 0;
      const sweep = ratio * 360;
      const midAngle = angleCursor + (sweep / 2);
      angleCursor += sweep;

      const radians = ((midAngle - 90) * Math.PI) / 180;
      const radius = 92;
      const x = 50 + ((Math.cos(radians) * radius) / 180) * 100;
      const y = 50 + ((Math.sin(radians) * radius) / 180) * 100;

      return `
        <span class="qualification-donut-label" style="left:${x}%; top:${y}%;">
          ${entry.total}
        </span>
      `;
    })
    .join("");

  const legend = summary
    .map((entry, index) => {
      const typeClass = getQualificationTypeClass(entry.type);
      const ratio = total ? Math.round((entry.total / total) * 100) : 0;

      return `
        <div class="qualification-donut-legend-item fade-up" style="animation-delay:${index * 55}ms">
          <div class="qualification-donut-legend-top">
            <span class="qualification-chart-dot ${typeClass}"></span>
            <strong>${escapeHtml(entry.type)}</strong>
            <span>${entry.total}건 · ${ratio}%</span>
          </div>
        </div>
      `;
    })
    .join("");

  elements.qualificationTypeBoard.innerHTML = `
    <div class="qualification-donut-layout">
      <div class="qualification-donut-chart-wrap">
        <div class="qualification-donut-chart-area">
          <div class="qualification-donut-chart" style="${chartStyle}">
            <div class="qualification-donut-hole">
              <strong>${total}</strong>
              <span>총 자격건수</span>
            </div>
          </div>
          ${chartLabels}
        </div>
      </div>
      <div class="qualification-donut-legend">
        ${legend}
      </div>
    </div>
  `;
}

function renderEducationCalendarPage() {
  if (!elements.educationCalendarGrid || !elements.educationScheduleDetail) {
    return;
  }

  const filteredSchedules = getFilteredEducationSchedules();
  const monthSchedules = getEducationSchedulesInCurrentMonth(filteredSchedules);
  const monthRange = getEducationMonthRange();
  const monthCursor = monthRange.cursor;
  const monthCertificationExams = certificationExams.filter((exam) => {
    const examDateToken = String(exam.examDateTime || "").slice(0, 10);
    return isValidDateString(examDateToken) && examDateToken.startsWith(getEducationMonthKey(monthCursor));
  });

  if (elements.educationMonthLabel) {
    elements.educationMonthLabel.textContent = `${monthCursor.getFullYear()}년 ${monthCursor.getMonth() + 1}월`;
  }

  if (!isValidDateString(state.selectedEducationDate)
    || !state.selectedEducationDate.startsWith(getEducationMonthKey(monthCursor))) {
    state.selectedEducationDate = monthRange.start;
  }

  let selectedSchedule = getEducationScheduleById(state.selectedEducationScheduleId);
  if (!selectedSchedule || !monthSchedules.some((schedule) => schedule.id === selectedSchedule.id)) {
    const daySchedules = getEducationSchedulesOnDate(state.selectedEducationDate, monthSchedules);
    selectedSchedule = daySchedules[0] || monthSchedules[0] || null;
    state.selectedEducationScheduleId = selectedSchedule?.id || null;
  }
  let selectedExam = getCertificationExamById(state.selectedCertificationExamId);
  if (!selectedExam || !monthCertificationExams.some((exam) => exam.id === selectedExam.id)) {
    const dayExams = getCertificationExamsOnDate(state.selectedEducationDate, monthCertificationExams);
    selectedExam = dayExams[0] || monthCertificationExams[0] || null;
    state.selectedCertificationExamId = selectedExam?.id || null;
  }

  if (selectedSchedule && !(state.selectedEducationDate >= selectedSchedule.startDate && state.selectedEducationDate <= selectedSchedule.endDate)) {
    state.selectedEducationDate = selectedSchedule.startDate;
  }
  if (selectedExam) {
    const selectedExamDate = String(selectedExam.examDateTime || "").slice(0, 10);
    if (isValidDateString(selectedExamDate) && state.selectedCalendarEventType === "certification" && state.selectedEducationDate !== selectedExamDate) {
      state.selectedEducationDate = selectedExamDate;
    }
  }

  const firstDay = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), 1);
  const gridStart = new Date(firstDay);
  gridStart.setDate(firstDay.getDate() - firstDay.getDay());

  elements.educationCalendarGrid.innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const dateToken = toIsoDate(date);
    const isCurrentMonth = date.getMonth() === monthCursor.getMonth();
    const isToday = dateToken === toIsoDate(REFERENCE_DATE);
    const isSelected = dateToken === state.selectedEducationDate;
    const daySchedules = getEducationSchedulesOnDate(dateToken, monthSchedules);
    const dayExams = getCertificationExamsOnDate(dateToken, monthCertificationExams);
    const dayEvents = [
      ...daySchedules.map((schedule) => ({ kind: "education", schedule })),
      ...dayExams.map((exam) => ({ kind: "certification", exam })),
    ];
    const isExpanded = state.educationExpandedDate === dateToken;
    const visibleCount = isExpanded ? dayEvents.length : 2;
    const hiddenCount = Math.max(0, dayEvents.length - visibleCount);

    const chips = dayEvents
      .slice(0, visibleCount)
      .map((eventItem) => {
        if (eventItem.kind === "education") {
          const { schedule } = eventItem;
          const course = getEducationCourseById(schedule.courseId);
          const title = getEducationAdminDisplayCourseName(schedule, course);
          const activeClass = schedule.id === state.selectedEducationScheduleId ? "is-active" : "";
          const chipStatus = getEducationCalendarChipStatus(schedule);
          return `
            <button type="button" class="education-event-chip ${activeClass}" data-education-schedule-id="${schedule.id}" title="${escapeHtml(title)}">
              <span class="education-event-title" title="${escapeHtml(title)}">${escapeHtml(title)}</span>
              <span class="education-event-status ${chipStatus.className}">${escapeHtml(`${chipStatus.icon} ${chipStatus.label}`)}</span>
            </button>
          `;
        }
        const { exam } = eventItem;
        const examTitle = exam.examTitle || `${exam.examType || "시험"} ${exam.examGrade || ""}`.trim();
        const chipStatus = getCertificationExamCalendarChipStatus(exam);
        const activeClass = state.selectedCalendarEventType === "certification" && exam.id === state.selectedCertificationExamId
          ? "is-active"
          : "";
        return `
          <button type="button" class="education-event-chip ${activeClass}" data-certification-exam-id="${exam.id}" title="${escapeHtml(examTitle)}">
            <span class="education-event-title" title="${escapeHtml(examTitle)}">${escapeHtml(examTitle)}</span>
            <span class="education-event-status ${chipStatus.className}">${escapeHtml(`${chipStatus.icon} ${chipStatus.label}`)}</span>
          </button>
        `;
      })
      .join("");

    const moreChip = dayEvents.length > 2
      ? `<button type="button" class="education-event-more" data-education-more-date="${dateToken}">${isExpanded ? "접기" : `+${hiddenCount}`}</button>`
      : "";

    return `
      <div class="education-day-cell ${isCurrentMonth ? "" : "is-outside"} ${isToday ? "is-today" : ""} ${isSelected ? "is-selected" : ""}">
        <button type="button" class="education-day-head" data-education-date="${dateToken}">
          <span class="education-day-number">${date.getDate()}</span>
          <span class="education-day-count">${dayEvents.length ? `${dayEvents.length}건` : ""}</span>
        </button>
        <div class="education-day-events">
          ${chips}
          ${moreChip}
        </div>
      </div>
    `;
  }).join("");

  const currentYear = String(REFERENCE_DATE.getFullYear());
  const yearSchedules = educationSchedules.filter((schedule) => (
    String(schedule.year || "").trim() === currentYear
    || String(schedule.startDate || "").startsWith(`${currentYear}-`)
  ));
  const monthlyOpenedCount = monthSchedules.length;
  const openRecruitCount = yearSchedules.filter((schedule) => getEducationRecruitStatusKey(schedule) === "open").length;
  const completedCount = yearSchedules.filter((schedule) => (
    schedule.status === "completed_needs_settlement"
    || schedule.status === "settled"
    || schedule.status === "completed"
  )).length;

  if (elements.educationMetricMonthly) {
    elements.educationMetricMonthly.textContent = String(yearSchedules.length);
    const titleNode = elements.educationMetricMonthly.previousElementSibling;
    if (titleNode) {
      titleNode.textContent = `${currentYear}년 운영과정 수`;
    }
  }
  if (elements.educationMetricOpen) {
    elements.educationMetricOpen.textContent = String(monthlyOpenedCount);
    const titleNode = elements.educationMetricOpen.previousElementSibling;
    if (titleNode) {
      titleNode.textContent = "이번달 개설과정 수";
    }
  }
  if (elements.educationMetricApplied) {
    elements.educationMetricApplied.textContent = String(openRecruitCount);
    const titleNode = elements.educationMetricApplied.previousElementSibling;
    if (titleNode) {
      titleNode.textContent = "모집중 과정";
    }
  }
  if (elements.educationMetricScore) {
    elements.educationMetricScore.textContent = String(completedCount);
    const titleNode = elements.educationMetricScore.previousElementSibling;
    if (titleNode) {
      titleNode.textContent = "완료된 과정";
    }
  }

  if (!selectedSchedule && !selectedExam) {
    state.educationApplyFormScheduleId = null;
    state.certificationApplyFormExamId = null;
    elements.educationScheduleDetail.innerHTML = '<div class="empty-state">선택한 일정이 없습니다. 캘린더에서 과정을 선택해 주세요.</div>';
    return;
  }

  if ((state.selectedCalendarEventType === "certification" || !selectedSchedule) && selectedExam) {
    state.selectedCalendarEventType = "certification";
    state.educationApplyFormScheduleId = null;
    const identity = getEducationCurrentIdentity();
    const applicantsCount = getCertificationExamApplicationCount(selectedExam.id);
    const capacity = Math.max(0, parseNumber(selectedExam.capacity, 0));
    const chipStatus = getCertificationExamCalendarChipStatus(selectedExam);
    const alreadyApplied = certificationExamApplications.some((item) =>
      item.examId === selectedExam.id && item.employeeId === identity.employeeId
    );
    const canApply = hasEducationApplyAccess();
    const canRecruitApply = chipStatus.label === "접수중";
    const applyDisabled = alreadyApplied || !canApply || !canRecruitApply;
    const applyLabel = alreadyApplied
      ? "접수완료"
      : !canApply
        ? "접수권한 없음"
        : !canRecruitApply
          ? chipStatus.label
          : "시험 접수하기";
    const positionOptions = ["임원", "수석", "책임", "선임", "사원"];
    const defaultPosition = positionOptions.includes(identity.position) ? identity.position : "";
    const isApplyFormVisible = state.certificationApplyFormExamId === selectedExam.id && !applyDisabled;
    const applyFormMarkup = isApplyFormVisible
      ? `
        <form class="education-apply-form" data-certification-apply-form="${selectedExam.id}">
          <div class="education-apply-form-grid">
            <label class="form-field">
              <span>법인명</span>
              <input name="company" type="text" value="${escapeHtml(identity.company || "")}" readonly>
            </label>
            <label class="form-field">
              <span>부서명</span>
              <input name="department" type="text" value="${escapeHtml(identity.department || "")}" readonly>
            </label>
            <label class="form-field">
              <span>이름</span>
              <input name="name" type="text" value="${escapeHtml(identity.name || "")}" readonly>
            </label>
            <label class="form-field">
              <span>직책</span>
              <select name="position" required>
                <option value="">선택하세요</option>
                ${positionOptions
    .map((position) => `<option value="${escapeHtml(position)}" ${position === defaultPosition ? "selected" : ""}>${escapeHtml(position)}</option>`)
    .join("")}
              </select>
            </label>
            <label class="form-field">
              <span>이메일</span>
              <input name="email" type="email" value="${escapeHtml(identity.email || "")}" readonly>
            </label>
            <label class="form-field">
              <span>휴대전화번호</span>
              <input name="phone" type="tel" placeholder="예: 010-1234-5678" value="${escapeHtml(identity.phone || "")}" required>
            </label>
          </div>
          <div class="education-apply-form-actions">
            <button type="button" class="secondary-button" data-certification-apply-cancel>취소</button>
            <button type="submit" class="primary-button">접수 제출</button>
          </div>
        </form>
      `
      : "";

    elements.educationScheduleDetail.innerHTML = `
      <div class="education-detail-head">
        <h4>${escapeHtml(selectedExam.examTitle || "-")}</h4>
      </div>
      <p class="education-detail-copy">${escapeHtml(selectedExam.note || "시험과정 설명이 등록되지 않았습니다.")}</p>
      <ul class="education-detail-list">
        <li><span>시험구분/등급</span><strong>${escapeHtml(`${selectedExam.examType || "-"} / ${selectedExam.examGrade || "-"}`)}</strong></li>
        <li><span>응시대상</span><strong>${escapeHtml(selectedExam.targetAudience || "-")}</strong></li>
        <li><span>자격요건</span><strong>${escapeHtml(selectedExam.qualificationRequirement || "-")}</strong></li>
        <li><span>신청인원/정원</span><strong>${escapeHtml(`${applicantsCount}/${capacity}`)}</strong></li>
        <li><span>접수기간</span><strong>${escapeHtml(formatCertificationApplicationPeriod(selectedExam.applicationStartDate, selectedExam.applicationEndDate))}</strong></li>
        <li><span>시험일시</span><strong>${escapeHtml(selectedExam.examDateTime ? selectedExam.examDateTime.replace("T", " ") : "-")}</strong></li>
        <li><span>결과발표일</span><strong>${escapeHtml(formatDateWithYear(selectedExam.resultAnnouncementDate))}</strong></li>
        <li><span>상태</span><strong><span class="education-recruit-badge ${chipStatus.className}">${escapeHtml(chipStatus.label)}</span></strong></li>
        <li><span>시험장소</span><strong>${escapeHtml(selectedExam.examLocation || "-")}</strong></li>
      </ul>
      <button
        type="button"
        class="primary-button education-apply-button ${chipStatus.label === "시험종료" ? "is-closed" : ""} ${alreadyApplied ? "is-complete" : ""}"
        data-certification-apply-toggle="${selectedExam.id}"
        ${applyDisabled ? "disabled" : ""}
      >${applyLabel}</button>
      ${applyFormMarkup}
    `;
    return;
  }

  const selectedCourse = getEducationCourseById(selectedSchedule.courseId);
  const identity = getEducationCurrentIdentity();
  const enrollmentCount = getEducationEnrollmentCount(selectedSchedule.id);
  const capacity = Math.max(0, parseNumber(selectedSchedule.capacity, 0));
  const alreadyApplied = educationEnrollments.some((enrollment) =>
    enrollment.scheduleId === selectedSchedule.id && enrollment.employeeId === identity.employeeId
  );
  const canApply = hasEducationApplyAccess();
  const recruitStatusKey = getEducationRecruitStatusKey(selectedSchedule);
  const recruitStatusLabel = educationRecruitStatusLabels[recruitStatusKey] || educationRecruitStatusLabels.planned;
  const canRecruitApply = recruitStatusKey === "open";
  const applyDisabled = alreadyApplied || !canApply || !canRecruitApply;
  const durationLabel = selectedSchedule.daysText && selectedSchedule.hoursText
    ? `${selectedSchedule.daysText} (${selectedSchedule.hoursText})`
    : (selectedSchedule.daysText || selectedSchedule.hoursText || selectedCourse?.durationText || "-");
  const applyLabel = alreadyApplied
    ? "신청완료"
    : !canApply
      ? "신청권한 없음"
      : recruitStatusKey === "planned"
        ? "모집예정"
        : recruitStatusKey === "closed"
          ? "모집마감"
          : "교육 신청하기";
  const isApplyFormVisible = state.educationApplyFormScheduleId === selectedSchedule.id && !applyDisabled;
  const positionOptions = ["임원", "수석", "책임", "선임", "사원"];
  const defaultPosition = positionOptions.includes(identity.position) ? identity.position : "";
  const applyFormMarkup = isApplyFormVisible
    ? `
      <form class="education-apply-form" data-education-apply-form="${selectedSchedule.id}">
        <div class="education-apply-form-grid">
          <label class="form-field">
            <span>법인명</span>
            <input name="company" type="text" value="${escapeHtml(identity.company || "")}" readonly>
          </label>
          <label class="form-field">
            <span>부서명</span>
            <input name="department" type="text" value="${escapeHtml(identity.department || "")}" readonly>
          </label>
          <label class="form-field">
            <span>이름</span>
            <input name="name" type="text" value="${escapeHtml(identity.name || "")}" readonly>
          </label>
          <label class="form-field">
            <span>직책</span>
            <select name="position" required>
              <option value="">선택하세요</option>
              ${positionOptions
    .map((position) => `<option value="${escapeHtml(position)}" ${position === defaultPosition ? "selected" : ""}>${escapeHtml(position)}</option>`)
    .join("")}
            </select>
          </label>
          <label class="form-field">
            <span>이메일</span>
            <input name="email" type="email" value="${escapeHtml(identity.email || "")}" readonly>
          </label>
          <label class="form-field">
            <span>휴대전화번호</span>
            <input name="phone" type="tel" placeholder="예: 010-1234-5678" value="${escapeHtml(identity.phone || "")}" required>
          </label>
          <label class="form-field">
            <span>노트북 지참여부</span>
            <select name="notebookRequired" required>
              <option value="">선택하세요</option>
              <option value="개인노트북 지참">개인노트북 지참</option>
              <option value="교육장노트북활용">교육장노트북활용</option>
            </select>
          </label>
          <label class="form-field">
            <span>주민등록번호</span>
            <input name="residentRegistrationNo" type="text" placeholder="예: 900101-1234567" required>
          </label>
        </div>
        <small class="education-apply-help">*주민등록번호는 교육비 환급시 필요한 정보입니다.</small>
        <div class="education-apply-form-actions">
          <button type="button" class="secondary-button" data-education-apply-cancel>취소</button>
          <button type="submit" class="primary-button">신청 제출</button>
        </div>
      </form>
    `
    : "";

  elements.educationScheduleDetail.innerHTML = `
    <div class="education-detail-head">
      <h4>${escapeHtml(getEducationAdminDisplayCourseName(selectedSchedule, selectedCourse))}</h4>
    </div>
    <p class="education-detail-copy">${escapeHtml(selectedSchedule.note || selectedCourse?.curriculum || "과정 소개 정보가 없습니다.")}</p>
    <ul class="education-detail-list">
      <li><span>대/중분류</span><strong>${escapeHtml(`${selectedSchedule.majorCategory || selectedCourse?.majorCategory || "-"} · ${selectedSchedule.middleCategory || selectedCourse?.subCategory || "-"}`)}</strong></li>
      <li><span>추천 대상</span><strong>${escapeHtml(selectedSchedule.recommendedTarget || selectedCourse?.recommendedFor || selectedCourse?.targetLevel || "-")}</strong></li>
      <li><span>신청인원/정원</span><strong>${escapeHtml(`${enrollmentCount}/${capacity}`)}</strong></li>
      <li><span>교육 시간</span><strong>${escapeHtml(durationLabel)}</strong></li>
      <li><span>일정</span><strong>${escapeHtml(getEducationDateRangeLabel(selectedSchedule.startDate, selectedSchedule.endDate))}</strong></li>
      <li><span>접수기간</span><strong>${escapeHtml(getEducationDateRangeLabel(selectedSchedule.applicationStartDate, selectedSchedule.applicationEndDate))}</strong></li>
      <li><span>모집상태</span><strong><span class="education-recruit-badge is-${recruitStatusKey}">${escapeHtml(recruitStatusLabel)}</span></strong></li>
      <li><span>장소</span><strong>${escapeHtml(selectedSchedule.location || "-")}</strong></li>
    </ul>
    <button
      type="button"
      class="primary-button education-apply-button ${recruitStatusKey === "closed" ? "is-closed" : ""} ${alreadyApplied ? "is-complete" : ""}"
      data-education-apply-toggle="${selectedSchedule.id}"
      ${applyDisabled ? "disabled" : ""}
    >${applyLabel}</button>
    ${applyFormMarkup}
  `;
}

function getActiveSurveyQuestions() {
  const selectedForm = getSelectedSurveyForm();
  if (!selectedForm) {
    return [];
  }
  return selectedForm.questions
    .filter((question) => question.active)
    .sort((left, right) => left.order - right.order);
}

function getSurveyFormById(formId) {
  if (!formId) {
    return null;
  }
  return surveyForms.find((form) => form.id === formId) || null;
}

function getSelectedSurveyForm() {
  const sortedForms = [...surveyForms].sort((left, right) => left.order - right.order);
  const selected = sortedForms.find((form) => form.id === state.selectedSurveyFormId) || sortedForms[0] || null;
  if (selected && state.selectedSurveyFormId !== selected.id) {
    state.selectedSurveyFormId = selected.id;
  }
  return selected;
}

function getActiveSurveyQuestionsByFormId(formId) {
  const form = getSurveyFormById(formId) || getSelectedSurveyForm();
  if (!form) {
    return [];
  }
  return [...form.questions]
    .filter((question) => question.active)
    .sort((left, right) => left.order - right.order);
}

function syncEducationAdminSurveyFormOptions(preferredFormId = "") {
  const selectField = elements.educationAdminSurveyForm;
  if (!selectField) {
    return "";
  }
  const sortedForms = [...surveyForms].sort((left, right) => left.order - right.order);
  const options = sortedForms.length
    ? sortedForms.map((form) => ({ value: form.id, label: form.name }))
    : [{ value: "", label: "기본 설문" }];
  const currentValue = String(selectField.value || "").trim();
  const nextValue = options.some((option) => option.value === preferredFormId)
    ? preferredFormId
    : (options.some((option) => option.value === currentValue) ? currentValue : options[0].value);
  selectField.innerHTML = options
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
    .join("");
  selectField.value = nextValue;
  return nextValue;
}

function getSurveyResponseByEnrollment(enrollmentId) {
  return surveyResponses.find((response) => response.enrollmentId === enrollmentId) || null;
}

function upsertSurveyResponse(responsePayload) {
  const normalized = normalizeSurveyResponse(responsePayload, responsePayload.id);
  const index = surveyResponses.findIndex((response) => response.enrollmentId === normalized.enrollmentId);
  if (index >= 0) {
    surveyResponses.splice(index, 1, normalized);
  } else {
    surveyResponses.unshift(normalized);
  }
  saveSurveyResponses();
  return normalized;
}

function renderMyLearningPage() {
  if (!elements.myLearningTableBody || !elements.myLearningUpcomingList || !elements.myLearningEvaluationPanel) {
    return;
  }

  const myEnrollments = getMyLearningEnrollments();
  const rows = myEnrollments.map((enrollment) => {
    const schedule = getEducationScheduleById(enrollment.scheduleId);
    const course = schedule ? getEducationCourseById(schedule.courseId) : null;
    const status = getEducationLearningStatus(enrollment, schedule);
    const surveyResponse = getSurveyResponseByEnrollment(enrollment.id);
    return {
      enrollment,
      schedule,
      course,
      status,
      surveyResponse,
    };
  });

  const completedRows = rows.filter((row) => row.enrollment.completed);
  const inProgressRows = rows.filter((row) => !row.enrollment.completed && row.schedule?.status === "in_progress");
  const scoreList = completedRows
    .map((row) => parseNumber(row.enrollment.satisfaction, 0))
    .filter((score) => score > 0);
  const averageScore = scoreList.length ? (scoreList.reduce((sum, score) => sum + score, 0) / scoreList.length) : 0;

  if (elements.myLearningMetricApplied) {
    elements.myLearningMetricApplied.textContent = String(rows.length);
  }
  if (elements.myLearningMetricProgress) {
    elements.myLearningMetricProgress.textContent = String(inProgressRows.length);
  }
  if (elements.myLearningMetricCompleted) {
    elements.myLearningMetricCompleted.textContent = String(completedRows.length);
  }
  if (elements.myLearningMetricScore) {
    elements.myLearningMetricScore.textContent = averageScore ? averageScore.toFixed(2) : "0.00";
  }

  if (!rows.length) {
    elements.myLearningTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-state">신청한 교육 과정이 없습니다. 교육/시험일정에서 원하는 과정을 신청해 주세요.</td>
      </tr>
    `;
    elements.myLearningUpcomingList.innerHTML = '<div class="empty-state">다가오는 일정이 없습니다.</div>';
    elements.myLearningEvaluationPanel.hidden = true;
    state.myLearningEvaluationEnrollmentId = null;
    return;
  }

  if (!rows.some((row) => row.enrollment.id === state.myLearningEvaluationEnrollmentId)) {
    state.myLearningEvaluationEnrollmentId = null;
  }

  elements.myLearningTableBody.innerHTML = rows
    .map((row) => {
      const completionLabel = row.enrollment.completed ? "수료완료" : "미수료";
      const completionClass = row.enrollment.completed ? "is-completed" : "is-incomplete";
      const scoreValue = row.surveyResponse?.averageScore ?? row.enrollment.satisfaction;
      const isEvaluationCompleted = Boolean(row.surveyResponse) || Number(row.enrollment.satisfaction) > 0;
      const satisfactionLabel = scoreValue
        ? `${Number(scoreValue).toFixed(1)}점`
        : "미평가";
      const evaluationButtonLabel = isEvaluationCompleted ? "평가완료" : "평가";
      const isSelectedEvaluation = row.enrollment.id === state.myLearningEvaluationEnrollmentId;

      return `
        <tr>
          <td>${escapeHtml(getEducationAdminDisplayCourseName(row.schedule || {}, row.course))}</td>
          <td>${escapeHtml(row.schedule ? getEducationDateRangeLabel(row.schedule.startDate, row.schedule.endDate) : "-")}</td>
          <td><span class="learning-status-badge ${completionClass}">${escapeHtml(completionLabel)}</span></td>
          <td>
            <div class="learning-evaluation-cell">
              <span class="learning-evaluation-score">${escapeHtml(satisfactionLabel)}</span>
              <button
                type="button"
                class="outline-button learning-evaluate-button ${isSelectedEvaluation ? "is-active" : ""} ${isEvaluationCompleted ? "is-complete" : ""}"
                data-learning-evaluate="${row.enrollment.id}"
                ${isEvaluationCompleted ? "disabled" : ""}
              >${evaluationButtonLabel}</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  if (!state.myLearningEvaluationEnrollmentId) {
    elements.myLearningEvaluationPanel.hidden = true;
  } else {
    const selectedRow = rows.find((row) => row.enrollment.id === state.myLearningEvaluationEnrollmentId) || null;
    if (!selectedRow) {
      elements.myLearningEvaluationPanel.hidden = true;
    } else {
      const scheduleSurveyFormId = selectedRow.schedule?.surveyFormId || "";
      const scheduleSurveyForm = getSurveyFormById(scheduleSurveyFormId) || getSelectedSurveyForm();
      const activeQuestions = getActiveSurveyQuestionsByFormId(scheduleSurveyForm?.id || "");
      const existingResponse = selectedRow.surveyResponse;
      if (existingResponse) {
        state.myLearningEvaluationEnrollmentId = null;
        elements.myLearningEvaluationPanel.hidden = true;
        return;
      }
      const answerMap = new Map((existingResponse?.answers || []).map((answer) => [answer.questionId, answer.value]));
      const questionMarkup = activeQuestions.map((question, index) => {
        if (question.type === "scale") {
          const currentValue = Number(answerMap.get(question.id));
          const scoreOptions = [1, 2, 3, 4, 5];
          return `
            <label class="form-field">
              <span>${escapeHtml(`${index + 1}. ${question.text}`)}</span>
              <div class="learning-rating-scale" role="radiogroup" aria-label="${escapeHtml(question.text)}">
                <span class="learning-rating-edge-label">매우 만족하지 않음</span>
                ${scoreOptions.map((value, optionIndex) => `
                  <label class="learning-rating-option">
                    <span class="learning-rating-number">${value}</span>
                    <input
                      type="radio"
                      name="q_${question.id}"
                      value="${value}"
                      ${currentValue === value ? "checked" : ""}
                      ${optionIndex === 0 ? "required" : ""}
                    >
                    <span class="learning-rating-dot" aria-hidden="true"></span>
                  </label>
                `).join("")}
                <span class="learning-rating-edge-label is-end">매우 만족함</span>
              </div>
            </label>
          `;
        }
        return `
          <label class="form-field form-field-full">
            <span>${escapeHtml(`${index + 1}. ${question.text}`)}</span>
            <textarea name="q_${question.id}" rows="3" placeholder="답변을 입력해 주세요.">${escapeHtml(String(answerMap.get(question.id) || ""))}</textarea>
          </label>
        `;
      }).join("");

      elements.myLearningEvaluationPanel.hidden = false;
      elements.myLearningEvaluationPanel.innerHTML = `
        <form class="learning-evaluation-form" data-learning-evaluation-form="${selectedRow.enrollment.id}">
          <div class="learning-evaluation-head">
            <strong>${escapeHtml(getEducationAdminDisplayCourseName(selectedRow.schedule || {}, selectedRow.course))}</strong>
            <span>${escapeHtml(selectedRow.schedule ? getEducationDateRangeLabel(selectedRow.schedule.startDate, selectedRow.schedule.endDate) : "-")}</span>
            <span>${escapeHtml(`설문지: ${scheduleSurveyForm?.name || "기본 설문"}`)}</span>
          </div>
          <div class="learning-evaluation-fields">
            ${questionMarkup || '<div class="empty-state">활성화된 설문 문항이 없습니다. 설문관리에서 문항을 먼저 구성해 주세요.</div>'}
          </div>
          <div class="learning-evaluation-actions">
            <button type="button" class="secondary-button" data-learning-evaluation-close>닫기</button>
            <button type="submit" class="primary-button" ${activeQuestions.length ? "" : "disabled"}>평가 저장</button>
          </div>
        </form>
      `;
    }
  }

  const upcomingRows = rows
    .filter((row) => row.schedule && !row.enrollment.completed)
    .sort((left, right) => left.schedule.startDate.localeCompare(right.schedule.startDate));

  if (!upcomingRows.length) {
    elements.myLearningUpcomingList.innerHTML = '<div class="empty-state">다가오는 일정이 없습니다.</div>';
    return;
  }

  elements.myLearningUpcomingList.innerHTML = upcomingRows
    .slice(0, 6)
    .map((row, index) => `
      <div class="learning-upcoming-item fade-up" style="animation-delay:${index * 45}ms">
        <strong>${escapeHtml(getEducationAdminDisplayCourseName(row.schedule || {}, row.course))}</strong>
        <span>${escapeHtml(getEducationDateRangeLabel(row.schedule.startDate, row.schedule.endDate))}</span>
        <p>${escapeHtml(`${row.schedule.location} · ${row.course?.track || "트랙미정"}`)}</p>
      </div>
    `)
    .join("");
}

function buildEducationAdminRows() {
  return educationSchedules
    .map((schedule) => {
      const course = getEducationCourseById(schedule.courseId);
      const netCost = getEducationNetCost(schedule);
      const perPersonCost = getEducationCostPerPerson(schedule);
      const majorCategory = getEducationAdminDivisionValue(schedule, course);
      const middleCategory = String(schedule.middleCategory || course?.subCategory || "-").trim() || "-";
      const smallCategory = getEducationAdminDisplayCourseName(schedule, course);
      const recommendedTarget = String(schedule.recommendedTarget || course?.recommendedFor || course?.targetLevel || "-").trim() || "-";
      const requiredType = String(schedule.requiredType || course?.requiredType || "-").trim() || "-";
      const daysText = String(schedule.daysText || course?.durationText || "-").trim() || "-";
      const hoursText = String(schedule.hoursText || (course?.trainingHours ? `${course.trainingHours}시간` : "-")).trim() || "-";
      const seasonText = String(schedule.seasonText || getEducationAdminDefaultSeason(schedule.startDate)).trim() || "-";
      const targetDateText = String(schedule.targetDateText || getEducationAdminDefaultTargetDate(schedule.startDate, schedule.endDate)).trim() || "-";
      const completionState = getEducationAdminCompletionStateLabel(schedule);
      const operatorDept = String(schedule.operatorDept || "-").trim() || "-";
      const refundRate = getEducationAdminRefundRate(schedule);
      const year = getEducationAdminScheduleYear(schedule);

      return {
        schedule,
        course,
        netCost,
        perPersonCost,
        year,
        majorCategory,
        middleCategory,
        smallCategory,
        recommendedTarget,
        requiredType,
        daysText,
        hoursText,
        seasonText,
        targetDateText,
        completionState,
        operatorDept,
        refundRate,
      };
    })
    .sort((left, right) =>
      left.schedule.startDate.localeCompare(right.schedule.startDate) || left.schedule.id.localeCompare(right.schedule.id));
}

function getEducationAdminYearOptions(rows = buildEducationAdminRows()) {
  return Array.from(new Set(
    rows
      .map((row) => row.year)
      .filter((year) => /^\d{4}$/.test(year)),
  )).sort((left, right) => right.localeCompare(left));
}

function getEducationAdminDivisionOptions(rows = buildEducationAdminRows()) {
  return Array.from(new Set(
    rows
      .map((row) => row.majorCategory)
      .filter((category) => Boolean(String(category || "").trim())),
  )).sort((left, right) => left.localeCompare(right, "ko-KR"));
}

function renderEducationAdminFilterOptions(rows = buildEducationAdminRows()) {
  const yearOptions = getEducationAdminYearOptions(rows);
  if (state.educationAdminYear !== "all" && !yearOptions.includes(state.educationAdminYear)) {
    const currentYear = String(REFERENCE_DATE.getFullYear());
    state.educationAdminYear = yearOptions.includes(currentYear) ? currentYear : "all";
  }

  if (elements.educationAdminYearFilter) {
    elements.educationAdminYearFilter.innerHTML = [
      '<option value="all">전체 연도</option>',
      ...yearOptions.map((year) => `<option value="${year}">${year}년</option>`),
    ].join("");
    elements.educationAdminYearFilter.value = state.educationAdminYear;
  }

  const divisionOptions = getEducationAdminDivisionOptions(rows);
  if (state.educationAdminDivision !== "all" && !divisionOptions.includes(state.educationAdminDivision)) {
    state.educationAdminDivision = "all";
  }

  if (elements.educationAdminDivisionFilter) {
    elements.educationAdminDivisionFilter.innerHTML = [
      '<option value="all">전체 구분</option>',
      ...divisionOptions.map((division) => `<option value="${escapeHtml(division)}">${escapeHtml(division)}</option>`),
    ].join("");
    elements.educationAdminDivisionFilter.value = state.educationAdminDivision;
  }

  const allowedStatusFilter = ["all", "planned", "in_progress", "completed", "completed_needs_settlement", "settled"];
  if (!allowedStatusFilter.includes(state.educationAdminStatus)) {
    state.educationAdminStatus = "all";
  }
  if (elements.educationAdminStatusFilter) {
    elements.educationAdminStatusFilter.value = state.educationAdminStatus;
  }

  if (elements.educationAdminSearchInput) {
    elements.educationAdminSearchInput.value = state.educationAdminSearch;
  }
}

function syncEducationAdminActionButtons(filteredRows = []) {
  const canManage = hasEducationAdminAccess();
  const hasSelected = Boolean(
    filteredRows.length && filteredRows.some((row) => row.schedule.id === state.selectedEducationAdminId),
  );
  const hasChecked = getSelectedEducationAdminIds().length > 0;

  if (elements.addEducationAdminButton) {
    elements.addEducationAdminButton.hidden = !canManage;
  }
  if (elements.editEducationAdminButton) {
    elements.editEducationAdminButton.hidden = !canManage;
    elements.editEducationAdminButton.disabled = !canManage || !hasSelected;
  }
  if (elements.deleteEducationAdminButton) {
    elements.deleteEducationAdminButton.hidden = !canManage;
    elements.deleteEducationAdminButton.disabled = !canManage || (!hasSelected && !hasChecked);
  }
}

function openEducationAdminModal(mode, scheduleId = null) {
  if (!elements.educationAdminModal || !elements.educationAdminForm) {
    return;
  }

  state.educationAdminModalMode = mode;
  state.editingEducationAdminId = scheduleId;

  if (mode === "edit" && scheduleId) {
    const schedule = getEducationScheduleById(scheduleId);
    if (!schedule) {
      return;
    }

    elements.educationAdminModalTitle.textContent = "교육 운영 항목 수정";
    elements.educationAdminFormSubmit.textContent = "수정 저장";
    populateEducationAdminForm(schedule);
  } else {
    elements.educationAdminModalTitle.textContent = "신규 교육 등록";
    elements.educationAdminFormSubmit.textContent = "등록하기";
    resetEducationAdminForm();
  }

  elements.educationAdminModal.hidden = false;
  syncBodyModalState();
  window.setTimeout(() => elements.educationAdminSmallCategory?.focus(), 0);
}

function closeEducationAdminModal() {
  if (!elements.educationAdminModal) {
    return;
  }

  elements.educationAdminModal.hidden = true;
  state.editingEducationAdminId = null;
  syncBodyModalState();
}

function resetEducationAdminForm() {
  if (!elements.educationAdminForm) {
    return;
  }

  elements.educationAdminForm.reset();
  const defaultDate = toIsoDate(REFERENCE_DATE);
  if (elements.educationAdminStartDate) {
    elements.educationAdminStartDate.value = defaultDate;
  }
  if (elements.educationAdminEndDate) {
    elements.educationAdminEndDate.value = defaultDate;
  }
  if (elements.educationAdminApplicationStartDate) {
    elements.educationAdminApplicationStartDate.value = defaultDate;
  }
  if (elements.educationAdminApplicationEndDate) {
    elements.educationAdminApplicationEndDate.value = defaultDate;
  }
  if (elements.educationAdminSeasonText) {
    elements.educationAdminSeasonText.value = getEducationAdminDefaultSeason(defaultDate);
  }
  if (elements.educationAdminTargetDateText) {
    elements.educationAdminTargetDateText.value = getEducationAdminDefaultTargetDate(defaultDate, defaultDate);
  }
  if (elements.educationAdminStatusField) {
    elements.educationAdminStatusField.value = "planned";
  }
  if (elements.educationAdminCompletionState) {
    elements.educationAdminCompletionState.value = "미진행";
  }
  if (elements.educationAdminMajorCategory) {
    elements.educationAdminMajorCategory.value = "리더십";
  }
  if (elements.educationAdminRequiredType) {
    elements.educationAdminRequiredType.value = "필수";
  }
  syncEducationAdminSurveyFormOptions(surveyForms[0]?.id || "");
  if (elements.educationAdminDaysText) {
    ensureEducationAdminSelectOption(elements.educationAdminDaysText, "1일");
    elements.educationAdminDaysText.value = "1일";
  }
  if (elements.educationAdminOvernightStay) {
    elements.educationAdminOvernightStay.checked = false;
  }
  if (elements.educationAdminHoursText) {
    ensureEducationAdminSelectOption(elements.educationAdminHoursText, "8시간");
    elements.educationAdminHoursText.value = "8시간";
  }
  if (elements.educationAdminOperatorDept) {
    elements.educationAdminOperatorDept.value = "경영혁신실";
  }
  if (elements.educationAdminAttendees) {
    elements.educationAdminAttendees.value = "0";
  }
  if (elements.educationAdminAvgScore) {
    elements.educationAdminAvgScore.value = "";
  }
  if (elements.educationAdminCapacity) {
    elements.educationAdminCapacity.value = "20";
  }
  if (elements.educationAdminLocation) {
    elements.educationAdminLocation.value = "미정";
  }
  if (elements.educationAdminTotalCost) {
    elements.educationAdminTotalCost.value = "0";
  }
  if (elements.educationAdminRefundAmount) {
    elements.educationAdminRefundAmount.value = "0";
  }
}

function populateEducationAdminForm(schedule) {
  const course = getEducationCourseById(schedule.courseId);
  if (elements.educationAdminMajorCategory) {
    elements.educationAdminMajorCategory.value = normalizeEducationAdminMajorCategory(
      schedule.majorCategory || course?.majorCategory || "",
    );
  }
  if (elements.educationAdminMiddleCategory) {
    elements.educationAdminMiddleCategory.value = schedule.middleCategory || course?.subCategory || "";
  }
  if (elements.educationAdminSmallCategory) {
    elements.educationAdminSmallCategory.value = getEducationAdminDisplayCourseName(schedule, course);
  }
  if (elements.educationAdminRecommendedTarget) {
    elements.educationAdminRecommendedTarget.value = schedule.recommendedTarget || course?.recommendedFor || course?.targetLevel || "";
  }
  if (elements.educationAdminRequiredType) {
    elements.educationAdminRequiredType.value = schedule.requiredType || course?.requiredType || "필수";
  }
  syncEducationAdminSurveyFormOptions(schedule.surveyFormId || surveyForms[0]?.id || "");
  if (elements.educationAdminDaysText) {
    const daysInfo = parseEducationAdminDaysInfo(schedule.daysText || course?.durationText || "");
    const dayValue = `${daysInfo.daysCount}일`;
    ensureEducationAdminSelectOption(elements.educationAdminDaysText, dayValue);
    elements.educationAdminDaysText.value = dayValue;
    if (elements.educationAdminOvernightStay) {
      elements.educationAdminOvernightStay.checked = daysInfo.overnight;
    }
  }
  if (elements.educationAdminHoursText) {
    const hourValue = formatEducationAdminHoursText(
      parseEducationAdminHoursCount(schedule.hoursText || (course?.trainingHours ? `${course.trainingHours}시간` : "")),
    );
    ensureEducationAdminSelectOption(elements.educationAdminHoursText, hourValue);
    elements.educationAdminHoursText.value = hourValue;
  }
  if (elements.educationAdminSeasonText) {
    elements.educationAdminSeasonText.value = schedule.seasonText || getEducationAdminDefaultSeason(schedule.startDate);
  }
  if (elements.educationAdminTargetDateText) {
    elements.educationAdminTargetDateText.value = schedule.targetDateText || getEducationAdminDefaultTargetDate(schedule.startDate, schedule.endDate);
  }
  if (elements.educationAdminStartDate) {
    elements.educationAdminStartDate.value = schedule.startDate;
  }
  if (elements.educationAdminEndDate) {
    elements.educationAdminEndDate.value = schedule.endDate;
  }
  if (elements.educationAdminApplicationStartDate) {
    elements.educationAdminApplicationStartDate.value = schedule.applicationStartDate || schedule.startDate;
  }
  if (elements.educationAdminApplicationEndDate) {
    elements.educationAdminApplicationEndDate.value = schedule.applicationEndDate || schedule.applicationStartDate || schedule.startDate;
  }
  if (elements.educationAdminStatusField) {
    elements.educationAdminStatusField.value = schedule.status;
  }
  if (elements.educationAdminCompletionState) {
    elements.educationAdminCompletionState.value = normalizeEducationAdminCompletionState(
      getEducationAdminCompletionStateLabel(schedule),
      schedule.status,
    );
  }
  if (elements.educationAdminOperatorDept) {
    elements.educationAdminOperatorDept.value = normalizeEducationAdminOperatorDept(schedule.operatorDept);
  }
  if (elements.educationAdminAttendees) {
    elements.educationAdminAttendees.value = String(Math.max(0, parseNumber(schedule.attendees, 0)));
  }
  if (elements.educationAdminAvgScore) {
    elements.educationAdminAvgScore.value = schedule.avgScore ? String(schedule.avgScore) : "";
  }
  if (elements.educationAdminCapacity) {
    elements.educationAdminCapacity.value = String(Math.max(1, parseNumber(schedule.capacity, 20)));
  }
  if (elements.educationAdminLocation) {
    elements.educationAdminLocation.value = schedule.location || "";
  }
  if (elements.educationAdminTotalCost) {
    elements.educationAdminTotalCost.value = String(Math.max(0, parseNumber(schedule.totalCost, 0)));
  }
  if (elements.educationAdminRefundAmount) {
    elements.educationAdminRefundAmount.value = String(Math.max(0, parseNumber(schedule.refundAmount, 0)));
  }
  if (elements.educationAdminNote) {
    elements.educationAdminNote.value = schedule.note || "";
  }
}

function readEducationAdminFormValues() {
  if (!elements.educationAdminForm) {
    return {};
  }

  const formData = new FormData(elements.educationAdminForm);
  const previousSchedule = state.educationAdminModalMode === "edit" && state.editingEducationAdminId
    ? getEducationScheduleById(state.editingEducationAdminId)
    : null;

  const startDate = String(formData.get("startDate") || toIsoDate(REFERENCE_DATE));
  const endDate = String(formData.get("endDate") || startDate);
  const applicationStartDate = String(formData.get("applicationStartDate") || previousSchedule?.applicationStartDate || startDate);
  const applicationEndDate = String(formData.get("applicationEndDate") || previousSchedule?.applicationEndDate || applicationStartDate);
  const status = String(formData.get("status") || "planned");
  const smallCategory = String(formData.get("smallCategory") || "").trim();
  const courseId = resolveEducationCourseIdByTitle(
    smallCategory,
    previousSchedule?.courseId || educationCoursesMaster[0]?.id || "",
  );
  const seasonText = String(formData.get("seasonText") || "").trim() || getEducationAdminDefaultSeason(startDate);
  const targetDateText = String(formData.get("targetDateText") || "").trim() || getEducationAdminDefaultTargetDate(startDate, endDate);
  const completionState = normalizeEducationAdminCompletionState(formData.get("completionState"), status);
  const attendeesInput = formData.get("attendees");
  const avgScoreInput = formData.get("avgScore");
  const totalCostInput = formData.get("totalCost");
  const refundAmountInput = formData.get("refundAmount");
  const daysInfo = parseEducationAdminDaysInfo(formData.get("daysText"));
  const overnightStay = String(formData.get("overnightStay") || "").toLowerCase() === "yes";
  const daysText = formatEducationAdminDaysText(daysInfo.daysCount, overnightStay);
  const hoursText = formatEducationAdminHoursText(parseEducationAdminHoursCount(formData.get("hoursText")));

  return {
    id: state.educationAdminModalMode === "edit" ? state.editingEducationAdminId : undefined,
    courseId,
    startDate,
    endDate,
    applicationStartDate,
    applicationEndDate,
    status,
    majorCategory: normalizeEducationAdminMajorCategory(formData.get("majorCategory")),
    middleCategory: formData.get("middleCategory"),
    smallCategory,
    recommendedTarget: formData.get("recommendedTarget"),
    requiredType: formData.get("requiredType"),
    surveyFormId: formData.get("surveyFormId") || previousSchedule?.surveyFormId || surveyForms[0]?.id || "",
    daysText,
    hoursText,
    seasonText,
    targetDateText,
    completionState,
    year: String(startDate || "").slice(0, 4),
    operatorDept: normalizeEducationAdminOperatorDept(formData.get("operatorDept")),
    attendees: attendeesInput == null ? (previousSchedule?.attendees ?? 0) : attendeesInput,
    avgScore: avgScoreInput == null ? (previousSchedule?.avgScore ?? "") : avgScoreInput,
    capacity: formData.get("capacity"),
    location: formData.get("location"),
    totalCost: totalCostInput == null ? (previousSchedule?.totalCost ?? 0) : totalCostInput,
    refundAmount: refundAmountInput == null ? (previousSchedule?.refundAmount ?? 0) : refundAmountInput,
    note: formData.get("note"),
  };
}

function upsertEducationAdminSchedule(scheduleData) {
  const previousSchedule = state.educationAdminModalMode === "edit" && state.editingEducationAdminId
    ? getEducationScheduleById(state.editingEducationAdminId)
    : null;

  const normalized = normalizeEducationSchedule({
    ...previousSchedule,
    ...scheduleData,
    id: state.educationAdminModalMode === "edit"
      ? state.editingEducationAdminId
      : (scheduleData.id || generateEducationScheduleId()),
  });

  if (state.educationAdminModalMode === "edit" && state.editingEducationAdminId) {
    const index = educationSchedules.findIndex((schedule) => schedule.id === state.editingEducationAdminId);
    if (index >= 0) {
      educationSchedules.splice(index, 1, normalized);
    }
  } else {
    educationSchedules.unshift(normalized);
    state.educationAdminPage = 1;
  }

  saveEducationSchedules();
  state.selectedEducationAdminId = normalized.id;
  state.selectedEducationScheduleId = normalized.id;
  if (isValidDateString(normalized.startDate)) {
    const startCursor = parseDate(normalized.startDate);
    state.educationMonth = getEducationMonthKey(startCursor);
    state.selectedEducationDate = normalized.startDate;
  }
  state.selectedEducationAdminIds = [];
  state.educationAdminYear = getEducationAdminScheduleYear(normalized) || state.educationAdminYear;
  closeEducationAdminModal();
  render();
}

function deleteEducationAdminSchedules(scheduleIds = []) {
  const targetIds = Array.from(new Set(
    scheduleIds.filter((scheduleId) => getEducationScheduleById(scheduleId)),
  ));

  if (!targetIds.length) {
    return;
  }

  const targetSchedule = targetIds.length === 1 ? getEducationScheduleById(targetIds[0]) : null;
  const targetLabel = targetSchedule
    ? getEducationAdminDisplayCourseName(targetSchedule, getEducationCourseById(targetSchedule.courseId))
    : "선택 항목";
  const shouldDelete = targetIds.length === 1
    ? window.confirm(`"${targetLabel}" 과정을 삭제할까요?\n삭제 시 연결된 신청 이력도 함께 제거됩니다.`)
    : window.confirm(`선택한 교육 운영 항목 ${targetIds.length}건을 삭제할까요?\n삭제 시 연결된 신청 이력도 함께 제거됩니다.`);

  if (!shouldDelete) {
    return;
  }

  educationSchedules = educationSchedules.filter((schedule) => !targetIds.includes(schedule.id));
  educationEnrollments = educationEnrollments.filter((enrollment) => !targetIds.includes(enrollment.scheduleId));
  targetIds.forEach((scheduleId) => {
    if (hasEducationCostDetails(scheduleId)) {
      delete educationCostDetailsBySchedule[scheduleId];
    }
  });
  state.selectedEducationAdminIds = getSelectedEducationAdminIds().filter((id) => !targetIds.includes(id));

  if (targetIds.includes(state.selectedEducationAdminId)) {
    state.selectedEducationAdminId = educationSchedules[0]?.id ?? null;
  }
  if (targetIds.includes(state.selectedEducationScheduleId)) {
    state.selectedEducationScheduleId = educationSchedules[0]?.id ?? null;
  }
  if (state.editingEducationAdminId && targetIds.includes(state.editingEducationAdminId)) {
    closeEducationAdminModal();
  }

  saveEducationSchedules();
  saveEducationEnrollments();
  saveEducationCostDetails();
  render();
}

function syncEducationCostTableHeader() {
  if (!elements.educationCostTableBody) {
    return;
  }

  const table = elements.educationCostTableBody.closest("table");
  const header = table?.querySelector("thead");
  if (!header) {
    return;
  }

  header.innerHTML = `
    <tr>
      <th scope="col">구분</th>
      <th scope="col">세부 내용</th>
      <th scope="col">단가</th>
      <th scope="col">수량(시간/인원)</th>
      <th scope="col">예상비용</th>
      <th scope="col">비고</th>
      <th scope="col">삭제</th>
    </tr>
  `;
}

function renderEducationCostTableRows(scheduleId) {
  if (!elements.educationCostTableBody) {
    return;
  }

  const items = getEducationCostItems(scheduleId);
  if (!items.length) {
    elements.educationCostTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-state">비용 상세 항목이 없습니다. 우측의 "행 추가" 버튼으로 입력해 주세요.</td>
      </tr>
    `;
    return;
  }

  elements.educationCostTableBody.innerHTML = items
    .map((item) => `
      <tr>
        <td>
          <select data-education-cost-field="category" data-education-cost-row-id="${item.id}">
            ${educationCostCategoryOptions
              .map((category) => `<option value="${escapeHtml(category)}" ${category === item.category ? "selected" : ""}>${escapeHtml(category)}</option>`)
              .join("")}
          </select>
        </td>
        <td>
          <input
            type="text"
            value="${escapeHtml(item.detail)}"
            placeholder="세부 내역"
            data-education-cost-field="detail"
            data-education-cost-row-id="${item.id}"
          >
        </td>
        <td>
          <input
            type="number"
            min="0"
            step="1"
            value="${item.unitCost}"
            data-education-cost-field="unitCost"
            data-education-cost-row-id="${item.id}"
          >
        </td>
        <td>
          <input
            type="number"
            min="0"
            step="0.1"
            value="${item.quantity}"
            data-education-cost-field="quantity"
            data-education-cost-row-id="${item.id}"
          >
        </td>
        <td class="education-cost-estimated-cell">${escapeHtml(formatWon(item.estimatedCost))}</td>
        <td>
          <input
            type="text"
            value="${escapeHtml(item.note)}"
            placeholder="비고"
            data-education-cost-field="note"
            data-education-cost-row-id="${item.id}"
          >
        </td>
        <td class="education-cost-action-cell">
          <button type="button" class="ghost-button education-cost-delete-button" data-education-cost-delete-row="${item.id}">삭제</button>
        </td>
      </tr>
    `)
    .join("");
}

function setEducationCostSummaryFormula(valueNode, formulaText) {
  if (!valueNode || !valueNode.parentElement) {
    return;
  }

  let formulaNode = valueNode.parentElement.querySelector(".education-cost-summary-formula");
  if (!formulaNode) {
    formulaNode = document.createElement("small");
    formulaNode.className = "education-cost-summary-formula";
    valueNode.insertAdjacentElement("afterend", formulaNode);
  }
  formulaNode.textContent = String(formulaText || "-");
  formulaNode.title = String(formulaText || "-");
}

function getEducationCostSummarySnapshot(schedule) {
  const hasDetails = hasEducationCostDetails(schedule.id);
  return hasDetails
    ? getEducationCostSummary(schedule, getEducationCostItems(schedule.id))
    : {
      totalCost: toRoundedPositiveInteger(schedule.totalCost, 0),
      refundAmount: getEducationRefundByRule(schedule),
      netCost: Math.max(0, toRoundedPositiveInteger(schedule.totalCost, 0) - getEducationRefundByRule(schedule)),
    };
}

function renderEducationCostSummary(schedule) {
  if (!elements.educationCostTotal || !elements.educationCostRefund || !elements.educationCostNet || !elements.educationCostPerPerson) {
    return;
  }

  const hasDetails = hasEducationCostDetails(schedule.id);
  const summary = getEducationCostSummarySnapshot(schedule);
  const enrollmentCount = educationEnrollments.filter((enrollment) => enrollment.scheduleId === schedule.id).length;
  const attendees = enrollmentCount > 0
    ? enrollmentCount
    : Math.max(0, toRoundedPositiveInteger(schedule.attendees, 0));
  const perPerson = attendees > 0 ? Math.round(summary.netCost / attendees) : 0;
  const refundComponents = getEducationRefundRuleComponents(schedule);

  elements.educationCostTotal.textContent = formatWon(summary.totalCost);
  elements.educationCostRefund.textContent = formatWon(summary.refundAmount);
  elements.educationCostNet.textContent = formatWon(summary.netCost);
  elements.educationCostPerPerson.textContent = formatWon(perPerson);
  setEducationCostSummaryFormula(
    elements.educationCostTotal,
    hasDetails ? "행별 예상비용 합계(Σ)" : "상세 미입력: 총교육비 기준",
  );
  setEducationCostSummaryFormula(
    elements.educationCostRefund,
    `(6,000원×${refundComponents.hours}시간 + 식비 ${formatEducationCostFormulaNumber(refundComponents.mealCost)}원 + 숙박 ${formatEducationCostFormulaNumber(refundComponents.lodgingCost)}원) × ${refundComponents.attendees}명`,
  );
  setEducationCostSummaryFormula(
    elements.educationCostNet,
    `${formatEducationCostFormulaNumber(summary.totalCost)}원 - ${formatEducationCostFormulaNumber(summary.refundAmount)}원`,
  );
  setEducationCostSummaryFormula(
    elements.educationCostPerPerson,
    attendees > 0
      ? `${formatEducationCostFormulaNumber(summary.netCost)}원 ÷ ${attendees}명`
      : "참석인원 0명",
  );
}

function getCompanyShortLabel(company) {
  return String(company || "").replace(/^에이텍/, "") || company;
}

function renderEducationCostAllocationCards(schedule) {
  if (!elements.educationCostAllocationGrid) {
    return;
  }
  if (!schedule) {
    elements.educationCostAllocationGrid.innerHTML = "";
    return;
  }

  const summary = getEducationCostSummarySnapshot(schedule);
  const netCost = Math.max(0, summary.netCost);
  const enrollments = educationEnrollments.filter((enrollment) => enrollment.scheduleId === schedule.id);
  const totalCount = enrollments.length;
  const companyCounts = companyOptions.map((company) => ({
    company,
    count: enrollments.filter((enrollment) => enrollment.company === company).length,
  }));

  const allocations = companyCounts.map(() => 0);
  if (totalCount > 0 && netCost > 0) {
    const weighted = companyCounts.map((entry, index) => {
      const raw = entry.count > 0 ? (netCost * entry.count) / totalCount : 0;
      const base = Math.floor(raw);
      return {
        index,
        base,
        fraction: raw - base,
        count: entry.count,
      };
    });
    let remaining = netCost - weighted.reduce((sum, item) => sum + item.base, 0);
    weighted
      .filter((item) => item.count > 0)
      .sort((left, right) => right.fraction - left.fraction)
      .forEach((item) => {
        if (remaining > 0) {
          item.base += 1;
          remaining -= 1;
        }
      });
    weighted.forEach((item) => {
      allocations[item.index] = item.base;
    });
  }

  const cards = companyCounts.map((entry, index) => `
      <article class="education-cost-allocation-card">
        <span>${escapeHtml(getCompanyShortLabel(entry.company))}</span>
        <strong>${escapeHtml(formatWon(allocations[index]))}</strong>
        <small>${escapeHtml(`${entry.count}명`)}</small>
      </article>
    `).join("");

  elements.educationCostAllocationGrid.innerHTML = cards;
}

function renderEducationEnrollmentBoard(filteredRows = []) {
  if (!elements.educationEnrollmentTableBody || !elements.educationEnrollmentSelectedMeta) {
    return;
  }

  const selectedSchedule = filteredRows.find((row) => row.schedule.id === state.selectedEducationAdminId)?.schedule || null;
  const searchToken = state.educationEnrollmentSearch.toLowerCase().trim();
  const scope = state.educationEnrollmentScope === "all" ? "all" : "selected";
  const selectedCourseName = selectedSchedule
    ? getEducationAdminDisplayCourseName(selectedSchedule, getEducationCourseById(selectedSchedule.courseId))
    : "선택된 강의 없음";

  const rows = educationEnrollments
    .map((enrollment) => {
      const schedule = getEducationScheduleById(enrollment.scheduleId);
      const course = schedule ? getEducationCourseById(schedule.courseId) : null;
      return {
        enrollment,
        schedule,
        courseName: schedule ? getEducationAdminDisplayCourseName(schedule, course) : "삭제된 강의",
      };
    })
    .filter((row) => {
      const matchesScope = scope === "all"
        || (selectedSchedule ? row.enrollment.scheduleId === selectedSchedule.id : false);
      const matchesSearch = !searchToken || [
        row.courseName,
        row.enrollment.company,
        row.enrollment.department,
        row.enrollment.name,
        row.enrollment.email,
        row.enrollment.phone,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchToken);
      return matchesScope && matchesSearch;
    })
    .sort((left, right) => right.enrollment.appliedAt.localeCompare(left.enrollment.appliedAt));
  const visibleIdSet = new Set(rows.map((row) => row.enrollment.id));
  state.selectedEducationEnrollmentIds = getSelectedEducationEnrollmentIds()
    .filter((id) => visibleIdSet.has(id));
  const selectedIds = new Set(getSelectedEducationEnrollmentIds());
  const hasSelection = selectedIds.size > 0;

  if (elements.educationEnrollmentCompleteButton) {
    elements.educationEnrollmentCompleteButton.disabled = !hasSelection;
  }
  if (elements.educationEnrollmentIncompleteButton) {
    elements.educationEnrollmentIncompleteButton.disabled = !hasSelection;
  }
  if (elements.educationEnrollmentCancelButton) {
    elements.educationEnrollmentCancelButton.disabled = !hasSelection;
  }

  elements.educationEnrollmentSelectedMeta.textContent = scope === "all"
    ? `전체 강의 신청 내역 ${rows.length}건`
    : `${selectedCourseName} 신청 내역 ${rows.length}건`;

  if (!rows.length) {
    state.selectedEducationEnrollmentIds = [];
    elements.educationEnrollmentTableBody.innerHTML = `
      <tr>
        <td colspan="9" class="empty-state">표시할 신청 정보가 없습니다. 강의를 선택하거나 전체 강의로 조회해 주세요.</td>
      </tr>
    `;
    return;
  }

  elements.educationEnrollmentTableBody.innerHTML = rows
    .map((row) => `
      <tr>
        <td>
          <input
            type="checkbox"
            class="education-enrollment-checkbox"
            data-education-enrollment-select="${escapeHtml(row.enrollment.id)}"
            ${selectedIds.has(row.enrollment.id) ? "checked" : ""}
            aria-label="${escapeHtml(`${row.enrollment.name} 신청 선택`)}"
          >
        </td>
        <td title="${escapeHtml(row.courseName)}">${escapeHtml(row.courseName)}</td>
        <td title="${escapeHtml(`${row.enrollment.company || "-"} / ${row.enrollment.department || "-"}`)}">
          <div class="education-enrollment-cell-stack">
            <strong>${escapeHtml(row.enrollment.company || "-")}</strong>
            <span>${escapeHtml(row.enrollment.department || "-")}</span>
          </div>
        </td>
        <td title="${escapeHtml(`${row.enrollment.name || "-"} / ${row.enrollment.position || "-"}`)}">
          <div class="education-enrollment-cell-stack">
            <strong>${escapeHtml(row.enrollment.name || "-")}</strong>
            <span>${escapeHtml(row.enrollment.position || "-")}</span>
          </div>
        </td>
        <td title="${escapeHtml(row.enrollment.phone || "-")}">${escapeHtml(row.enrollment.phone || "-")}</td>
        <td title="${escapeHtml(row.enrollment.email || "-")}">${escapeHtml(row.enrollment.email || "-")}</td>
        <td title="${escapeHtml(row.enrollment.residentRegistrationNo || "-")}">${escapeHtml(row.enrollment.residentRegistrationNo || "-")}</td>
        <td title="${escapeHtml(row.enrollment.notebookRequired || "-")}">${escapeHtml(row.enrollment.notebookRequired || "-")}</td>
        <td title="${escapeHtml(formatDateWithYear(row.enrollment.appliedAt))}">${escapeHtml(formatDateWithYear(row.enrollment.appliedAt))}</td>
        <td title="${row.enrollment.completed ? "수료완료" : "미수료"}">${row.enrollment.completed ? "수료완료" : "미수료"}</td>
      </tr>
    `)
    .join("");
}

function getSurveyQuestionLabelFromResponse(response, questionId) {
  const form = getSurveyFormById(response?.surveyFormId || "");
  const matched = form?.questions?.find?.((question) => question.id === questionId);
  if (matched?.text) {
    return matched.text;
  }
  return "서술형 문항";
}

function renderEducationFeedbackBoard(filteredRows = []) {
  if (!elements.educationFeedbackTableBody || !elements.educationFeedbackSelectedMeta) {
    return;
  }

  const selectedSchedule = filteredRows.find((row) => row.schedule.id === state.selectedEducationAdminId)?.schedule || null;
  if (!selectedSchedule) {
    elements.educationFeedbackSelectedMeta.textContent = "선택된 강의가 없습니다.";
    elements.educationFeedbackTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-state">강의를 선택하면 서술형 의견을 확인할 수 있습니다.</td>
      </tr>
    `;
    return;
  }

  const selectedCourseName = getEducationAdminDisplayCourseName(
    selectedSchedule,
    getEducationCourseById(selectedSchedule.courseId),
  );
  const feedbackRows = surveyResponses
    .filter((response) => response.scheduleId === selectedSchedule.id)
    .flatMap((response) => response.answers
      .filter((answer) => answer.type === "text" && String(answer.value || "").trim())
      .map((answer) => ({
        question: getSurveyQuestionLabelFromResponse(response, answer.questionId),
        answer: String(answer.value || "").trim(),
        respondentName: response.respondentName || "-",
        submittedAt: response.submittedAt,
      })))
    .sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));

  elements.educationFeedbackSelectedMeta.textContent = `${selectedCourseName} 서술형 의견 ${feedbackRows.length}건`;

  if (!feedbackRows.length) {
    elements.educationFeedbackTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-state">해당 과정의 서술형 의견이 아직 없습니다.</td>
      </tr>
    `;
    return;
  }

  elements.educationFeedbackTableBody.innerHTML = feedbackRows
    .map((row) => `
      <tr>
        <td title="${escapeHtml(row.question)}">${escapeHtml(row.question)}</td>
        <td title="${escapeHtml(row.answer)}">${escapeHtml(row.answer)}</td>
        <td>${escapeHtml(row.respondentName)}</td>
        <td>${escapeHtml(formatDateWithYear(row.submittedAt))}</td>
      </tr>
    `)
    .join("");
}

function updateSelectedEducationEnrollmentsStatus(completed) {
  const targetIds = getSelectedEducationEnrollmentIds();
  if (!targetIds.length) {
    return;
  }

  educationEnrollments = educationEnrollments.map((enrollment) => (
    targetIds.includes(enrollment.id)
      ? normalizeEducationEnrollment({
        ...enrollment,
        completed,
      })
      : enrollment
  ));
  saveEducationEnrollments();
  render();
}

function cancelSelectedEducationEnrollments() {
  const targetIds = getSelectedEducationEnrollmentIds();
  if (!targetIds.length) {
    return;
  }

  const shouldCancel = window.confirm(`선택한 신청 ${targetIds.length}건을 취소할까요?\n취소 후에는 신청자 리스트에서 제거됩니다.`);
  if (!shouldCancel) {
    return;
  }

  educationEnrollments = educationEnrollments.filter((item) => !targetIds.includes(item.id));
  state.selectedEducationEnrollmentIds = [];
  saveEducationEnrollments();
  render();
}

function renderEducationCostBoard(filteredRows = []) {
  if (!elements.educationCostTableBody
    || !elements.educationCostAddRowButton
    || !elements.educationCostSelectedMeta) {
    return;
  }

  syncEducationCostTableHeader();

  const selectedRow = filteredRows.find((row) => row.schedule.id === state.selectedEducationAdminId) || filteredRows[0] || null;
  if (!selectedRow) {
    elements.educationCostSelectedMeta.textContent = "강의를 선택하면 비용/환급 상세 내역을 입력할 수 있습니다.";
    elements.educationCostAddRowButton.disabled = true;
    delete elements.educationCostAddRowButton.dataset.educationCostScheduleId;
    elements.educationCostTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-state">선택된 강의가 없습니다.</td>
      </tr>
    `;
    if (elements.educationCostTotal) {
      elements.educationCostTotal.textContent = formatWon(0);
      setEducationCostSummaryFormula(elements.educationCostTotal, "-");
    }
    if (elements.educationCostRefund) {
      elements.educationCostRefund.textContent = formatWon(0);
      setEducationCostSummaryFormula(elements.educationCostRefund, "-");
    }
    if (elements.educationCostNet) {
      elements.educationCostNet.textContent = formatWon(0);
      setEducationCostSummaryFormula(elements.educationCostNet, "-");
    }
    if (elements.educationCostPerPerson) {
      elements.educationCostPerPerson.textContent = formatWon(0);
      setEducationCostSummaryFormula(elements.educationCostPerPerson, "-");
    }
    renderEducationCostAllocationCards(null);
    return;
  }

  const scheduleId = selectedRow.schedule.id;
  elements.educationCostAddRowButton.disabled = false;
  elements.educationCostAddRowButton.dataset.educationCostScheduleId = scheduleId;
  elements.educationCostSelectedMeta.textContent = `${selectedRow.smallCategory} · ${getEducationDateRangeLabel(selectedRow.schedule.startDate, selectedRow.schedule.endDate)}`;

  renderEducationCostTableRows(scheduleId);
  renderEducationCostSummary(selectedRow.schedule);
  renderEducationCostAllocationCards(selectedRow.schedule);
}

function addEducationCostItem(scheduleId) {
  const schedule = getEducationScheduleById(scheduleId);
  if (!scheduleId || !schedule) {
    return;
  }

  const hadDetails = hasEducationCostDetails(scheduleId);
  const items = ensureEducationCostItems(scheduleId);
  const useSeedFromSchedule = !hadDetails
    && !items.length
    && toRoundedPositiveInteger(schedule.totalCost, 0) > 0;
  items.push(normalizeEducationCostItem({
    id: generateEducationCostItemId(),
    category: educationCostCategoryOptions[0],
    detail: useSeedFromSchedule ? "기존 등록 금액" : "",
    unitCost: useSeedFromSchedule ? toRoundedPositiveInteger(schedule.totalCost, 0) : 0,
    quantity: 1,
    note: "",
  }));

  educationCostDetailsBySchedule[scheduleId] = items;
  syncEducationScheduleCostSummary(scheduleId);
  saveEducationCostDetails();
  saveEducationSchedules();
  render();
}

function removeEducationCostItem(scheduleId, rowId) {
  if (!scheduleId || !rowId || !hasEducationCostDetails(scheduleId)) {
    return;
  }

  const items = getEducationCostItems(scheduleId).filter((item) => item.id !== rowId);
  educationCostDetailsBySchedule[scheduleId] = items;
  syncEducationScheduleCostSummary(scheduleId);
  saveEducationCostDetails();
  saveEducationSchedules();
  render();
}

function updateEducationCostItem(scheduleId, rowId, field, rawValue) {
  if (!scheduleId || !rowId || !hasEducationCostDetails(scheduleId)) {
    return;
  }

  const items = getEducationCostItems(scheduleId);
  const targetIndex = items.findIndex((item) => item.id === rowId);
  if (targetIndex < 0) {
    return;
  }

  const target = { ...items[targetIndex] };

  if (field === "category") {
    target.category = normalizeEducationCostCategory(rawValue);
  } else if (field === "detail") {
    target.detail = String(rawValue || "");
  } else if (field === "unitCost") {
    target.unitCost = toRoundedPositiveInteger(rawValue, target.unitCost);
  } else if (field === "quantity") {
    target.quantity = toRoundedPositiveDecimal(rawValue, target.quantity);
  } else if (field === "note") {
    target.note = String(rawValue || "");
  } else {
    return;
  }

  target.estimatedCost = calculateEducationCostEstimated(target.unitCost, target.quantity);
  const normalized = normalizeEducationCostItem(target, target.id);
  items.splice(targetIndex, 1, normalized);
  educationCostDetailsBySchedule[scheduleId] = items;

  syncEducationScheduleCostSummary(scheduleId);
  saveEducationCostDetails();
  saveEducationSchedules();
  render();
}

function renderEducationAdminDetailCard(filteredRows = []) {
  if (!elements.educationAdminDetailCard) {
    return;
  }

  if (!filteredRows.length) {
    elements.educationAdminDetailCard.innerHTML = '<div class="empty-state">선택 가능한 교육 과정이 없습니다.</div>';
    return;
  }

  const selectedRow = filteredRows.find((row) => row.schedule.id === state.selectedEducationAdminId) || filteredRows[0];
  if (!selectedRow) {
    elements.educationAdminDetailCard.innerHTML = '<div class="empty-state">선택된 교육 과정이 없습니다.</div>';
    return;
  }

  const { schedule } = selectedRow;
  const statusInfo = getEducationAdminListStatusInfo(schedule.status);
  const capacity = Math.max(0, parseNumber(schedule.capacity, 0));
  const attendees = educationEnrollments.filter((enrollment) => enrollment.scheduleId === schedule.id).length;
  const completedCount = educationEnrollments.filter((enrollment) =>
    enrollment.scheduleId === schedule.id && enrollment.completed).length;
  const completionRate = attendees > 0 ? Math.round((completedCount / attendees) * 100) : 0;
  const refundRate = parseNumber(schedule.totalCost, 0) > 0
    ? Math.round((parseNumber(schedule.refundAmount, 0) / parseNumber(schedule.totalCost, 0)) * 100)
    : 0;
  const educationTime = selectedRow.daysText && selectedRow.hoursText
    ? `${selectedRow.daysText} / ${selectedRow.hoursText}`
    : (selectedRow.hoursText || selectedRow.daysText || "-");
  const averageScore = schedule.avgScore ? `${Number(schedule.avgScore).toFixed(2)}점` : "-";
  const recruitStatusKey = getEducationRecruitStatusKey(schedule);
  const recruitStatusLabel = getEducationRecruitStatusLabel(schedule);
  const surveyFormName = getSurveyFormById(schedule.surveyFormId)?.name || "기본 설문";
  elements.educationAdminDetailCard.innerHTML = `
    <div class="detail-card-top">
      <div>
        <h4>${escapeHtml(selectedRow.smallCategory)}</h4>
        <p class="detail-subtitle">${escapeHtml(`${selectedRow.majorCategory} · ${selectedRow.middleCategory}`)}</p>
      </div>
      <div class="detail-card-actions">
        <span class="education-status-pill is-${statusInfo.classKey}">${escapeHtml(statusInfo.label)}</span>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-metric">
        <span>신청인원/정원</span>
        <strong>${escapeHtml(`${attendees}/${capacity}`)}</strong>
      </div>
      <div class="detail-metric">
        <span>평균만족도</span>
        <strong>${escapeHtml(averageScore)}</strong>
      </div>
      <div class="detail-metric">
        <span>교육이수율</span>
        <strong>${escapeHtml(`${completedCount}/${attendees}명 (${completionRate}%)`)}</strong>
      </div>
      <div class="detail-metric">
        <span>교육비환급률</span>
        <strong>${escapeHtml(`${refundRate}%`)}</strong>
      </div>
    </div>
    <ul class="detail-list">
      <li><span class="detail-label">교육일자</span><strong>${escapeHtml(getEducationDateRangeLabel(schedule.startDate, schedule.endDate))}</strong></li>
      <li><span class="detail-label">접수기간</span><strong>${escapeHtml(getEducationDateRangeLabel(schedule.applicationStartDate, schedule.applicationEndDate))}</strong></li>
      <li><span class="detail-label">교육시간</span><strong>${escapeHtml(educationTime)}</strong></li>
      <li><span class="detail-label">추천 대상자</span><strong>${escapeHtml(selectedRow.recommendedTarget || "-")}</strong></li>
      <li><span class="detail-label">필수교육</span><strong>${escapeHtml(selectedRow.requiredType || "-")}</strong></li>
      <li><span class="detail-label">설문지</span><strong>${escapeHtml(surveyFormName)}</strong></li>
      <li><span class="detail-label">운영담당자</span><strong>${escapeHtml(selectedRow.operatorDept || "-")}</strong></li>
      <li><span class="detail-label">장소</span><strong>${escapeHtml(schedule.location || "-")}</strong></li>
      <li><span class="detail-label">총교육비</span><strong>${escapeHtml(formatWon(schedule.totalCost))}</strong></li>
      <li><span class="detail-label">환급액</span><strong>${escapeHtml(formatWon(schedule.refundAmount))}</strong></li>
      <li><span class="detail-label">환급율</span><strong>${escapeHtml(`${selectedRow.refundRate}%`)}</strong></li>
      <li><span class="detail-label">모집상태</span><strong><span class="education-recruit-badge is-${recruitStatusKey}">${escapeHtml(recruitStatusLabel)}</span></strong></li>
    </ul>
  `;
}

function getEducationAdminTablePageInfo(filteredRows) {
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / EDUCATION_ADMIN_ROWS_PER_PAGE));
  const currentPage = clampNumber(state.educationAdminPage, 1, totalPages);

  if (state.educationAdminPage !== currentPage) {
    state.educationAdminPage = currentPage;
  }

  const startIndex = (currentPage - 1) * EDUCATION_ADMIN_ROWS_PER_PAGE;

  return {
    currentPage,
    totalPages,
    pagedRows: filteredRows.slice(startIndex, startIndex + EDUCATION_ADMIN_ROWS_PER_PAGE),
  };
}

function renderEducationAdminPagination(totalPages, currentPage) {
  if (!elements.educationAdminPagination) {
    return;
  }

  if (totalPages <= 1) {
    elements.educationAdminPagination.innerHTML = "";
    return;
  }

  elements.educationAdminPagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;
    return `<span class="task-page-number ${isActive ? "is-active" : ""}" data-education-admin-page="${page}" role="button" tabindex="0" aria-current="${isActive ? "page" : "false"}">${page}</span>`;
  }).join("");
}

function renderEducationAdminPage() {
  if (!elements.educationAdminTableBody || !elements.educationAdminWorkspace || !elements.educationAdminGuard) {
    return;
  }

  syncAllEducationScheduleCostSummaries();
  pruneSelectedEducationAdminIds();
  const rows = buildEducationAdminRows();
  renderEducationAdminFilterOptions(rows);
  if (elements.educationEnrollmentScopeFilter) {
    elements.educationEnrollmentScopeFilter.value = state.educationEnrollmentScope;
  }
  if (elements.educationEnrollmentSearchInput && elements.educationEnrollmentSearchInput.value !== state.educationEnrollmentSearch) {
    elements.educationEnrollmentSearchInput.value = state.educationEnrollmentSearch;
  }

  if (!hasEducationAdminAccess()) {
    elements.educationAdminGuard.hidden = false;
    elements.educationAdminWorkspace.hidden = true;
    elements.educationAdminGuard.innerHTML = `
      <div class="education-admin-guard-copy">
        <strong>관리자 권한이 필요합니다.</strong>
        <p>교육관리 페이지는 관리자 전용 메뉴입니다. 관리자 계정으로 로그인해 주세요.</p>
      </div>
    `;
    syncEducationAdminActionButtons([]);
    renderEducationAdminDetailCard([]);
    renderEducationAdminPagination(0, 1);
    renderEducationEnrollmentBoard([]);
    renderEducationCostBoard([]);
    return;
  }

  elements.educationAdminGuard.hidden = true;
  elements.educationAdminWorkspace.hidden = false;

  const normalizedQuery = state.educationAdminSearch.toLowerCase().trim();
  const filteredRows = rows.filter((row) => {
    const matchesYear = state.educationAdminYear === "all" || row.year === state.educationAdminYear;
    const matchesDivision = state.educationAdminDivision === "all" || row.majorCategory === state.educationAdminDivision;
    const matchesStatus = state.educationAdminStatus === "all" || row.schedule.status === state.educationAdminStatus;
    const matchesSearch = !normalizedQuery || [
      row.majorCategory,
      row.middleCategory,
      row.smallCategory,
      row.operatorDept,
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);

    return matchesYear && matchesDivision && matchesStatus && matchesSearch;
  });

  const visibleIdSet = new Set(filteredRows.map((row) => row.schedule.id));
  state.selectedEducationAdminIds = getSelectedEducationAdminIds().filter((id) => visibleIdSet.has(id));

  const metricYear = state.educationAdminYear === "all" ? String(REFERENCE_DATE.getFullYear()) : state.educationAdminYear;
  const plannedCount = filteredRows.filter((row) => row.schedule.status === "planned").length;
  const inProgressCount = filteredRows.filter((row) => row.schedule.status === "in_progress").length;
  const pendingCount = filteredRows.filter((row) => row.schedule.status === "completed_needs_settlement").length;
  const settledCount = filteredRows.filter((row) => row.schedule.status === "settled").length;
  const avgRefundRate = filteredRows.length
    ? (filteredRows.reduce((sum, row) => sum + row.refundRate, 0) / filteredRows.length)
    : 0;

  if (elements.educationAdminMetricTotal) {
    elements.educationAdminMetricTotal.textContent = String(filteredRows.length);
    const titleNode = elements.educationAdminMetricTotal.previousElementSibling;
    if (titleNode) {
      titleNode.textContent = `${metricYear}년 운영과정 수`;
    }
  }
  if (elements.educationAdminMetricPlanned) {
    elements.educationAdminMetricPlanned.textContent = String(plannedCount);
  }
  if (elements.educationAdminMetricProgress) {
    elements.educationAdminMetricProgress.textContent = String(inProgressCount);
  }
  if (elements.educationAdminMetricPending) {
    elements.educationAdminMetricPending.textContent = String(pendingCount);
  }
  if (elements.educationAdminMetricSettled) {
    elements.educationAdminMetricSettled.textContent = String(settledCount);
  }
  if (elements.educationAdminMetricRefundRate) {
    elements.educationAdminMetricRefundRate.textContent = `${avgRefundRate.toFixed(1)}%`;
  }

  if (!filteredRows.length) {
    state.selectedEducationAdminId = null;
    syncEducationAdminActionButtons(filteredRows);
    renderEducationAdminDetailCard([]);
    renderEducationEnrollmentBoard([]);
    renderEducationCostBoard([]);
    elements.educationAdminTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">조건에 맞는 운영 과정이 없습니다.</td>
      </tr>
    `;
    renderEducationAdminPagination(0, 1);
    return;
  }

  const { currentPage, totalPages, pagedRows } = getEducationAdminTablePageInfo(filteredRows);

  if (!pagedRows.some((row) => row.schedule.id === state.selectedEducationAdminId)) {
    state.selectedEducationAdminId = pagedRows[0]?.schedule.id ?? filteredRows[0]?.schedule.id ?? null;
  }

  syncEducationAdminActionButtons(filteredRows);
  renderEducationAdminDetailCard(filteredRows);
  renderEducationEnrollmentBoard(filteredRows);
  renderEducationFeedbackBoard(filteredRows);
  renderEducationCostBoard(filteredRows);

  elements.educationAdminTableBody.innerHTML = pagedRows
    .map((row) => {
      const isSelected = row.schedule.id === state.selectedEducationAdminId;
      const isChecked = hasCheckedEducationAdmin(row.schedule.id);
      const statusInfo = getEducationAdminListStatusInfo(row.schedule.status);
      const educationTime = row.daysText && row.hoursText
        ? `${row.daysText} / ${row.hoursText}`
        : (row.hoursText || row.daysText || "-");

      return `
        <tr class="education-admin-row ${isSelected ? "is-selected" : ""}" data-education-admin-id="${row.schedule.id}">
          <td class="selection-cell education-admin-selection-cell">
            <span
              class="selection-box ${isChecked ? "is-selected" : ""}"
              data-education-admin-select="${row.schedule.id}"
              role="button"
              tabindex="0"
              aria-label="${escapeHtml(`${row.smallCategory} 선택`)}"
              aria-pressed="${isChecked ? "true" : "false"}"
            ></span>
          </td>
          <td class="education-admin-course-cell">
            <div class="education-admin-course-block">
              <strong>${escapeHtml(row.smallCategory)}</strong>
              <span class="education-admin-course-meta">${escapeHtml(`${row.majorCategory} · ${row.middleCategory}`)}</span>
            </div>
          </td>
          <td class="education-admin-date-cell">${escapeHtml(getEducationDateRangeLabel(row.schedule.startDate, row.schedule.endDate))}</td>
          <td class="education-admin-time-cell">${escapeHtml(educationTime)}</td>
          <td class="education-admin-status-cell"><span class="education-status-pill is-${statusInfo.classKey}">${escapeHtml(statusInfo.label)}</span></td>
        </tr>
      `;
    })
    .join("");

  renderEducationAdminPagination(totalPages, currentPage);
}

function generateSurveyQuestionId() {
  const selectedForm = getSelectedSurveyForm();
  const questionList = selectedForm?.questions || [];
  const nextIndex = questionList.reduce((max, question) => {
    const numeric = Number(String(question.id || "").split("-").pop());
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0) + 1;
  return `SVQ-${String(nextIndex).padStart(3, "0")}`;
}

function deleteSurveyQuestion(questionId) {
  const selectedForm = getSelectedSurveyForm();
  if (!selectedForm) {
    return;
  }
  selectedForm.questions = selectedForm.questions
    .filter((question) => question.id !== questionId)
    .sort((left, right) => left.order - right.order)
    .map((question, index) => ({ ...question, order: index + 1 }));
  saveSurveyQuestions();
  render();
}

function renderSurveyManagementPage() {
  if (!elements.surveyManagementGuard
    || !elements.surveyManagementWorkspace
    || !elements.surveyQuestionTableBody
    || !elements.surveyResultTableBody
    || !elements.surveyResultMajorFilter
    || !elements.surveyResultMiddleFilter
    || !elements.surveyResultSmallSearch
    || !elements.surveyResultSmallOptions
    || !elements.surveyResultPagination) {
    return;
  }

  if (!hasEducationAdminAccess()) {
    elements.surveyManagementGuard.hidden = false;
    elements.surveyManagementWorkspace.hidden = true;
    elements.surveyManagementGuard.innerHTML = `
      <div class="education-admin-guard-copy">
        <strong>관리자 권한이 필요합니다.</strong>
        <p>설문관리 페이지는 관리자 전용 메뉴입니다. 관리자 계정으로 로그인해 주세요.</p>
      </div>
    `;
    return;
  }

  elements.surveyManagementGuard.hidden = true;
  elements.surveyManagementWorkspace.hidden = false;
  if (elements.surveyQuestionType) {
    elements.surveyQuestionType.value = state.surveyQuestionDraftType;
  }
  const sortedForms = [...surveyForms].sort((left, right) => left.order - right.order);
  const selectedForm = getSelectedSurveyForm();
  if (elements.surveyFormSelect) {
    elements.surveyFormSelect.innerHTML = sortedForms
      .map((form) => `<option value="${escapeHtml(form.id)}" ${selectedForm?.id === form.id ? "selected" : ""}>${escapeHtml(form.name)}</option>`)
      .join("");
  }
  if (elements.surveyFormNameInput) {
    elements.surveyFormNameInput.value = selectedForm?.name || "";
  }
  if (elements.surveyFormDeleteButton) {
    elements.surveyFormDeleteButton.disabled = sortedForms.length <= 1;
  }
  if (elements.surveyFormAddButton) {
    elements.surveyFormAddButton.disabled = sortedForms.length >= 10;
  }

  const sortedQuestions = [...(selectedForm?.questions || [])].sort((left, right) => left.order - right.order);
  if (!sortedQuestions.length) {
    elements.surveyQuestionTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">설문 문항이 없습니다. 상단에서 문항을 추가해 주세요.</td>
      </tr>
    `;
  } else {
    elements.surveyQuestionTableBody.innerHTML = sortedQuestions
      .map((question) => `
        <tr>
          <td>${question.order}</td>
          <td>${question.type === "scale" ? "5점 척도" : "서술형"}</td>
          <td>
            <input
              type="text"
              value="${escapeHtml(question.text)}"
              data-survey-question-text="${question.id}"
            >
          </td>
          <td>
            <input
              type="checkbox"
              data-survey-question-active="${question.id}"
              ${question.active ? "checked" : ""}
              aria-label="${escapeHtml(`${question.order}번 문항 활성 여부`)}"
            >
          </td>
          <td>
            <button type="button" class="ghost-button" data-survey-question-delete="${question.id}">삭제</button>
          </td>
        </tr>
      `)
      .join("");
  }

  const resultRows = surveyResponses
    .map((response) => {
      const schedule = getEducationScheduleById(response.scheduleId);
      const course = schedule ? getEducationCourseById(schedule.courseId) : null;
      const majorCategory = String(schedule?.majorCategory || course?.majorCategory || "").trim();
      const middleCategory = String(schedule?.middleCategory || course?.subCategory || "").trim();
      const smallCategory = String(schedule?.smallCategory || course?.name || response.courseName || "-").trim();
      return {
        response,
        majorCategory,
        middleCategory,
        smallCategory,
      };
    });
  const majorOptions = Array.from(new Set(resultRows.map((item) => item.majorCategory).filter(Boolean)))
    .sort((left, right) => left.localeCompare(right, "ko-KR"));
  if (state.surveyResultMajorFilter !== "all" && !majorOptions.includes(state.surveyResultMajorFilter)) {
    state.surveyResultMajorFilter = "all";
  }
  elements.surveyResultMajorFilter.innerHTML = [
    '<option value="all">전체</option>',
    ...majorOptions.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`),
  ].join("");
  elements.surveyResultMajorFilter.value = state.surveyResultMajorFilter;

  const middleOptions = Array.from(new Set(
    resultRows
      .filter((item) => state.surveyResultMajorFilter === "all" || item.majorCategory === state.surveyResultMajorFilter)
      .map((item) => item.middleCategory)
      .filter(Boolean),
  )).sort((left, right) => left.localeCompare(right, "ko-KR"));
  if (state.surveyResultMiddleFilter !== "all" && !middleOptions.includes(state.surveyResultMiddleFilter)) {
    state.surveyResultMiddleFilter = "all";
  }
  elements.surveyResultMiddleFilter.innerHTML = [
    '<option value="all">전체</option>',
    ...middleOptions.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`),
  ].join("");
  elements.surveyResultMiddleFilter.value = state.surveyResultMiddleFilter;

  const smallOptions = Array.from(new Set(
    resultRows
      .filter((item) => (
        (state.surveyResultMajorFilter === "all" || item.majorCategory === state.surveyResultMajorFilter)
        && (state.surveyResultMiddleFilter === "all" || item.middleCategory === state.surveyResultMiddleFilter)
      ))
      .map((item) => item.smallCategory)
      .filter(Boolean),
  ))
    .sort((left, right) => left.localeCompare(right, "ko-KR"));
  if (!smallOptions.some((option) => option.toLowerCase() === state.surveyResultSmallSearch.toLowerCase())) {
    elements.surveyResultSmallSearch.value = state.surveyResultSmallSearch;
  }
  elements.surveyResultSmallOptions.innerHTML = smallOptions
    .map((option) => `<option value="${escapeHtml(option)}"></option>`)
    .join("");

  const filteredResultRows = resultRows.filter((item) => (
    (state.surveyResultMajorFilter === "all" || item.majorCategory === state.surveyResultMajorFilter)
    && (state.surveyResultMiddleFilter === "all" || item.middleCategory === state.surveyResultMiddleFilter)
    && (!state.surveyResultSmallSearch || item.smallCategory.toLowerCase().includes(state.surveyResultSmallSearch.toLowerCase()))
  ));

  if (!filteredResultRows.length) {
    elements.surveyResultTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">아직 저장된 설문 응답이 없습니다.</td>
      </tr>
    `;
    elements.surveyResultPagination.innerHTML = "";
    return;
  }

  const totalPages = Math.max(1, Math.ceil(filteredResultRows.length / SURVEY_RESULT_ROWS_PER_PAGE));
  const currentPage = clampNumber(state.surveyResultPage, 1, totalPages);
  if (state.surveyResultPage !== currentPage) {
    state.surveyResultPage = currentPage;
  }
  const startIndex = (currentPage - 1) * SURVEY_RESULT_ROWS_PER_PAGE;
  const pagedRows = filteredResultRows.slice(startIndex, startIndex + SURVEY_RESULT_ROWS_PER_PAGE);

  elements.surveyResultTableBody.innerHTML = pagedRows
    .map(({ response }) => {
      const textAnswerCount = response.answers.filter((answer) => answer.type === "text" && String(answer.value || "").trim()).length;
      return `
        <tr>
          <td>${escapeHtml(response.courseName || "-")}</td>
          <td>${escapeHtml(response.respondentName || "-")}</td>
          <td>${escapeHtml(formatDateWithYear(response.submittedAt))}</td>
          <td>${response.averageScore ? `${escapeHtml(response.averageScore.toFixed(2))}점` : "-"}</td>
          <td>${escapeHtml(`${response.surveyFormName || "기본 설문"} / ${textAnswerCount}건`)}</td>
        </tr>
      `;
    })
    .join("");

  elements.surveyResultPagination.innerHTML = totalPages <= 1
    ? ""
    : Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      const isActive = page === currentPage;
      return `<span class="task-page-number ${isActive ? "is-active" : ""}" data-survey-result-page="${page}" role="button" tabindex="0" aria-current="${isActive ? "page" : "false"}">${page}</span>`;
    }).join("");
}

function syncQualificationActionButtons(filteredQualifications) {
  const canManageQualifications = hasQualificationManagementAccess();
  const hasSelectedQualification = Boolean(
    filteredQualifications.length
      && filteredQualifications.some((qualification) => qualification.id === state.selectedQualificationId),
  );
  const hasCheckedQualifications = getSelectedQualificationIds().length > 0;

  if (elements.addQualificationButton) {
    elements.addQualificationButton.hidden = !canManageQualifications;
    elements.addQualificationButton.disabled = !canManageQualifications;
  }

  if (elements.editQualificationButton) {
    elements.editQualificationButton.hidden = !canManageQualifications;
    elements.editQualificationButton.disabled = !canManageQualifications || !hasSelectedQualification;
  }

  if (elements.deleteQualificationButton) {
    elements.deleteQualificationButton.hidden = !canManageQualifications;
    elements.deleteQualificationButton.disabled = !canManageQualifications || (!hasSelectedQualification && !hasCheckedQualifications);
  }
}

function syncCertificationExamActionButtons() {
  const canManage = hasQualificationManagementAccess();
  const hasSelected = Boolean(
    certificationExams.length
      && certificationExams.some((exam) => exam.id === state.selectedCertificationExamId),
  );
  const hasChecked = getSelectedCertificationExamIds().length > 0;

  if (elements.addCertificationExamButton) {
    elements.addCertificationExamButton.hidden = !canManage;
    elements.addCertificationExamButton.disabled = !canManage;
  }
  if (elements.editCertificationExamButton) {
    elements.editCertificationExamButton.hidden = !canManage;
    elements.editCertificationExamButton.disabled = !canManage || !hasSelected;
  }
  if (elements.deleteCertificationExamButton) {
    elements.deleteCertificationExamButton.hidden = !canManage;
    elements.deleteCertificationExamButton.disabled = !canManage || (!hasSelected && !hasChecked);
  }
}

function renderHero(filteredProjects) {
  const insight = buildWeeklyInsight(filteredProjects);

  if (elements.heroTitle) {
    elements.heroTitle.textContent = "이번 주 요약";
  }

  if (!insight) {
    elements.heroInsight.textContent = "현재 조건에 맞는 과제가 없습니다.";
    elements.heroSubcopy.textContent = "";
    elements.heroTags.innerHTML = "";
    return;
  }

  elements.heroInsight.innerHTML = insight.summaryHtml;
  elements.heroSubcopy.textContent = insight.actionCopy;
  elements.heroTags.innerHTML = "";
}

function getTaskTablePageInfo(filteredProjects) {
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / TASK_ROWS_PER_PAGE));
  const currentPage = clampNumber(state.taskPage, 1, totalPages);

  if (state.taskPage !== currentPage) {
    state.taskPage = currentPage;
  }

  const startIndex = (currentPage - 1) * TASK_ROWS_PER_PAGE;

  return {
    currentPage,
    totalPages,
    pagedProjects: filteredProjects.slice(startIndex, startIndex + TASK_ROWS_PER_PAGE),
  };
}

function renderTaskPagination(totalPages, currentPage) {
  if (!elements.taskPagination) {
    return;
  }

  if (totalPages <= 1) {
    elements.taskPagination.innerHTML = "";
    return;
  }

  elements.taskPagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;

    return `<span class="task-page-number ${isActive ? "is-active" : ""}" data-task-page="${page}" role="button" tabindex="0" aria-current="${isActive ? "page" : "false"}">${page}</span>`;
  }).join("");
}

function renderTable(filteredProjects) {
  if (!filteredProjects.length) {
    elements.taskTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">조건에 맞는 과제가 없습니다. 검색어와 필터를 조정해 주세요.</td>
      </tr>
    `;
    renderTaskPagination(0, 1);
    return;
  }

  const { currentPage, totalPages, pagedProjects } = getTaskTablePageInfo(filteredProjects);

  if (!pagedProjects.some((project) => project.id === state.selectedId)) {
    state.selectedId = pagedProjects[0]?.id ?? filteredProjects[0].id;
  }

  elements.taskTableBody.innerHTML = pagedProjects
    .map((project, index) => {
      const isSelected = project.id === state.selectedId;
      const isChecked = hasCheckedTask(project.id);
      const alignmentGrade = getAssessmentGrade(project.alignment);

      return `
        <tr class="task-row ${isSelected ? "is-selected" : ""} fade-up" data-id="${project.id}" style="animation-delay:${index * 40}ms">
          <td class="selection-cell">
            <span
              class="selection-box ${isChecked ? "is-selected" : ""}"
              data-task-select="${project.id}"
              role="button"
              tabindex="0"
              aria-pressed="${isChecked ? "true" : "false"}"
              aria-label="${escapeHtml(`${project.name || "-"} 선택`)}"
            ></span>
          </td>
          <td class="status-cell"><span class="health-pill ${project.scheduleStatus}">${project.scheduleStatusLabel}</span></td>
          <td>
            <div class="task-name">
              <strong>${project.name}</strong>
              <span class="task-meta">${project.company} · ${project.department}</span>
            </div>
          </td>
          <td class="progress-cell">
            <div class="progress-wrap">
              <div class="progress-bar"><span style="width:${project.progress}%"></span></div>
              <div class="progress-meta">
                <strong>${project.progress}%</strong>
                <span class="grade-badge ${getAssessmentGradeClass(project.alignment)}" title="??뱀꽦 ${alignmentGrade}" aria-label="??뱀꽦 ${alignmentGrade}">${alignmentGrade}</span>
              </div>
            </div>
          </td>
          <td class="owner-cell">
            <strong>${project.leader}</strong>
            <span>${project.role || "-"}</span>
          </td>
        </tr>
      `;
    })
    .join("");

  renderTaskPagination(totalPages, currentPage);
}

function renderLeague(filteredProjects) {
  const league = aggregateByCompany(filteredProjects);

  if (elements.leagueTitle) {
    elements.leagueTitle.textContent = "법인별 평균 진행률";
  }

  if (!league.length) {
    elements.leagueBoard.innerHTML = '<div class="empty-state">표시할 법인 집계가 없습니다.</div>';
    return;
  }

  elements.leagueBoard.innerHTML = league
    .map((entry, index) => `
      <div class="league-item fade-up" style="animation-delay:${index * 50}ms">
        <div class="league-rank">${index + 1}</div>
        <div class="league-copy">
          <strong class="league-title-line">
            <span class="league-company">${entry.company}</span>
            <span class="league-copy-meta">과제 ${entry.count}건 · 지연 ${entry.delayedCount}건</span>
          </strong>
          <div class="league-track"><span style="width:${entry.progress}%"></span></div>
        </div>
        <div class="league-value">${entry.progress}%</div>
      </div>
    `)
    .join("");
}

function renderDetailCard(filteredProjects) {
  if (!filteredProjects.length) {
    elements.detailCard.innerHTML = '<div class="empty-state">선택 가능한 과제가 없습니다.</div>';
    return;
  }

  const project = filteredProjects.find((item) => item.id === state.selectedId) || getProjectById(state.selectedId);

  if (!project) {
    elements.detailCard.innerHTML = '<div class="empty-state">선택된 과제가 없습니다.</div>';
    return;
  }

  const dmaicTargetText = project.stageTargetDates
    ? stageCheckpointOrder
      .map((stage) => `${getStageLabel(stage)}(${formatSlashDate(project.stageTargetDates[stage])})`)
      .join(" ")
    : "-";
  const dmaicCurrentStage = project.stage === "Completed" ? "Control" : project.stage;
  const alignmentGrade = getAssessmentGrade(project.alignment);
  const alignmentGradeClass = getAssessmentGradeClass(project.alignment);

  elements.detailCard.innerHTML = `
    <div class="detail-card-top">
      <div>
        <h4>${project.name}</h4>
        <p class="detail-subtitle">${project.company} · ${project.department} · ${project.leader}</p>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-metric">
        <span>현재 단계</span>
        <strong>${project.stageKor}</strong>
      </div>
      <div class="detail-metric">
        <span>상태</span>
        <strong>${project.scheduleStatusLabel}</strong>
      </div>
      <div class="detail-metric">
        <span>진행률</span>
        <strong>${project.progress}%</strong>
      </div>
      <div class="detail-metric">
        <span>타당성 점수</span>
        <strong class="detail-grade-value">
          <span class="detail-grade-text ${alignmentGradeClass}">${alignmentGrade}</span><span class="detail-grade-score">(${project.alignment}점)</span>
        </strong>
      </div>
    </div>
    <ul class="detail-list">
      <li><span class="detail-label">기간</span><strong>${formatDateWithYear(project.startDate)} ~ ${formatDateWithYear(project.deadline)}</strong></li>
      <li><span class="detail-label">과제종류</span><strong>${project.projectType || "-"}</strong></li>
      <li><span class="detail-label">팀원</span><strong>${project.teamMembers || "-"}</strong></li>
      <li><span class="detail-label">DMAIC 목표기한</span><strong>${dmaicTargetText}</strong></li>
      <li><span class="detail-label">과제링크</span><strong>${project.projectLink || "-"}</strong></li>
    </ul>
    <div class="dmaic-strip">
      ${stageCheckpointOrder
        .map((stage) => `
          <div class="dmaic-step ${stage === dmaicCurrentStage ? "is-current" : ""}">
            <strong>${stage.charAt(0)}</strong>
            <span>${stageLabels[stage]}</span>
          </div>
        `)
        .join("")}
    </div>
  `;
}

function renderMilestonesLegacyTable() {
  const sortedMilestones = [...milestoneItems].sort((left, right) => left.date.localeCompare(right.date));

  if (!sortedMilestones.length) {
    elements.milestoneList.innerHTML = '<div class="empty-state">등록된 주요 일정이 없습니다. 상단의 일정 추가 버튼으로 바로 입력해 보세요.</div>';
    return;
  }

  elements.milestoneList.innerHTML = sortedMilestones
    .map((item, index) => {
      const dateParts = getMilestoneDateParts(item.date);
      return `
      <div class="milestone-item fade-up" style="animation-delay:${index * 70}ms">
        <div class="milestone-date">
          <strong>${dateParts.day}</strong>
          <span>${dateParts.month}</span>
        </div>
        <div class="milestone-copy">
          <strong>${item.title}</strong>
          <div class="milestone-actions milestone-copy-actions">
            <button class="milestone-action-button" type="button" data-milestone-action="edit" data-id="${item.id}">수정</button>
            <button class="milestone-action-button is-danger" type="button" data-milestone-action="delete" data-id="${item.id}">삭제</button>
          </div>
          <p>${item.description || "세부 설명은 아직 입력되지 않았습니다."}</p>
        </div>
        <span class="milestone-tag ${item.tone}">${item.tone === "blue" ? "운영" : item.tone === "amber" ? "점검" : "마감"}</span>
      </div>
      `;
    })
    .join("");
}

function renderMilestonesLegacyCompact() {
  const sortedMilestones = [...milestoneItems].sort((left, right) => left.date.localeCompare(right.date));

  if (!sortedMilestones.length) {
    elements.milestoneList.innerHTML = '<div class="empty-state">등록된 주요 일정이 없습니다. 상단의 일정 추가 버튼으로 바로 입력해 보세요.</div>';
    return;
  }

  elements.milestoneList.innerHTML = sortedMilestones
    .map((item, index) => {
      const dateParts = getMilestoneDateParts(item.date);
      const milestoneLine = `${dateParts.month} ${Number(dateParts.day)}일 · ${item.title}`;

      return `
      <div class="milestone-item fade-up" style="animation-delay:${index * 70}ms">
        <div class="milestone-item-top">
          <div></div>
          <div class="milestone-actions">
            <button class="milestone-action-button" type="button" data-milestone-action="edit" data-id="${item.id}">수정</button>
            <button class="milestone-action-button is-danger" type="button" data-milestone-action="delete" data-id="${item.id}">삭제</button>
          </div>
        </div>
        <div class="milestone-copy">
          <p class="milestone-line">${milestoneLine}</p>
        </div>
      </div>
      `;
    })
    .join("");
}

function openMilestoneModal(mode, milestoneId = null) {
  state.milestoneModalMode = mode;
  state.editingMilestoneId = milestoneId;

  if (mode === "edit" && milestoneId) {
    const milestone = getMilestoneById(milestoneId);
    if (!milestone) {
      return;
    }

    elements.milestoneModalTitle.textContent = "주요 일정 수정";
    elements.milestoneFormSubmit.textContent = "수정 반영";
    populateMilestoneForm(milestone);
  } else {
    elements.milestoneModalTitle.textContent = "주요 일정 등록";
    elements.milestoneFormSubmit.textContent = "등록하기";
    resetMilestoneForm();
  }

  elements.milestoneModal.hidden = false;
  syncBodyModalState();
  window.setTimeout(() => elements.milestoneTitle.focus(), 0);
}

function closeMilestoneModal() {
  elements.milestoneModal.hidden = true;
  state.editingMilestoneId = null;
  syncBodyModalState();
}

function resetMilestoneForm() {
  elements.milestoneForm.reset();
  elements.milestoneDate.value = getDefaultMilestoneDate();
}

function populateMilestoneForm(milestone) {
  elements.milestoneTitle.value = milestone.title;
  elements.milestoneDate.value = milestone.date;
  elements.milestoneDescription.value = milestone.description;
}

function readMilestoneFormValues() {
  const formData = new FormData(elements.milestoneForm);
  const currentMilestone = state.milestoneModalMode === "edit" && state.editingMilestoneId
    ? getMilestoneById(state.editingMilestoneId)
    : null;

  return {
    id: state.milestoneModalMode === "edit" ? state.editingMilestoneId : undefined,
    title: formData.get("title"),
    date: formData.get("date"),
    tone: currentMilestone?.tone || "blue",
    description: formData.get("description"),
  };
}

function upsertMilestone(milestoneData) {
  const previousMilestone = state.milestoneModalMode === "edit" && state.editingMilestoneId
    ? getMilestoneById(state.editingMilestoneId)
    : null;
  const normalized = normalizeMilestone({
    ...previousMilestone,
    ...milestoneData,
  });

  if (state.milestoneModalMode === "edit" && state.editingMilestoneId) {
    const index = milestoneItems.findIndex((milestone) => milestone.id === state.editingMilestoneId);
    if (index >= 0) {
      milestoneItems.splice(index, 1, normalized);
    }
  } else {
    milestoneItems.push(normalized);
  }

  saveMilestones();
  state.selectedMilestoneId = normalized.id;
  closeMilestoneModal();
  render();
}

function deleteMilestone(milestoneId) {
  const milestone = getMilestoneById(milestoneId);

  if (!milestone) {
    return;
  }

  const shouldDelete = window.confirm(`"${milestone.title}" 일정을 삭제할까요?\n삭제 후에는 현재 브라우저에서만 복구가 가능합니다.`);

  if (!shouldDelete) {
    return;
  }

  milestoneItems = milestoneItems.filter((item) => item.id !== milestoneId);
  saveMilestones();

  if (state.selectedMilestoneId === milestoneId) {
    state.selectedMilestoneId = getSortedMilestones(milestoneItems)[0]?.id ?? null;
  }

  if (state.editingMilestoneId === milestoneId) {
    closeMilestoneModal();
  }

  render();
}

function openProjectModal(mode, projectId = null) {
  state.modalMode = mode;
  state.editingId = projectId;

  if (mode === "edit" && projectId) {
    const project = getProjectById(projectId);
    if (!project) {
      return;
    }
    if (!canEditOrDeleteTaskProject(project)) {
      window.alert("다른 담당자가 등록한 과제는 수정할 수 없습니다.");
      return;
    }

    elements.projectModalTitle.textContent = "과제 수정";
    elements.projectFormSubmit.textContent = "수정 저장";
    populateForm(project);
  } else {
    elements.projectModalTitle.textContent = "신규 과제 등록";
    elements.projectFormSubmit.textContent = "등록하기";
    resetForm();
  }

  elements.projectModal.hidden = false;
  syncBodyModalState();
  window.setTimeout(() => elements.projectName.focus(), 0);
}

function closeProjectModal() {
  elements.projectModal.hidden = true;
  state.editingId = null;
  syncBodyModalState();
}

function openQualificationModal(mode, qualificationId = null) {
  if (!elements.qualificationModal || !elements.qualificationForm) {
    return;
  }

  state.qualificationModalMode = mode;
  state.editingQualificationId = qualificationId;

  if (mode === "edit" && qualificationId) {
    const qualification = getQualificationById(qualificationId);
    if (!qualification) {
      return;
    }

    elements.qualificationModalTitle.textContent = "자격 정보 수정";
    elements.qualificationFormSubmit.textContent = "수정 저장";
    populateQualificationForm(qualification);
  } else {
    elements.qualificationModalTitle.textContent = "자격 정보 등록";
    elements.qualificationFormSubmit.textContent = "등록하기";
    resetQualificationForm();
  }

  elements.qualificationModal.hidden = false;
  syncBodyModalState();
  window.setTimeout(() => elements.qualificationName.focus(), 0);
}

function closeQualificationModal() {
  if (!elements.qualificationModal) {
    return;
  }

  elements.qualificationModal.hidden = true;
  state.editingQualificationId = null;
  syncBodyModalState();
}

function resetCertificationExamForm() {
  if (!elements.certificationExamForm) {
    return;
  }
  elements.certificationExamForm.reset();
  const nextType = qualificationTypeOptions[0];
  elements.certificationExamType.value = nextType;
  renderCertificationExamGradeFieldOptions(nextType);
  elements.certificationExamApplicationStartDate.value = toIsoDate(REFERENCE_DATE);
  elements.certificationExamApplicationEndDate.value = toIsoDate(REFERENCE_DATE);
  elements.certificationExamDateTime.value = `${toIsoDate(REFERENCE_DATE)}T09:00`;
  elements.certificationExamResultDate.value = toIsoDate(REFERENCE_DATE);
  elements.certificationExamCapacity.value = "30";
  elements.certificationExamStatus.value = "planned";
}

function populateCertificationExamForm(exam) {
  elements.certificationExamType.value = exam.examType || qualificationTypeOptions[0];
  renderCertificationExamGradeFieldOptions(elements.certificationExamType.value, exam.examGrade || "");
  elements.certificationExamTitle.value = exam.examTitle || "";
  elements.certificationExamTarget.value = exam.targetAudience || "";
  elements.certificationExamRequirement.value = exam.qualificationRequirement || "";
  elements.certificationExamPassCriteria.value = exam.passCriteria || "";
  elements.certificationExamApplicationStartDate.value = exam.applicationStartDate;
  elements.certificationExamApplicationEndDate.value = exam.applicationEndDate;
  elements.certificationExamDateTime.value = exam.examDateTime;
  elements.certificationExamResultDate.value = exam.resultAnnouncementDate || "";
  elements.certificationExamCapacity.value = String(exam.capacity || 30);
  elements.certificationExamLocation.value = exam.examLocation;
  elements.certificationExamStatus.value = normalizeCertificationOperationStatus(exam.operationStatus);
  elements.certificationExamNote.value = exam.note || "";
}

function openCertificationExamModal(mode, examId = null) {
  if (!elements.certificationExamModal || !elements.certificationExamForm) {
    return;
  }

  state.certificationExamModalMode = mode;
  state.editingCertificationExamId = examId;

  if (mode === "edit" && examId) {
    const exam = getCertificationExamById(examId);
    if (!exam) {
      return;
    }
    elements.certificationExamModalTitle.textContent = "자격검정 정보 수정";
    elements.certificationExamFormSubmit.textContent = "수정 저장";
    populateCertificationExamForm(exam);
  } else {
    elements.certificationExamModalTitle.textContent = "자격검정 정보 등록";
    elements.certificationExamFormSubmit.textContent = "등록하기";
    resetCertificationExamForm();
  }

  elements.certificationExamModal.hidden = false;
  syncBodyModalState();
  window.setTimeout(() => elements.certificationExamTitle?.focus(), 0);
}

function closeCertificationExamModal() {
  if (!elements.certificationExamModal) {
    return;
  }
  elements.certificationExamModal.hidden = true;
  state.editingCertificationExamId = null;
  syncBodyModalState();
}

function readCertificationExamFormValues() {
  const formData = new FormData(elements.certificationExamForm);
  return {
    id: state.certificationExamModalMode === "edit" ? state.editingCertificationExamId : undefined,
    examType: formData.get("examType"),
    examGrade: formData.get("examGrade"),
    examTitle: formData.get("examTitle"),
    targetAudience: formData.get("targetAudience"),
    qualificationRequirement: formData.get("qualificationRequirement"),
    passCriteria: formData.get("passCriteria"),
    applicationStartDate: formData.get("applicationStartDate"),
    applicationEndDate: formData.get("applicationEndDate"),
    examDateTime: formData.get("examDateTime"),
    resultAnnouncementDate: formData.get("resultAnnouncementDate"),
    capacity: formData.get("capacity"),
    examLocation: formData.get("examLocation"),
    operationStatus: formData.get("operationStatus"),
    note: formData.get("note"),
  };
}

function upsertCertificationExam(examData) {
  const previous = state.certificationExamModalMode === "edit" && state.editingCertificationExamId
    ? getCertificationExamById(state.editingCertificationExamId)
    : null;
  const normalized = normalizeCertificationExam({
    ...previous,
    ...examData,
  });

  if (state.certificationExamModalMode === "edit" && state.editingCertificationExamId) {
    const index = certificationExams.findIndex((exam) => exam.id === state.editingCertificationExamId);
    if (index >= 0) {
      certificationExams.splice(index, 1, normalized);
    }
  } else {
    certificationExams.unshift(normalized);
  }

  saveCertificationExams();
  state.selectedCertificationExamId = normalized.id;
  closeCertificationExamModal();
  render();
}

function deleteCertificationExams(examIds = []) {
  const targetIds = Array.from(new Set(
    examIds.filter((examId) => getCertificationExamById(examId)),
  ));
  if (!targetIds.length) {
    return;
  }

  const shouldDelete = targetIds.length === 1
    ? window.confirm(`"${getCertificationExamById(targetIds[0])?.examTitle || "-"}" 자격검정 정보를 삭제할까요?`)
    : window.confirm(`선택한 자격검정 정보 ${targetIds.length}건을 삭제할까요?`);
  if (!shouldDelete) {
    return;
  }

  certificationExams = certificationExams.filter((exam) => !targetIds.includes(exam.id));
  state.selectedCertificationExamIds = getSelectedCertificationExamIds().filter((id) => !targetIds.includes(id));
  saveCertificationExams();

  if (targetIds.includes(state.selectedCertificationExamId)) {
    state.selectedCertificationExamId = certificationExams[0]?.id ?? null;
  }
  if ((state.editingCertificationExamId && targetIds.includes(state.editingCertificationExamId)) || !certificationExams.length) {
    closeCertificationExamModal();
  }
  render();
}

function resetQualificationForm() {
  if (!elements.qualificationForm) {
    return;
  }

  elements.qualificationForm.reset();
  const nextType = state.qualificationType !== "all" ? state.qualificationType : qualificationTypeOptions[0];
  elements.qualificationType.value = nextType;
  renderQualificationGradeFieldOptions(nextType);
  elements.qualificationCompany.value = state.qualificationCompany !== "all"
    ? state.qualificationCompany
    : companyOptions[0];
  elements.qualificationAcquiredDate.value = getDefaultQualificationDate();
}

function populateQualificationForm(qualification) {
  if (!elements.qualificationType) {
    return;
  }

  elements.qualificationType.value = qualification.qualificationType;
  renderQualificationGradeFieldOptions(qualification.qualificationType, qualification.grade);
  elements.qualificationNumber.value = qualification.certificateNo;
  elements.qualificationCompany.value = qualification.company;
  elements.qualificationDepartment.value = qualification.department;
  elements.qualificationName.value = qualification.name;
  elements.qualificationAcquiredDate.value = qualification.acquiredDate;
}

function readQualificationFormValues() {
  if (!elements.qualificationForm) {
    return {};
  }

  const formData = new FormData(elements.qualificationForm);
  const qualificationType = String(formData.get("qualificationType") || qualificationTypeOptions[0]);

  return {
    id: state.qualificationModalMode === "edit" ? state.editingQualificationId : undefined,
    qualificationType,
    grade: formData.get("grade"),
    certificateNo: formData.get("certificateNo"),
    company: formData.get("company"),
    department: formData.get("department"),
    name: formData.get("name"),
    acquiredDate: formData.get("acquiredDate"),
  };
}

function upsertQualification(qualificationData) {
  const previousQualification = state.qualificationModalMode === "edit" && state.editingQualificationId
    ? getQualificationById(state.editingQualificationId)
    : null;
  const normalized = normalizeQualification({
    ...previousQualification,
    ...qualificationData,
  });

  if (state.qualificationModalMode === "edit" && state.editingQualificationId) {
    const index = qualifications.findIndex((qualification) => qualification.id === state.editingQualificationId);
    if (index >= 0) {
      qualifications.splice(index, 1, normalized);
    }
  } else {
    qualifications.unshift(normalized);
  }

  saveQualifications();
  if (state.qualificationModalMode !== "edit") {
    state.qualificationPage = 1;
  }
  state.selectedQualificationId = normalized.id;
  closeQualificationModal();
  render();
}

function deleteQualification(qualificationId) {
  if (!qualificationId) {
    return;
  }

  deleteQualifications([qualificationId]);
}

function deleteQualifications(qualificationIds = []) {
  const targetIds = Array.from(new Set(
    qualificationIds.filter((qualificationId) => getQualificationById(qualificationId)),
  ));

  if (!targetIds.length) {
    return;
  }

  const shouldDelete = targetIds.length === 1
    ? window.confirm(`"${getQualificationById(targetIds[0])?.name || "-"}"님의 자격 정보를 삭제할까요?\n삭제 후에는 현재 브라우저에서만 복구가 가능합니다.`)
    : window.confirm(`선택한 자격 정보 ${targetIds.length}건을 삭제할까요?\n삭제 후에는 현재 브라우저에서만 복구가 가능합니다.`);

  if (!shouldDelete) {
    return;
  }

  qualifications = qualifications.filter((item) => !targetIds.includes(item.id));
  state.selectedQualificationIds = getSelectedQualificationIds().filter((id) => !targetIds.includes(id));
  saveQualifications();

  if (targetIds.includes(state.selectedQualificationId)) {
    state.selectedQualificationId = qualifications[0]?.id ?? null;
  }

  if ((state.editingQualificationId && targetIds.includes(state.editingQualificationId)) || !qualifications.length) {
    closeQualificationModal();
  }

  render();
}

function resetForm() {
  elements.projectForm.reset();
  elements.projectCompany.value = state.company !== "all" ? state.company : companyOptions[0];
  elements.projectType.value = "";
  elements.projectCsfType.value = "";
  elements.projectStage.value = state.stage !== "all" ? state.stage : "NotStarted";
  elements.projectStartDate.value = getDefaultStartDate();
  elements.projectDeadline.value = getDefaultDeadline();
  elements.projectRole.value = "";
  elements.assessmentPotentialImpact.value = "medium";
  elements.assessmentStrategicAlignment.value = "medium";
  elements.assessmentExpectedEffect.value = "medium";
  elements.assessmentRippleEffect.value = "medium";
  elements.assessmentFeasibility.value = "medium";
  elements.assessmentUrgency.value = "medium";
  renderAssessmentSummary();
}

function populateForm(project) {
  const assessment = normalizeAssessment(project.assessment, project);
  elements.projectName.value = project.name;
  elements.projectCompany.value = project.company;
  elements.projectDepartment.value = project.department;
  elements.projectLeader.value = project.leader;
  elements.projectRole.value = project.role;
  elements.projectTeamMembers.value = project.teamMembers || "";
  elements.projectType.value = project.projectType || "";
  elements.projectLink.value = project.projectLink || "";
  elements.projectKpi.value = project.kpi || "";
  elements.projectKpiTarget.value = project.kpiTarget || "";
  elements.projectCsfType.value = project.csfType || "";
  elements.projectStage.value = project.stage;
  elements.projectStartDate.value = project.startDate;
  elements.projectDeadline.value = project.deadline;
  elements.assessmentPotentialImpact.value = assessment.potentialImpact;
  elements.assessmentStrategicAlignment.value = assessment.strategicAlignment;
  elements.assessmentExpectedEffect.value = assessment.expectedEffect;
  elements.assessmentRippleEffect.value = assessment.rippleEffect;
  elements.assessmentFeasibility.value = assessment.feasibility;
  elements.assessmentUrgency.value = assessment.urgency;
  renderAssessmentSummary(assessment);
}

function readFormValues() {
  const formData = new FormData(elements.projectForm);
  const assessment = readAssessmentFromForm();
  const startDate = formData.get("startDate");
  const deadline = formData.get("deadline");
  const stage = formData.get("stage");

  return {
    id: state.modalMode === "edit" ? state.editingId : undefined,
    name: formData.get("name"),
    company: formData.get("company"),
    department: formData.get("department"),
    leader: formData.get("leader"),
    role: formData.get("role"),
    teamMembers: formData.get("teamMembers"),
    projectType: formData.get("projectType"),
    projectLink: formData.get("projectLink"),
    kpi: formData.get("kpi"),
    kpiTarget: formData.get("kpiTarget"),
    csfType: formData.get("csfType"),
    stage,
    startDate,
    progress: getProgressFromStage(stage),
    deadline,
    health: getHealthFromStage(stage),
    assessment,
  };
}

function upsertProject(projectData) {
  const previousProject = state.modalMode === "edit" && state.editingId
    ? getProjectById(state.editingId)
    : null;
  if (state.modalMode === "edit" && previousProject && !canEditOrDeleteTaskProject(previousProject)) {
    window.alert("다른 담당자가 등록한 과제는 수정할 수 없습니다.");
    return;
  }
  const currentProfile = window.innotrackFirebase?.getCurrentUserProfile?.() || null;
  const currentUid = String(currentProfile?.uid || "").trim();
  const currentName = String(currentProfile?.name || "").trim();
  const normalized = normalizeProject({
    ...previousProject,
    ...projectData,
    createdByUid: previousProject?.createdByUid || currentUid,
    createdByName: previousProject?.createdByName || currentName,
    lastUpdated: toIsoDate(REFERENCE_DATE),
  });

  if (state.modalMode === "edit" && state.editingId) {
    const index = projects.findIndex((project) => project.id === state.editingId);
    if (index >= 0) {
      projects.splice(index, 1, normalized);
    }
  } else {
    projects.unshift(normalized);
  }

  saveProjects();
  if (state.modalMode !== "edit") {
    state.taskPage = 1;
  }
  state.selectedId = normalized.id;
  closeProjectModal();
  render();
}

function deleteProjects(projectIds = []) {
  const uniqueIds = [...new Set((Array.isArray(projectIds) ? projectIds : []).filter(Boolean))];
  if (!uniqueIds.length) {
    return;
  }

  const deletableProjects = uniqueIds
    .map((projectId) => getProjectById(projectId))
    .filter((project) => project && canEditOrDeleteTaskProject(project));
  const blockedCount = uniqueIds.length - deletableProjects.length;

  if (!deletableProjects.length) {
    if (blockedCount > 0) {
      window.alert("선택한 과제 중 삭제 권한이 있는 항목이 없습니다.");
    }
    return;
  }

  const shouldDelete = deletableProjects.length === 1
    ? window.confirm(`"${deletableProjects[0].name}" 과제를 삭제할까요?\n삭제 후에는 현재 브라우저에서만 복구가 가능합니다.`)
    : window.confirm(`선택한 ${deletableProjects.length}건 과제를 삭제할까요?\n삭제 후에는 현재 브라우저에서만 복구가 가능합니다.`);

  if (!shouldDelete) {
    return;
  }

  const deleteIdSet = new Set(deletableProjects.map((project) => project.id));
  projects = projects.filter((item) => !deleteIdSet.has(item.id));
  saveProjects();
  state.selectedTaskIds = getSelectedTaskIds().filter((id) => !deleteIdSet.has(id));

  if (deleteIdSet.has(state.selectedId)) {
    state.selectedId = projects[0]?.id ?? null;
  }

  if (!projects.length || (state.editingId && deleteIdSet.has(state.editingId))) {
    closeProjectModal();
  }

  if (blockedCount > 0) {
    window.alert(`삭제 권한이 없는 ${blockedCount}건은 제외하고 삭제했습니다.`);
  }

  render();
}

function deleteProject(projectId) {
  deleteProjects([projectId]);
}

function scrollSelectedTaskDetailIntoView() {
  const detailPanel = elements.detailCard?.closest(".board-card");

  if (!detailPanel) {
    return;
  }

  detailPanel.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function hasTaskManagementAccess() {
  const profile = window.innotrackFirebase?.getCurrentUserProfile?.();
  const role = normalizeAppRole(profile?.role);
  return role === "user" || role === "innovation_manager" || role === "super_admin";
}

function hasTaskGlobalManagementAccess() {
  const profile = window.innotrackFirebase?.getCurrentUserProfile?.();
  const role = normalizeAppRole(profile?.role);
  return role === "innovation_manager" || role === "super_admin";
}

function isTaskOwner(project) {
  const profile = window.innotrackFirebase?.getCurrentUserProfile?.();
  const role = normalizeAppRole(profile?.role);
  if (!project || !profile || role !== "user") {
    return false;
  }

  const currentUid = String(profile.uid || "").trim();
  const currentName = String(profile.name || "").trim();
  const ownerUid = String(project.createdByUid || "").trim();
  const ownerName = String(project.createdByName || "").trim();
  const projectLeader = String(project.leader || "").trim();

  if (currentUid && ownerUid) {
    return currentUid === ownerUid;
  }

  // Legacy records may not have owner uid yet. Fall back to name-based check.
  return Boolean(currentName) && (currentName === ownerName || currentName === projectLeader);
}

function canEditOrDeleteTaskProject(project) {
  return hasTaskGlobalManagementAccess() || isTaskOwner(project);
}

function hasQualificationManagementAccess() {
  const profile = window.innotrackFirebase?.getCurrentUserProfile?.();
  const role = normalizeAppRole(profile?.role);
  return role === "education_manager" || role === "super_admin";
}

function syncTaskActionButtons(filteredProjects) {
  const canManageTasks = hasTaskManagementAccess();
  const selectedProject = filteredProjects.find((project) => project.id === state.selectedId) || getProjectById(state.selectedId);
  const hasSelectedProject = Boolean(selectedProject);
  const canEditSelectedProject = hasSelectedProject && canEditOrDeleteTaskProject(selectedProject);

  if (elements.taskDetailButton) {
    elements.taskDetailButton.hidden = true;
    elements.taskDetailButton.disabled = !hasSelectedProject;
  }

  if (elements.addProjectButton) {
    elements.addProjectButton.hidden = !canManageTasks;
  }

  if (elements.taskEditButton) {
    elements.taskEditButton.hidden = !canManageTasks;
    elements.taskEditButton.disabled = !canManageTasks || !hasSelectedProject || !canEditSelectedProject;
  }

  if (elements.taskDeleteButton) {
    elements.taskDeleteButton.hidden = !canManageTasks;
    elements.taskDeleteButton.disabled = !canManageTasks || !hasSelectedProject || !canEditSelectedProject;
  }
}

function refreshTaskSelectionUi(filteredProjects = getFilteredProjects()) {
  elements.taskTableBody?.querySelectorAll(".task-row").forEach((row) => {
    const projectId = row.getAttribute("data-id") || "";
    const isSelected = projectId === state.selectedId;
    row.classList.toggle("is-selected", isSelected);

    const selectionNode = row.querySelector("[data-task-select]");
    if (selectionNode) {
      const isChecked = hasCheckedTask(projectId);
      selectionNode.classList.toggle("is-selected", isChecked);
      selectionNode.setAttribute("aria-pressed", isChecked ? "true" : "false");
    }
  });

  renderDetailCard(filteredProjects);
  syncTaskActionButtons(filteredProjects);
  attachDetailEvents();
}

function attachTableEvents() {
  elements.taskTableBody.querySelectorAll(".task-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      const interactiveTarget = event.target.closest("[data-task-select], button");
      if (interactiveTarget) {
        return;
      }

      state.selectedId = row.dataset.id;
      refreshTaskSelectionUi();
    });
  });

  elements.taskTableBody.querySelectorAll("[data-task-select]").forEach((selectionNode) => {
    const toggleSelection = () => {
      const projectId = selectionNode.getAttribute("data-task-select");
      if (!projectId) {
        return;
      }
      state.selectedId = projectId;
      toggleCheckedTask(projectId);
      refreshTaskSelectionUi();
    };

    selectionNode.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleSelection();
    });
    selectionNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        toggleSelection();
      }
    });
  });
}

function attachQualificationTableEvents() {
  elements.qualificationTableBody?.querySelectorAll(".qualification-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      const interactiveTarget = event.target.closest("[data-qualification-select]");
      if (interactiveTarget) {
        return;
      }

      state.selectedQualificationId = row.dataset.qualificationId;
      refreshQualificationSelectionUi();
    });
  });

  elements.qualificationTableBody?.querySelectorAll("[data-qualification-select]").forEach((selectionNode) => {
    const toggleSelection = () => {
      const qualificationId = selectionNode.getAttribute("data-qualification-select");
      if (!qualificationId) {
        return;
      }

      state.selectedQualificationId = qualificationId;
      toggleCheckedQualification(qualificationId);
      refreshQualificationSelectionUi();
    };

    selectionNode.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleSelection();
    });
    selectionNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        toggleSelection();
      }
    });
  });
}

function refreshQualificationSelectionUi(filteredQualifications = getFilteredQualifications()) {
  elements.qualificationTableBody?.querySelectorAll(".qualification-row").forEach((row) => {
    const qualificationId = row.getAttribute("data-qualification-id") || "";
    const isSelected = qualificationId === state.selectedQualificationId;
    row.classList.toggle("is-selected", isSelected);

    const selectionNode = row.querySelector("[data-qualification-select]");
    if (selectionNode) {
      const isChecked = hasCheckedQualification(qualificationId);
      selectionNode.classList.toggle("is-selected", isChecked);
      selectionNode.setAttribute("aria-pressed", isChecked ? "true" : "false");
    }
  });

  syncQualificationActionButtons(filteredQualifications);
}

function attachCertificationExamTableEvents() {
  elements.certificationExamTableBody?.querySelectorAll("[data-certification-exam-id]").forEach((row) => {
    row.addEventListener("click", (event) => {
      const interactiveTarget = event.target.closest("[data-certification-exam-select]");
      if (interactiveTarget) {
        return;
      }
      state.selectedCertificationExamId = row.getAttribute("data-certification-exam-id");
      render();
    });
  });

  elements.certificationExamTableBody?.querySelectorAll("[data-certification-exam-select]").forEach((selectionNode) => {
    const toggleSelection = () => {
      const examId = selectionNode.getAttribute("data-certification-exam-select");
      if (!examId) {
        return;
      }
      state.selectedCertificationExamId = examId;
      toggleCheckedCertificationExam(examId);
      render();
    };

    selectionNode.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleSelection();
    });
    selectionNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        toggleSelection();
      }
    });
  });
}

function attachTaskPaginationEvents() {
  elements.taskPagination?.querySelectorAll("[data-task-page]").forEach((pageNode) => {
    const moveToPage = () => {
      state.taskPage = Number(pageNode.dataset.taskPage) || 1;
      render();
    };

    pageNode.addEventListener("click", moveToPage);
    pageNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        moveToPage();
      }
    });
  });
}

function attachQualificationPaginationEvents() {
  elements.qualificationPagination?.querySelectorAll("[data-qualification-page]").forEach((pageNode) => {
    const moveToPage = () => {
      state.qualificationPage = Number(pageNode.dataset.qualificationPage) || 1;
      render();
    };

    pageNode.addEventListener("click", moveToPage);
    pageNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        moveToPage();
      }
    });
  });
}

function attachEducationAdminPaginationEvents() {
  elements.educationAdminPagination?.querySelectorAll("[data-education-admin-page]").forEach((pageNode) => {
    const moveToPage = () => {
      state.educationAdminPage = Number(pageNode.dataset.educationAdminPage) || 1;
      render();
    };

    pageNode.addEventListener("click", moveToPage);
    pageNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        moveToPage();
      }
    });
  });
}

function attachSurveyResultPaginationEvents() {
  elements.surveyResultPagination?.querySelectorAll("[data-survey-result-page]").forEach((pageNode) => {
    const moveToPage = () => {
      state.surveyResultPage = Number(pageNode.dataset.surveyResultPage) || 1;
      render();
    };

    pageNode.addEventListener("click", moveToPage);
    pageNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        moveToPage();
      }
    });
  });
}

function attachDetailEvents() {
  elements.detailCard.querySelectorAll("[data-detail-action='edit']").forEach((button) => {
    button.addEventListener("click", () => {
      openProjectModal("edit", button.dataset.id);
    });
  });

  elements.detailCard.querySelectorAll("[data-detail-action='delete']").forEach((button) => {
    button.addEventListener("click", () => {
      deleteProject(button.dataset.id);
    });
  });
}

function attachMilestoneEvents() {
  elements.milestoneList.querySelectorAll("[data-milestone-id]").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedMilestoneId = card.dataset.milestoneId;
      render();
    });
  });
}

function renderMilestones() {
  const sortedMilestones = getSortedMilestones();

  if (!sortedMilestones.some((item) => item.id === state.selectedMilestoneId)) {
    state.selectedMilestoneId = sortedMilestones[0]?.id ?? null;
  }

  if (elements.editMilestoneButton) {
    elements.editMilestoneButton.disabled = !state.selectedMilestoneId;
  }

  if (elements.deleteMilestoneButton) {
    elements.deleteMilestoneButton.disabled = !state.selectedMilestoneId;
  }

  if (!sortedMilestones.length) {
    elements.milestoneList.innerHTML = '<div class="empty-state">등록된 주요 일정이 없습니다. 상단의 일정 추가 버튼으로 바로 입력해 보세요.</div>';
    return;
  }

  elements.milestoneList.innerHTML = sortedMilestones
    .map((item, index) => {
      const dateParts = getMilestoneDateParts(item.date);
      const dateLabel = `${dateParts.month} ${Number(dateParts.day)}일`;
      const isSelected = item.id === state.selectedMilestoneId;

      return `
        <button
          class="milestone-item ${isSelected ? "is-selected" : ""} fade-up"
          type="button"
          data-milestone-id="${item.id}"
          style="animation-delay:${index * 70}ms"
        >
          <span class="milestone-date-chip ${item.tone}">${dateLabel}</span>
          <p class="milestone-title">${item.title}</p>
        </button>
      `;
    })
    .join("");
}

function bindEvents() {
  elements.familySiteSelect?.addEventListener("change", (event) => {
    const url = String(event.target.value || "").trim();
    if (!url) {
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
    event.target.value = "";
  });

  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => {
      setActivePage(button.dataset.pageTarget || "innovation");
    });
  });

  elements.navGroupToggles.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      const groupKey = toggleButton.dataset.navGroupToggle;
      if (!groupKey) {
        return;
      }

      if (groupKey === "education") {
        const educationPages = ["education-calendar", "my-learning", "education-admin", "certification-management", "survey-management"];
        const isEducationActive = educationPages.includes(state.activePage);

        if (!isEducationActive) {
          setActivePage("education-calendar");
          return;
        }
      }

      toggleNavGroup(groupKey);
    });
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    state.taskPage = 1;
    render();
  });

  elements.qualificationSearchInput?.addEventListener("input", (event) => {
    state.qualificationSearch = event.target.value.trim();
    state.qualificationPage = 1;
    render();
  });

  elements.companyFilter.addEventListener("change", (event) => {
    state.company = event.target.value;
    state.taskPage = 1;
    render();
  });

  elements.yearFilter?.addEventListener("change", (event) => {
    state.year = event.target.value;
    state.taskPage = 1;
    render();
  });

  elements.qualificationYearFilter?.addEventListener("change", (event) => {
    state.qualificationYear = event.target.value;
    state.qualificationPage = 1;
    render();
  });

  elements.qualificationCompanyFilter?.addEventListener("change", (event) => {
    state.qualificationCompany = event.target.value;
    state.qualificationPage = 1;
    render();
  });

  elements.stageFilter.addEventListener("change", (event) => {
    state.stage = event.target.value;
    state.taskPage = 1;
    render();
  });

  elements.qualificationTypeFilter?.addEventListener("change", (event) => {
    state.qualificationType = event.target.value;
    state.qualificationPage = 1;
    renderQualificationGradeFilterOptions();
    render();
  });

  elements.healthFilter.addEventListener("change", (event) => {
    state.health = event.target.value;
    state.taskPage = 1;
    render();
  });

  elements.qualificationGradeFilter?.addEventListener("change", (event) => {
    state.qualificationGrade = event.target.value;
    state.qualificationPage = 1;
    render();
  });

  elements.certificationApplicantScopeFilter?.addEventListener("change", (event) => {
    state.certificationApplicantScope = event.target.value === "all" ? "all" : "selected";
    render();
  });

  elements.certificationApplicantTableBody?.addEventListener("change", (event) => {
    const fieldNode = event.target.closest("[data-certification-application-field]");
    if (!fieldNode) {
      return;
    }
    const applicationId = fieldNode.getAttribute("data-certification-application-id");
    const field = fieldNode.getAttribute("data-certification-application-field");
    if (!applicationId || !field) {
      return;
    }
    updateCertificationExamApplicationField(applicationId, field, fieldNode.value);
  });

  elements.certificationApplicantTableBody?.addEventListener("click", (event) => {
    const selectionNode = event.target.closest("[data-certification-application-select]");
    if (!selectionNode) {
      return;
    }
    const applicationId = selectionNode.getAttribute("data-certification-application-select");
    if (!applicationId) {
      return;
    }
    toggleCheckedCertificationApplicant(applicationId);
    render();
  });

  elements.certificationApplicantTableBody?.addEventListener("keydown", (event) => {
    const isToggleKey = event.key === "Enter" || event.key === " ";
    if (!isToggleKey) {
      return;
    }
    const selectionNode = event.target.closest("[data-certification-application-select]");
    if (!selectionNode) {
      return;
    }
    event.preventDefault();
    const applicationId = selectionNode.getAttribute("data-certification-application-select");
    if (!applicationId) {
      return;
    }
    toggleCheckedCertificationApplicant(applicationId);
    render();
  });

  elements.certificationApplicantCompleteButton?.addEventListener("click", () => {
    const selectedIds = getSelectedCertificationApplicantIds();
    if (!selectedIds.length) {
      window.alert("합격 처리할 응시자를 먼저 선택해 주세요.");
      return;
    }
    completeCertificationExamApplications(selectedIds);
  });

  elements.certificationApplicantCancelCompleteButton?.addEventListener("click", () => {
    const selectedIds = getSelectedCertificationApplicantIds();
    if (!selectedIds.length) {
      window.alert("합격취소할 응시자를 먼저 선택해 주세요.");
      return;
    }
    cancelCertificationExamCompletions(selectedIds);
  });

  elements.certificationApplicantDeleteButton?.addEventListener("click", () => {
    const selectedIds = getSelectedCertificationApplicantIds();
    if (!selectedIds.length) {
      window.alert("삭제할 응시자를 먼저 선택해 주세요.");
      return;
    }
    deleteCertificationExamApplications(selectedIds);
  });

  elements.educationLevelFilter?.addEventListener("change", (event) => {
    state.educationLevel = event.target.value;
    state.educationJob = "all";
    state.educationTrack = "all";
    state.selectedEducationScheduleId = null;
    render();
  });

  elements.educationJobFilter?.addEventListener("change", (event) => {
    state.educationJob = event.target.value;
    state.educationTrack = "all";
    state.selectedEducationScheduleId = null;
    render();
  });

  elements.educationTrackFilter?.addEventListener("change", (event) => {
    state.educationTrack = event.target.value;
    state.selectedEducationScheduleId = null;
    render();
  });

  elements.educationMonthPrevButton?.addEventListener("click", () => {
    shiftEducationMonth(-1);
    state.educationExpandedDate = null;
    render();
  });

  elements.educationMonthNextButton?.addEventListener("click", () => {
    shiftEducationMonth(1);
    state.educationExpandedDate = null;
    render();
  });

  elements.educationCalendarGrid?.addEventListener("click", (event) => {
    const moreButton = event.target.closest("[data-education-more-date]");
    if (moreButton) {
      const dateToken = moreButton.getAttribute("data-education-more-date");
      if (dateToken) {
        state.educationExpandedDate = state.educationExpandedDate === dateToken ? null : dateToken;
        render();
      }
      return;
    }

    const scheduleChip = event.target.closest("[data-education-schedule-id]");
    if (scheduleChip) {
      const scheduleId = scheduleChip.getAttribute("data-education-schedule-id");
      if (scheduleId) {
        const schedule = getEducationScheduleById(scheduleId);
        state.selectedCalendarEventType = "education";
        state.selectedEducationScheduleId = scheduleId;
        state.certificationApplyFormExamId = null;
        state.educationApplyFormScheduleId = null;
        if (schedule) {
          state.selectedEducationDate = schedule.startDate;
        }
        render();
      }
      return;
    }

    const examChip = event.target.closest("[data-certification-exam-id]");
    if (examChip) {
      const examId = examChip.getAttribute("data-certification-exam-id");
      if (examId) {
        const exam = getCertificationExamById(examId);
        state.selectedCalendarEventType = "certification";
        state.selectedCertificationExamId = examId;
        state.educationApplyFormScheduleId = null;
        if (exam) {
          const examDateToken = String(exam.examDateTime || "").slice(0, 10);
          if (isValidDateString(examDateToken)) {
            state.selectedEducationDate = examDateToken;
          }
        }
        render();
      }
      return;
    }

    const dateButton = event.target.closest("[data-education-date]");
    if (dateButton) {
      const dateToken = dateButton.getAttribute("data-education-date");
      if (dateToken) {
        state.selectedEducationDate = dateToken;
        state.selectedCalendarEventType = "education";
        const selectedDaySchedules = getEducationSchedulesOnDate(dateToken, getEducationSchedulesInCurrentMonth());
        state.selectedEducationScheduleId = selectedDaySchedules[0]?.id ?? null;
        state.certificationApplyFormExamId = null;
        state.educationApplyFormScheduleId = null;
        render();
      }
    }
  });

  elements.educationScheduleDetail?.addEventListener("click", (event) => {
    const cancelButton = event.target.closest("[data-education-apply-cancel]");
    if (cancelButton) {
      state.educationApplyFormScheduleId = null;
      render();
      return;
    }

    const certificationCancelButton = event.target.closest("[data-certification-apply-cancel]");
    if (certificationCancelButton) {
      state.certificationApplyFormExamId = null;
      render();
      return;
    }

    const applyButton = event.target.closest("[data-education-apply-toggle]");
    if (applyButton) {
      const scheduleId = applyButton.getAttribute("data-education-apply-toggle");
      if (!scheduleId) {
        return;
      }

      state.educationApplyFormScheduleId = state.educationApplyFormScheduleId === scheduleId
        ? null
        : scheduleId;
      render();
      return;
    }

    const certificationApplyButton = event.target.closest("[data-certification-apply-toggle]");
    if (!certificationApplyButton) {
      return;
    }
    const examId = certificationApplyButton.getAttribute("data-certification-apply-toggle");
    if (!examId) {
      return;
    }
    state.certificationApplyFormExamId = state.certificationApplyFormExamId === examId
      ? null
      : examId;
    render();
  });

  elements.educationScheduleDetail?.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      return;
    }
    event.preventDefault();
    if (form.matches("[data-education-apply-form]")) {
      const scheduleId = form.getAttribute("data-education-apply-form");
      if (!scheduleId) {
        return;
      }
      const formData = new FormData(form);
      applyEducationSchedule(scheduleId, {
        position: String(formData.get("position") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        notebookRequired: String(formData.get("notebookRequired") || "").trim(),
        residentRegistrationNo: String(formData.get("residentRegistrationNo") || "").trim(),
      });
      state.educationApplyFormScheduleId = null;
      return;
    }

    if (!form.matches("[data-certification-apply-form]")) {
      return;
    }
    const examId = form.getAttribute("data-certification-apply-form");
    if (!examId) {
      return;
    }
    const formData = new FormData(form);
    applyCertificationExam(examId, {
      position: String(formData.get("position") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
    });
    state.certificationApplyFormExamId = null;
  });

  elements.myLearningTableBody?.addEventListener("click", (event) => {
    const evaluateButton = event.target.closest("[data-learning-evaluate]");
    if (!evaluateButton) {
      return;
    }

    const enrollmentId = evaluateButton.getAttribute("data-learning-evaluate");
    if (!enrollmentId) {
      return;
    }

    state.myLearningEvaluationEnrollmentId = state.myLearningEvaluationEnrollmentId === enrollmentId
      ? null
      : enrollmentId;
    render();
  });

  elements.myLearningEvaluationPanel?.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-learning-evaluation-close]");
    if (!closeButton) {
      return;
    }
    state.myLearningEvaluationEnrollmentId = null;
    render();
  });

  elements.myLearningEvaluationPanel?.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      return;
    }
    if (!form.matches("[data-learning-evaluation-form]")) {
      return;
    }
    event.preventDefault();

    const enrollmentId = form.getAttribute("data-learning-evaluation-form");
    if (!enrollmentId) {
      return;
    }
    if (getSurveyResponseByEnrollment(enrollmentId)) {
      window.alert("이미 평가가 완료된 과정입니다.");
      state.myLearningEvaluationEnrollmentId = null;
      render();
      return;
    }
    const targetIndex = educationEnrollments.findIndex((item) => item.id === enrollmentId);
    if (targetIndex < 0) {
      return;
    }
    if (Number(educationEnrollments[targetIndex].satisfaction) > 0) {
      window.alert("이미 평가가 완료된 과정입니다.");
      state.myLearningEvaluationEnrollmentId = null;
      render();
      return;
    }

    const formData = new FormData(form);
    const enrollment = educationEnrollments[targetIndex];
    const schedule = getEducationScheduleById(enrollment.scheduleId);
    const scheduleSurveyForm = getSurveyFormById(schedule?.surveyFormId || "") || getSelectedSurveyForm();
    const activeQuestions = getActiveSurveyQuestionsByFormId(scheduleSurveyForm?.id || "");
    if (!activeQuestions.length) {
      window.alert("활성 설문 문항이 없습니다.");
      return;
    }
    const answers = activeQuestions.map((question) => {
      const rawValue = formData.get(`q_${question.id}`);
      if (question.type === "scale") {
        return {
          questionId: question.id,
          type: "scale",
          value: Number(rawValue),
        };
      }
      return {
        questionId: question.id,
        type: "text",
        value: String(rawValue || "").trim(),
      };
    });
    const hasInvalidScale = answers.some((answer) =>
      answer.type === "scale" && (!Number.isFinite(answer.value) || answer.value < 1 || answer.value > 5));
    if (hasInvalidScale) {
      window.alert("5점 척도 문항의 점수를 모두 선택해 주세요.");
      return;
    }
    const scaleScores = answers
      .filter((answer) => answer.type === "scale")
      .map((answer) => Number(answer.value));
    const satisfaction = scaleScores.length
      ? Number((scaleScores.reduce((sum, score) => sum + score, 0) / scaleScores.length).toFixed(2))
      : null;

    const course = schedule ? getEducationCourseById(schedule.courseId) : null;
    upsertSurveyResponse({
      surveyFormId: scheduleSurveyForm?.id || "",
      surveyFormName: scheduleSurveyForm?.name || "기본 설문",
      enrollmentId,
      scheduleId: enrollment.scheduleId,
      respondentName: enrollment.name,
      courseName: schedule ? getEducationAdminDisplayCourseName(schedule, course) : "",
      submittedAt: toIsoDate(REFERENCE_DATE),
      answers,
    });

    educationEnrollments[targetIndex] = normalizeEducationEnrollment({
      ...enrollment,
      satisfaction,
    }, enrollmentId);
    saveEducationEnrollments();
    window.alert("만족도 평가가 저장되었습니다.");
    state.myLearningEvaluationEnrollmentId = null;
    render();
  });

  elements.educationAdminStatusFilter?.addEventListener("change", (event) => {
    state.educationAdminStatus = event.target.value;
    state.educationAdminPage = 1;
    render();
  });

  elements.educationAdminYearFilter?.addEventListener("change", (event) => {
    state.educationAdminYear = event.target.value;
    state.educationAdminPage = 1;
    render();
  });

  elements.educationAdminDivisionFilter?.addEventListener("change", (event) => {
    state.educationAdminDivision = event.target.value;
    state.educationAdminPage = 1;
    render();
  });

  elements.educationAdminSearchInput?.addEventListener("input", (event) => {
    state.educationAdminSearch = event.target.value.trim();
    state.educationAdminPage = 1;
    render();
  });

  elements.educationEnrollmentScopeFilter?.addEventListener("change", (event) => {
    state.educationEnrollmentScope = event.target.value === "all" ? "all" : "selected";
    render();
  });

  elements.educationEnrollmentSearchInput?.addEventListener("input", (event) => {
    state.educationEnrollmentSearch = event.target.value.trim();
    render();
  });

  elements.educationEnrollmentCompleteButton?.addEventListener("click", () => {
    updateSelectedEducationEnrollmentsStatus(true);
  });

  elements.educationEnrollmentIncompleteButton?.addEventListener("click", () => {
    updateSelectedEducationEnrollmentsStatus(false);
  });

  elements.educationEnrollmentCancelButton?.addEventListener("click", () => {
    cancelSelectedEducationEnrollments();
  });

  elements.addEducationAdminButton?.addEventListener("click", () => {
    openEducationAdminModal("create");
  });

  elements.editEducationAdminButton?.addEventListener("click", () => {
    if (!state.selectedEducationAdminId) {
      return;
    }
    openEducationAdminModal("edit", state.selectedEducationAdminId);
  });

  elements.deleteEducationAdminButton?.addEventListener("click", () => {
    const checkedIds = getSelectedEducationAdminIds();
    if (checkedIds.length) {
      deleteEducationAdminSchedules(checkedIds);
      return;
    }
    if (!state.selectedEducationAdminId) {
      return;
    }
    deleteEducationAdminSchedules([state.selectedEducationAdminId]);
  });

  elements.educationCostAddRowButton?.addEventListener("click", () => {
    const scheduleId = elements.educationCostAddRowButton?.dataset.educationCostScheduleId;
    if (!scheduleId) {
      return;
    }
    addEducationCostItem(scheduleId);
  });

  elements.educationCostTableBody?.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-education-cost-delete-row]");
    if (!deleteButton) {
      return;
    }

    const scheduleId = elements.educationCostAddRowButton?.dataset.educationCostScheduleId;
    const rowId = deleteButton.getAttribute("data-education-cost-delete-row");
    if (!scheduleId || !rowId) {
      return;
    }

    removeEducationCostItem(scheduleId, rowId);
  });

  elements.educationCostTableBody?.addEventListener("change", (event) => {
    const fieldNode = event.target.closest("[data-education-cost-field]");
    if (!fieldNode) {
      return;
    }

    const scheduleId = elements.educationCostAddRowButton?.dataset.educationCostScheduleId;
    const rowId = fieldNode.getAttribute("data-education-cost-row-id");
    const field = fieldNode.getAttribute("data-education-cost-field");
    if (!scheduleId || !rowId || !field) {
      return;
    }

    updateEducationCostItem(scheduleId, rowId, field, fieldNode.value);
  });

  elements.educationEnrollmentTableBody?.addEventListener("change", (event) => {
    const selectNode = event.target.closest("[data-education-enrollment-select]");
    if (!selectNode) {
      return;
    }

    const enrollmentId = selectNode.getAttribute("data-education-enrollment-select");
    if (!enrollmentId) {
      return;
    }

    toggleSelectedEducationEnrollment(enrollmentId);
    render();
  });

  elements.educationAdminTableBody?.addEventListener("click", (event) => {
    const settleButton = event.target.closest("[data-education-settle-id]");
    if (settleButton) {
      const scheduleId = settleButton.getAttribute("data-education-settle-id");
      if (!scheduleId) {
        return;
      }
      markEducationSettlementDone(scheduleId);
      return;
    }

    const selectionNode = event.target.closest("[data-education-admin-select]");
    if (selectionNode) {
      const scheduleId = selectionNode.getAttribute("data-education-admin-select");
      if (!scheduleId) {
        return;
      }
      state.selectedEducationAdminId = scheduleId;
      state.selectedEducationScheduleId = scheduleId;
      state.educationEnrollmentScope = "selected";
      toggleCheckedEducationAdmin(scheduleId);
      render();
      return;
    }

    const rowNode = event.target.closest("[data-education-admin-id]");
    if (!rowNode) {
      return;
    }

    const scheduleId = rowNode.getAttribute("data-education-admin-id");
    if (!scheduleId) {
      return;
    }

    state.selectedEducationAdminId = scheduleId;
    state.selectedEducationScheduleId = scheduleId;
    state.educationEnrollmentScope = "selected";
    render();
  });

  elements.educationAdminTableBody?.addEventListener("keydown", (event) => {
    const isToggleKey = event.key === "Enter" || event.key === " ";
    if (!isToggleKey) {
      return;
    }

    const selectionNode = event.target.closest("[data-education-admin-select]");
    if (!selectionNode) {
      return;
    }

    event.preventDefault();
    const scheduleId = selectionNode.getAttribute("data-education-admin-select");
    if (!scheduleId) {
      return;
    }

    state.selectedEducationAdminId = scheduleId;
    state.selectedEducationScheduleId = scheduleId;
    state.educationEnrollmentScope = "selected";
    toggleCheckedEducationAdmin(scheduleId);
    render();
  });

  elements.educationAdminDetailCard?.addEventListener("click", (event) => {
    const settleButton = event.target.closest("[data-education-settle-id]");
    if (!settleButton) {
      return;
    }

    const scheduleId = settleButton.getAttribute("data-education-settle-id");
    if (!scheduleId) {
      return;
    }

    markEducationSettlementDone(scheduleId);
  });

  elements.taskDetailButton?.addEventListener("click", () => {
    const project = getProjectById(state.selectedId);

    if (!project) {
      return;
    }

    scrollSelectedTaskDetailIntoView();
  });

  elements.taskEditButton?.addEventListener("click", () => {
    const project = getProjectById(state.selectedId);

    if (!project) {
      return;
    }

    openProjectModal("edit", project.id);
  });

  elements.taskDeleteButton?.addEventListener("click", () => {
    const checkedIds = getSelectedTaskIds();
    if (checkedIds.length) {
      deleteProjects(checkedIds);
      return;
    }

    const project = getProjectById(state.selectedId);
    if (!project) {
      return;
    }
    deleteProject(project.id);
  });

  elements.downloadReportButton?.addEventListener("click", () => {
    window.alert("초안 단계의 다운로드 기능은 아직 연결되지 않았습니다. 다음 단계에서 PDF/CSV로 확장할 예정입니다.");
  });

  elements.adminExportProjectsButton?.addEventListener("click", exportProjectsCsv);
  elements.adminExportQualificationsButton?.addEventListener("click", exportQualificationsCsv);
  elements.adminExportEducationSchedulesButton?.addEventListener("click", exportEducationSchedulesCsv);
  elements.adminExportEducationEnrollmentsButton?.addEventListener("click", exportEducationEnrollmentsCsv);
  elements.adminExportEducationFeedbackButton?.addEventListener("click", exportEducationFeedbackCsv);
  elements.adminExportEducationCostsButton?.addEventListener("click", exportEducationCostDetailsCsv);
  elements.adminExportSurveyResultsButton?.addEventListener("click", exportSurveyResultsCsv);

  elements.adminImportProjectsButton?.addEventListener("click", () => {
    elements.adminImportProjectsFile?.click();
  });
  elements.adminImportQualificationsButton?.addEventListener("click", () => {
    elements.adminImportQualificationsFile?.click();
  });
  elements.adminImportEducationSchedulesButton?.addEventListener("click", () => {
    elements.adminImportEducationSchedulesFile?.click();
  });

  elements.adminImportProjectsFile?.addEventListener("change", async (event) => {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    try {
      await importProjectsCsv(file);
      render();
      window.alert("혁신과제 CSV 업로드가 완료되었습니다.");
    } catch (error) {
      window.alert("혁신과제 CSV 업로드에 실패했습니다.");
    } finally {
      input.value = "";
    }
  });

  elements.adminImportQualificationsFile?.addEventListener("change", async (event) => {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    try {
      await importQualificationsCsv(file);
      render();
      window.alert("자격현황 CSV 업로드가 완료되었습니다.");
    } catch (error) {
      window.alert("자격현황 CSV 업로드에 실패했습니다.");
    } finally {
      input.value = "";
    }
  });

  elements.adminImportEducationSchedulesFile?.addEventListener("change", async (event) => {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    try {
      await importEducationSchedulesCsv(file);
      render();
      window.alert("교육운영관리 CSV 업로드가 완료되었습니다.");
    } catch (error) {
      window.alert("교육운영관리 CSV 업로드에 실패했습니다.");
    } finally {
      input.value = "";
    }
  });

  elements.adminNoticeTableBody?.addEventListener("click", (event) => {
    const rowNode = event.target.closest("[data-admin-notice-id]");
    if (!rowNode) {
      return;
    }
    const noticeId = rowNode.getAttribute("data-admin-notice-id");
    if (!noticeId) {
      return;
    }
    state.selectedAdminNoticeId = noticeId;
    render();
  });

  elements.adminDashboardMilestoneTableBody?.addEventListener("click", (event) => {
    const rowNode = event.target.closest("[data-admin-dashboard-milestone-id]");
    if (!rowNode) {
      return;
    }
    const milestoneId = rowNode.getAttribute("data-admin-dashboard-milestone-id");
    if (!milestoneId) {
      return;
    }
    state.selectedAdminDashboardMilestoneId = milestoneId;
    render();
  });

  elements.adminAddNoticeButton?.addEventListener("click", () => {
    const title = window.prompt("공지 제목을 입력해 주세요.");
    if (!title || !String(title).trim()) {
      return;
    }
    const dateInput = window.prompt("게시일을 입력해 주세요. (YYYY-MM-DD)", toIsoDate(REFERENCE_DATE));
    const date = isValidDateString(dateInput) ? dateInput : toIsoDate(REFERENCE_DATE);
    const nextId = `NOTICE-${String(Date.now()).slice(-6)}`;
    dashboardNoticeItems.unshift({
      id: nextId,
      title: String(title).trim(),
      date,
    });
    state.selectedAdminNoticeId = nextId;
    saveDashboardNotices();
    render();
  });

  elements.adminEditNoticeButton?.addEventListener("click", () => {
    if (!state.selectedAdminNoticeId) {
      window.alert("수정할 공지를 선택해 주세요.");
      return;
    }
    const index = dashboardNoticeItems.findIndex((item) => item.id === state.selectedAdminNoticeId);
    if (index < 0) {
      return;
    }
    const current = dashboardNoticeItems[index];
    const nextTitle = window.prompt("공지 제목을 수정해 주세요.", current.title);
    if (!nextTitle || !String(nextTitle).trim()) {
      return;
    }
    const nextDateInput = window.prompt("게시일을 입력해 주세요. (YYYY-MM-DD)", current.date);
    const nextDate = isValidDateString(nextDateInput) ? nextDateInput : current.date;
    dashboardNoticeItems.splice(index, 1, {
      ...current,
      title: String(nextTitle).trim(),
      date: nextDate,
    });
    saveDashboardNotices();
    render();
  });

  elements.adminDeleteNoticeButton?.addEventListener("click", () => {
    if (!state.selectedAdminNoticeId) {
      window.alert("삭제할 공지를 선택해 주세요.");
      return;
    }
    const shouldDelete = window.confirm("선택한 공지사항을 삭제할까요?");
    if (!shouldDelete) {
      return;
    }
    dashboardNoticeItems = dashboardNoticeItems.filter((item) => item.id !== state.selectedAdminNoticeId);
    state.selectedAdminNoticeId = dashboardNoticeItems[0]?.id ?? null;
    saveDashboardNotices();
    render();
  });

  elements.adminAddDashboardMilestoneButton?.addEventListener("click", () => {
    openMilestoneModal("create");
  });

  elements.adminEditDashboardMilestoneButton?.addEventListener("click", () => {
    if (!state.selectedAdminDashboardMilestoneId) {
      window.alert("수정할 주요 일정을 선택해 주세요.");
      return;
    }
    openMilestoneModal("edit", state.selectedAdminDashboardMilestoneId);
  });

  elements.adminDeleteDashboardMilestoneButton?.addEventListener("click", () => {
    if (!state.selectedAdminDashboardMilestoneId) {
      window.alert("삭제할 주요 일정을 선택해 주세요.");
      return;
    }
    deleteMilestone(state.selectedAdminDashboardMilestoneId);
    state.selectedAdminDashboardMilestoneId = getSortedMilestones()[0]?.id ?? null;
    render();
  });

  elements.addProjectButton?.addEventListener("click", () => {
    openProjectModal("create");
  });

  elements.addQualificationButton?.addEventListener("click", () => {
    if (!hasQualificationManagementAccess()) {
      return;
    }
    openQualificationModal("create");
  });

  elements.editQualificationButton?.addEventListener("click", () => {
    if (!hasQualificationManagementAccess()) {
      return;
    }
    if (!state.selectedQualificationId) {
      return;
    }

    openQualificationModal("edit", state.selectedQualificationId);
  });

  elements.deleteQualificationButton?.addEventListener("click", () => {
    if (!hasQualificationManagementAccess()) {
      return;
    }
    const checkedIds = getSelectedQualificationIds();

    if (checkedIds.length) {
      deleteQualifications(checkedIds);
      return;
    }

    if (!state.selectedQualificationId) {
      return;
    }

    deleteQualification(state.selectedQualificationId);
  });

  elements.addCertificationExamButton?.addEventListener("click", () => {
    if (!hasQualificationManagementAccess()) {
      return;
    }
    openCertificationExamModal("create");
  });

  elements.editCertificationExamButton?.addEventListener("click", () => {
    if (!hasQualificationManagementAccess()) {
      return;
    }
    if (!state.selectedCertificationExamId) {
      return;
    }
    openCertificationExamModal("edit", state.selectedCertificationExamId);
  });

  elements.deleteCertificationExamButton?.addEventListener("click", () => {
    if (!hasQualificationManagementAccess()) {
      return;
    }
    const checkedIds = getSelectedCertificationExamIds()
      .filter((examId) => Boolean(getCertificationExamById(examId)));
    if (checkedIds.length) {
      deleteCertificationExams(checkedIds);
      return;
    }
    if (!state.selectedCertificationExamId) {
      return;
    }
    deleteCertificationExams([state.selectedCertificationExamId]);
  });

  elements.surveyQuestionForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!hasEducationAdminAccess()) {
      return;
    }
    const selectedForm = getSelectedSurveyForm();
    if (!selectedForm) {
      return;
    }
    const type = String(elements.surveyQuestionType?.value || "scale");
    const text = String(elements.surveyQuestionText?.value || "").trim();
    if (!text) {
      window.alert("문항 내용을 입력해 주세요.");
      return;
    }
    selectedForm.questions.push(normalizeSurveyQuestion({
      id: generateSurveyQuestionId(),
      type,
      text,
      active: true,
      order: selectedForm.questions.length + 1,
    }));
    saveSurveyQuestions();
    if (elements.surveyQuestionText) {
      elements.surveyQuestionText.value = "";
    }
    render();
  });

  elements.surveyQuestionType?.addEventListener("change", (event) => {
    state.surveyQuestionDraftType = event.target.value === "text" ? "text" : "scale";
  });

  elements.surveyResultMajorFilter?.addEventListener("change", (event) => {
    state.surveyResultMajorFilter = String(event.target.value || "all");
    state.surveyResultMiddleFilter = "all";
    state.surveyResultSmallSearch = "";
    if (elements.surveyResultSmallSearch) {
      elements.surveyResultSmallSearch.value = "";
    }
    state.surveyResultPage = 1;
    render();
  });

  elements.surveyResultMiddleFilter?.addEventListener("change", (event) => {
    state.surveyResultMiddleFilter = String(event.target.value || "all");
    state.surveyResultSmallSearch = "";
    if (elements.surveyResultSmallSearch) {
      elements.surveyResultSmallSearch.value = "";
    }
    state.surveyResultPage = 1;
    render();
  });

  elements.surveyResultSmallSearch?.addEventListener("input", (event) => {
    state.surveyResultSmallSearch = String(event.target.value || "").trim();
    state.surveyResultPage = 1;
    render();
  });

  elements.surveyQuestionTableBody?.addEventListener("change", (event) => {
    const selectedForm = getSelectedSurveyForm();
    if (!selectedForm) {
      return;
    }
    const activeToggle = event.target.closest("[data-survey-question-active]");
    if (activeToggle) {
      const questionId = activeToggle.getAttribute("data-survey-question-active");
      const question = selectedForm.questions.find((item) => item.id === questionId);
      if (!question) {
        return;
      }
      question.active = Boolean(activeToggle.checked);
      saveSurveyQuestions();
      render();
      return;
    }

    const textInput = event.target.closest("[data-survey-question-text]");
    if (textInput) {
      const questionId = textInput.getAttribute("data-survey-question-text");
      const question = selectedForm.questions.find((item) => item.id === questionId);
      if (!question) {
        return;
      }
      const nextText = String(textInput.value || "").trim();
      if (!nextText) {
        window.alert("문항 내용은 비워둘 수 없습니다.");
        render();
        return;
      }
      question.text = nextText;
      saveSurveyQuestions();
      render();
    }
  });

  elements.surveyQuestionTableBody?.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-survey-question-delete]");
    if (!deleteButton) {
      return;
    }
    const questionId = deleteButton.getAttribute("data-survey-question-delete");
    if (!questionId) {
      return;
    }
    const shouldDelete = window.confirm("선택한 문항을 삭제할까요?");
    if (!shouldDelete) {
      return;
    }
    deleteSurveyQuestion(questionId);
  });

  elements.surveyFormSelect?.addEventListener("change", (event) => {
    state.selectedSurveyFormId = String(event.target.value || "");
    render();
  });

  elements.surveyFormRenameButton?.addEventListener("click", () => {
    const selectedForm = getSelectedSurveyForm();
    if (!selectedForm) {
      return;
    }
    const nextName = String(elements.surveyFormNameInput?.value || "").trim();
    if (!nextName) {
      window.alert("설문지 이름을 입력해 주세요.");
      return;
    }
    selectedForm.name = nextName;
    saveSurveyQuestions();
    render();
  });

  elements.surveyFormAddButton?.addEventListener("click", () => {
    const sortedForms = [...surveyForms].sort((left, right) => left.order - right.order);
    if (sortedForms.length >= 10) {
      window.alert("설문지는 최대 10개까지 생성할 수 있습니다.");
      return;
    }
    const newOrder = sortedForms.length + 1;
    const nextIndex = surveyForms.reduce((max, form) => {
      const numeric = Number(String(form.id || "").split("-").pop());
      return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
    }, 0) + 1;
    const newForm = normalizeSurveyForm({
      id: `SVF-${String(nextIndex).padStart(3, "0")}`,
      name: `설문지${newOrder}`,
      order: newOrder,
      questions: [],
    }, "", newOrder);
    surveyForms.push(newForm);
    state.selectedSurveyFormId = newForm.id;
    saveSurveyQuestions();
    render();
  });

  elements.surveyFormDeleteButton?.addEventListener("click", () => {
    const selectedForm = getSelectedSurveyForm();
    if (!selectedForm) {
      return;
    }
    if (surveyForms.length <= 1) {
      window.alert("최소 1개의 설문지는 유지되어야 합니다.");
      return;
    }
    const shouldDelete = window.confirm(`"${selectedForm.name}" 설문지를 삭제할까요?`);
    if (!shouldDelete) {
      return;
    }
    surveyForms = surveyForms
      .filter((form) => form.id !== selectedForm.id)
      .sort((left, right) => left.order - right.order)
      .map((form, index) => ({ ...form, order: index + 1 }));
    state.selectedSurveyFormId = surveyForms[0]?.id ?? null;
    saveSurveyQuestions();
    render();
  });

  elements.addMilestoneButton?.addEventListener("click", () => {
    openMilestoneModal("create");
  });

  elements.editMilestoneButton?.addEventListener("click", () => {
    if (!state.selectedMilestoneId) {
      return;
    }

    openMilestoneModal("edit", state.selectedMilestoneId);
  });

  elements.deleteMilestoneButton?.addEventListener("click", () => {
    if (!state.selectedMilestoneId) {
      return;
    }

    deleteMilestone(state.selectedMilestoneId);
  });

  elements.projectModalClose?.addEventListener("click", closeProjectModal);
  elements.projectFormCancel?.addEventListener("click", closeProjectModal);
  elements.qualificationModalClose?.addEventListener("click", closeQualificationModal);
  elements.qualificationFormCancel?.addEventListener("click", closeQualificationModal);
  elements.certificationExamModalClose?.addEventListener("click", closeCertificationExamModal);
  elements.certificationExamFormCancel?.addEventListener("click", closeCertificationExamModal);
  elements.milestoneModalClose?.addEventListener("click", closeMilestoneModal);
  elements.milestoneFormCancel?.addEventListener("click", closeMilestoneModal);
  elements.educationAdminModalClose?.addEventListener("click", closeEducationAdminModal);
  elements.educationAdminFormCancel?.addEventListener("click", closeEducationAdminModal);

  elements.projectModal?.addEventListener("click", (event) => {
    if (event.target === elements.projectModal) {
      closeProjectModal();
    }
  });

  elements.qualificationModal?.addEventListener("click", (event) => {
    if (event.target === elements.qualificationModal) {
      closeQualificationModal();
    }
  });

  elements.certificationExamModal?.addEventListener("click", (event) => {
    if (event.target === elements.certificationExamModal) {
      closeCertificationExamModal();
    }
  });
  elements.certificationExamType?.addEventListener("change", (event) => {
    renderCertificationExamGradeFieldOptions(event.target.value);
  });

  elements.milestoneModal?.addEventListener("click", (event) => {
    if (event.target === elements.milestoneModal) {
      closeMilestoneModal();
    }
  });

  elements.educationAdminModal?.addEventListener("click", (event) => {
    if (event.target === elements.educationAdminModal) {
      closeEducationAdminModal();
    }
  });

  [
    elements.assessmentPotentialImpact,
    elements.assessmentStrategicAlignment,
    elements.assessmentExpectedEffect,
    elements.assessmentRippleEffect,
    elements.assessmentFeasibility,
    elements.assessmentUrgency,
  ].forEach((field) => {
    field?.addEventListener("change", () => {
      renderAssessmentSummary();
    });
  });

  elements.qualificationType?.addEventListener("change", (event) => {
    renderQualificationGradeFieldOptions(event.target.value);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (isModalVisible(elements.educationAdminModal)) {
      closeEducationAdminModal();
      return;
    }

    if (isModalVisible(elements.milestoneModal)) {
      closeMilestoneModal();
      return;
    }

    if (isModalVisible(elements.qualificationModal)) {
      closeQualificationModal();
      return;
    }

    if (isModalVisible(elements.certificationExamModal)) {
      closeCertificationExamModal();
      return;
    }

    if (isModalVisible(elements.projectModal)) {
      closeProjectModal();
    }
  });

  elements.projectForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!elements.projectForm.reportValidity()) {
      return;
    }

    const formValues = readFormValues();
    if (parseDate(formValues.startDate) > parseDate(formValues.deadline)) {
      window.alert("시작일이 종료일보다 늦을 수 없습니다.");
      return;
    }

    upsertProject(formValues);
  });

  elements.qualificationForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!elements.qualificationForm.reportValidity()) {
      return;
    }

    upsertQualification(readQualificationFormValues());
  });

  elements.certificationExamForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elements.certificationExamForm.reportValidity()) {
      return;
    }
    const formValues = readCertificationExamFormValues();
    if (parseDate(formValues.applicationStartDate) > parseDate(formValues.applicationEndDate)) {
      window.alert("시험 접수시작일이 접수종료일보다 늦을 수 없습니다.");
      return;
    }
    if (isValidDateString(formValues.resultAnnouncementDate)) {
      const examDateToken = String(formValues.examDateTime || "").slice(0, 10);
      if (isValidDateString(examDateToken) && parseDate(formValues.resultAnnouncementDate) < parseDate(examDateToken)) {
        window.alert("결과발표일은 시험일시보다 빠를 수 없습니다.");
        return;
      }
    }
    upsertCertificationExam(formValues);
  });

  elements.milestoneForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!elements.milestoneForm.reportValidity()) {
      return;
    }

    upsertMilestone(readMilestoneFormValues());
  });

  elements.educationAdminStatusField?.addEventListener("change", (event) => {
    if (!elements.educationAdminCompletionState) {
      return;
    }

    const nextDefault = getEducationAdminDefaultCompletionState(event.target.value);
    const current = normalizeEducationAdminCompletionState(
      elements.educationAdminCompletionState.value,
      event.target.value,
    );
    if (!current || current === "미진행" || current === "진행중" || current === "완료") {
      elements.educationAdminCompletionState.value = nextDefault;
    }
  });

  elements.educationAdminDaysText?.addEventListener("change", (event) => {
    if (!elements.educationAdminOvernightStay) {
      return;
    }

    const daysInfo = parseEducationAdminDaysInfo(event.target.value);
    if (daysInfo.daysCount < 2 && elements.educationAdminOvernightStay.checked) {
      elements.educationAdminOvernightStay.checked = false;
    }
  });

  elements.educationAdminForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!elements.educationAdminForm.reportValidity()) {
      return;
    }

    const formValues = readEducationAdminFormValues();
    if (parseDate(formValues.startDate) > parseDate(formValues.endDate)) {
      window.alert("시작일이 종료일보다 늦을 수 없습니다.");
      return;
    }
    if (parseDate(formValues.applicationStartDate) > parseDate(formValues.applicationEndDate)) {
      window.alert("접수 시작일이 접수 종료일보다 늦을 수 없습니다.");
      return;
    }

    upsertEducationAdminSchedule(formValues);
  });
}

function render() {
  syncEducationAdminMenuVisibility();
  renderProjectYearFilterOptions();
  renderQualificationYearFilterOptions();
  buildEducationFilterOptions();
  const filteredProjects = getFilteredProjects();
  const filteredQualifications = getFilteredQualifications();
  renderMetrics();
  renderDashboardPage();
  renderAdminDashboardDataBoards();
  renderQualificationMetrics();
  renderQualificationGradeFilterOptions();
  renderEducationCalendarPage();
  renderMyLearningPage();
  renderEducationAdminPage();
  renderSurveyManagementPage();
  renderHero(filteredProjects);
  renderTable(filteredProjects);
  renderQualificationTable(filteredQualifications);
  renderCertificationExamTable();
  renderCertificationExamDetailCard();
  renderCertificationApplicantTable();
  renderQualificationCompanyBoard(filteredQualifications);
  renderQualificationTypeBoard(filteredQualifications);
  renderLeague(filteredProjects);
  renderDetailCard(filteredProjects);
  syncTaskActionButtons(filteredProjects);
  syncQualificationActionButtons(filteredQualifications);
  syncCertificationExamActionButtons();
  renderMilestones();
  attachTableEvents();
  attachQualificationTableEvents();
  attachCertificationExamTableEvents();
  attachTaskPaginationEvents();
  attachQualificationPaginationEvents();
  attachEducationAdminPaginationEvents();
  attachSurveyResultPaginationEvents();
  attachDetailEvents();
  attachMilestoneEvents();
}

function init() {
  syncMetricCardCopy();
  setActivePage(state.activePage);
  buildCompanyOptions();
  configureEducationAdminFormControls();
  bindEvents();
  render();
  window.InnoTrackDataBridge = {
    companyOptions: [...companyOptions],
    getProjects: () => JSON.parse(JSON.stringify(projects)),
    getMilestones: () => JSON.parse(JSON.stringify(milestoneItems)),
    getQualifications: () => JSON.parse(JSON.stringify(qualifications)),
    getCertificationExams: () => JSON.parse(JSON.stringify(certificationExams)),
    getCertificationExamApplications: () => JSON.parse(JSON.stringify(certificationExamApplications)),
    getEducationSchedules: () => JSON.parse(JSON.stringify(educationSchedules)),
    getEducationEnrollments: () => JSON.parse(JSON.stringify(educationEnrollments)),
    getEducationCostDetails: () => JSON.parse(JSON.stringify(educationCostDetailsBySchedule)),
    getSurveyForms: () => JSON.parse(JSON.stringify(surveyForms)),
    getSurveyResponses: () => JSON.parse(JSON.stringify(surveyResponses)),
    setProjects: replaceProjectsFromExternal,
    setMilestones: replaceMilestonesFromExternal,
    setQualifications: replaceQualificationsFromExternal,
    setCertificationExams: replaceCertificationExamsFromExternal,
    setCertificationExamApplications: replaceCertificationExamApplicationsFromExternal,
    setEducationSchedules: replaceEducationSchedulesFromExternal,
    setEducationEnrollments: replaceEducationEnrollmentsFromExternal,
    setEducationCostDetails: replaceEducationCostDetailsFromExternal,
    setSurveyForms: replaceSurveyFormsFromExternal,
    setSurveyResponses: replaceSurveyResponsesFromExternal,
    render,
  };
}

init();
