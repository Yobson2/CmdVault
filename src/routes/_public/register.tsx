import Register from '@/features/landing_page/pages/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/register')({
  component: Register,
})
