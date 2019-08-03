<template>
  <div>
    <v-btn icon @click.stop="toggleTemp">
      <v-icon>web</v-icon>
    </v-btn>

    <v-navigation-drawer v-model="isOpen" fixed app temporary>
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
    toggleTemp() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    isOpen: {
      get(): boolean {
        return this.$store.getters[paths.getters.isOpen]
      },
      set(val): void {
        this.$store.dispatch(paths.actions.setDrawer, val)
      }
    }
  }
})
</script>
