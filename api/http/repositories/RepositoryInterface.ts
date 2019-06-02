export default interface RepositoryInterface<T, U> {
  all(): Promise<T[]>
  where(query: U): Promise<T[]>
  get(id: number): Promise<T>
  create(payload: T): Promise<T>
  update(id: number, payload: T): Promise<T>
  delete(id: number): Promise<T>
}
