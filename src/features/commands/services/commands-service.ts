import type { Database, Insertable, Updatable } from '@/types/database.types'
import { supabase } from '@/lib/supabase'
import type { CommandForm } from '../data/schema'

type CommandRow = Database['public']['Tables']['commands']['Row']

export interface CommandFilters {
  search?: string
  language?: string
  category?: string
  visibility?: string
  is_favorite?: boolean
}

export async function getCommands(filters?: CommandFilters) {
  let query = supabase
    .from('commands')
    .select('*, command_tags(tag_id, tags(id, name, color))')
    .order('created_at', { ascending: false })

  if (filters?.search) {
    query = query.or(
      `title.ilike.%${filters.search}%,description.ilike.%${filters.search}%,command_text.ilike.%${filters.search}%`
    )
  }

  if (filters?.language) {
    query = query.eq('language', filters.language)
  }

  if (filters?.category) {
    query = query.eq('category', filters.category)
  }

  if (filters?.visibility) {
    query = query.eq('visibility', filters.visibility)
  }

  if (filters?.is_favorite !== undefined) {
    query = query.eq('is_favorite', filters.is_favorite)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function getCommandById(id: string) {
  const { data, error } = await supabase
    .from('commands')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createCommand(
  command: CommandForm & { user_id: string }
): Promise<CommandRow> {
  const insertData: Insertable<'commands'> = {
    title: command.title,
    description: command.description || null,
    command_text: command.command_text,
    language: command.language,
    category: command.category,
    visibility: command.visibility,
    user_id: command.user_id,
  }

  const { data, error } = await supabase
    .from('commands')
    .insert(insertData)
    .select()
    .single()

  if (error) throw error
  return data as CommandRow
}

export async function updateCommand(id: string, command: Partial<CommandForm>) {
  const updateData: Updatable<'commands'> = {
    title: command.title,
    description: command.description || null,
    command_text: command.command_text,
    language: command.language,
    category: command.category,
    visibility: command.visibility,
  }

  const { data, error } = await supabase
    .from('commands')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteCommand(id: string) {
  const { error } = await supabase.from('commands').delete().eq('id', id)

  if (error) throw error
}

export async function incrementUsageCount(id: string) {
  const { data: command, error: fetchError } = await supabase
    .from('commands')
    .select('usage_count')
    .eq('id', id)
    .single()

  if (fetchError) throw fetchError

  const row = command as { usage_count: number }
  const updateData: Updatable<'commands'> = {
    usage_count: (row.usage_count ?? 0) + 1,
  }

  const { error } = await supabase
    .from('commands')
    .update(updateData)
    .eq('id', id)

  if (error) throw error
}

export async function toggleFavorite(id: string, isFavorite: boolean) {
  const updateData: Updatable<'commands'> = { is_favorite: isFavorite }

  const { data, error } = await supabase
    .from('commands')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}
