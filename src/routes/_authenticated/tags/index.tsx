import Tags from '@/features/tags'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/tags/')({
  component: Tags,
})
