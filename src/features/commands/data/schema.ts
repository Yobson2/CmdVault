import { z } from 'zod'

const tagSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().nullable(),
})

export type Tag = z.infer<typeof tagSchema>

const commandTagSchema = z.object({
  tag_id: z.string(),
  tags: tagSchema.nullable(),
})

export const commandSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  command_text: z.string(),
  language: z.string(),
  category: z.string(),
  visibility: z.string(),
  user_id: z.string(),
  is_favorite: z.boolean(),
  usage_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  command_tags: z.array(commandTagSchema).optional(),
})

export type Command = z.infer<typeof commandSchema>

export const commandFormSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  description: z.string().optional(),
  command_text: z.string().min(1, 'Command text is required.'),
  language: z.string().min(1, 'Please select a language.'),
  category: z.string().min(1, 'Please select a category.'),
  visibility: z.string().min(1, 'Please choose a visibility.'),
  tag_ids: z.array(z.string()).optional(),
})

export type CommandForm = z.infer<typeof commandFormSchema>
