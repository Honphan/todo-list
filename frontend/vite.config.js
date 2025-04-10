import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // kích hoạt theo dõi file chặt hơn
    }
  }})
