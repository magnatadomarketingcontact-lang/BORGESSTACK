import { defineConfig } from "vitest/config";
import path from "path";
import dotenv from "dotenv";

// Carregar variáveis de .env.local
dotenv.config({ path: path.resolve(import.meta.dirname, '.env.local') });

export default defineConfig({
  root: path.resolve(import.meta.dirname),
  test: {
    environment: "node",
    include: ["server/**/*.test.ts", "server/**/*.spec.ts"],
    env: {
      EMAIL_USER: process.env.EMAIL_USER || '',
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
    },
  },
});
