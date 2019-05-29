<template>
  <div>
    {{ displayCount }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { namespace } from '@/store/sample/index'
import { actionTypes } from '@/store/sample/actions'
import { getterTypes } from '@/store/sample/getters'

export default Vue.extend({
  name: 'Sample',
  methods: {
    async changeFirstName() {
      this.$store.dispatch(namespace + actionTypes.changeFirstNameAsync)
    }
  },
  computed: {
    localFistName(): string {
      return this.$store.getters[namespace + getterTypes.firstName]
    }
  }
})
</script>
