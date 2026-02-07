import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { SelectDropdown } from '@/components/select-dropdown'
import { useCommandDefaults } from '@/hooks/use-command-defaults'
import { languages, categories, visibilities } from '@/features/commands/data/data'

const schema = z.object({
  language: z.string(),
  category: z.string(),
  visibility: z.string(),
})

type FormValues = z.infer<typeof schema>

export default function CommandDefaultsForm() {
  const { defaults, setDefaults } = useCommandDefaults()

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  })

  function onSubmit(data: FormValues) {
    setDefaults(data)
    toast.success('Command defaults saved')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='language'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Default Language</FormLabel>
              <SelectDropdown
                defaultValue={field.value}
                onValueChange={field.onChange}
                placeholder='Select language'
                isControlled
                items={languages.map((l) => ({
                  label: l.label,
                  value: l.value,
                }))}
              />
              <FormDescription>
                Language pre-selected when creating a new command.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Default Category</FormLabel>
              <SelectDropdown
                defaultValue={field.value}
                onValueChange={field.onChange}
                placeholder='Select category'
                isControlled
                items={categories.map((c) => ({
                  label: c.label,
                  value: c.value,
                }))}
              />
              <FormDescription>
                Category pre-selected when creating a new command.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='visibility'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Default Visibility</FormLabel>
              <SelectDropdown
                defaultValue={field.value}
                onValueChange={field.onChange}
                placeholder='Select visibility'
                isControlled
                items={visibilities.map((v) => ({
                  label: v.label,
                  value: v.value,
                }))}
              />
              <FormDescription>
                Visibility pre-selected when creating a new command.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Save defaults</Button>
      </form>
    </Form>
  )
}
