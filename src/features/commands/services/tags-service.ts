import { supabase } from '@/lib/supabase'
import type { Database, Insertable } from '@/types/database.types'

type TagRow = Database['public']['Tables']['tags']['Row']

export async function getTags(): Promise<TagRow[]> {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name')

  if (error) throw error
  return data as TagRow[]
}

export async function createTag(
  name: string,
  color?: string
): Promise<TagRow> {
  const insertData: Insertable<'tags'> = { name, color: color ?? null }

  const { data, error } = await supabase
    .from('tags')
    .insert(insertData)
    .select()
    .single()

  if (error) throw error
  return data as TagRow
}

export async function deleteTag(id: string) {
  const { error } = await supabase.from('tags').delete().eq('id', id)
  if (error) throw error
}

export async function getCommandTags(commandId: string) {
  const { data, error } = await supabase
    .from('command_tags')
    .select('tag_id, tags(id, name, color)')
    .eq('command_id', commandId)

  if (error) throw error
  return data
}

export async function setCommandTags(commandId: string, tagIds: string[]) {
  // Delete existing tags for this command
  const { error: deleteError } = await supabase
    .from('command_tags')
    .delete()
    .eq('command_id', commandId)

  if (deleteError) throw deleteError

  if (tagIds.length === 0) return

  // Insert new tags
  const inserts: Insertable<'command_tags'>[] = tagIds.map((tag_id) => ({
    command_id: commandId,
    tag_id,
  }))

  const { error: insertError } = await supabase
    .from('command_tags')
    .insert(inserts)

  if (insertError) throw insertError
}
