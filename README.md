# 🚀 frontend-architecture
**마이크로 프론트엔드 아키텍처 구현 프로젝트** <br>
**각 도메인별로 독립적인 마이크로 프론트엔드를 구성하고, <br> 
이를 통합하여 확장 가능하고 유지보수가 용이한 프론트엔드 아키텍처를 제시**  
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.13-brightgreen)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue)](https://www.typescriptlang.org/)

## 📌 시작하기

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
# 또는
pnpm install:all
```

> #### 개발 환경 실행
```bash
# 전체 앱 개발 서버 실행
pnpm run dev # auth, dashboard, settings, shell 앱이 동시에 실행됨

# 개별 마이크로프론트엔드 실행
pnpm dev:auth        # 인증 앱 실행
pnpm dev:dashboard   # 대시보드 앱 실행
pnpm dev:settings    # 설정 앱 실행
pnpm dev:shell       # 셸 앱 실행

```

> #### 빌드 명령어
```bash
# 전체 워크스페이스 빌드
pnpm build

# 테스트 실행
pnpm test
```

## 📌 프로젝트 기획 의도

### 기본 마이크로프론트엔드 구조 확립
+ Vue 3와 TypeScript 기반의 안정적인 마이크로프론트엔드 아키텍처 구현해보기
+ 각 도메인(인증, 대시보드, 설정)별 독립적인 개발과 구조 구축이 목표

### 효율적인 개발 환경 구성,  유지보수성 강화
+ pnpm 워크스페이스를 활용한 모노레포 관리로 일관된 개발 환경 제공
+ 모듈화된 구조를 통한 코드 관리 용이성 확보
+ 공통 컴포넌트 작성

## 📌 넣고자 하는 기능
+ 마이크로프론트엔드 간 기본 라우팅 시스템
+ 다크/라이트 테마 시스템
+ 공통 UI 컴포넌트 라이브러리

## 📌 코드 작성방향
+ 프로젝트 기획 의도를 최대한 신경써서 코드를 작성해보자.

## 📌 프로젝트 구조
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
├── node_modules/
├── package.json
├── pnpm-workspace.yaml
```

### 프로젝트 구조 상세 및 설명

> #### apps 디렉토리 (마이크로프론트엔드)
+ **shell**: 기본 레이아웃과 라우팅 시스템 구현
+ **auth**: 로그인/회원가입 기능 구현
+ **dashboard**: 간단한 데이터 시각화 구현
+ **settings**: 기본 설정 기능 구현

> #### packages 디렉토리 (공유 라이브러리)
+ **shared-ui**: 버튼, 카드 등 기본 UI 컴포넌트
+ **types**: 공통으로 사용되는 타입 정의
+ **utils**: 테마 관리 등 공통 유틸리티
 
### 루트 디렉토리 주요 설정파일
```
// package.json
{
  "name": "frontend-architecture",
  "private": true,
  "scripts": {
    "dev": "pnpm -r --parallel dev",
    "dev:auth": "pnpm --filter @apps/auth dev",
    "dev:dashboard": "pnpm --filter @apps/dashboard dev",
    "dev:settings": "pnpm --filter @apps/settings dev",
    "dev:shell": "pnpm --filter @apps/shell dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "install:all": "pnpm install -r"
  },
  "pnpm": {
    "allowedDeprecatedVersions": {
      "abab": "2.0.6",
      "domexception": "4.0.0"
    }
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
+ --filter 옵션으로 특정 앱만 선택적으로 실행 가능
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

## 📌 프로젝트 하이라이트(작성중)
