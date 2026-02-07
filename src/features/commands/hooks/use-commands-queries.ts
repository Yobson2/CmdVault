import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'
import {
  getCommands,
  createCommand,
  updateCommand,
  deleteCommand,
  toggleFavorite,
  incrementUsageCount,
  type CommandFilters,
} from '../services/commands-service'
import type { CommandForm } from '../data/schema'

export const commandKeys = {
  all: ['commands'] as const,
  lists: () => [...commandKeys.all, 'list'] as const,
  list: (filters?: CommandFilters) =>
    [...commandKeys.lists(), filters] as const,
  details: () => [...commandKeys.all, 'detail'] as const,
  detail: (id: string) => [...commandKeys.details(), id] as const,
}

export function useCommandsQuery(filters?: CommandFilters) {
  return useQuery({
    queryKey: commandKeys.list(filters),
    queryFn: () => getCommands(filters),
  })
}

function invalidateCommandRelated(queryClient: ReturnType<typeof useQueryClient>) {
  queryClient.invalidateQueries({ queryKey: commandKeys.lists() })
  queryClient.invalidateQueries({ queryKey: ['dashboard'] })
  queryClient.invalidateQueries({ queryKey: ['explore'] })
}

export function useCreateCommand() {
  const queryClient = useQueryClient()
  const { user } = useAuthStore((s) => s.auth)

  return useMutation({
    mutationFn: (data: CommandForm) =>
      createCommand({ ...data, user_id: user!.id }),
    onSuccess: () => {
      invalidateCommandRelated(queryClient)
      toast.success('Command created successfully')
    },
  })
}

export function useUpdateCommand() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CommandForm> }) =>
      updateCommand(id, data),
    onSuccess: () => {
      invalidateCommandRelated(queryClient)
      toast.success('Command updated successfully')
    },
  })
}

export function useDeleteCommand() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteCommand(id),
    onSuccess: () => {
      invalidateCommandRelated(queryClient)
      toast.success('Command deleted successfully')
    },
  })
}

export function useIncrementUsage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => incrementUsageCount(id),
    onSuccess: () => {
      invalidateCommandRelated(queryClient)
    },
  })
}

export function useToggleFavorite() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      isFavorite,
    }: {
      id: string
      isFavorite: boolean
    }) => toggleFavorite(id, isFavorite),
    onSuccess: (_data, variables) => {
      invalidateCommandRelated(queryClient)
      toast.success(
        variables.isFavorite ? 'Added to favorites' : 'Removed from favorites'
      )
    },
  })
}
