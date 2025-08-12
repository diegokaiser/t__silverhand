import { useQuery } from '@tanstack/react-query';
import api from "@/api";

export const useEmployee = (employeeId: string) => {
  return useQuery({
    queryKey: ['employee', employeeId],
    queryFn: async () => {
      const res = await api.employees.GetEmployee(employeeId)
      return res.data
    },
    enabled: !!employeeId,
    staleTime: 1000 * 60 * 2
  })
}
