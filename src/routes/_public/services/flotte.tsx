import Fleet from '@/features/landing_page/pages/services/flotte'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/services/flotte')({
  component: Fleet,
})
