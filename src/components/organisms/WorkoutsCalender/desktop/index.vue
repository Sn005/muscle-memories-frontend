<template>
  <div>
    <v-sheet height="620">
      <v-calendar
        type="month"
        :now="now"
        :events="formatedWorkoutsList"
        @click:event="selectWorkout"
      ></v-calendar>
    </v-sheet>
    <v-dialog v-model="isWorkoutModal" width="600">
      <workouts-card v-if="isWorkoutModal" :workouts="selectedWorkouts" />
    </v-dialog>
  </div>
</template>
<script lang="ts">
import moment from 'moment'
import Vue, { PropOptions, PropType } from 'vue'
import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'
import { IFormatedWorkouts } from '@/components/organisms/WorkoutsCalender/desktop/types'
import WorkoutsCard from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutsCard.vue'

interface IData {
  now: string
  selectedWorkouts: IFormatedWorkouts | null
}

export default Vue.extend({
  name: 'DesktopWorkoutsCalender',
  components: {
    WorkoutsCard
  },
  props: {
    workoutsList: Array as PropType<IWorkoutsModel[] | undefined>
  },
  data(): IData {
    return {
      now: moment().format('YYYY-MM-DD'),
      selectedWorkouts: null
    }
  },
  computed: {
    formatedWorkoutsList(): IFormatedWorkouts[] {
      if (!this.workoutsList) return []
      return this.workoutsList.map(v => {
        return {
          id: v.id,
          name: v.title,
          start: moment(v.trainingDate).format('YYYY-MM-DD'),
          exerciseList: v.exerciseList
        }
      })
    },
    isWorkoutModal: {
      get(): boolean {
        return !!this.selectedWorkouts
      },
      set(): void {
        this.selectedWorkouts = null
      }
    }
  },
  methods: {
    selectWorkout({ nativeEvent, event }) {
      this.selectedWorkouts = event
      nativeEvent.stopPropagation()
    }
  }
})
</script>
