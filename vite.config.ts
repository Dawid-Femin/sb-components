import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @import "src/assets/style/variables.scss";`,
      },
    },
  },
  plugins: [],
});
