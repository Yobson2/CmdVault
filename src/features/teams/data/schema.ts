import { z } from 'zod'

export const teamSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  created_by: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  member_count: z.number().optional(),
  user_role: z.string().optional(),
})

export type Team = z.infer<typeof teamSchema>

export const teamFormSchema = z.object({
  name: z.string().min(1, 'Team name is required.'),
  description: z.string().optional(),
})

export type TeamForm = z.infer<typeof teamFormSchema>

export const memberSchema = z.object({
  team_id: z.string(),
  user_id: z.string(),
  role: z.string(),
  joined_at: z.string(),
  profiles: z
    .object({
      full_name: z.string().nullable(),
      email: z.string(),
      avatar_url: z.string().nullable(),
    })
    .nullable(),
})

export type TeamMember = z.infer<typeof memberSchema>
