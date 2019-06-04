import AdapterInterface from './AdapterInterface'
import axios, { AxiosInstance } from 'axios'

export default class HttpAdapter implements AdapterInterface {
  private request(): AxiosInstance {
    return axios.create({
      baseURL: 'http://localhost:3001/'
    })
  }
  async get<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request()
      .get(endpoint, req)
      .catch(e => {
        console.warn(e)
        throw new Error(e)
      })
    return result.data
  }
  async post<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request()
      .post(endpoint, req)
      .catch(e => {
        console.warn(e)
        throw new Error(e)
      })
    return result.data
  }
  async put<Res, Req = void>(endpoint: string, req: Req): Promise<Res> {
    const result = await this.request()
      .put(endpoint, req)
      .catch(e => {
        console.warn(e)
        throw new Error(e)
      })
    return result.data
  }
  async delete<Res>(endpoint: string): Promise<Res> {
    const result = await this.request()
      .delete(endpoint)
      .catch(e => {
        console.warn(e)
        throw new Error(e)
      })
    return result.data
  }
}
