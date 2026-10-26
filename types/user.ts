export interface User {
  id: string
  name: string
  email: string
  phone: string | null
  avatar: string | null
  birth_date: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}