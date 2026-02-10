import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { TagForm } from '../data/schema'
import {
  getTagsWithCount,
  createTag,
  updateTag,
  deleteTag,
} from '../services/tags-service'

export const tagKeys = {
  all: ['tags'] as const,
  list: () => [...tagKeys.all, 'list'] as const,
}

export function useTagsWithCountQuery() {
  return useQuery({
    queryKey: tagKeys.list(),
    queryFn: getTagsWithCount,
  })
}

function invalidateTagRelated(queryClient: ReturnType<typeof useQueryClient>) {
  queryClient.invalidateQueries({ queryKey: tagKeys.all })
  queryClient.invalidateQueries({ queryKey: ['commands'] })
  queryClient.invalidateQueries({ queryKey: ['dashboard'] })
}

export function useCreateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: TagForm) => createTag(data),
    onSuccess: () => {
      invalidateTagRelated(queryClient)
      toast.success('Tag created successfully')
    },
  })
}

export function useUpdateTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<TagForm> }) =>
      updateTag(id, data),
    onSuccess: () => {
      invalidateTagRelated(queryClient)
      toast.success('Tag updated successfully')
    },
  })
}

export function useDeleteTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteTag(id),
    onSuccess: () => {
      invalidateTagRelated(queryClient)
      toast.success('Tag deleted successfully')
    },
  })
}
