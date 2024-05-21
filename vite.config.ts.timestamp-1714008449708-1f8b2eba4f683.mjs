// vite.config.ts
import { defineConfig } from "file:///D:/Desktop/qiankun2/parent/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/qiankun2/parent/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Desktop\\qiankun2\\parent";
var pathSrc = path.resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": pathSrc
    }
  },
  plugins: [vue()],
  server: {
    port: 9999
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__vite_injected_original_dirname, "index.html"),
        // 主应用入口html
        // subapp: path.resolve(__dirname, 'index.html').replace(/vue-parent/g, 'vue-children'), // 子应用入口html
        subapp: path.resolve(__vite_injected_original_dirname, "children_application/index.html")
        // 子应用入口html
      },
      output: {
        // 输出的文件夹
        dir: path.resolve(__vite_injected_original_dirname, "dist"),
        format: "es",
        // 分别设置输出的chunk名称，避免命名冲突
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXHFpYW5rdW4yXFxcXHBhcmVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxxaWFua3VuMlxcXFxwYXJlbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvcWlhbmt1bjIvcGFyZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmNvbnN0IHBhdGhTcmMgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGhTcmMsXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbdnVlKCldLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA5OTk5LFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksIC8vIFx1NEUzQlx1NUU5NFx1NzUyOFx1NTE2NVx1NTNFM2h0bWxcbiAgICAgICAgLy8gc3ViYXBwOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpLnJlcGxhY2UoL3Z1ZS1wYXJlbnQvZywgJ3Z1ZS1jaGlsZHJlbicpLCAvLyBcdTVCNTBcdTVFOTRcdTc1MjhcdTUxNjVcdTUzRTNodG1sXG4gICAgICAgIHN1YmFwcDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2NoaWxkcmVuX2FwcGxpY2F0aW9uL2luZGV4Lmh0bWwnKSwgLy8gXHU1QjUwXHU1RTk0XHU3NTI4XHU1MTY1XHU1M0UzaHRtbFxuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdThGOTNcdTUxRkFcdTc2ODRcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICAgICAgZGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgIC8vIFx1NTIwNlx1NTIyQlx1OEJCRVx1N0Y2RVx1OEY5M1x1NTFGQVx1NzY4NGNodW5rXHU1NDBEXHU3OUYwXHVGRjBDXHU5MDdGXHU1MTREXHU1NDdEXHU1NDBEXHU1MUIyXHU3QTgxXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5baGFzaF0uanNgLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uW2hhc2hdLmpzYCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLltoYXNoXS5bZXh0XWBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdRLFNBQVMsb0JBQW9CO0FBQ3JTLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxVQUFVLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBRTdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQTtBQUFBO0FBQUEsUUFFMUMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsaUNBQWlDO0FBQUE7QUFBQSxNQUNuRTtBQUFBLE1BQ0EsUUFBUTtBQUFBO0FBQUEsUUFFTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxNQUFNO0FBQUEsUUFDbkMsUUFBUTtBQUFBO0FBQUEsUUFFUixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
