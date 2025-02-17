import { createFileRoute } from '@tanstack/react-router'
import renderTopic from '../../topics'

export const Route = createFileRoute('/topics/$topicId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { topicId } = Route.useParams()
  return <div>{renderTopic(topicId)}</div>
}

