import { eventBus } from './eventBus'

export function setupMicroFrontends() {
  // 마이크로프론트엔드 로딩 전략 구현
  window.addEventListener('mfe-loaded', (event: CustomEvent) => {
    console.log(`Micro Frontend Loaded: ${event.detail.name}`)
  })

  // 이벤트 버스 설정
  window.__MFE_EVENT_BUS__ = eventBus
}

// 전역 타입 선언
declare global {
  interface Window {
    __MFE_EVENT_BUS__: typeof eventBus
  }
}