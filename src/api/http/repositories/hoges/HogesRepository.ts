import HogesModelInterface from './HogesModelInterface'
import PostsQueryInterface from './PostsQueryInterface'
import AbstractRepository from '../AbstractRepository'
import HttpAdapter from '../../adapters/HttpAdapter'
import MockHttpAdapter from '../../adapters/MockHttpAdapter'
export default class HogesRepository extends AbstractRepository<
  HogesModelInterface,
  PostsQueryInterface
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'hoge'
    super(Adapter, rootUri)
  }
}
