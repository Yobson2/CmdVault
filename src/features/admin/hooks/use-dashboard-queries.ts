import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/stores/authStore'
import {
  getDashboardStats,
  getRecentCommands,
  getMonthlyCommandCounts,
} from '../services/dashboard-service'

const dashboardKeys = {
  all: ['dashboard'] as const,
  stats: (userId: string) => [...dashboardKeys.all, 'stats', userId] as const,
  recent: (userId: string) => [...dashboardKeys.all, 'recent', userId] as const,
  monthly: (userId: string) =>
    [...dashboardKeys.all, 'monthly', userId] as const,
}

export function useDashboardStats() {
  const { user } = useAuthStore((s) => s.auth)

  return useQuery({
    queryKey: dashboardKeys.stats(user?.id ?? ''),
    queryFn: () => getDashboardStats(user!.id),
    enabled: !!user,
  })
}

export function useRecentCommands() {
  const { user } = useAuthStore((s) => s.auth)

  return useQuery({
    queryKey: dashboardKeys.recent(user?.id ?? ''),
    queryFn: () => getRecentCommands(user!.id),
    enabled: !!user,
  })
}

export function useMonthlyCommandCounts() {
  const { user } = useAuthStore((s) => s.auth)

  return useQuery({
    queryKey: dashboardKeys.monthly(user?.id ?? ''),
    queryFn: () => getMonthlyCommandCounts(user!.id),
    enabled: !!user,
  })
}
