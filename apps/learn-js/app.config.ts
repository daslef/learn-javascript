import { defineConfig } from '@tanstack/start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";

export default defineConfig({
    vite: {
        plugins: [
            tsConfigPaths({
                projects: ['./tsconfig.json'],
            }),
            svgr()
        ],
    },
})