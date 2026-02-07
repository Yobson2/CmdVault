import AboutPage from '@/features/landing_page/pages/about_page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/about')({
  component: AboutPage,
})

