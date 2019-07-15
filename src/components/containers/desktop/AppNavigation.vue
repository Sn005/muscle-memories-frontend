<template>
  <div @mouseover.stop="openNavigation" @mouseleave.stop="closeNavigation">
    <v-navigation-drawer drawer fixed app :miniVariant="miniVariant">
      <!-- <div @click="mouseover">hoge</div> -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      miniVariant: true,
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
      title: 'Vuetify.js'
    }
  },
  methods: {
    openNavigation() {
      this.miniVariant = false
    },
    closeNavigation() {
      this.miniVariant = true
    }
  }
}
</script>
