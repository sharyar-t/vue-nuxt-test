<template>
  <v-app>
    <AppDrawer />

    <AppBar />

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar'
import AppDrawer from '../components/AppDrawer'

export default {
  components: {
    AppBar,
    AppDrawer
  }
}
</script>
