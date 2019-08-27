import { BodyPartsModel, BodyPartsQuery } from '@/interfaces/api/http/BodyParts'
import AbstractRepository from './AbstractRepository'
import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'
export default class TrainingRecordsRepository extends AbstractRepository<
  BodyPartsModel,
  BodyPartsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'workouts'
    super(Adapter, rootUri)
  }
}
