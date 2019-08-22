import { IWorkoutsModel, IWorkoutsQuery } from '@/interfaces/api/http/IWorkouts'
import AbstractRepository from './AbstractRepository'
import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'
export default class TrainingRecordsRepository extends AbstractRepository<
  IWorkoutsModel,
  IWorkoutsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'workouts'
    super(Adapter, rootUri)
  }
}
