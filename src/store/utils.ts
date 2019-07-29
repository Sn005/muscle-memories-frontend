export function generateTypePath<T>(
  types: T,
  namespace: string
): { [K in keyof T]: string } {
  return Object.values(types).reduce(
    (a, c) => ({ ...a, [c]: `${namespace}/${types[c]}` }),
    {}
  )
}
