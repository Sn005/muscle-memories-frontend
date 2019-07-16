<template>
  <v-toolbar class="app-toolbar" flat>
    <v-toolbar-side-icon @click="drawer = !drawer" />
    <v-spacer />
    <v-btn icon @click.stop="rightDrawer = !rightDrawer">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>
