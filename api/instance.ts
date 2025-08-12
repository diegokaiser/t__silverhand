import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://northwind-api.miloudi.dev/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
