<template>
  <div>
    <v-list>
      <v-list-group>
        <template v-slot:activator>
          <slot name="userInfo">ユーザー情報が入ります</slot>
        </template>
        <slot name="userMenu">ユーザーメニューが入ります</slot>
      </v-list-group>
    </v-list>
    <v-divider></v-divider>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>
