import { BodypartsModel, BodypartsQuery } from '@/interfaces/api/http/Bodyparts'
import AbstractRepository from '@/api/http/repositories/AbstractRepository'
import HttpAdapter from '@/api/http/adapters/HttpAdapter'
import MockHttpAdapter from '@/api/http/adapters/MockHttpAdapter'
export default class TrainingRecordsRepository extends AbstractRepository<
  BodypartsModel,
  BodypartsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'bodyparts'
    super(Adapter, rootUri)
  }
}
