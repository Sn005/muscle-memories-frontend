<template>
  <v-footer absolute>
    <span>{{ appName }}&copy; 2019</span>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue'
import { appName } from '@/config/app.ts'
export default Vue.extend({
  data() {
    return {
      appName
    }
  }
})
</script>
