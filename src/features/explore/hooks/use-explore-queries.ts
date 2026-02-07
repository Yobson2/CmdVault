import { useQuery } from '@tanstack/react-query'
import {
  getPublicCommands,
  type ExploreFilters,
} from '../services/explore-service'

export const exploreKeys = {
  all: ['explore'] as const,
  list: (filters?: ExploreFilters) => [...exploreKeys.all, filters] as const,
}

export function useExploreQuery(filters?: ExploreFilters) {
  return useQuery({
    queryKey: exploreKeys.list(filters),
    queryFn: () => getPublicCommands(filters),
  })
}
