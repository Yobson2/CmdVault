import { AxiosError } from 'axios'
import { AuthError, PostgrestError } from '@supabase/supabase-js'
import { toast } from 'sonner'

export function handleServerError(error: unknown) {
  // eslint-disable-next-line no-console
  console.log(error)

  let errMsg = 'Something went wrong!'

  if (
    error &&
    typeof error === 'object' &&
    'status' in error &&
    Number(error.status) === 204
  ) {
    errMsg = 'Content not found.'
  }

  if (error instanceof AxiosError) {
    errMsg = error.response?.data.title
  }

  if (error instanceof AuthError) {
    errMsg = error.message
  }

  if (
    error &&
    typeof error === 'object' &&
    'code' in error &&
    'message' in error &&
    'details' in error
  ) {
    const pgError = error as PostgrestError
    errMsg = pgError.message
  }

  toast.error(errMsg)
}
