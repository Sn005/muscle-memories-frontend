import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'

import PostsRepository from './posts/PostsRepository'
import HogesRepository from './hoges/HogesRepository'

const Adapter = process.env.IS_OFFLINE ? MockHttpAdapter : HttpAdapter

const repositories = {
  posts: PostsRepository,
  hoges: HogesRepository
}

type repositoryTypes = {
  posts: PostsRepository
  hoges: HogesRepository
}

export default {
  get<T extends keyof repositoryTypes>(name: T): repositoryTypes[T] {
    const result = new repositories[name](Adapter)
    return result
  }
}
