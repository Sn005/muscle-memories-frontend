<template>
  <navigation-list :list="userMenuList" />
</template>
<script lang="ts">
import Vue from 'vue'
import NavigationList from '../NavigationList/index.vue'
import { INavigationItem } from '../../types'

interface IData {
  userMenuList: INavigationItem[]
}
export default Vue.extend({
  data(): IData {
    return {
      userMenuList: [
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
  },
  components: { NavigationList }
})
</script>
