import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'

import PostsRepository from './posts/PostsRepository'
import WorkoutsRepository from './WorkoutsRepository'

const Adapter = process.env.IS_OFFLINE ? MockHttpAdapter : HttpAdapter

const repositories = {
  workouts: WorkoutsRepository,
  posts: PostsRepository
}

type repositoryTypes = {
  workouts: WorkoutsRepository
  posts: PostsRepository
}

export default {
  get<T extends keyof repositoryTypes>(name: T): repositoryTypes[T] {
    const result = new repositories[name](Adapter)
    return result
  }
}
