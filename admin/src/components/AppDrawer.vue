<template>
  <v-navigation-drawer app v-model="drawer">
    <AppNavigation />
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'
import AppNavigation from './AppNavigation'

export default {
  components: {
    AppNavigation
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.app.drawer
      },
      set(value) {
        this.setDrawer(value)
      }
    }
  },
  methods: {
    ...mapActions({
      setDrawer: 'app/setDrawer'
    })
  }
}
</script>
