import { defineConfig } from 'vite';

export default defineConfig({
  base: '/flag-fen-tour/',
  server: {
    port: 5173,
    open: '/map.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: 'map.html',
        stop: 'stop.html',
        passport: 'passport.html',
        ending: 'ending.html'
      }
    }
  }
});
