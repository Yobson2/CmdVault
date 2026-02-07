import { Session, User } from '@supabase/supabase-js'
import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

interface AuthState {
  auth: {
    session: Session | null
    user: User | null
    isLoading: boolean
    setSession: (session: Session | null) => void
    setUser: (user: User | null) => void
    setLoading: (isLoading: boolean) => void
    signOut: () => Promise<void>
    reset: () => void
  }
}

export const useAuthStore = create<AuthState>()((set) => ({
  auth: {
    session: null,
    user: null,
    isLoading: true,
    setSession: (session) =>
      set((state) => ({
        ...state,
        auth: {
          ...state.auth,
          session,
          user: session?.user ?? null,
        },
      })),
    setUser: (user) =>
      set((state) => ({ ...state, auth: { ...state.auth, user } })),
    setLoading: (isLoading) =>
      set((state) => ({ ...state, auth: { ...state.auth, isLoading } })),
    signOut: async () => {
      await supabase.auth.signOut()
      set((state) => ({
        ...state,
        auth: { ...state.auth, session: null, user: null },
      }))
    },
    reset: () =>
      set((state) => ({
        ...state,
        auth: { ...state.auth, session: null, user: null },
      })),
  },
}))
