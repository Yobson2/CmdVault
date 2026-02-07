import { z } from 'zod'

export const exploreCommandSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  command_text: z.string(),
  language: z.string(),
  category: z.string(),
  usage_count: z.number(),
  created_at: z.string(),
  profiles: z
    .object({
      full_name: z.string().nullable(),
      avatar_url: z.string().nullable(),
    })
    .nullable(),
  command_tags: z
    .array(
      z.object({
        tag_id: z.string(),
        tags: z
          .object({
            id: z.string(),
            name: z.string(),
            color: z.string().nullable(),
          })
          .nullable(),
      })
    )
    .optional(),
})

export type ExploreCommand = z.infer<typeof exploreCommandSchema>
