import PostsModelInterface from './PostsModelInterface'
import PostsQueryInterface from './PostsQueryInterface'
import AbstractRepository from '../AbstractRepository'
import AdapterInterface from '../../adapters/AdapterInterface'
export default class PostsRepository extends AbstractRepository<
  PostsModelInterface,
  PostsQueryInterface
> {
  constructor(Adapter) {
    const rootUri = 'posts'
    super(Adapter, rootUri)
  }
}
