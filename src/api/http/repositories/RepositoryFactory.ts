import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'

import PostsRepository from './posts/PostsRepository'
import HogesRepository from './hoges/HogesRepository'

const Adapter = process.env.IS_OFFLINE ? MockHttpAdapter : HttpAdapter

const repositories = {
  posts: PostsRepository,
  hoges: HogesRepository
}

export type repositoryTypes = {
  posts: PostsRepository
  hoges: HogesRepository
}

export default {
  get<T>(name: string): T {
    const result = new repositories[name](Adapter)
    return result
  }
}
