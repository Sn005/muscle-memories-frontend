<template>
  <v-app class="decorator">
    <v-container fluid grid-list-xl>
      <v-layout warap align-center>
        <v-flex xs12>
          <slot name="story"></slot>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'Decorator'
}
</script>
<style scoped>
.decorator p {
  margin: 0;
}
</style>
