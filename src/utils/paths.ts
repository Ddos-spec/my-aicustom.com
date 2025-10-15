export const withBase = (path: string = ''): string => {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') {
    return base;
  }
  const normalizedPath = path.replace(/^\/+/, '');
  return `${base}${normalizedPath}`;
};
