import AdapterInterface from '../adapters/AdapterInterface'
import RepositoryInterface from './RepositoryInterface'

export default abstract class AbstractRepository<T, U>
  implements RepositoryInterface<T, U> {
  private adapter: AdapterInterface
  private rootUri: string
  constructor(Adapter, rootUri) {
    this.rootUri = rootUri
    this.adapter = new Adapter()
  }
  public async all(): Promise<T[]> {
    const result = await this.adapter.get<T[], U>(`${this.rootUri}/`)
    return result
  }
  public async where(query: U): Promise<T[]> {
    const result = await this.adapter.get<T[], U>(`${this.rootUri}/`, query)
    return result
  }
  public async get(id: number): Promise<T> {
    const result = await this.adapter.get<T, U>(`${this.rootUri}/${id}`)
    return result[0]
  }
  public async create(payload: T): Promise<T> {
    const result = await this.adapter.post(`${this.rootUri}`, payload)
    return result[0]
  }
  public async update(id: number, payload: T): Promise<T> {
    const result = await this.adapter.put(`${this.rootUri}/${id}`, payload)
    return result[0]
  }
  public async delete(id: number): Promise<boolean> {
    const result = await this.adapter.delete(`${this.rootUri}/${id}`)
    return result
  }
}
