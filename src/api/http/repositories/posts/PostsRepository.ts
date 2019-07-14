import { IPostsModel, IPostsQuery } from '@/interfaces/api/http/IPosts'
import AbstractRepository from '../AbstractRepository'
import HttpAdapter from '../../adapters/HttpAdapter'
import MockHttpAdapter from '../../adapters/MockHttpAdapter'
export default class PostsRepository extends AbstractRepository<
  IPostsModel,
  IPostsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'posts'
    super(Adapter, rootUri)
  }
}
