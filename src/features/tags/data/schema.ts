import { z } from 'zod'

export const tagSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().nullable(),
  created_at: z.string(),
  command_count: z.number().optional(),
})

export type Tag = z.infer<typeof tagSchema>

export const tagFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  color: z.string().nullable(),
})

export type TagForm = z.infer<typeof tagFormSchema>

export const TAG_COLORS = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#6b7280', // gray
  '#14b8a6', // teal
]
