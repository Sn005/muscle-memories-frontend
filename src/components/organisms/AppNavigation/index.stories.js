/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from 'storybook-addon-vue-info'

import DesktopAppNavigation from './desktop/index.vue'

storiesOf('organisms/AppNavigation', module)
  .addDecorator(withInfo)
  .add(
    'desktop',
    () => ({
      components: { DesktopAppNavigation },
      template: '<desktop-app-navigation />'
    }),
    {
      info: {
        summary: 'Summary for MyComponent'
      }
    }
  )
