import { fakerES as faker } from '@faker-js/faker'
import type { Order } from '@/types/order'

export const makeOrder = (overrides: Partial<Order> = {}): Order => {
  const orderDate = faker.date.recent({ days: 120 })
  const requiredDate = faker.date.soon({ days: 15, refDate: orderDate })
  const shippedDate = faker.date.between({ from: orderDate, to: requiredDate })

  return {
    orderId: faker.number.int({ min: 1, max: 1_000_000 }),
    customerId: faker.number.int({ min: 1, max: 5000 }).toString(),
    employeeId: faker.number.int({ min: 1, max: 300 }),
    orderDate: orderDate.toISOString(),
    requiredDate: requiredDate.toISOString(),
    shippedDate: shippedDate.toISOString(),
    shipVia: faker.number.int({ min: 1, max: 15 }),
    freight: faker.finance.amount({ min: 10, max: 190 }),
    shipName: faker.airline.recordLocator(),
    shipAddress: faker.location.streetAddress(false),
    shipCity: faker.location.city(),
    shipRegion: faker.location.continent(),
    shipPostalCode: faker.location.zipCode(),
    shipCountry: faker.location.country(),
    ...overrides
  }
}
