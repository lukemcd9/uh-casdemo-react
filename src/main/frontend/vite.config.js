import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE;
  const url = `${env.VITE_BACKEND_URL}${base}`;
  const config = {
    plugins: [react()],
    base,
  };

  if (mode === 'dev') {
    config.server = {
      proxy: {
        '/api': {
          target: `${url}/api`,
        },
        '/login': {
          target: `${url}/login`,
        },
        '/logout': {
          target: `${url}/logout`,
        },
      },
    };
  }
  return config;
});