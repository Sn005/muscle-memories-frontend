import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import UserMenu from './index.vue'
import { INavigationItem } from '../../types'

storiesOf('organisms/AppNavigation/partial/UserMenu', module)
  .addDecorator(withInfo)
  .add('ユーザーメニュー', () => ({
    components: { UserMenu },
    template: `
    <user-menu/>`
  }))
