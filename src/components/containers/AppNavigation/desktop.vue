<template>
  <div>
    <v-navigation-drawer fixed app>
      <app-navigation :list="list" :userInfo="userInfo" />
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import AppNavigation, {
  INavigationItem,
  IUserInfo
} from '@/components/organisms/AppNavigation/index.ts'
interface IData {
  list: INavigationItem[]
  userInfo: IUserInfo
}
export default Vue.extend({
  components: { AppNavigation },
  data(): IData {
    return {
      list: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      userInfo: {
        icon: 'https://randomuser.me/api/portraits/men/85.jpg',
        name: 'John Leider'
      }
    }
  }
})
</script>
