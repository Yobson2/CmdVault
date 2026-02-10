import { createFileRoute } from '@tanstack/react-router'
import FAQ from '@/features/landing_page/pages/faq'

export const Route = createFileRoute('/_public/faq')({
  component: FAQ,
})
