<template>
  <v-layout column justify-center align-center>
    test
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline"
          >Welcome to the Vuetify + Nuxt.js template</v-card-title
        >
        <v-card-text>
          <hello-world msg="hello" />
          <sample />
          <input-name />
          <show-name />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import HelloWorld from '~/components/HelloWorld.vue'
import InputName from '@/components/InputName.vue'
import ShowName from '@/components/ShowName.vue'
import Sample from '@/components/sample.vue'
import DeviceHandler from '@/components/atoms/factory-component/DeviceHandler'

export default {
  components: {
    Logo,
    VuetifyLogo,
    HelloWorld,
    InputName,
    ShowName,
    Sample
  },
  head() {
    return {
      title: 'hoge'
    }
  }
}
</script>
