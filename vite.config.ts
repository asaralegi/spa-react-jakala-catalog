import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Para usar `describe`, `test`, etc., sin necesidad de importarlos
    environment: 'jsdom', // Simula un navegador para componentes React
    setupFiles: './setupTests.js', // Configuración adicional
  },
})
