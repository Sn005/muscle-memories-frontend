<template>
  <div>
    hoge
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { ITrainingRecordsModel } from '@/interfaces/api/http/ITrainingRecords'

export default Vue.extend({
  name: 'DesktopTrainingRecordsCalender',
  props: {
    trainingRecords: Array as PropType<ITrainingRecordsModel[] | null>
  }
})
</script>
