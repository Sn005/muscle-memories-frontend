import * as faker from 'faker'
import moment from 'moment'
import {
  WorkoutsModel,
  WorkoutsExercise,
  WorkoutsSet
} from '@/interfaces/api/http/Workouts'
const targets = ['胸', '腕', '肩', '背中', '脚']

export const workouts = [...Array(240)].map(
  (v, i): WorkoutsModel => {
    const bodyPartId = Math.floor(Math.random() * targets.length)
    const title = targets[bodyPartId] + 'の日'
    const trainingDate = faker.date.between(moment().add(-12, 'M'), moment())
    const setList: WorkoutsSet[] = [...Array(3)].map(v => {
      return {
        weight: faker.random.number({ min: 80, max: 120 }),
        reps: faker.random.number({ min: 3, max: 8 })
      }
    })
    const exerciseList: WorkoutsExercise[] = [...Array(3)].map(v => {
      return {
        name: faker.lorem.words(),
        setList,
        memo: faker.lorem.sentence(),
        bodyPartId
      }
    })

    return {
      id: i + 1,
      title,
      trainingDate,
      exerciseList
    }
  }
)
