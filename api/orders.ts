import instance from "./instance"

const orders = {
  GetOrder: (orderId: string ) => instance.get(`orders/${orderId}`),
  GetOrders: () => instance.get('orders'),
  GetOrdersPaginated: (page: number, pageSize: number ) => {
    return instance.get(`orders?page=${page}&pageSize=${pageSize}`)
  },
  GetOrdersByCustomer: (customerId: string ) => {
    return instance.get(`orders?customerId=${customerId}`)
  },
  GetOrdersByEmployee: (employeeId: string ) => {
    return instance.get(`orders?employeeId=${employeeId}`)
  },
  GetOrdersByShipVia: ( shipVia: string ) => {
    return instance.get(`orders?shipVia=${shipVia}`)
  },
  GetOrdersByFreight: ( freight: string ) => {
    return instance.get(`orders?freight=${freight}`)
  },
  GetOrdersByShipName: ( shipName: string ) => {
    return instance.get(`orders?shipName=${shipName}`)
  },
  GetOrdersByShipCountry: ( shipCountry: string ) => {
    return instance.get(`orders?shipCountry=${shipCountry}`)
  },
  GetOrdersByShipCountryNShipPostalCode: ( shipCountry: string, shipPostalCode: string ) => {
    return instance.get(`orders?shipCountry=${shipCountry}&shipPostalcode=${shipPostalCode}`)
  },
  GetOrdersByShipCountryNShipPostalCodeNShipRegion: ( shipCountry: string, shipPostalCode: string, shipRegion: string ) => {
    return instance.get(`orders?shipCountry=${shipCountry}&shipPostalcode=${shipPostalCode}&shipRegion=${shipRegion}`)
  },
  GetOrdersByShipCountryNShipPostalCodeNShipRegionNShipCity: ( shipCountry: string, shipPostalCode: string, shipRegion: string, shipCity: string ) => {
    return instance.get(`orders?shipCountry=${shipCountry}&shipPostalcode=${shipPostalCode}&shipRegion=${shipRegion}&shipCity=${shipCity}`)
  },
}

export default orders
