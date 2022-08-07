import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

const viteTauriSetup = fs.readFileSync('./vite-tauri-setup.json');
const tauriConfig = JSON.parse(viteTauriSetup);
const port = tauriConfig.build.devPath.split(':').pop();

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: { port, strictPort: true }
};

export default config;
