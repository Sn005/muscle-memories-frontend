import * as faker from 'faker'
import { workouts } from './entities/Workouts'
import { bodyparts } from './entities/Bodyparts'

interface Post {
  name: string
  title: string
  context: string
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

export const db = {
  posts,
  workouts,
  bodyparts
}
