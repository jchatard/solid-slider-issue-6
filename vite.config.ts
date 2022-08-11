import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  vite: {
    ssr: {
      noExternal: ['solid-slider'],
    },
  }
});
