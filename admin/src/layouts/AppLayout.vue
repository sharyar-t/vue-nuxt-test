<template>
  <v-app>
    <AppDrawer />

    <AppBar />

    <v-main>
      <v-container>
        <v-fade-transition hide-on-leave leave-absolute>
          <RouterView />
        </v-fade-transition>
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
