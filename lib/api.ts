import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

function readStoredToken(): string | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem('auth-storage')
  if (!stored) return null
  try {
    const { state } = JSON.parse(stored)
    return state?.token ?? null
  } catch {
    return null
  }
}

api.interceptors.request.use((config) => {
  const storedToken = readStoredToken()
  const token = storedToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== 'undefined' && error.response?.status === 401) {
      if (readStoredToken()) {
        localStorage.removeItem('auth-storage')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  },
)

export { api }