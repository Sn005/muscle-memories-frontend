import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import UserInfo, { IUserInfoProps } from './index.vue'

storiesOf('organisms/AppNavigation/partial/UserInfo', module)
  .addDecorator(withInfo)
  .add('ユーザー情報', () => ({
    components: { UserInfo },
    data() {
      const userInfo: IUserInfoProps = {
        icon: 'https://randomuser.me/api/portraits/men/85.jpg',
        name: 'John Leider'
      }
      return {
        userInfo
      }
    },
    template: `
    <user-info :userInfo="userInfo" />
    `
  }))
