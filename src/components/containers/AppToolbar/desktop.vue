<template>
  <v-toolbar class="app-toolbar" flat>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue'
import { generateFormattedTitle } from './utils'

export default Vue.extend({
  name: 'DesktopAppToolbar',
  computed: {
    title() {
      // @ts-ignore: Unreachable code error
      return generateFormattedTitle(this.$meta().inject().titleChunk)
    }
  }
})
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
