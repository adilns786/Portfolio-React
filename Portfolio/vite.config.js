import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from your local network
    port: 5173, // Optional: Specify a custom port (default is 5173)
  },
})
