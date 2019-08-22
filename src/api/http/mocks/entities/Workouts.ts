import * as faker from 'faker'
import moment from 'moment'
import {
  IWorkoutsModel,
  IWorkoutsExercise,
  IWorkoutsSets
} from '@/interfaces/api/http/IWorkouts'
const targets = ['胸', '腕', '肩', '背中', '脚']

export const workouts = [...Array(30)].map(
  (v, i): IWorkoutsModel => {
    const bodyPartId = Math.floor(Math.random() * targets.length)
    const title = targets[bodyPartId] + 'の日'
    const trainingDate = faker.date.between(
      moment().add(1, 'M'),
      moment().add(-1, 'M')
    )
    const sets: IWorkoutsSets[] = [...Array(3)].map(v => {
      return {
        weight: faker.random.number({ min: 80, max: 120 }),
        reps: faker.random.number({ min: 3, max: 8 })
      }
    })
    const exercises: IWorkoutsExercise[] = [...Array(3)].map(v => {
      return {
        name: faker.lorem.words(),
        sets,
        memo: faker.lorem.sentence(),
        bodyPartId
      }
    })

    return {
      id: i + 1,
      title,
      trainingDate,
      exercises
    }
  }
)
