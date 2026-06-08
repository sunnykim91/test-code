// 이미지 에셋 타입 선언 — PNG import 시 TypeScript 오류 방지
declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}
