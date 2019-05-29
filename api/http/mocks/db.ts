import * as faker from 'faker'
interface Post {
  name: string
  title: string
  context: string
}

interface DB {
  posts: Post[]
}
export const db: DB = {
  posts: [
    {
      name: faker.name.findName(),
      title: 'hoge',
      context: 'hoge'
    },
    {
      name: faker.name.findName(),
      title: 'fuga',
      context: 'fuga'
    }
  ]
}
