/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import WorkoutCardExercise from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutCardExercise.vue'
import { workouts as mockWorkouts } from '@/api/http/mocks/entities/Workouts'

storiesOf(
  'organisms/WorkoutsCalender/desktop/partial/WorkoutCardExercise',
  module
)
  .addDecorator(withInfo)
  .add('WorkoutCardExercise', () => ({
    components: { WorkoutCardExercise },
    data() {
      const mockExercise = mockWorkouts[0].exercises[0]
      return {
        mockExercise
      }
    },
    template: '<workout-card-exercise :exercise="mockExercise"/>'
  }))
