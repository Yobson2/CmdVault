import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { useCommandDefaults } from '@/hooks/use-command-defaults'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command as CommandPrimitive,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import { SelectDropdown } from '@/components/select-dropdown'
import { languages, categories } from '../data/data'
import { Command, commandFormSchema, type CommandForm } from '../data/schema'
import {
  useCreateCommand,
  useUpdateCommand,
} from '../hooks/use-commands-queries'
import {
  useTagsQuery,
  useCreateTag,
  useSetCommandTags,
} from '../hooks/use-tags-queries'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow?: Command
}

export function CommandsMutateDrawer({
  open,
  onOpenChange,
  currentRow,
}: Props) {
  const isUpdate = !!currentRow
  const { defaults } = useCommandDefaults()
  const createCommand = useCreateCommand()
  const updateCommand = useUpdateCommand()
  const { data: tags = [] } = useTagsQuery()
  const createTag = useCreateTag()
  const setCommandTags = useSetCommandTags()
  const [newTagName, setNewTagName] = useState('')

  const existingTagIds =
    currentRow?.command_tags?.map((ct) => ct.tag_id).filter(Boolean) ?? []

  const form = useForm<CommandForm>({
    resolver: zodResolver(commandFormSchema),
    defaultValues: currentRow
      ? {
          title: currentRow.title,
          description: currentRow.description ?? '',
          command_text: currentRow.command_text,
          language: currentRow.language,
          category: currentRow.category,
          visibility: currentRow.visibility,
          tag_ids: existingTagIds,
        }
      : {
          title: '',
          description: '',
          command_text: '',
          language: defaults.language,
          category: defaults.category,
          visibility: defaults.visibility,
          tag_ids: [],
        },
  })

  const onSubmit = (data: CommandForm) => {
    const { tag_ids, ...commandData } = data

    const handleTagsSave = (commandId: string) => {
      if (tag_ids && tag_ids.length > 0) {
        setCommandTags.mutate({ commandId, tagIds: tag_ids })
      } else if (isUpdate) {
        setCommandTags.mutate({ commandId, tagIds: [] })
      }
    }

    if (isUpdate && currentRow) {
      updateCommand.mutate(
        { id: currentRow.id, data: commandData },
        {
          onSuccess: () => {
            handleTagsSave(currentRow.id)
            onOpenChange(false)
            form.reset()
          },
        }
      )
    } else {
      createCommand.mutate(commandData, {
        onSuccess: (newCommand) => {
          handleTagsSave(newCommand.id)
          onOpenChange(false)
          form.reset()
        },
      })
    }
  }

  const isSubmitting = createCommand.isPending || updateCommand.isPending

  const handleCreateTag = () => {
    const trimmed = newTagName.trim()
    if (!trimmed) return
    createTag.mutate(
      { name: trimmed },
      {
        onSuccess: (tag) => {
          const current = form.getValues('tag_ids') ?? []
          form.setValue('tag_ids', [...current, tag.id])
          setNewTagName('')
        },
      }
    )
  }

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
          <SheetTitle>{isUpdate ? 'Update' : 'Create'} Command</SheetTitle>
          <SheetDescription>
            {isUpdate
              ? 'Update the command details below.'
              : 'Add a new command to your vault.'}{' '}
            Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id='commands-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-1 space-y-5 overflow-y-auto px-4'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='e.g. Git force push' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='What does this command do?'
                      rows={2}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='command_text'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Command</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='git push --force-with-lease'
                      className='font-mono'
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='language'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Language</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Select language'
                    items={languages.map((l) => ({
                      label: l.label,
                      value: l.value,
                    }))}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Category</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Select category'
                    items={categories.map((c) => ({
                      label: c.label,
                      value: c.value,
                    }))}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tag_ids'
              render={({ field }) => {
                const selectedIds = field.value ?? []
                return (
                  <FormItem className='space-y-1'>
                    <FormLabel>Tags</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          size='sm'
                          className='h-9 w-full justify-start border-dashed'
                        >
                          <PlusCircledIcon className='mr-2 h-4 w-4' />
                          {selectedIds.length > 0 ? (
                            <div className='flex flex-wrap gap-1'>
                              {selectedIds.map((tagId) => {
                                const tag = tags.find((t) => t.id === tagId)
                                return tag ? (
                                  <Badge
                                    key={tagId}
                                    variant='secondary'
                                    className='rounded-sm px-1 font-normal'
                                    style={
                                      tag.color
                                        ? {
                                            backgroundColor: `${tag.color}20`,
                                            color: tag.color,
                                            borderColor: `${tag.color}40`,
                                          }
                                        : undefined
                                    }
                                  >
                                    {tag.name}
                                  </Badge>
                                ) : null
                              })}
                            </div>
                          ) : (
                            <span className='text-muted-foreground'>
                              Select tags...
                            </span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-[250px] p-0' align='start'>
                        <CommandPrimitive>
                          <CommandInput
                            placeholder='Search tags...'
                            value={newTagName}
                            onValueChange={setNewTagName}
                          />
                          <CommandList>
                            <CommandEmpty>
                              <button
                                type='button'
                                className='text-primary flex w-full items-center justify-center gap-1 py-1 text-sm'
                                onClick={handleCreateTag}
                              >
                                <PlusCircledIcon className='h-3.5 w-3.5' />
                                Create &quot;{newTagName}&quot;
                              </button>
                            </CommandEmpty>
                            <CommandGroup>
                              {tags.map((tag) => {
                                const isSelected = selectedIds.includes(tag.id)
                                return (
                                  <CommandItem
                                    key={tag.id}
                                    value={tag.name}
                                    onSelect={() => {
                                      const next = isSelected
                                        ? selectedIds.filter(
                                            (id) => id !== tag.id
                                          )
                                        : [...selectedIds, tag.id]
                                      field.onChange(next)
                                    }}
                                  >
                                    <div
                                      className={cn(
                                        'border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border',
                                        isSelected
                                          ? 'bg-primary text-primary-foreground'
                                          : 'opacity-50 [&_svg]:invisible'
                                      )}
                                    >
                                      <CheckIcon className='h-4 w-4' />
                                    </div>
                                    {tag.color && (
                                      <div
                                        className='mr-2 h-3 w-3 rounded-full'
                                        style={{ backgroundColor: tag.color }}
                                      />
                                    )}
                                    <span>{tag.name}</span>
                                  </CommandItem>
                                )
                              })}
                            </CommandGroup>
                          </CommandList>
                        </CommandPrimitive>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name='visibility'
              render={({ field }) => (
                <FormItem className='relative space-y-3'>
                  <FormLabel>Visibility</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-y-0 space-x-3'>
                        <FormControl>
                          <RadioGroupItem value='private' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Private — Only you
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-y-0 space-x-3'>
                        <FormControl>
                          <RadioGroupItem value='team' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Team — Your team members
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-y-0 space-x-3'>
                        <FormControl>
                          <RadioGroupItem value='public' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Public — Everyone
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
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
          <Button form='commands-form' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save changes'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
