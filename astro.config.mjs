import { defineConfig } from 'astro/config'; 
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
//import react from '@astro/react';

export default defineConfig({
  integrations: [tailwind(), compress() ]//react()],
});