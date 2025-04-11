import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // kích hoạt theo dõi file chặt hơn
    }
  },
  plugins: [react()],
  base: './',
  

})
