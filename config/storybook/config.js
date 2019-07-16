/* eslint-disable import/no-extraneous-dependencies */
import 'vuetify/dist/vuetify.css'
import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Decorator from './Decorator.vue'

Vue.use(Vuetify)

addDecorator(story => ({
  components: { Decorator },
  template: '<decorator><story slot="story"></story></decorator>'
}))

const req = require.context('../../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
