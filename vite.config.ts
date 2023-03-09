import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import viteTauriPlugin from 'vite-tauri-plugin';

const config: UserConfig = {
	plugins: [sveltekit(), viteTauriPlugin()]
};

export default config;
