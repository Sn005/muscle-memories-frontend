<template>
  <v-list>
    <v-list-item v-for="(item, i) in list" :key="i" :to="item.to" nuxt exact>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
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
