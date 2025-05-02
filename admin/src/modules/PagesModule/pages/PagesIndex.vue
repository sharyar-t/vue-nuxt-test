<template>
  <div>
    <AppPageTitle title="Pages" subtitle="Create, update or delete pages">
      <template #actions>
        <AppButton color="primary" :to="{ name: 'PagesCreate' }">
          <AppIcon left>mdi-plus-circle</AppIcon>
          <span>Create</span>
        </AppButton>
      </template>
    </AppPageTitle>

    <AppTable v-model="selects" :items="data" :headers="headers" show-select @click:row="showPage">
      <template #slug="{ item }">
        <code class="font-weight-medium">{{ item.slug }}</code>
      </template>
      <template #keywords="{ item }">
        <AppChip
          v-for="(keyword, index) in item.keywords"
          :key="index"
          color="primary"
          outlined
          small
          class="mr-2"
        >
          {{ keyword }}
        </AppChip>
      </template>
      <template #actions="{ item }">
        <AppIcon
          color="primary"
          class="mr-4"
          @click.stop="editPage(item.id)"
        >
          mdi-pencil
        </AppIcon>
        <AppIcon
          color="error"
          @click.stop="deletePage(item.id)"
        >
          mdi-delete
        </AppIcon>
      </template>
    </AppTable>
  </div>
</template>

<script>
import { getAll } from '../services/PagesService'

export default {
  data() {
    return {
      selects: [],
      data: [],
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Slug',
          value: 'slug'
        },
        {
          text: 'Keywords',
          value: 'keywords',
          align: 'center',
        },
        {
          text: 'Actions',
          value: 'actions',
          align: 'center'
        }
      ]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getAll().then((response) => {
        this.data = response
      })
    },
    editPage(id) {
      this.$router.push({ name: 'PagesEdit', params: { id } })
    },
    deletePage(id) {
      console.log('deleting...', id)
    },
    showPage(item) {
      console.log('showing...', item)
    }
  }
}
</script>
