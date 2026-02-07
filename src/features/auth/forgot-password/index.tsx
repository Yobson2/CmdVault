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
import { ForgotPasswordForm } from './components/forgot-password-form'

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Card className='border-none bg-transparent shadow-none'>
        <CardHeader className='px-0'>
          <CardTitle className='text-2xl font-semibold tracking-tight'>
            Forgot Password
          </CardTitle>
          <CardDescription>
            Enter your registered email and we&apos;ll send you a link to reset
            your password.
          </CardDescription>
        </CardHeader>
        <CardContent className='px-0'>
          <ForgotPasswordForm />
        </CardContent>
        <CardFooter className='px-0'>
          <p className='text-muted-foreground text-center text-sm'>
            Remember your password?{' '}
            <Link
              to='/sign-in'
              className='font-medium text-indigo-600 hover:text-cyan-600'
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
