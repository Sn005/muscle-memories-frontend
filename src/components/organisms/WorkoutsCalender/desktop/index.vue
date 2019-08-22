<template>
  <div>
    <v-sheet height="620">
      <v-calendar
        type="month"
        :now="now"
        :events="formatedWorkouts"
        @click:event="selectEvent"
      ></v-calendar>
    </v-sheet>
    <v-dialog v-model="isEventModal" width="600">
      <workout-card v-if="isEventModal" :workout="selectedEvent" />
    </v-dialog>
  </div>
</template>
<script lang="ts">
import moment from 'moment'
import Vue, { PropOptions, PropType } from 'vue'
import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'
import { IFormatedWorkout } from '@/components/organisms/WorkoutsCalender/desktop/types'
import WorkoutCard from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutCard.vue'

interface IData {
  now: string
  selectedEvent: IFormatedWorkout | null
}

export default Vue.extend({
  name: 'DesktopWorkoutsCalender',
  components: {
    WorkoutCard
  },
  props: {
    workouts: Array as PropType<IWorkoutsModel[] | undefined>
  },
  data(): IData {
    return {
      now: moment().format('YYYY-MM-DD'),
      selectedEvent: null
    }
  },
  computed: {
    formatedWorkouts(): IFormatedWorkout[] {
      if (!this.workouts) return []
      return this.workouts.map(v => {
        return {
          id: v.id,
          name: v.title,
          start: moment(v.trainingDate).format('YYYY-MM-DD'),
          exercises: v.exercises
        }
      })
    },
    isEventModal: {
      get(): boolean {
        return !!this.selectedEvent
      },
      set(): void {
        this.selectedEvent = null
      }
    }
  },
  methods: {
    selectEvent({ nativeEvent, event }) {
      this.selectedEvent = event
      nativeEvent.stopPropagation()
    }
  }
})
</script>
