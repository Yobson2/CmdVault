import FAQ from '@/features/landing_page/pages/faq'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/faq')({
  component: FAQ,
})

