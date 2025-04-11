import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // kích hoạt theo dõi file chặt hơn
    }
  }
  

})
