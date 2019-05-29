<template>
  <div>
    <input v-model="localFirstName" placeholder="input firstName" />
    <input v-model="localLastName" placeholder="input lastName" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createNamespacedHelpers } from 'Vuex'
import { namespace } from '@/store/sample/index'
import { actionTypes } from '@/store/sample/actions'
import { getterTypes } from '@/store/sample/getters'
const { mapGetters, mapActions } = createNamespacedHelpers(namespace)

export default Vue.extend({
  methods: {
    ...mapActions([
      actionTypes.changeFirstNameAsync,
      actionTypes.changeLastNameAsync
    ])
  },
  computed: {
    ...mapGetters([getterTypes.firstName, getterTypes.lastName]),
    localFirstName: {
      get(): string {
        return this.firstName
      },
      async set(value: string): Promise<void> {
        const firstName = value
        this.changeFirstNameAsync({ firstName })
      }
    },
    localLastName: {
      get(): string {
        return this.lastName
      },
      async set(value: string): Promise<void> {
        const lastName = value
        this.changeLastNameAsync({ lastName })
      }
    }
  }
})
</script>
