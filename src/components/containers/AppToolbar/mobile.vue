<template>
  <v-toolbar :clipped-left="clipped" flat>
    <v-toolbar-side-icon @click="drawer = !drawer" />
    <v-spacer />
    <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>
