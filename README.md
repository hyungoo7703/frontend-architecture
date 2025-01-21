# frontend-architecture
Vue 3와 TypeScript를 활용한 마이크로 프론트엔드 아키텍처 구현 프로젝트 <br>
각 도메인별로 독립적인 마이크로 프론트엔드를 구성하고, <br>
이를 통합하여 확장 가능하고 유지보수가 용이한 프론트엔드 아키텍처를 제시

> ### 배포 링크 ☞ [https://hyungoo7703.github.io/frontend-architecture/](https://hyungoo7703.github.io/frontend-architecture/)
Github Actions를 이용하여 commit시 마다 자동배포되도록 설정. <br>
점진적 기능 추가, Issue사항들 진행할 예정.

## 시작하기

### 1. 저장소 클론
```bash
git clone https://github.com/hyungoo7703/frontend-architecture.git
```

### 2. Node.js 버전 요구사항
Node.js >= 22.11.0 <br>
PNPM >= 9.12.3 (성능과 효율성, 모노레포 지원을 위한 PNPM 채택)

### 3. 프로젝트 빌드 및 실행 방법

> #### PNPM 설치
```bash
# PNPM 전역 설치 (없는 경우)
npm install -g pnpm@9.12.3
```

> #### 개발 환경 설치
```bash
# 전체 워크스페이스 설치
pnpm install
```

> #### 개발 환경 실행
```bash
# 메인 쉘 애플리케이션 실행
pnpm run dev

# 개별 마이크로프론트엔드 실행
pnpm dev:auth      # 인증 앱
pnpm dev:settings  # 설정 앱
pnpm dev:dashboard # 대시보드 앱
```

> #### 빌드 명령어
```bash
# 전체 워크스페이스 빌드
pnpm build

# 테스트 실행
pnpm test
```

## 프로젝트 기획 의도

### 기술적 자율성 확보
+ 각 도메인별 팀이 독립적으로 기술 스택을 선택하고 개발할 수 있는 유연한 아키텍처를 구현 
+ Vue 3와 TypeScript를 기반으로 하되, 필요에 따라 다른 프레임워크도 통합할 수 있는 구조 짜는 것이 궁극적 목표

### 확장성과 유지보수성 향상
+ 모듈화된 구조를 통해 애플리케이션의 확장성을 높이고, 각 컴포넌트의 독립적인 배포와 업데이트가 가능하도록
+ 빠른 기능 개발과 안정적인 서비스 운영이 가능

### 개발 생산성 최적화
+ 독립적인 개발과 배포가 가능한 구조를 통해 팀간 의존성을 최소화하고, 병렬적인 개발 프로세스를 구현
+ 각 도메인별로 자율적인 의사결정과 빠른 이터레이션이 가능한 환경을 제공

### 코드 품질 향상
+ 작은 단위의 관리 가능한 코드베이스를 통해 높은 품질의 코드를 유지
+ 효율적인 테스트와 버그 수정이 가능한 환경을 구축

## 넣고자 하는 기능

### 코어 기능
+ 마이크로프론트엔드 간 라우팅 시스템
+ 공유 상태 관리 메커니즘
+ 컴포넌트 통신 인터페이스

### UI/UX 기능
+ 테마 시스템 구현
+ 반응형 레이아웃
+ 다국어 지원

### 개발자 도구
+ 개발 환경 설정 자동화
+ 컴포넌트 문서화
+ 성능 모니터링 도구

## 프로젝트 기술 선택

> #### 프레임워크 & 언어
+ Vue 3: 컴포넌트 기반 프레임워크
+ TypeScript: 정적 타입 지원
+ Pinia: 상태 관리
+ Vue Router: 라우팅 시스템

> #### 개발 도구
+ Vite: 빌드 도구
+ ESLint & Prettier: 코드 품질 관리
+ Jest: 유닛 테스트
+ Cypress: E2E 테스트

-----

## 프로젝트 구조
모노레포 구조 채택

모노레포(Monorepo)는 여러 프로젝트의 코드를 하나의 저장소에서 관리하는 개발 전략
```
frontend-architecture/
├── apps/
│   ├── auth/            # 인증 마이크로 프론트엔드
│   ├── dashboard/       # 대시보드 마이크로 프론트엔드
│   ├── settings/        # 설정 마이크로 프론트엔드
│   └── shell/           # 메인 애플리케이션 셸
├── packages/
│   ├── shared-ui/      # 공통 UI 컴포넌트
│   ├── types/          # 공통 타입 정의
│   └── utils/          # 공통 유틸리티
├── tools/
│   ├── build/          # 빌드 설정
│   └── testing/        # 테스트 설정
├── node_modules/
├── package.json
├── pnpm-workspace.yaml
```

### 프로젝트 구조 상세 및 설명

> #### apps 디렉토리 (마이크로프론트엔드)
+ shell: 메인 컨테이너 애플리케이션
    + 전체 레이아웃 관리
    + 라우팅 시스템
    + 마이크로프론트엔드 통합
    + 공통 상태 관리
+ auth: 인증/인가 관련 기능
    + 로그인/로그아웃
    + 사용자 인증
    + 권한 관리
+ dashboard: 대시보드 기능
    + 데이터 시각화
    + 통계 정보
    + 사용자 활동 모니터링
+ settings: 설정 관련 기능
    + 사용자 프로필 관리
    + 시스템 설정
    + 환경 설정

> #### packages 디렉토리 (공유 라이브러리)
+ shared-ui: 공통 UI 컴포넌트
    + 버튼, 입력 필드 등 기본 컴포넌트
    + 레이아웃 컴포넌트
    + 테마 시스템
+ types: 공통 타입 정의
    + 인터페이스 정의
    + 타입 선언
    + 상수 정의
+ utils: 공통 유틸리티
    + 상태 관리 스토어
    + 헬퍼 함수
    + API 클라이언트

> #### tools 디렉토리 (개발 도구)
+ build: 빌드 설정
    + Vite 설정
    + 번들링 최적화
    + 환경별 설정
+ testing: 테스트 설정
    + 단위 테스트 설정
    + E2E 테스트 설정
    + 테스트 유틸리티
 
### 루트 디렉토리 주요 설정파일
```
// package.json
{
  "name": "frontend-architecture",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter \"./apps/shell\" dev",
    "dev:auth": "pnpm --filter \"./apps/auth\" dev",
    "dev:dashboard": "pnpm --filter \"./apps/dashboard\" dev",
    "dev:settings": "pnpm --filter \"./apps/settings\" dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test"
  }
}

// pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
  - 'tools/*'
```
> #### package.json 장점
**효율적인 스크립트 관리**
+ --filter 옵션으로 특정 앱만 선택적으로 실행 가능능
+ -r 플래그로 모든 워크스페이스에 동일 명령어 일괄 실행

**명확한 명령어 구조**
+ dev 명령어로 메인 셸 앱 실행
+ dev:* 패턴으로 각 마이크로프론트엔드 개별 실행
+ build, test 명령어로 전체 프로젝트 빌드/테스트

> #### pnpm-workspace.yaml 장점
**모노레포 구조 정의**
+ 워크스페이스 범위를 명확하게 정의
+ apps와 packages 디렉토리 구조 분리
+ 프로젝트 간 의존성 관리 용이

**의존성 관리 최적화**
+ 공통 의존성을 효율적으로 관리
+ 중복 설치 방지로 디스크 공간 절약
+ 패키지 간 심링크를 통한 빠른 모듈 로딩
