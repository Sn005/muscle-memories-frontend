<template>
  <div>
    <v-list>
      <v-list-group>
        <template v-slot:activator>
          <user-info />
        </template>
        <v-list-tile v-for="item in items" :key="item.title" nuxt :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import UserInfo from '../UserInfo/index.vue'
import { INavigationItem } from '../../../types'
interface IData {
  items: INavigationItem[]
}
export default Vue.extend({
  components: {
    UserInfo
  },
  data() {
    return {
      items: [
        {
          icon: 'account_circle',
          title: 'ユーザー情報変更',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'メールアドレス変更',
          to: '/inspire'
        },
        {
          icon: 'bubble_chart',
          title: 'パスワード変更',
          to: '/inspire'
        }
      ]
    }
  }
})
</script>
