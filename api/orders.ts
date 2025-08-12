import { useMocks } from "@/lib/datasource";

const impl = useMocks ? require('@/mocks/orders.api') : require('@/api/northwind/orders')

const orders = {
  GetOrdersPaginated: impl.getOrdersPaginated as (page: number, pageSize: number) => Promise<any>,
  GetOrder: impl.getOrderById as (id: number) => Promise<any>
}

export default orders
