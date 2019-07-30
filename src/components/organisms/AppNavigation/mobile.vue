<template>
  <div>
    <v-btn icon @click.stop="toggleTemp">
      <v-icon>web</v-icon>
    </v-btn>

    <v-navigation-drawer v-model="localIsOpen" fixed app temporary>
      <user-area-layout
        >localIsOpen
        <template v-slot:userInfo>
          <user-info :userInfo="userInfo" />
        </template>
        <template v-slot:userMenu>
          <user-menu />
        </template>
      </user-area-layout>
      <navigation-list :list="list" />
    </v-navigation-drawer>
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
  data() {
    return {
      temp: false
    }
  },
  components: {
    UserInfo,
    UserMenu,
    UserAreaLayout,
    NavigationList
  },
  methods: {
    toggleTemp() {
      console.log(this.temp)
      this.temp = !this.temp
    }
  },
  props: {
    list: Array as PropType<INavigationItem[]>,
    userInfo: Object as PropType<IUserInfo>,
    isOpen: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    localIsOpen: {
      get(): boolean {
        return this.isOpen
      },
      set(): void {
        this.$emit('update:isOpen', this.isOpen)
      }
    }
  }
})
</script>
