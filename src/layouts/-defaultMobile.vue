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
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
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

<script>
import AppNavigation from '@/components/containers/mobile/AppNavigation'
import AppToolbar from '@/components/containers/mobile/AppToolbar'
import AppFooter from '@/components/containers/mobile/AppFooter'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: {
    AppNavigation,
    AppToolbar,
    AppFooter
  }
}
</script>
