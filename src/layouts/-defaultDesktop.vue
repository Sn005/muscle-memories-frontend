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

<script>
import AppNavigation from '@/components/containers/desktop/AppNavigation'
import AppToolbar from '@/components/containers/desktop/AppToolbar'
import AppFooter from '@/components/containers/desktop/AppFooter'
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
