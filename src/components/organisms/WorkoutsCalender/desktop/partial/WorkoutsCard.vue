<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>{{ workouts.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <workouts-card-exercise
        v-for="(exercise, i) in workouts.exerciseList"
        :key="i"
        :exercise="exercise"
      />
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import WorkoutsCardExercise from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutsCardExercise.vue'
import { IFormatedWorkouts } from '@/components/organisms/WorkoutsCalender/desktop/types'

export default Vue.extend({
  name: 'DesktopWorkoutsCard',
  components: { WorkoutsCardExercise },
  props: {
    workouts: Object as PropType<IFormatedWorkouts>
  }
})
</script>
