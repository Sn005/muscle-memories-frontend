import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'
export interface IFormatedWorkouts
  extends Pick<IWorkoutsModel, 'id' | 'exerciseList'> {
  name: string
  start: string
}
