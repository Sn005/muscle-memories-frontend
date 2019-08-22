<template>
  <div>
    <workouts-calender :workouts="workouts" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import WorkoutsCalender from '@/components/organisms/WorkoutsCalender'
import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'
import RepositoryFactory from '@/api/http/repositories/RepositoryFactory'
const workoutsRepository = RepositoryFactory.get('workouts')

interface IData {
  workouts: IWorkoutsModel[] | null
  selectedBodyPart: number | null
}
export default Vue.extend({
  name: 'DesktopPageDashbords',
  components: {
    WorkoutsCalender
  },
  data(): IData {
    return {
      workouts: null,
      selectedBodyPart: null
    }
  },
  async mounted() {
    this.workouts = await workoutsRepository.all()
  }
})
</script>
