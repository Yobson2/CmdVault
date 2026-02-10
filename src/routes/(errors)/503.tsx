import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(errors)/503')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(errors)/503"!</div>
}
