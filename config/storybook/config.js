/* eslint-disable import/no-extraneous-dependencies */
import 'vuetify/dist/vuetify.css'
import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Decorator from './Decorator.vue'

Vue.use(Vuetify)

const vuetifyConfig = new Vuetify({
  theme: {
    dark: false
  }
})

addDecorator(story => ({
  vuetify: vuetifyConfig,
  components: { Decorator },
  template: '<decorator><story slot="story"></story></decorator>'
}))

const req = require.context('../../src/components', true, /.stories*.(js|ts)$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
