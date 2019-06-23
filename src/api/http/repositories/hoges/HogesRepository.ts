import HogesModelInterface from './HogesModelInterface'
import PostsQueryInterface from './PostsQueryInterface'
import AbstractRepository from '../AbstractRepository'
import AdapterInterface from '../../adapters/AdapterInterface'
export default class HogesRepository extends AbstractRepository<
  HogesModelInterface,
  PostsQueryInterface
> {
  constructor(Adapter: AdapterInterface) {
    const rootUri = 'hoge'
    super(Adapter, rootUri)
  }
}
