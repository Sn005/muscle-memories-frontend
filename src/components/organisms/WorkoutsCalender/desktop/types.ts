import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'
export interface IFormatedWorkout
  extends Pick<IWorkoutsModel, 'id' | 'exercises'> {
  name: string
  start: string
}
