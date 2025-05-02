<template>
  <v-app-bar app elevation="0">
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-toolbar-title>Pages creator</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      toggleDrawer: 'app/toggleDrawer'
    })
  }
}
</script>
