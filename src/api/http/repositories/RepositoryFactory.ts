import HttpAdapter from '../adapters/HttpAdapter'
import MockHttpAdapter from '../adapters/MockHttpAdapter'

import PostsRepository from './posts/PostsRepository'
import HogesRepository from './hoges/HogesRepository'
import TrainingRecordsRepository from './trainingRecords/TrainingRecordsRepository'

const Adapter = process.env.IS_OFFLINE ? MockHttpAdapter : HttpAdapter

const repositories = {
  trainingRecords: TrainingRecordsRepository,
  posts: PostsRepository
}

type repositoryTypes = {
  trainingRecords: TrainingRecordsRepository
  posts: PostsRepository
  // hoges: HogesRepository
}

export default {
  get<T extends keyof repositoryTypes>(name: T): repositoryTypes[T] {
    const result = new repositories[name](Adapter)
    return result
  }
}
