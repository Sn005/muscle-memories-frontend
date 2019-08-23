<template>
  <div>
    <workouts-calender :workoutsList="workoutsList" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import WorkoutsCalender from '@/components/organisms/WorkoutsCalender'
import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'
import RepositoryFactory from '@/api/http/repositories/RepositoryFactory'
const workoutsRepository = RepositoryFactory.get('workouts')

interface IData {
  workoutsList: IWorkoutsModel[] | null
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
      selectedBodyPart: null
    }
  },
  async mounted() {
    this.workoutsList = await workoutsRepository.all()
  }
})
</script>
