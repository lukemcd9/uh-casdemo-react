import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/casdemo',
    server: {
      proxy: {
        '/api': {
          target: `${env.VITE_BACKEND_URL_HOME}/api`
        },
        '/login': {
          target: `${env.VITE_BACKEND_URL_HOME}/login`
        },
        '/logout': {
          target: `${env.VITE_BACKEND_URL_HOME}/logout`
        }
      }
    }
  }
})
