import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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

const issueReportSchema = z.object({
  issueType: z.string().min(1, 'Please select an issue type'),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z
    .string()
    .min(20, 'Please provide a detailed description (at least 20 characters)'),
  location: z.string().optional(),
  severity: z.enum(['low', 'medium', 'high', 'critical']),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .optional()
    .or(z.literal('')),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  phone: z.string().optional(),
  isAnonymous: z.boolean().default(false),
})

type IssueReportFormValues = z.infer<typeof issueReportSchema>

const issueTypes = [
  { value: 'facility', label: 'Facility Issue' },
  { value: 'safety', label: 'Safety Concern' },
  { value: 'harassment', label: 'Harassment/Discrimination' },
  { value: 'event', label: 'Event-Related Issue' },
  { value: 'technical', label: 'Technical/Website Issue' },
  { value: 'financial', label: 'Financial/Payment Issue' },
  { value: 'membership', label: 'Membership Issue' },
  { value: 'other', label: 'Other' },
]

export function IssueReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<IssueReportFormValues>({
    resolver: zodResolver(issueReportSchema),
    defaultValues: {
      issueType: '',
      title: '',
      description: '',
      location: '',
      severity: 'medium',
      name: '',
      email: '',
      phone: '',
      isAnonymous: false,
    },
  })

  const isAnonymous = form.watch('isAnonymous')

  const onSubmit = async (_data: IssueReportFormValues) => {
    setIsSubmitting(true)

    try {
      // TODO: Replace with actual API call
      // await fetch('/api/issues', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(_data),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success('Issue reported successfully', {
        description: 'We will review your report and get back to you soon.',
      })

      form.reset()
    } catch (_error) {
      toast.error('Failed to submit report', {
        description: 'Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        {/* Issue Type */}
        <FormField
          control={form.control}
          name='issueType'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Type *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select issue type' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {issueTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Severity */}
        <FormField
          control={form.control}
          name='severity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Severity *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select severity level' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='low'>Low - Minor inconvenience</SelectItem>
                  <SelectItem value='medium'>
                    Medium - Moderate impact
                  </SelectItem>
                  <SelectItem value='high'>
                    High - Significant impact
                  </SelectItem>
                  <SelectItem value='critical'>
                    Critical - Urgent attention needed
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Title */}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Title *</FormLabel>
              <FormControl>
                <Input placeholder='Brief summary of the issue' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Provide detailed information about the issue, including when it occurred and any relevant context...'
                  className='min-h-[120px]'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please be as specific as possible to help us address the issue
                effectively
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location */}
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder='e.g., Student Center Room 204, Main Campus Building'
                  {...field}
                />
              </FormControl>
              <FormDescription>Where did this issue occur?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Anonymous Checkbox */}
        <FormField
          control={form.control}
          name='isAnonymous'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-y-0 space-x-3 rounded-md border bg-blue-50 p-4'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>Submit anonymously</FormLabel>
                <FormDescription>
                  Check this if you prefer not to provide your contact
                  information. Note: We won't be able to follow up with you
                  directly.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {/* Contact Information - Hidden when anonymous */}
        {!isAnonymous && (
          <div className='space-y-4 border-t pt-4'>
            <h3 className='text-muted-foreground text-sm font-semibold'>
              Contact Information (Optional)
            </h3>

            {/* Name */}
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder='John Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='john.doe@example.com'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We'll use this to keep you updated on the status of your
                    report
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='+1 (555) 123-4567'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <Button type='submit' className='w-full' disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Submitting...
            </>
          ) : (
            'Submit Report'
          )}
        </Button>
      </form>
    </Form>
  )
}
