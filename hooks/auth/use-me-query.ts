"use client"

import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib"
import { User } from "@/types"

export function useMeQuery(enabled = true) {
  return useQuery<User, Error>({
    queryKey: ["me"],
    queryFn: async () => {
      const { data } = await api.get<User>("/auth/me")
      return data
    },
    enabled,
    retry: false,
  })
}