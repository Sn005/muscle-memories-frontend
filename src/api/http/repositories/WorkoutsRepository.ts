import { WorkoutsModel, WorkoutsQuery } from '@/interfaces/api/http/Workouts'
import AbstractRepository from '@/api/http/repositories/AbstractRepository'
import HttpAdapter from '@/api/http/adapters/HttpAdapter'
import MockHttpAdapter from '@/api/http/adapters/MockHttpAdapter'
export default class TrainingRecordsRepository extends AbstractRepository<
  WorkoutsModel,
  WorkoutsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'workouts'
    super(Adapter, rootUri)
  }
}
