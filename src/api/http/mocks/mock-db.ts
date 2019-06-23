import * as faker from 'faker'
interface Post {
  name: string
  title: string
  context: string
}

interface DB {
  posts: Post[]
}
const posts = [...Array(100)].map(
  (v): Post => {
    return {
      name: faker.name.findName(),
      title: faker.lorem.words(),
      context: faker.lorem.paragraphs()
    }
  }
)
export const db: DB = {
  posts
}
