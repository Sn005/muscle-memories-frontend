import PostsModelInterface from './PostsModelInterface'
import PostsQueryInterface from './PostsQueryInterface'
import AbstractRepository from '../AbstractRepository'
import HttpAdapter from '../../adapters/HttpAdapter'
import MockHttpAdapter from '../../adapters/MockHttpAdapter'
export default class PostsRepository extends AbstractRepository<
  PostsModelInterface,
  PostsQueryInterface
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'posts'
    super(Adapter, rootUri)
  }
}
