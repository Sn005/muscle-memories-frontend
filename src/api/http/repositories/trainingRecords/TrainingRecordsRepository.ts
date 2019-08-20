import {
  ITrainingRecordsModel,
  ITrainingRecordsQuery
} from '@/interfaces/api/http/ITrainingRecords'
import AbstractRepository from '../AbstractRepository'
import HttpAdapter from '../../adapters/HttpAdapter'
import MockHttpAdapter from '../../adapters/MockHttpAdapter'
export default class TrainingRecordsRepository extends AbstractRepository<
  ITrainingRecordsModel,
  ITrainingRecordsQuery
> {
  constructor(Adapter: typeof MockHttpAdapter | typeof HttpAdapter) {
    const rootUri = 'training-records'
    super(Adapter, rootUri)
  }
}
