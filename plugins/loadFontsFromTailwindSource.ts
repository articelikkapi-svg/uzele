import type { Plugin } from 'vite';

export function loadFontsFromTailwindSource(): Plugin {
  return {
    name: 'load-fonts-from-tailwind-source',
  } as Plugin;
}
