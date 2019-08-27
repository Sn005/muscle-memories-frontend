import { BodypartsModel, BodypartsQuery } from '@/interfaces/api/http/Bodyparts'
import AbstractRepository from './AbstractRepository'
import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'
export default class TrainingRecordsRepository extends AbstractRepository<
  BodypartsModel,
  BodypartsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'bodyparts'
    super(Adapter, rootUri)
  }
}
