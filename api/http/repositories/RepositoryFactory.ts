import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'

import PostsRepository from './posts/PostsRepository'

const Adapter = process.env.IS_OFFLINE ? MockHttpAdapter : HttpAdapter
const repositories = {
  posts: PostsRepository
}

export enum repositoryTypes {
  posts = 'posts'
}

export default {
  get(name): PostsRepository {
    return new repositories[name](Adapter)
  }
}
