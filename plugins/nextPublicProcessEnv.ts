import type { Plugin } from 'vite';

export function nextPublicProcessEnv(): Plugin {
  return {
    name: 'next-public-process-env',
    // This plugin originally exposes NEXT_PUBLIC_* envs; no-op for static build
  } as Plugin;
}
