import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import VitePrettier from "vite-plugin-prettier";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePrettier({
      semi: true,
      singleQuote: false,
      trailingComma: "es5",
      tabWidth: 2,
      printWidth: 80,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src", // Ensure this is pointing to your 'src' directory
    },
  },
});
