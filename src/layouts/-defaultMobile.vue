<template>
  <v-app>
    <app-navigation />
    <app-toolbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
      <app-footer />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppNavigation from '@/components/containers/AppNavigation'
import AppToolbar from '@/components/containers/AppToolbar'
import AppFooter from '@/components/containers/AppFooter'
export default Vue.extend({
  components: {
    AppNavigation,
    AppToolbar,
    AppFooter
  }
})
</script>
