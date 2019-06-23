import AdapterInterface from './AdapterInterface'
import axios, { AxiosInstance } from 'axios'
import { apiUri } from '@/config/app'

export default class HttpAdapter implements AdapterInterface {
  private request(): AxiosInstance {
    return axios.create({
      baseURL: apiUri
    })
  }
  async get<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request()
      .get(endpoint, req)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
  async post<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request()
      .post(endpoint, req)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
  async put<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request()
      .put(endpoint, req)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
  async delete<Res>(endpoint: string): Promise<Res> {
    const result = await this.request()
      .delete(endpoint)
      .catch(e => {
        throw new Error(`${e} at ${endpoint}`)
      })
    return result.data
  }
}
