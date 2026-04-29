const basePath = process.env.NODE_ENV === 'production' ? '/drjacket' : '';

export function img(path: string): string {
  return `${basePath}${path}`;
}
