import { createFileRoute } from '@tanstack/react-router'
import Fleet from '@/features/landing_page/pages/services/flotte'

export const Route = createFileRoute('/_public/services/flotte')({
  component: Fleet,
})
