import { createFileRoute } from '@tanstack/react-router'
import DeckList from '../../components/DeckList'

export const Route = createFileRoute('/topics/')({
  component: DeckList,
})
