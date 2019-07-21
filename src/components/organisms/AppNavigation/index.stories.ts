/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

import AppNavigation from './index.vue'
import { INavigationItem, IUserInfo } from './types'

storiesOf('organisms/AppNavigation', module)
  .addDecorator(withInfo)
  .add(
    'desktddop',
    () => ({
      components: { AppNavigation },
      data() {
        const list: INavigationItem[] = [
          {
            icon: 'apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'bubble_chart',
            title: 'Inspire',
            to: '/inspire'
          }
        ]
        const userInfo: IUserInfo = {
          icon: 'https://randomuser.me/api/portraits/men/85.jpg',
          name: 'John Leider'
        }
        return {
          list,
          userInfo
        }
      },
      template: '<app-navigation :list="list" :userInfo="userInfo"/>'
    }),
    {
      info: {
        summary: 'Summary for MyComponent'
      }
    }
  )
