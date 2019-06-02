import PostsInterface from './PostsInterface'
import PostsQueryInterface from './PostsQueryInterface'
import AbstractRepository from '../AbstractRepository'
import AdapterInterface from '../../adapters/AdapterInterface'
export default class PostsRepository extends AbstractRepository<
  PostsInterface,
  PostsQueryInterface
> {
  constructor(Adapter: AdapterInterface) {
    const rootUri = 'hoges'
    super(Adapter, rootUri)
  }
}
