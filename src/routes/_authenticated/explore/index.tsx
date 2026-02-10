import { createFileRoute } from '@tanstack/react-router'
import Explore from '@/features/explore'

export const Route = createFileRoute('/_authenticated/explore/')({
  component: Explore,
})
