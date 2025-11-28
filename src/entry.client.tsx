import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './app/routes';

// The routes are produced by our `src/app/routes.ts` generator and are
// compatible with react-router's route config format. Create a browser
// router explicitly and pass it to RouterProvider so we don't rely on the
// SSR runtime helpers that `@react-router/dev`'s default entry expects.
const router = createBrowserRouter(routes as any);

function bootstrap() {
  const el = document.getElementById('root');
  if (!el) return;
  const root = createRoot(el);
  root.render(<RouterProvider router={router} />);
}

// Wait for DOM ready just in case index.html is loaded before this script
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}

export {};
