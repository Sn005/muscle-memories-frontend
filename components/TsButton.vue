<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component<TsButton>({})
export default class TsButton extends Vue {
  @Emit('click')
  onClick() {
    return 'clicked'
  }
}
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
