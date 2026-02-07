import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='border-none bg-transparent shadow-none'>
        <CardHeader className='px-0'>
          <CardTitle className='text-2xl font-semibold tracking-tight'>
            Welcome back
          </CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className='px-0'>
          <UserAuthForm />
        </CardContent>
        <CardFooter className='flex-col gap-3 px-0'>
          <p className='text-muted-foreground text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link
              to='/sign-up'
              className='font-medium text-indigo-600 hover:text-cyan-600'
            >
              Sign up
            </Link>
          </p>
          <p className='text-muted-foreground text-center text-xs'>
            By signing in, you agree to our{' '}
            <a
              href='/terms'
              className='underline underline-offset-4 hover:text-indigo-600'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href='/privacy'
              className='underline underline-offset-4 hover:text-indigo-600'
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
