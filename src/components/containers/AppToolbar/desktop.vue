<template>
  <v-toolbar class="app-toolbar" flat>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    title() {
      // @ts-ignore: Unreachable code error
      return this.$meta().inject().titleChunk
    }
  }
})
</script>
