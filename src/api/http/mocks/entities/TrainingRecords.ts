import * as faker from 'faker'
import moment from 'moment'
import {
  ITrainingRecordsModel,
  ITrainingRecordsEvents,
  ITrainingRecordsSets
} from '@/interfaces/api/http/ITrainingRecords'
const targets = ['胸', '腕', '肩', '背中', '脚']

export const trainingRecords = [...Array(40)].map(
  (v, i): ITrainingRecordsModel => {
    const hoge = faker.date.past()

    const title = targets[Math.floor(Math.random() * targets.length)] + 'の日'
    const trainingDate = faker.date.between(moment().add('M', -3), moment())
    const sets: ITrainingRecordsSets[] = [...Array(3)].map(v => {
      return {
        weight: faker.random.number({ min: 80, max: 120 }),
        reps: faker.random.number({ min: 3, max: 8 })
      }
    })
    const events: ITrainingRecordsEvents[] = [...Array(3)].map(v => {
      return {
        name: faker.lorem.words(),
        sets,
        memo: faker.lorem.sentence()
      }
    })

    return {
      id: i + 1,
      title,
      trainingDate,
      events
    }
  }
)
