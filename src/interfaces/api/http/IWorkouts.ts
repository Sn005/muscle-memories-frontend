export interface IWorkoutsQuery {
  id?: number
  year?: number
  month?: number
  date?: number
}

export interface IWorkoutsSet {
  weight: number
  reps: number
}

export interface IWorkoutsExercise {
  name: string
  setList: IWorkoutsSet[]
  memo: string
  bodyPartId: number
}

export interface IWorkoutsModel {
  id: number
  title: string
  trainingDate: Date
  exerciseList: IWorkoutsExercise[]
}
