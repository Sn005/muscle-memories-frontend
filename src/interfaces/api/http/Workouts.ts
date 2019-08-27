export interface WorkoutsQuery {
  id?: number
  year?: number
  month?: number
  date?: number
}

export interface WorkoutsSet {
  weight: number
  reps: number
}

export interface WorkoutsExercise {
  name: string
  setList: WorkoutsSet[]
  memo: string
  bodyPartId: number
}

export interface WorkoutsModel {
  id: number
  title: string
  trainingDate: Date
  exerciseList: WorkoutsExercise[]
}
