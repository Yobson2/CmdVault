import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'
import type { TeamForm } from '../data/schema'
import {
  getTeamMembers,
  addTeamMember,
  updateMemberRole,
  removeTeamMember,
} from '../services/members-service'
import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from '../services/teams-service'

export const teamKeys = {
  all: ['teams'] as const,
  lists: () => [...teamKeys.all, 'list'] as const,
  members: (teamId: string) => [...teamKeys.all, 'members', teamId] as const,
}

export function useTeamsQuery() {
  const { user } = useAuthStore((s) => s.auth)

  const userId = user?.id
  return useQuery({
    queryKey: [...teamKeys.lists(), userId],
    queryFn: () => getTeams(userId!),
    enabled: !!user,
  })
}

export function useCreateTeam() {
  const queryClient = useQueryClient()
  const { user } = useAuthStore((s) => s.auth)

  return useMutation({
    mutationFn: (data: TeamForm) => createTeam(data, user!.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teamKeys.lists() })
      toast.success('Team created successfully')
    },
  })
}

export function useUpdateTeam() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<TeamForm> }) =>
      updateTeam(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teamKeys.lists() })
      toast.success('Team updated successfully')
    },
  })
}

export function useDeleteTeam() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteTeam(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teamKeys.lists() })
      toast.success('Team deleted successfully')
    },
  })
}

export function useTeamMembersQuery(teamId: string) {
  return useQuery({
    queryKey: teamKeys.members(teamId),
    queryFn: () => getTeamMembers(teamId),
    enabled: !!teamId,
  })
}

export function useAddTeamMember() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      teamId,
      email,
      role,
    }: {
      teamId: string
      email: string
      role?: string
    }) => addTeamMember(teamId, email, role),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: teamKeys.members(variables.teamId),
      })
      queryClient.invalidateQueries({ queryKey: teamKeys.lists() })
      toast.success('Member added successfully')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}

export function useUpdateMemberRole() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      teamId,
      userId,
      role,
    }: {
      teamId: string
      userId: string
      role: string
    }) => updateMemberRole(teamId, userId, role),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: teamKeys.members(variables.teamId),
      })
      toast.success('Role updated')
    },
  })
}

export function useRemoveTeamMember() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ teamId, userId }: { teamId: string; userId: string }) =>
      removeTeamMember(teamId, userId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: teamKeys.members(variables.teamId),
      })
      queryClient.invalidateQueries({ queryKey: teamKeys.lists() })
      toast.success('Member removed')
    },
  })
}
