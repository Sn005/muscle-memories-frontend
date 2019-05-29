<template>
  <div>
    {{ fullName }}
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
  computed: {
    ...mapGetters([getterTypes.fullName])
  }
})
</script>
