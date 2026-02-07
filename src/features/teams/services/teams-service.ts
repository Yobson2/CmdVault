import { supabase } from '@/lib/supabase'
import type { Database, Insertable, Updatable } from '@/types/database.types'
import type { Team } from '../data/schema'

type TeamRow = Database['public']['Tables']['teams']['Row']

export async function getTeams(userId: string): Promise<Team[]> {
  // Get teams the user is a member of
  const { data: memberships, error: memberError } = await supabase
    .from('team_members')
    .select('team_id, role')
    .eq('user_id', userId)

  if (memberError) throw memberError
  if (!memberships?.length) return []

  const teamIds = memberships.map((m) => m.team_id)
  const roleMap: Record<string, string> = {}
  for (const m of memberships) {
    roleMap[m.team_id] = m.role
  }

  const { data: teams, error: teamsError } = await supabase
    .from('teams')
    .select('*')
    .in('id', teamIds)
    .order('created_at', { ascending: false })

  if (teamsError) throw teamsError

  // Get member counts
  const { data: allMembers, error: countError } = await supabase
    .from('team_members')
    .select('team_id')
    .in('team_id', teamIds)

  if (countError) throw countError

  const countMap: Record<string, number> = {}
  for (const row of allMembers ?? []) {
    countMap[row.team_id] = (countMap[row.team_id] ?? 0) + 1
  }

  return (teams as TeamRow[] ?? []).map((team) => ({
    ...team,
    member_count: countMap[team.id] ?? 0,
    user_role: roleMap[team.id] ?? 'member',
  }))
}

export async function createTeam(
  data: { name: string; description?: string },
  userId: string
) {
  const insertData: Insertable<'teams'> = {
    name: data.name,
    description: data.description ?? null,
    created_by: userId,
  }

  const { data: team, error } = await supabase
    .from('teams')
    .insert(insertData)
    .select()
    .single()

  if (error) throw error

  const teamRow = team as TeamRow

  // Add creator as admin
  const memberData: Insertable<'team_members'> = {
    team_id: teamRow.id,
    user_id: userId,
    role: 'admin',
  }

  const { error: memberError } = await supabase
    .from('team_members')
    .insert(memberData)

  if (memberError) throw memberError

  return teamRow
}

export async function updateTeam(
  id: string,
  data: { name?: string; description?: string }
) {
  const updateData: Updatable<'teams'> = {
    name: data.name,
    description: data.description ?? null,
  }

  const { data: team, error } = await supabase
    .from('teams')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return team
}

export async function deleteTeam(id: string) {
  const { error } = await supabase.from('teams').delete().eq('id', id)
  if (error) throw error
}
