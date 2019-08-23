/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import WorkoutsCardExercise from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutsCardExercise.vue'
import { workouts as mockWorkouts } from '@/api/http/mocks/entities/Workouts'

storiesOf(
  'organisms/WorkoutsCalender/desktop/partial/WorkoutsCardExercise',
  module
)
  .addDecorator(withInfo)
  .add('WorkoutsCardExercise', () => ({
    components: { WorkoutsCardExercise },
    data() {
      const mockExercise = mockWorkouts[0].exerciseList[0]
      return {
        mockExercise
      }
    },
    template: '<workouts-card-exercise :exercise="mockExercise"/>'
  }))
