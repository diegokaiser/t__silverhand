import { paginate } from './utils/paginate'
import { delay } from './utils/delay'
import { NETWORK_DELAY_MS } from '@/lib/datasource'
import { ORDERS_DB } from './db/orders'
import type { Order } from '@/types/order'

export async function getOrdersPaginated(page: number, pageSize: number) {
  await delay(NETWORK_DELAY_MS)
  return paginate<Order>(ORDERS_DB, page, pageSize)
}

export async function getOrderById(id: number) {
  await delay(NETWORK_DELAY_MS)
  const order = ORDERS_DB.find((o) => o.orderId === id)
  if (!order) throw new Error('Order not found');
  return order
}
