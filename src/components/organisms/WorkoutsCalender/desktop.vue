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
    <v-dialog v-model="isEventModal" width="500"> </v-dialog>
  </div>
</template>
<script lang="ts">
import moment from 'moment'
import Vue, { PropOptions, PropType } from 'vue'
import { IWorkoutsModel } from '@/interfaces/api/http/IWorkouts'

interface IFormatedTrainingRecords
  extends Pick<IWorkoutsModel, 'id' | 'exercises'> {
  name: string
  start: string
}

interface IData {
  now: string
  selectedEvent: IFormatedTrainingRecords | null
}

export default Vue.extend({
  name: 'DesktopWorkoutsCalender',
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
    formatedWorkouts(): IFormatedTrainingRecords[] {
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
