<template>
  <div>
    <workouts-calender
      :workoutsList="workoutsList"
      :bodyPartsList="bodyPartsList"
      :selectedYear.sync="selectedYear"
    />
    <v-overlay :value="isLoad" absolute>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import WorkoutsCalender from '@/components/organisms/WorkoutsCalender'
import { WorkoutsModel, WorkoutsQuery } from '@/interfaces/api/http/Workouts'
import { BodypartsModel } from '@/interfaces/api/http/Bodyparts'
import RepositoryFactory from '@/api/http/repositories/RepositoryFactory'
const workoutsRepository = RepositoryFactory.get('workouts')
const bodypartsRepository = RepositoryFactory.get('bodyparts')

interface Data {
  workoutsList: WorkoutsModel[] | null
  bodyPartsList: BodypartsModel[] | null
  selectedYear: number
  isLoad: boolean
}
export default Vue.extend({
  name: 'DesktopPageDashbords',
  components: {
    WorkoutsCalender
  },
  data(): Data {
    return {
      workoutsList: null,
      bodyPartsList: null,
      selectedYear: moment().year(),
      isLoad: false
    }
  },
  async mounted() {
    this.isLoad = true
    const workoutsQuery: WorkoutsQuery = {
      year: this.selectedYear
    }
    const resut = await Promise.all([
      bodypartsRepository.all(),
      workoutsRepository.where(workoutsQuery)
    ])
    this.isLoad = false
    this.bodyPartsList = resut[0]
    this.workoutsList = resut[1]
  },
  watch: {
    async selectedYear() {
      if (!this.workoutsList) return
      const selectedYear = moment(this.selectedYear)
      const now = moment()
      if (now.isSameOrBefore(selectedYear)) return
      this.isLoad = true
      const workoutsQuery: WorkoutsQuery = {
        year: selectedYear.year()
      }
      const result = await workoutsRepository.where(workoutsQuery)
      this.workoutsList = [...this.workoutsList, ...result]
      this.isLoad = false
    }
  }
})
</script>
