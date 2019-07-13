export default interface AdapterInterface {
  get<T, U = void>(endpoint: string, req?: U): Promise<T>
  post<T>(endpoint: string, req: T): Promise<T>
  put<T>(endpoint: string, req: T): Promise<T>
  delete(endpoint: string): Promise<boolean>
}
