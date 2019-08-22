/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import WorkoutCard from '@/components/organisms/WorkoutsCalender/desktop/partial/WorkoutCard.vue'
import { workouts as mockWorkouts } from '@/api/http/mocks/entities/Workouts'
import { IFormatedWorkout } from '@/components/organisms/WorkoutsCalender/desktop/types'

storiesOf('organisms/WorkoutsCalender/desktop/partial/WorkoutCard', module)
  .addDecorator(withInfo)
  .add('WorkoutCard', () => ({
    components: { WorkoutCard },
    data() {
      const mockWorkout = mockWorkouts[0]
      const formatedMockWorkout: IFormatedWorkout = {
        id: mockWorkout.id,
        name: mockWorkout.title,
        start: moment(mockWorkout.trainingDate).format('YYYY-MM-DD'),
        exercises: mockWorkout.exercises
      }
      return {
        formatedMockWorkout
      }
    },
    template: '<workout-card :workout="formatedMockWorkout"/>'
  }))
