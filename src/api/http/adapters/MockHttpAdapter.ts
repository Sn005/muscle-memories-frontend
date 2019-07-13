import AdapterInterface from './AdapterInterface'
import axios, { AxiosInstance } from 'axios'
import { mockApiUri } from '@/config/app'

export default class MockHttpAdapter implements AdapterInterface {
  private request(): AxiosInstance {
    return axios.create({
      baseURL: mockApiUri
    })
  }
  async get<T, U = void>(endpoint: string, req?: U): Promise<T> {
    const result = await this.request()
      .get<T>(endpoint, req)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
  async post<T>(endpoint: string, req: T): Promise<T> {
    const result = await this.request()
      .post<T>(endpoint, req)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
  async put<T>(endpoint: string, req: T): Promise<T> {
    const result = await this.request()
      .put<T>(endpoint, req)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
  async delete(endpoint: string): Promise<boolean> {
    const result = await this.request()
      .delete(endpoint)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
}
