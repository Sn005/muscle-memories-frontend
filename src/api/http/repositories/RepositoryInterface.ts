export default interface RepositoryInterface<Params, Model> {
  rootUrl: string
  all(): Promise<Model[]>
  where(params: Params)
  get(id: number): Promise<Model>
  create(newModel: Model): Promise<Model>
  update(id: number, updatedModel: Model): Promise<Model>
  delete(id: number): Promise<boolean>
}
