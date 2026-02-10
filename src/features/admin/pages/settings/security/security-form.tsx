import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const securitySchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

type SecurityFormValues = z.infer<typeof securitySchema>

export default function SecurityForm() {
  const form = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const updatePassword = useMutation({
    mutationFn: async (data: SecurityFormValues) => {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      })
      if (error) throw error
    },
    onSuccess: () => {
      toast.success('Password updated successfully')
      form.reset()
    },
    onError: () => {
      toast.error('Failed to update password')
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => updatePassword.mutate(data))}
        className='space-y-6'
      >
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter new password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Confirm new password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={updatePassword.isPending}>
          {updatePassword.isPending ? 'Updating...' : 'Update password'}
        </Button>
      </form>
    </Form>
  )
}
