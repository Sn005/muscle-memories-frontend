<template>
  <v-toolbar flat>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-side-icon @click="toggleDrawer" />
  </v-toolbar>
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
