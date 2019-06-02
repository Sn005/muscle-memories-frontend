import AdapterInterface from './AdapterInterface'
import axios, { AxiosInstance } from 'axios'

export default class HttpAdapter implements AdapterInterface {
  private request(): AxiosInstance {
    return axios.create({
      baseURL: 'https://localhost:3001/api/'
    })
  }
  async get<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request().get(endpoint, req)
    return result.data
  }
  async post<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request().post(endpoint, req)
    return result.data
  }
  async put<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request().put(endpoint, req)
    return result.data
  }
  async delete<Res>(endpoint: string): Promise<Res> {
    const result = await this.request().delete(endpoint)
    return result.data
  }
}
