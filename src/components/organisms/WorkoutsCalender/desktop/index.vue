<template>
  <div>
    <v-sheet height="64">
      <v-toolbar flat color="white">
        <v-btn fab text small @click="prev">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab text small @click="next" :disabled="isCurrentMonth">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer />
        <v-col class="d-flex" cols="12" sm="3">
          <v-select
            :items="formatedBodypartsList"
            @change="selectBodyparts"
            label="部位で絞り込む"
          ></v-select>
        </v-col>
      </v-toolbar>
    </v-sheet>
    <v-sheet height="620">
      <v-calendar
        v-model="focus"
        ref="calendar"
        type="month"
        event-color="primary"
        :weekdays="weekdays"
        :now="now"
        :events="filterdWorkoutsList"
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
import moment, { weekdays } from 'moment'
import Vue, { PropOptions, PropType } from 'vue'
import { WorkoutsModel } from '@/interfaces/api/http/Workouts'
import { BodypartsModel } from '@/interfaces/api/http/Bodyparts'
import {
  FormatedWorkouts,
  FormatedBodyparts
} from '@/components/organisms/WorkoutsCalender/desktop/types'
import WorkoutsCard from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutsCard.vue'

interface Data {
  now: string
  focus: string
  selectedWorkouts: FormatedWorkouts | null
  selectedBodyparts: number | null
  weekdays: number[]
}

export default Vue.extend({
  name: 'DesktopWorkoutsCalender',
  components: {
    WorkoutsCard
  },
  props: {
    workoutsList: Array as PropType<WorkoutsModel[] | undefined>,
    bodyPartsList: Array as PropType<BodypartsModel[] | undefined>
  },
  data(): Data {
    const today = moment().format('YYYY-MM-DD')
    return {
      focus: today,
      now: today,
      selectedWorkouts: null,
      selectedBodyparts: null,
      weekdays: [1, 2, 3, 4, 5, 6, 0]
    }
  },
  computed: {
    isCurrentMonth(): boolean {
      return moment(this.focus).isSame(this.now, 'month')
    },
    title(): string {
      return moment(this.focus).format('YYYY年MM月')
    },
    formatedWorkoutsList(): FormatedWorkouts[] {
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
    filterdWorkoutsList(): FormatedWorkouts[] {
      if (!this.selectedBodyparts) return this.formatedWorkoutsList
      return this.formatedWorkoutsList.filter(workouts =>
        workouts.exerciseList.some(
          exercise => exercise.bodyPartId === this.selectedBodyparts
        )
      )
    },
    formatedBodypartsList(): FormatedBodyparts[] {
      if (!this.bodyPartsList) return []
      const result = this.bodyPartsList.map((v, i) => {
        return {
          text: v.name,
          value: v.id
        }
      })
      return [{ text: '全て表示', value: 0 }, ...result]
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
    },
    selectBodyparts(val: number) {
      this.selectedBodyparts = val
    },
    updateRange({ start }) {
      console.log(start)
    }
  }
})
</script>
