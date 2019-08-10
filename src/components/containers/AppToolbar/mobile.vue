<template>
  <v-app-bar app fixed>
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-spacer />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue'
import { paths } from '@/store/ui/mobile/drawer'
import { generateFormattedTitle } from './utils'

export default Vue.extend({
  name: 'MobileAppToolbar',
  computed: {
    title(): string {
      // @ts-ignore: Unreachable code error
      return generateFormattedTitle(this.$meta().inject().titleChunk)
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch(paths.actions.toggleDrawer)
    }
  }
})
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
