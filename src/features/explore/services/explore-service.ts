import { supabase } from '@/lib/supabase'

export interface ExploreFilters {
  search?: string
  language?: string
  sort?: 'recent' | 'popular'
}

export async function getPublicCommands(filters?: ExploreFilters) {
  let query = supabase
    .from('commands')
    .select('*, command_tags(tag_id, tags(id, name, color))')
    .eq('visibility', 'public')

  if (filters?.search) {
    query = query.or(
      `title.ilike.%${filters.search}%,description.ilike.%${filters.search}%,command_text.ilike.%${filters.search}%`
    )
  }

  if (filters?.language) {
    query = query.eq('language', filters.language)
  }

  if (filters?.sort === 'popular') {
    query = query.order('usage_count', { ascending: false })
  } else {
    query = query.order('created_at', { ascending: false })
  }

  const { data, error } = await query

  if (error) throw error

  // Fetch author profiles separately to avoid PostgREST FK resolution issues
  const userIds = [...new Set(data.map((c) => c.user_id))]
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, full_name, avatar_url')
    .in('id', userIds)

  const profileMap = new Map(profiles?.map((p) => [p.id, p]) ?? [])

  return data.map((command) => ({
    ...command,
    profiles: profileMap.get(command.user_id) ?? null,
  }))
}
