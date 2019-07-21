<template>
  <v-list>
    <v-list-tile v-for="(item, i) in list" :key="i" :to="item.to" nuxt exact>
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title" />
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { INavigationItem } from '../../types'
export default Vue.extend({
  props: {
    list: Array as PropType<INavigationItem[]>
  }
})
</script>
