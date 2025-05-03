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
      <template #top>
        <v-dialog v-model="deleteDialog" max-width="510px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this page?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deletePageConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template #slug="{ item }">
        <code class="font-weight-medium">{{ item.slug }}</code>
      </template>
      <template #keywords="{ item }">
        <div v-if="item.keywords?.length > 2">
          <AppChip
            color="primary"
            outlined
            small
            class="mr-2"
          >
            {{ item.keywords[0] }}
          </AppChip>
          <AppChip
            color="primary"
            outlined
            small
            class="mr-2"
          >
            {{ item.keywords[1] }}
          </AppChip>
          <AppChip
            color="primary"
            outlined
            small
          >
            +{{ item.keywords.length - 2 }}
          </AppChip>
        </div>
        <div v-else>
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
        </div>
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
import { getAll, remove } from '../services/PagesService'

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
          cellClass: 'text-no-wrap',
          sortable: false,
        },
        {
          text: 'Actions',
          value: 'actions',
          align: 'center',
          cellClass: 'text-no-wrap',
          sortable: false
        }
      ],
      deleteId: null,
      deleteDialog: false,
      currentPage: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      console.log('Fetching data for page:', this.currentPage)
      getAll({ page: this.currentPage }).then((response) => {
        this.data = response
      })
    },
    editPage(id) {
      this.$router.push({ name: 'PagesEdit', params: { id } })
    },
    deletePage(id) {
      this.deleteId = id
      this.deleteDialog = true
    },
    closeDelete() {
      this.deleteId = null
      this.deleteDialog = false
    },
    deletePageConfirm() {
      try {
        remove(this.deleteId).then((response) => {
          if (response && 'id' in response) {
            this.$notify({
              title: 'Success',
              text: 'Page deleted successfully',
              type: 'success',
            })
            this.currentPage = 0
            this.getData()
          }
        })
      } catch (error) {
        console.error('Error occurred when deleting a page:', error)
      } finally {
        this.closeDelete()
      }
    },
    showPage(item) {
      console.log('showing...', item)
    }
  }
}
</script>
