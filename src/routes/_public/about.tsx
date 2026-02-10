import { createFileRoute } from '@tanstack/react-router'
import AboutPage from '@/features/landing_page/pages/about_page'

export const Route = createFileRoute('/_public/about')({
  component: AboutPage,
})
