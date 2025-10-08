import { defineConfig } from "vite";
import path from 'path'
import react from '@vitejs/plugin-react'
export default defineConfig({
    resolve: {
        alias: {
            react: path.posix.resolve('src/react'),
            'react-dom': path.posix.resolve('src/react-dom'),
            shared: path.posix.resolve('src/shared'),
            'react-reconciler': path.posix.resolve('src/react-reconciler'),
            scheduler: path.posix.resolve('src/scheduler')
        },
    },
    plugins: [
        react()
    ]
})