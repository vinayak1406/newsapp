import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:}{}
  build: {
    rollupOptions: {
      external: ["firebase/app"] // Add any other external dependencies here
    }
  }
});
