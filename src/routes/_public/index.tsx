import { HomePage } from '@/features/landing_page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/')({
  component: HomePage,
})
