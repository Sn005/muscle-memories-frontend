import HttpAdapter from '@/api/http/adapters/HttpAdapter'
import MockHttpAdapter from '@/api/http/adapters/MockHttpAdapter'

import PostsRepository from '@/api/http/repositories/posts/PostsRepository'
import WorkoutsRepository from '@/api/http/repositories/WorkoutsRepository'
import BodypartsRepository from '@/api/http/repositories/BodypartsRepository'

const Adapter = process.env.IS_OFFLINE ? MockHttpAdapter : HttpAdapter

const repositories = {
  workouts: WorkoutsRepository,
  bodyparts: BodypartsRepository,
  posts: PostsRepository
}

type repositoryTypes = {
  workouts: WorkoutsRepository
  bodyparts: BodypartsRepository
  posts: PostsRepository
}

export default {
  get<T extends keyof repositoryTypes>(name: T): repositoryTypes[T] {
    const result = new repositories[name](Adapter)
    return result
  }
}
