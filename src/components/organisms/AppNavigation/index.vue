<template>
  <div>
    <user-area-layout>
      <template v-slot:userInfo>
        <user-info :userInfo="userInfo" />
      </template>
      <template v-slot:userMenu>
        <user-menu />
      </template>
    </user-area-layout>
    <navigation-list :list="list" />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { INavigationItem, IUserInfo } from './types'

import UserInfo from './partial/UserInfo/index.vue'
import UserMenu from './partial/UserMenu/index.vue'
import UserAreaLayout from './partial/UserAreaLayout/index.vue'
import NavigationList from './partial/NavigationList/index.vue'

export default Vue.extend({
  name: 'AppNavigation',
  components: {
    UserInfo,
    UserMenu,
    UserAreaLayout,
    NavigationList
  },
  props: {
    list: Array as PropType<INavigationItem[]>,
    userInfo: Object as PropType<IUserInfo>
  }
})
</script>
