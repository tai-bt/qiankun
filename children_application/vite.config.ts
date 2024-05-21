import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('microApp1', {
      useDevMode: true,
    }),
  ],
  server: {
    port: 8999,
  },
  base: '/app1',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // 主应用入口html
        // subapp: path.resolve(__dirname, 'index.html').replace(/vue-parent/g, 'vue-children'), // 子应用入口html
        // subapp: path.resolve(__dirname, 'children_application/index.html'), // 子应用入口html
      },
      output: {
        // 输出的文件夹
        dir: path.resolve(__dirname, 'qiankun2'),
        format: 'es',
        // 分别设置输出的chunk名称，避免命名冲突
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  }
})
