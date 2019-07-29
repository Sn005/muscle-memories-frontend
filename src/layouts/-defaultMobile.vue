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
    <v-navigation-drawer temporary fixed>
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
