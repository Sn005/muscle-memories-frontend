<template>
  <v-toolbar :clipped-left="clipped" flat>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-side-icon @click="drawer = !drawer" />
  </v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue'
import { generateFormattedTitle } from './utils'

export default Vue.extend({
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
