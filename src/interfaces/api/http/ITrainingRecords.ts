export interface ITrainingRecordsQuery {
  id?: number
  year?: number
  month?: number
  date?: number
}

export interface ITrainingRecordsSets {
  weight: number
  reps: number
}

export interface ITrainingRecordsEvents {
  name: string
  sets: ITrainingRecordsSets[]
  memo: string
  bodyPartId: number
}

export interface ITrainingRecordsModel {
  id: number
  title: string
  trainingDate: Date
  events: ITrainingRecordsEvents[]
}
