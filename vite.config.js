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
      input: {
        main: resolve('index.html'),
        main2: resolve('test.html')
      },
      // output: {
      //   // 统一命名规则
      //   chunkFileNames: 'assets/js/[name]-[hash].js',
      //   entryFileNames: 'assets/js/[name]-[hash].js',
        
      //   // CSS 文件放入 assets/css 目录
      //   assetFileNames: ({ name }) => {
      //     if (/\.css$/i.test(name)) {
      //       return 'assets/css/[name]-[hash][extname]'
      //     }
          
      //     // 图片放入 assets/images
      //     if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(name)) {
      //       return 'assets/images/[name]-[hash][extname]'
      //     }
          
      //     // 字体放入 assets/fonts
      //     if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
      //       return 'assets/fonts/[name]-[hash][extname]'
      //     }
          
      //     // 其他文件放入 assets
      //     return 'assets/[name]-[hash][extname]'
      //   }
      // }
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
