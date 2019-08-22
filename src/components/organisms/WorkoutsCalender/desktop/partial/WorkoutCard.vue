<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>{{ workout.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <workout-card-exercise
        v-for="(exercise, i) in workout.exercises"
        :key="i"
        :exercise="exercise"
      />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import WorkoutCardExercise from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutCardExercise.vue'
import { IFormatedWorkout } from '@/components/organisms/WorkoutsCalender/desktop/types'

interface IData {
  now: string
  selectedEvent: IFormatedWorkout | null
}

export default Vue.extend({
  name: 'DesktopWorkoutCard',
  components: { WorkoutCardExercise },
  props: {
    workout: Object as PropType<IFormatedWorkout>
  }
})
</script>
