import { defineConfig } from 'tsup'
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  external: ['react', 'lucide-react', 'next', 'clsx', 'tailwind-merge'],
})
