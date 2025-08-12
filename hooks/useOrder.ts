import { useQuery } from '@tanstack/react-query';
import api from "@/api";
import type { OrdersResponse } from "@/types/order";

export const useOrder = (orderId: string) => {
  return useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const res = await api.orders.GetOrder(orderId)
      return res.data
    },
    enabled: !!orderId,
    staleTime: 1000 * 60 * 2
  })
}

export const useOrders = () => {

}

export const useOrdersPaginated = (page: number, pageSize: number) => {
  return useQuery<OrdersResponse>({
    queryKey: ['orders', page, pageSize],
    queryFn: async () => {
      const res = await api.orders.GetOrdersPaginated(page, pageSize)
      return res.data
    },
    enabled: !!page,
    staleTime: 1000 * 60 * 2
  })
}

export const useOrdersByCustomer = () => {

}

export const useOrdersByEmployee = () => {

}

export const useOrdersByShipVia = () => {

}

export const useOrdersByFreight = () => {

}

export const useOrdersShipName = () => {

}

export const useOrdersShipCountry = () => {

}

export const useOrdersByShipCountryNPostalCode = () => {

}

export const useOrdersByShipCountryNPostalCodeNRegion = () => {

}

export const useOrdersByShipCountryNPostalCodeNRegionNCity = () => {

}
