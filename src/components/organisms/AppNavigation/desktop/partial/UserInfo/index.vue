<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img :src="userInfo.icon" />
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{ userInfo.name }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export interface IUserInfoProps {
  icon: string
  name: string
}
export default Vue.extend({
  props: {
    userInfo: Object as PropType<IUserInfoProps>
  }
})
</script>
