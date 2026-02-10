import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@/features/landing_page'

export const Route = createFileRoute('/_public/')({
  component: HomePage,
})
