/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import WorkoutsCard from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutsCard.vue'
import { workouts as mockWorkouts } from '@/api/http/mocks/entities/Workouts'
import { FormatedWorkouts } from '@/components/organisms/WorkoutsCalender/desktop/types'

storiesOf('organisms/WorkoutsCalender/desktop/partial/WorkoutsCard', module)
  .addDecorator(withInfo)
  .add('WorkoutCard', () => ({
    components: { WorkoutsCard },
    data() {
      const mockWorkout = mockWorkouts[0]
      const formatedMockWorkouts: FormatedWorkouts = {
        id: mockWorkout.id,
        name: mockWorkout.title,
        start: moment(mockWorkout.trainingDate).format('YYYY-MM-DD'),
        exerciseList: mockWorkout.exerciseList
      }
      return {
        formatedMockWorkouts
      }
    },
    template: '<workouts-card :workouts="formatedMockWorkouts"/>'
  }))
