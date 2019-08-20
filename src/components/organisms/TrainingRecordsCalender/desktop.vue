<template>
  <v-sheet height="500">
    <v-calendar
      type="month"
      :now="now"
      :events="formatedTrainingRecords"
    ></v-calendar>
  </v-sheet>
</template>
<script lang="ts">
import moment from 'moment'
import Vue, { PropType } from 'vue'
import { ITrainingRecordsModel } from '@/interfaces/api/http/ITrainingRecords'

interface IData {
  now: string
}
interface IFormatedTrainingRecords {
  name: string
  start: string
}
export default Vue.extend({
  name: 'DesktopTrainingRecordsCalender',
  props: {
    trainingRecords: Array as PropType<ITrainingRecordsModel[] | null>
  },
  data(): IData {
    return {
      now: moment().format('YYYY-MM-DD')
    }
  },
  computed: {
    formatedTrainingRecords(): IFormatedTrainingRecords[] {
      if (!this.trainingRecords) return []
      return this.trainingRecords.map(v => {
        return {
          name: v.title,
          start: moment(v.trainingDate).format('YYYY-MM-DD')
        }
      })
    }
  }
})
</script>
