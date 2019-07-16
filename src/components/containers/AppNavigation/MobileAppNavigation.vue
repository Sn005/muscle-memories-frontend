<template>
  <v-navigation-drawer :drawer="drawer" fixed temporary>
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
</template>
<script lang="ts">
import Vue from 'vue'
interface IItem {
  icon: string
  title: string
  to: string
}
interface IData {
  drawer: boolean
  items: IItem[]
  title: string
}
export default Vue.extend({
  data() {
    return {
      drawer: true,
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
  }
})
</script>
