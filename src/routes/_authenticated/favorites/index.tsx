import { createFileRoute } from '@tanstack/react-router'
import Favorites from '@/features/favorites'

export const Route = createFileRoute('/_authenticated/favorites/')({
  component: Favorites,
})
