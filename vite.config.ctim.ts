import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const defaultAssetBaseUrl =
  'https://raw.githubusercontent.com/NhanAZ-Web/KhongGianVanHoaHCM/master/public/'

const assetBaseUrl = process.env.CTIM_ASSET_BASE_URL ?? defaultAssetBaseUrl
const normalizedAssetBaseUrl = assetBaseUrl.endsWith('/')
  ? assetBaseUrl
  : `${assetBaseUrl}/`

// This config is only for the CTIM single-file build. The regular site keeps
// using vite.config.ts and the existing GitHub Pages workflow.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: normalizedAssetBaseUrl,
  build: {
    assetsInlineLimit: 100_000_000,
    copyPublicDir: false,
    cssCodeSplit: false,
    emptyOutDir: true,
    modulePreload: false,
    outDir: 'dist-ctim-vite',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/ctim-[name][extname]',
        chunkFileNames: 'assets/ctim-[name].js',
        entryFileNames: 'assets/ctim-app.js',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
