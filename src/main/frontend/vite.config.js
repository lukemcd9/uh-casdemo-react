import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_HOME;
  return {
    plugins: [react()],
    base,
    server: {
      proxy: {
        [`${base}/login`]: env.VITE_BACKEND_URL,
        [`${base}/logout`]: env.VITE_BACKEND_URL,
      }
    }
  }
})
