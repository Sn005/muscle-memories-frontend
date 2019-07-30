<template>
  <div>
    <app-navigation :list="list" :userInfo="userInfo" :isOpen.sync="isOpen" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {
  INavigationItem,
  IUserInfo
} from '@/components/organisms/AppNavigation/index.ts'
import AppNavigation from '@/components/organisms/AppNavigation/mobile.vue'
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
  methods: {
    updateIsOpen() {
      console.log('test')
    }
  },
  computed: {
    isOpen: {
      get(): boolean {
        return this.$store.getters[paths.getters.isOpen]
      },
      set(): void {
        console.log(this.isOpen)
        // this.$store.dispatch(paths.actions.toggleDrawer)
        // this.$store.getters[paths.getters.isOpen]
      }
    }
  }
})
</script>
