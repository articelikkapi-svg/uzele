import type { Plugin } from 'vite';

export default function consoleToParent(): Plugin {
  return {
    name: 'console-to-parent',
  } as Plugin;
}
