<template>
  <div>
    <training-records-calender :trainingRecords="trainingRecords" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TrainingRecordsCalender from '@/components/organisms/TrainingRecordsCalender'
import { ITrainingRecordsModel } from '@/interfaces/api/http/ITrainingRecords'
import RepositoryFactory from '@/api/http/repositories/RepositoryFactory'
const trainingRecordsRepository = RepositoryFactory.get('trainingRecords')

interface IData {
  trainingRecords: ITrainingRecordsModel[] | null
}
export default Vue.extend({
  name: 'DesktopPageDashbords',
  components: {
    TrainingRecordsCalender
  },
  data(): IData {
    return {
      trainingRecords: null
    }
  },
  async mounted() {
    this.trainingRecords = await trainingRecordsRepository.all()
  }
})
</script>
