<template>
  <v-list nav dense>
    <v-list-item
      v-for="link in links"
      :key="link.title"
      :to="link.to"
      color="primary"
      link
    >
      <v-list-item-icon>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Pages',
          icon: 'mdi-file-document-outline',
          to: {
            name: 'PagesIndex'
          }
        }
      ]
    }
  }
}
</script>
