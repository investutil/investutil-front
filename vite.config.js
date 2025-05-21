import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'dist',
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@common': path.resolve(__dirname, './src/common'),
                '@pages': path.resolve(__dirname, './src/pages')
            }
        }
    };
});