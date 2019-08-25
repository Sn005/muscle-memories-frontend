<template>
  <div>
    <v-sheet height="64">
      <v-toolbar flat color="white">
        <v-btn fab text small @click="prev">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab text small @click="next">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title>ddd</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </v-sheet>
    <v-sheet height="620">
      <v-calendar
        ref="calendar"
        type="month"
        v-model="focus"
        :now="now"
        :events="formatedWorkoutsList"
        @click:event="selectWorkout"
        @change="updateRange"
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
  focus: string
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
    const today = moment().format('YYYY-MM-DD')
    return {
      focus: today,
      now: today,
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
    },
    prev() {
      // @ts-ignore: Unreachable code error
      this.$refs.calendar.prev()
    },
    next() {
      // @ts-ignore: Unreachable code error
      this.$refs.calendar.next()
    }
  }
})
</script>
