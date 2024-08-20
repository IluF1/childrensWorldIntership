import { currentUrl } from '@/shared'

const parts: string[] = String(currentUrl).split('/')
export const productId: string = parts[parts.length - 1]
