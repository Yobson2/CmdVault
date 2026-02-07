import { supabase } from '@/lib/supabase'

export interface DashboardStats {
  totalCommands: number
  favorites: number
  languages: number
  thisMonth: number
}

export async function getDashboardStats(
  userId: string
): Promise<DashboardStats> {
  const { data: commands, error } = await supabase
    .from('commands')
    .select('id, is_favorite, language, created_at')
    .eq('user_id', userId)

  if (error) throw error

  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  const uniqueLanguages = new Set(commands.map((c) => c.language))
  const favorites = commands.filter((c) => c.is_favorite).length
  const thisMonth = commands.filter(
    (c) => new Date(c.created_at) >= startOfMonth
  ).length

  return {
    totalCommands: commands.length,
    favorites,
    languages: uniqueLanguages.size,
    thisMonth,
  }
}

export async function getRecentCommands(userId: string, limit = 5) {
  const { data, error } = await supabase
    .from('commands')
    .select('id, title, command_text, language, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error
  return data
}

interface MonthlyCount {
  name: string
  commands: number
}

export async function getMonthlyCommandCounts(
  userId: string
): Promise<MonthlyCount[]> {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const now = new Date()
  const twelveMonthsAgo = new Date(now.getFullYear() - 1, now.getMonth() + 1, 1)

  const { data, error } = await supabase
    .from('commands')
    .select('created_at')
    .eq('user_id', userId)
    .gte('created_at', twelveMonthsAgo.toISOString())

  if (error) throw error

  // Build 12-month buckets
  const result: MonthlyCount[] = []
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    result.push({ name: months[d.getMonth()], commands: 0 })
  }

  for (const cmd of data) {
    const created = new Date(cmd.created_at)
    const monthDiff =
      (now.getFullYear() - created.getFullYear()) * 12 +
      (now.getMonth() - created.getMonth())
    if (monthDiff >= 0 && monthDiff < 12) {
      result[11 - monthDiff].commands++
    }
  }

  return result
}
