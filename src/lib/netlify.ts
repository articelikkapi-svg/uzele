// Small helper to access Netlify credentials from env vars.
// This file intentionally does NOT log full secrets. It only validates presence
// and can return a masked form for debug output.

export function getNetlifyAuth(): string {
  const token = process.env.NETLIFY_AUTH_TOKEN;
  if (!token) {
    throw new Error('NETLIFY_AUTH_TOKEN is not set. See apps/web/.env.example or NETLIFY_SETUP.md');
  }
  return token;
}

export function getNetlifySiteId(): string {
  const id = process.env.NETLIFY_SITE_ID;
  if (!id) {
    throw new Error('NETLIFY_SITE_ID is not set. See apps/web/.env.example or NETLIFY_SETUP.md');
  }
  return id;
}

export function masked(value: string, head = 4, tail = 4): string {
  if (!value) return '';
  if (value.length <= head + tail) return '****';
  return `${value.slice(0, head)}...${value.slice(-tail)}`;
}
