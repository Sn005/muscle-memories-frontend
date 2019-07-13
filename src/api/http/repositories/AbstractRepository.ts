import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'
export default abstract class AbstractRepository<Model, Params> {
  private adapter: MockHttpAdapter | HttpAdapter
  private rootUri: string
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter, rootUri) {
    this.rootUri = rootUri
    this.adapter = new Adapter()
  }
  public async all() {
    const result = await this.adapter.get<Model[]>(`${this.rootUri}/`)
    return result
  }
  public async where(params: Params) {
    const result = await this.adapter.get<Model[], Params>(
      `${this.rootUri}/`,
      params
    )
    return result
  }
  public async get(id: number) {
    const result = await this.adapter.get<Model>(`${this.rootUri}/${id}`)
    return result[0]
  }
  public async create(newModel: Model) {
    const result = await this.adapter.post(`${this.rootUri}`, newModel)
    return result[0]
  }
  public async update(id: number, updateModel: Model): Promise<Model> {
    const result = await this.adapter.put(`${this.rootUri}/${id}`, updateModel)
    return result[0]
  }
  public async delete(id: number) {
    const result = await this.adapter.delete(`${this.rootUri}/${id}`)
    return result
  }
}
