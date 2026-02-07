import Teams from '@/features/teams'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/teams/')({
  component: Teams,
})
