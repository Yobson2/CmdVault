import Favorites from '@/features/favorites'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/favorites/')({
  component: Favorites,
})
