<template>
  <v-container>
    <p class="ml-n3">{{ exercise.name }}</p>
    <v-layout row wrap class="mb-4">
      <v-flex v-for="(set, i) in exercise.setList" :key="i" xs6 class="mb-1">
        {{ set.weight }}kg × {{ set.reps }}
      </v-flex>
    </v-layout>
    <p v-if="exercise.memo">{{ exercise.memo }}</p>
    <v-divider />
  </v-container>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { WorkoutsExercise } from '@/interfaces/api/http/Workouts'

interface IData {
  now: string
  exercise: WorkoutsExercise
}

export default Vue.extend({
  name: 'DesktopWorkoutsCardExercise',
  props: {
    exercise: Object as PropType<WorkoutsExercise>
  }
})
</script>
