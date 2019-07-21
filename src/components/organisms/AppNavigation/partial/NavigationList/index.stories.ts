import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import NavigationList from './index.vue'
import { INavigationItem } from '../../types'

storiesOf('organisms/AppNavigation/partial/NavigationList', module)
  .addDecorator(withInfo)
  .add('ナビゲーションリスト', () => ({
    components: { NavigationList },
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
      return {
        list
      }
    },
    template: `
    <navigation-list :list="list" />
    `
  }))
