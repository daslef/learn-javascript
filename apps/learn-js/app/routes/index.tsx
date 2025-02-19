import * as fs from 'node:fs'
import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const state = Route.useLoaderData()

    return (
        <button>
            Add 1 to {state}?
        </button>
    )
}
