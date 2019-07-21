import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import UserArea from './index.vue'

storiesOf('organisms/AppNavigation/partial/UserAreaLayout', module)
  .addDecorator(withInfo)
  .add('ユーザー関連表示エリアレイアウト', () => ({
    components: { UserArea },
    template: `
    <user-area>
      <template v-slot="userInfo" :style="{ minHeight:'50px', backgroundColor: '#ddd'}}">
        ユーザー情報
      </template>
      <template v-slot="center" :style="{ minHeight:'50px', backgroundColor: '#ccc'}">
        ユーザーメニュー
      </template>
    </user-area>
`
  }))
