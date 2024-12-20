import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

console.log('VITE_PORT:', process.env.VITE_PORT);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/calendario-amoroso"
})
