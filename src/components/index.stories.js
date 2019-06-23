/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from './MyButton.vue'
import TsButton from './TsButton.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with text ts', () => ({
    components: { TsButton },
    template: '<ts-button @click="action">Hello Button</ts-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX ts', () => ({
    components: { TsButton },
    render() {
      return <ts-button onClick={this.action}>With JSX</ts-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji ts', () => ({
    components: { TsButton },
    template: '<ts-button @click="action">😀 😎 👍 💯</ts-button>',
    methods: { action: action('clicked') }
  }))
