<template>
  <v-list-item dense>
    <v-list-item-avatar>
      <img :src="userInfo.icon" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ userInfo.name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
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
