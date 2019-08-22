export interface IWorkoutsQuery {
  id?: number
  year?: number
  month?: number
  date?: number
}

export interface IWorkoutsSets {
  weight: number
  reps: number
}

export interface IWorkoutsExercise {
  name: string
  sets: IWorkoutsSets[]
  memo: string
  bodyPartId: number
}

export interface IWorkoutsModel {
  id: number
  title: string
  trainingDate: Date
  exercises: IWorkoutsExercise[]
}
