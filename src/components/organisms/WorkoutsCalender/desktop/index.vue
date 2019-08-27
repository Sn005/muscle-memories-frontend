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
        <v-col class="d-flex" cols="12" sm="3">
          <v-select
            :items="formatedBodypartsList"
            label="部位で絞り込む"
          ></v-select>
        </v-col>
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
import { WorkoutsModel } from '@/interfaces/api/http/Workouts'
import { BodyPartsModel } from '@/interfaces/api/http/Bodyparts'
import {
  FormatedWorkouts,
  FormatedBodyparts
} from '@/components/organisms/WorkoutsCalender/desktop/types'
import WorkoutsCard from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutsCard.vue'

interface IData {
  now: string
  focus: string
  selectedWorkouts: FormatedWorkouts | null
}

export default Vue.extend({
  name: 'DesktopWorkoutsCalender',
  components: {
    WorkoutsCard
  },
  props: {
    workoutsList: Array as PropType<WorkoutsModel[] | undefined>,
    bodyPartsList: Array as PropType<BodyPartsModel[] | undefined>
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
    formatedBodypartsList(): FormatedBodyparts[] {
      if (!this.bodyPartsList) return []
      return this.bodyPartsList.map((v, i) => {
        return {
          text: v.name,
          value: v.id
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
    },
    updateRange({ start }) {
      console.log(start)
    }
  }
})
</script>
