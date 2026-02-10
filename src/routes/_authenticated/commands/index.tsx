import Commands from '@/features/commands'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_authenticated/commands/')({
  component: Commands,
})
