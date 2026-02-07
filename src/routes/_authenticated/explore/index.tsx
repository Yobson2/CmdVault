import Explore from '@/features/explore'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/explore/')({
  component: Explore,
})
