<template>
  <v-navigation-drawer drawer fixed app>
    <user-menu />
    <v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" nuxt exact>
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
import { INavigationItem } from '../types'
import { navigationItem } from '../constants'
import { UserMenu } from './partial'

interface IData {
  items: INavigationItem[]
}
export default Vue.extend({
  components: {
    UserMenu
  },
  data(): IData {
    return {
      items: navigationItem
    }
  }
})
</script>
