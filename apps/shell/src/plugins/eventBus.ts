import mitt from 'mitt'

type Events = {
  'mfe-loaded': { name: string }
  'theme-changed': 'light' | 'dark'
  [key: string]: any
}

export const eventBus = mitt<Events>()
