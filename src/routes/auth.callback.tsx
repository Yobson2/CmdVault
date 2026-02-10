import { useEffect, useRef } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { IconLoader2 } from '@tabler/icons-react'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'

export const Route = createFileRoute('/auth/callback')({
  component: AuthCallback,
})

function AuthCallback() {
  const session = useAuthStore((s) => s.auth.session)
  const navigate = useNavigate()
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    if (session) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      navigate({ to: '/commands' })
      return
    }

    timeoutRef.current = setTimeout(() => {
      toast.error('Authentication failed', {
        description: 'Please try signing in again.',
      })
      navigate({ to: '/sign-in' })
    }, 10_000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [session, navigate])

  return (
    <div className='flex h-svh items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <IconLoader2 className='h-8 w-8 animate-spin text-muted-foreground' />
        <p className='text-muted-foreground text-sm'>
          Completing sign in...
        </p>
      </div>
    </div>
  )
}
