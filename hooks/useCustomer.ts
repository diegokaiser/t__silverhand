import { useQuery } from '@tanstack/react-query';
import api from "@/api";

export const useCustomer = (customerId: string) => {
  return useQuery({
    queryKey: ['customer', customerId],
    queryFn: async () => {
      const res = await api.customers.GetCustomer(customerId)
      return res.data
    },
    enabled: !!customerId,
    staleTime: 1000 * 60 * 2
  })
}
