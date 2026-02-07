import { createFileRoute } from '@tanstack/react-router'
import ReportIssuePage from '@/features/landing_page/pages/report_issue'

export const Route = createFileRoute('/_public/report-issue')({
  component: ReportIssuePage,
})
