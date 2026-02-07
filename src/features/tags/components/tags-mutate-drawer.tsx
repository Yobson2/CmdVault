import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Tag, tagFormSchema, type TagForm, TAG_COLORS } from '../data/schema'
import { useCreateTag, useUpdateTag } from '../hooks/use-tags-queries'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Tag
}

export function TagsMutateDrawer({ open, onOpenChange, currentRow }: Props) {
  const isUpdate = !!currentRow
  const createTag = useCreateTag()
  const updateTag = useUpdateTag()

  const form = useForm<TagForm>({
    resolver: zodResolver(tagFormSchema),
    defaultValues: currentRow
      ? {
          name: currentRow.name,
          color: currentRow.color,
        }
      : {
          name: '',
          color: TAG_COLORS[0],
        },
  })

  const onSubmit = (data: TagForm) => {
    if (isUpdate && currentRow) {
      updateTag.mutate(
        { id: currentRow.id, data },
        {
          onSuccess: () => {
            onOpenChange(false)
            form.reset()
          },
        }
      )
    } else {
      createTag.mutate(data, {
        onSuccess: () => {
          onOpenChange(false)
          form.reset()
        },
      })
    }
  }

  const isSubmitting = createTag.isPending || updateTag.isPending

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        form.reset()
      }}
    >
      <SheetContent className='flex flex-col'>
        <SheetHeader className='text-left'>
          <SheetTitle>{isUpdate ? 'Update' : 'Create'} Tag</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update the tag details below.'
              : 'Create a new tag to organize your commands.'}
            {' '}Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id='tags-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-5 overflow-y-auto px-4'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='e.g. deployment' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='color'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <div className='flex flex-wrap gap-2'>
                      {TAG_COLORS.map((color) => (
                        <button
                          key={color}
                          type='button'
                          className={cn(
                            'h-8 w-8 rounded-full border-2 transition-all',
                            field.value === color
                              ? 'scale-110 border-foreground'
                              : 'border-transparent hover:scale-105'
                          )}
                          style={{ backgroundColor: color }}
                          onClick={() => field.onChange(color)}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className='gap-2'>
          <SheetClose asChild>
            <Button variant='outline'>Close</Button>
          </SheetClose>
          <Button form='tags-form' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save changes'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
