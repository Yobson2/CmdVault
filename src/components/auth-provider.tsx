import { useEffect } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { setSession, setLoading, isLoading } = useAuthStore((s) => s.auth)

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session)
      })
      .catch(() => {
        // Session retrieval failed — continue as unauthenticated
      })
      .finally(() => {
        setLoading(false)
      })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [setSession, setLoading])

  if (isLoading) {
    return (
      <div className='flex h-svh items-center justify-center'>
        <IconLoader2 className='h-8 w-8 animate-spin text-muted-foreground' />
      </div>
    )
  }

  return <>{children}</>
}
