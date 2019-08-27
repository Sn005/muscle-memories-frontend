import { WorkoutsModel } from '@/interfaces/api/http/Workouts'
export interface FormatedWorkouts
  extends Pick<WorkoutsModel, 'id' | 'exerciseList'> {
  name: string
  start: string
}
export interface FormatedBodyparts {
  text: string
  value: number
}
