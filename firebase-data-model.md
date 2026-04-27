# InnoTrack Firebase Data Model

## users/{uid}

- `uid`: Firebase Auth UID
- `name`: 회원 이름
- `company`: 소속 법인
- `department`: 소속 부서
- `email`: 로그인 이메일
- `role`: `guest | user | innovation_manager | education_manager | super_admin`
- `createdAt`: 가입 시각 timestamp
- `updatedAt`: 최근 수정 시각 timestamp
- `lastLoginAt`: 최근 로그인 시각 timestamp

## projects/{projectId}

- 기존 `app.js`에서 사용하는 과제 객체 전체를 저장
- 키는 `id`
- 예시 필드:
  - `id`, `name`, `company`, `department`, `leader`, `role`, `teamMembers`
  - `projectType`, `projectLink`, `csfType`, `kpi`, `kpiTarget`
  - `stage`, `startDate`, `deadline`, `progress`
  - `assessment`, `risk`, `evidence`, `note`

## milestones/{milestoneId}

- 기존 `app.js`에서 사용하는 마일스톤 객체 전체를 저장
- 키는 `id`
- 예시 필드:
  - `id`, `title`, `date`, `description`, `tone`

## qualifications/{qualificationId}

- Stores qualification status records managed on the `자격현황` page
- Example fields:
  - `id`
  - `qualificationType`: `6σ | AICA | AICE`
  - `grade`: `GB | BB | L2 | L3 | L4 | Basic | Associate | Professional`
  - `certificateNo`
  - `company`
  - `department`
  - `name`
  - `acquiredDate`

## Permission Flow

- `guest`: 회원가입 직후 기본 권한, 로그인 가능하지만 데이터 읽기/쓰기 비활성
- `user`: 승인 회원, 혁신과제/교육 데이터 접근 가능
- `innovation_manager`: 혁신과제 영역 관리자
- `education_manager`: 교육/자격시험 영역 관리자
- `super_admin`: 회원관리 포함 전체 권한
