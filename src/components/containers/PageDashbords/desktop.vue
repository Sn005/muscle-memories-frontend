<template>
  <div>
    <workouts-calender
      :workoutsList="workoutsList"
      :bodyPartsList="bodyPartsList"
    />
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
      selectedBodyPart: null
    }
  },
  async mounted() {
    this.bodyPartsList = await BodypartsRepository.all()
    this.workoutsList = await workoutsRepository.all()
  }
})
</script>
