export default interface AdapterInterface {
  get<T, U>(endpoint: string, req?: U): Promise<T>
  post<T, U>(endpoint: string, req?: U): Promise<T>
  put<T, U>(endpoint: string, req?: U): Promise<T>
  delete<T>(endpoint: string): Promise<T>
}
