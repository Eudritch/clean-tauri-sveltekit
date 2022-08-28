import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import fs from 'fs';

const viteTauriSetup = fs.readFileSync('./vite-tauri-setup.json');
const tauriConfig = JSON.parse(viteTauriSetup as any);
const port = tauriConfig.build.devPath.split(':').pop();

const config: UserConfig = {
	plugins: [sveltekit()],
	server: { port, strictPort: true }
};

export default config;
