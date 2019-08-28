<template>
  <div>
    <workouts-calender
      :workoutsList="workoutsList"
      :bodyPartsList="bodyPartsList"
    />
    <v-overlay :value="isLoad" absolute>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import WorkoutsCalender from '@/components/organisms/WorkoutsCalender'
import { WorkoutsModel } from '@/interfaces/api/http/Workouts'
import { BodyPartsModel } from '@/interfaces/api/http/Bodyparts'
import RepositoryFactory from '@/api/http/repositories/RepositoryFactory'
const workoutsRepository = RepositoryFactory.get('workouts')
const BodypartsRepository = RepositoryFactory.get('bodyparts')

interface IData {
  workoutsList: WorkoutsModel[] | null
  bodyPartsList: BodyPartsModel[] | null
  selectedBodyPart: number | null
  isLoad: boolean
}
export default Vue.extend({
  name: 'DesktopPageDashbords',
  components: {
    WorkoutsCalender
  },
  data(): IData {
    return {
      workoutsList: null,
      bodyPartsList: null,
      selectedBodyPart: null,
      isLoad: false
    }
  },
  async mounted() {
    this.isLoad = true
    const resut = await Promise.all([
      BodypartsRepository.all(),
      workoutsRepository.all()
    ])
    this.isLoad = false
    this.bodyPartsList = resut[0]
    this.workoutsList = resut[1]
  }
})
</script>
