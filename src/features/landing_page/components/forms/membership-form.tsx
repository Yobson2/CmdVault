import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const membershipFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  studentId: z.string().optional(),
  program: z.string().optional(),
  yearOfStudy: z.string().optional(),
  motivation: z
    .string()
    .min(50, 'Please provide at least 50 characters explaining your motivation')
    .optional(),
})

type MembershipFormValues = z.infer<typeof membershipFormSchema>

export function MembershipForm() {
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      studentId: '',
      program: '',
      yearOfStudy: '',
      motivation: '',
    },
  })

  async function onSubmit(_data: MembershipFormValues) {
    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/membership', _data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Membership request submitted successfully!', {
        description: 'We will review your request and get back to you soon.',
      })

      form.reset()
    } catch (_error) {
      toast.error('Failed to submit membership request', {
        description: 'Please try again later or contact us directly.',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder='John' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder='Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='john.doe@example.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type='tel'
                    placeholder='+1 (555) 000-0000'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='studentId'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input placeholder='123456' {...field} />
                </FormControl>
                <FormDescription>
                  Your official student identification number
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='yearOfStudy'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Study</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select your year' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='1st'>1st Year</SelectItem>
                    <SelectItem value='2nd'>2nd Year</SelectItem>
                    <SelectItem value='3rd'>3rd Year</SelectItem>
                    <SelectItem value='4th'>4th Year</SelectItem>
                    <SelectItem value='graduate'>Graduate</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='program'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program / Major</FormLabel>
              <FormControl>
                <Input
                  placeholder='Computer Science, Business Administration, etc.'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='motivation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to join?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us about your motivation to join the student association...'
                  className='min-h-[120px]'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Share your interests and what you hope to contribute (minimum 50
                characters)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' size='lg' className='w-full md:w-auto'>
          Submit Membership Request
        </Button>
      </form>
    </Form>
  )
}
