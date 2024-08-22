import axios from 'axios'

export const currentUrl = new URL(window.location.href)
const baseUrl = 'https://skillfactory-task.detmir.team'
export function formatPrice(number: number) {
  return new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
}

export const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
})
