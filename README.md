# <img align="top" src="/src-tauri/icons/128x128.png" height=50>   Tauri + Svelte 😩
Start creating an amazing experience for your users by unleashing the power of svelte and tauri.<br/>
Install the template's dependencies using `npm install` (or `pnpm install` or `yarn`)

Use the command `npm run dev` to start a development server

## Vite
Make use of the Vite Tauri plugin to seamlessly run Tauri upon development and preview. Enjoy the flexibility and convenience of Vite in your Tauri project.

## SvelteKit
This project uses the adapter-static SvelteKit adapter. I kindly removed Server-Side-Rendering (SSR), and prerendering by default (no more document or window is defined). However, if you prefer to use SSR or any adapter of your choice, you can delete the +layout.js file in the src/routes folder.

## Tauri
When you run `npm run dev`, Tauri's tauri.conf.json is merged with JSON text and build.devPath will be changed into Vite's currentPath. Get ready to unleash the full power of Tauri and Svelte!