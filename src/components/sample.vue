<template>
  <div>
    {{ localFistName }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { namespace } from '@/store/sample/index'
import { actionTypes } from '@/store/sample/actions'
import { getterTypes } from '@/store/sample/getters'
import RepositoryFactory from '@/api/http/repositories/RepositoryFactory'
const PostsRepository = RepositoryFactory.get('posts')

export default Vue.extend({
  name: 'Sample',
  // async mounted() {
  //   const result = await PostsRepository.all()
  //   console.log(result[0].name)
  // },
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
