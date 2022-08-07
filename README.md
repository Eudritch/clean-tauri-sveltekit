# <img align="top" src="/src-tauri/icons/128x128.png" height=50>   Tauri + Svelte 😩
Start creating an amazing experience for your users by unleashing the power of svelte and tauri.<br/>
Install the template's dependencies using `npm install` (or `pnpm install` or `yarn`)

Use the command "npm run dev" to start a development server

## vite
The vite port can be changed by editing build.devPath in vite-tauri-setup.json; make sure to only change the port and leave no trailing slashes(/). Please take note that altering vite-tauri-setup.json also affects Tauri's configuration. Only modify this json if you are sure of your modifications.

## SvelteKit
This project uses the adapter-static SvelteKit adapter. I kindly removed Server-Side-Rendering (SSR) by default (no more document or window is defined); however, you are welcome to clear the file hook.ts in the src folder if you prefer to use SSR by default.

## Tauri
Upon running `npm run dev`, Tauri's tauri.conf.json is being merge with JSON file vite-tauri-config.json. After some modification on the Vite's config vite will run on the same port as Tauri. Changing the port on build.devPath in the file vite-tauri-config.json will allow you to change the port for Vite and Tauri ( Leave no trailing slashes).
