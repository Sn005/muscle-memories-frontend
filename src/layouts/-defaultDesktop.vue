<template>
  <v-app>
    <app-navigation />
    <v-content>
      <app-toolbar />
      <v-container>
        <nuxt />
      </v-container>
      <app-footer />>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppNavigation from '@/components/containers/desktop/AppNavigation.vue'
import AppToolbar from '@/components/containers/desktop/AppToolbar.vue'
import AppFooter from '@/components/containers/desktop/AppFooter.vue'
export default Vue.extend({
  components: {
    AppNavigation,
    AppToolbar,
    AppFooter
  }
})
</script>
