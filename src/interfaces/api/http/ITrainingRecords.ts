export interface ITrainingRecordsQuery {
  id?: number
  range?: {
    to: Date
    from: Date
  }
}

export interface ITrainingRecordsSets {
  weight: number
  reps: number
}

export interface ITrainingRecordsEvents {
  name: string
  sets: ITrainingRecordsSets[]
  memo: string
}

export interface ITrainingRecordsModel {
  id: number
  title: string
  trainingDate: Date
  events: ITrainingRecordsEvents[]
}
