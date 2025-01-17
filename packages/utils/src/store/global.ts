import { defineStore } from 'pinia'
import { Theme } from '@packages/types'

interface UserState {
  id: string | null
  name: string | null
  role: string | null
}

export const useGlobalStore = defineStore('global', {
  state: () => ({
    user: null as UserState | null,
    theme: Theme.LIGHT,
    isLoading: false
  }),
  
  actions: {
    setUser(user: UserState | null) {
      this.user = user
    },
    
    setTheme(theme: Theme) {
      this.theme = theme
    },
    
    setLoading(status: boolean) {
      this.isLoading = status
    }
  },
  getters: {
    isDarkTheme(): boolean {
      return this.theme === Theme.DARK
    }
  }
})
