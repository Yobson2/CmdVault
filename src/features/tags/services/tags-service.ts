import type { Database, Insertable, Updatable } from '@/types/database.types'
import { supabase } from '@/lib/supabase'
import type { Tag } from '../data/schema'

type TagRow = Database['public']['Tables']['tags']['Row']

export async function getTagsWithCount(): Promise<Tag[]> {
  const { data: tags, error } = await supabase
    .from('tags')
    .select('*')
    .order('name')

  if (error) throw error

  // Get command counts per tag
  const { data: counts, error: countError } = await supabase
    .from('command_tags')
    .select('tag_id')

  if (countError) throw countError

  const countMap: Record<string, number> = {}
  for (const row of counts ?? []) {
    countMap[row.tag_id] = (countMap[row.tag_id] ?? 0) + 1
  }

  return ((tags as TagRow[]) ?? []).map((tag) => ({
    ...tag,
    command_count: countMap[tag.id] ?? 0,
  }))
}

export async function createTag(data: { name: string; color: string | null }) {
  const insertData: Insertable<'tags'> = {
    name: data.name,
    color: data.color,
  }

  const { data: tag, error } = await supabase
    .from('tags')
    .insert(insertData)
    .select()
    .single()

  if (error) throw error
  return tag
}

export async function updateTag(
  id: string,
  data: { name?: string; color?: string | null }
) {
  const updateData: Updatable<'tags'> = {
    name: data.name,
    color: data.color,
  }

  const { data: tag, error } = await supabase
    .from('tags')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return tag
}

export async function deleteTag(id: string) {
  const { error } = await supabase.from('tags').delete().eq('id', id)
  if (error) throw error
}
