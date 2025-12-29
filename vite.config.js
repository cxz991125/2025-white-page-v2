import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from "vite-plugin-windicss";
import legacy from '@vitejs/plugin-legacy';
import viteImagemin from 'vite-plugin-imagemin'
import path from 'path';
import { configUrl } from './src/common/config';

const resolve = _path => path.resolve(__dirname, _path);

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://mat1.gtimg.com/qqcdn/20whitepage/dist',
  // base: './',
  base: configUrl,
  server: {
    host: true,
    allowedHosts: true
  },
  resolve: {
    alias: {
      "~": resolve("src"),
      "@": resolve("src")
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$configUrl: '${configUrl}';`
      }
    }
  },
  
  build: {
    target: 'chrome58',
    assetsDir: './',
    rollupOptions: {
      output: {
        output: 'dist/main123.js',
      },
      input: {
        main: resolve('index.html'),
        main2: resolve('test.html')
      }
    }
  },
  plugins: [
    WindiCSS(),

    react(),

    viteImagemin({
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      // 有损PNG压缩
      optipng: {
        optimizationLevel: 7,
      },
    })

    // legacy({
    //   targets:['defaults','not IE 11']
    //   })
  ],
})
