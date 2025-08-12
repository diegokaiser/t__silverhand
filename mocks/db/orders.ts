import { fakerES as faker } from '@faker-js/faker'
import { MOCK_ROWS, MOCK_SEED } from '@/lib/datasource'
import { makeOrder } from '../factories/order'
import type { Order } from '@/types/order'

faker.seed(MOCK_SEED)

export const ORDERS_DB: Order[] = Array.from({ length: MOCK_ROWS }).map((_, i) => 
  makeOrder({ orderId: i + 1 })
)
