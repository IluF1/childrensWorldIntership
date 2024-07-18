export const currentUrl = new URL(window.location.href);
const parts: string[] = String(currentUrl).split('/');
export const productId: string = parts[parts.length - 1];