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
import { SignUpForm } from './components/sign-up-form'

export default function SignUp() {
  return (
    <AuthLayout>
      <Card className='border-none bg-transparent shadow-none'>
        <CardHeader className='px-0'>
          <CardTitle className='text-2xl font-semibold tracking-tight'>
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className='px-0'>
          <SignUpForm />
        </CardContent>
        <CardFooter className='flex-col gap-3 px-0'>
          <p className='text-muted-foreground text-center text-sm'>
            Already have an account?{' '}
            <Link
              to='/sign-in'
              className='font-medium text-indigo-600 hover:text-cyan-600'
            >
              Sign in
            </Link>
          </p>
          <p className='text-muted-foreground text-center text-xs'>
            By creating an account, you agree to our{' '}
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
