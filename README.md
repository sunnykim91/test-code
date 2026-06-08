# UDS Components

UDS Codegen으로 생성된 React 컴포넌트 Storybook 프로젝트입니다.

---

## 시작하기

### 1. Node.js 설치

Node.js 18 이상이 필요합니다.
https://nodejs.org 에서 LTS 버전을 다운로드하여 설치하세요.

설치 확인:
```bash
node -v
```

### 2. 패키지 설치

프로젝트 폴더에서 터미널을 열고 아래 명령어를 실행하세요:

```bash
npm install
```

### 3. Storybook 실행

```bash
npm run storybook
```

브라우저에서 http://localhost:6006 이 자동으로 열립니다.

---

## 프로젝트 구조

```
uds-components/
├── src/
│   ├── components/          ← UDS Codegen이 생성한 컴포넌트 파일 (.tsx)
│   ├── stories/             ← UDS Codegen이 생성한 Storybook 스토리 (.stories.tsx)
│   ├── pages/               ← 페이지 단위 컴포넌트 (직접 작성)
│   ├── global.d.ts          ← TypeScript 타입 선언 (PNG/SVG import 등)
│   ├── reset.css            ← 전역 CSS 초기화
│   └── figma-variables.css  ← Figma 디자인 토큰 (플러그인이 자동 업데이트)
├── public/
│   ├── icons/               ← SVG 아이콘 (플러그인 아이콘 탭에서 다운로드)
│   └── images/              ← PNG 이미지 @3x (플러그인 이미지 탭에서 다운로드)
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## UDS Codegen 플러그인 연동

이 프로젝트는 Figma 플러그인 **UDS Codegen**과 함께 사용합니다.

### 컴포넌트 생성

플러그인 **배치** 탭에서 컴포넌트를 탐색·선택 후 생성하면
`src/components/`에 `.tsx` 파일이, `src/stories/`에 `.stories.tsx` 파일이 추가됩니다.

### 디자인 토큰 업데이트

플러그인 **설정** 탭에서 `figma-variables.css` 추출 버튼을 클릭하면
`src/figma-variables.css`가 최신 Figma 변수로 업데이트됩니다.
컴포넌트의 색상·크기·간격이 이 파일의 CSS 변수를 참조하므로
Figma 디자인이 바뀌면 이 파일을 먼저 업데이트하세요.

### 아이콘 다운로드

플러그인 **아이콘** 탭 → **전체 탐색** → 원하는 아이콘 선택 → **ZIP 다운로드**
압축을 풀면 `public/icons/` 아래에 SVG 파일로 저장됩니다.
컴포넌트에서 다음과 같이 import하여 사용하세요:

```tsx
import ArrowDown from "../../public/icons/Arrow_Down.svg?react"; // Vite + svgr 기준
```

### 이미지 다운로드

플러그인 **이미지** 탭 → **전체 탐색** → 원하는 이미지 선택 → **ZIP 다운로드**
압축을 풀면 `public/images/` 아래에 PNG @3x 파일로 저장됩니다.

```tsx
import Logo from "../../public/images/Logo@3x.png";

<img src={Logo} alt="로고" width={120} />
```

---

## Git에 올릴 때

`node_modules/`는 올리지 않습니다. `.gitignore`를 아래처럼 설정하세요:

```
node_modules/
dist/
storybook-static/
```
