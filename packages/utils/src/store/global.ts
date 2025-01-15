import { defineStore } from 'pinia'

interface UserState {
  id: string | null
  name: string | null
  role: string | null
}

export const useGlobalStore = defineStore('global', {
  state: () => ({
    user: null as UserState | null,
    theme: 'light',
    isLoading: false
  }),
  
  actions: {
    setUser(user: UserState | null) {
      this.user = user
    },
    
    setTheme(theme: 'light' | 'dark') {
      this.theme = theme
    },
    
    setLoading(status: boolean) {
      this.isLoading = status
    }
  }
})