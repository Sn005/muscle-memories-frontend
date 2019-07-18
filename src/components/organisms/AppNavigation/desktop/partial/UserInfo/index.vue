<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img :src="icon" />
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{ name }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script lang="ts">
import Vue from 'vue'
import { IUserInfo } from '../../../types'

export default Vue.extend({
  data(): IUserInfo {
    return {
      icon: 'https://randomuser.me/api/portraits/men/85.jpg',
      name: 'John Leider'
    }
  }
})
</script>
