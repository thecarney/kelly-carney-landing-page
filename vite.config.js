import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '', // Empty base string allows relative path loading on GitHub Pages, ensuring asset links do not break regardless of repo name
})
