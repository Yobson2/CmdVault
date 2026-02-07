import { supabase } from '@/lib/supabase'
import type { Insertable, Updatable } from '@/types/database.types'

export async function getTeamMembers(teamId: string) {
  const { data, error } = await supabase
    .from('team_members')
    .select('*, profiles(full_name, email, avatar_url)')
    .eq('team_id', teamId)
    .order('joined_at', { ascending: true })

  if (error) throw error
  return data
}

export async function addTeamMember(
  teamId: string,
  email: string,
  role: string = 'member'
) {
  // Look up user by email
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id')
    .eq('email', email)
    .single()

  if (profileError) throw new Error('User not found with that email.')

  const insertData: Insertable<'team_members'> = {
    team_id: teamId,
    user_id: profile.id,
    role,
  }

  const { error } = await supabase.from('team_members').insert(insertData)

  if (error) {
    if (error.code === '23505') {
      throw new Error('User is already a member of this team.')
    }
    throw error
  }
}

export async function updateMemberRole(
  teamId: string,
  userId: string,
  role: string
) {
  const updateData: Updatable<'team_members'> = { role }

  const { error } = await supabase
    .from('team_members')
    .update(updateData)
    .eq('team_id', teamId)
    .eq('user_id', userId)

  if (error) throw error
}

export async function removeTeamMember(teamId: string, userId: string) {
  const { error } = await supabase
    .from('team_members')
    .delete()
    .eq('team_id', teamId)
    .eq('user_id', userId)

  if (error) throw error
}
