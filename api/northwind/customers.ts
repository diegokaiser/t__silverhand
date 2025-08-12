import instance from "./instance"

const customers = {
  GetCustomer: (customerId: string) => instance.get(`customers/${customerId}`)
}

export default customers
