import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import {
  getTags,
  createTag,
  deleteTag,
  setCommandTags,
} from '../services/tags-service'
import { commandKeys } from './use-commands-queries'

export const tagKeys = {
  all: ['tags'] as const,
  list: () => [...tagKeys.all, 'list'] as const,
}

export function useTagsQuery() {
  return useQuery({
    queryKey: tagKeys.list(),
    queryFn: getTags,
  })
}

export function useCreateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ name, color }: { name: string; color?: string }) =>
      createTag(name, color),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tagKeys.list() })
      toast.success('Tag created')
    },
  })
}

export function useDeleteTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tagKeys.list() })
      toast.success('Tag deleted')
    },
  })
}

export function useSetCommandTags() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      commandId,
      tagIds,
    }: {
      commandId: string
      tagIds: string[]
    }) => setCommandTags(commandId, tagIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commandKeys.lists() })
    },
  })
}
