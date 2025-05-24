import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import { fileURLToPath } from 'url'; // ใช้ฟังก์ชัน fileURLToPath จาก 'url'
import { dirname } from 'path';      // ใช้ dirname จาก 'path'
// หา __dirname จาก import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5602,  // กำหนดพอร์ตที่ต้องการ (ตัวอย่าง: 3001)
  },

})
