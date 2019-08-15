export interface ITrainingRecordsQuery {
  id?: number
}

interface ITrainingRecordsSets {
  weight: number
  reps: number
}

interface ITrainingRecordsEvents {
  name: string
  sets: ITrainingRecordsSets[]
  memo: string
}

export interface ITrainingRecordsModel {
  id: number
  title: string | null
  trainingDate: Date
  events: ITrainingRecordsEvents[]
}
