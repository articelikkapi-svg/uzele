import type { Plugin } from 'vite';

export function restart(options: { restart?: string[] } = {}): Plugin {
  return {
    name: 'restart-plugin',
    // The real plugin watches files and restarts dev server; noop for build.
  } as Plugin;
}
