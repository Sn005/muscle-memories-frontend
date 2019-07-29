<template>
  <div>
    <app-navigation :list="list" :userInfo="userInfo" :isOpen="isOpen" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import AppNavigation, {
  INavigationItem,
  IUserInfo
} from '@/components/organisms/AppNavigation'
import { paths } from '@/store/ui/mobile/drawer'
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
  },
  computed: {
    isOpen(): boolean {
      return this.$store.getters[paths.getters.isOpen]
    }
  }
})
</script>
