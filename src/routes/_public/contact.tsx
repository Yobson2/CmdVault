import Contact from '@/features/landing_page/pages/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/contact')({
  component: Contact,
})


