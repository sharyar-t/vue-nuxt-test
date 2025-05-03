<template>
  <div>
    <AppPageBack />
    <AppPageTitle title="Create new page"></AppPageTitle>

    <PageForm @save="onSave" />
  </div>
</template>

<script>
import PageForm from '../../../components/forms/PageForm'
import { create } from '../services/PagesService'

export default {
  components: { PageForm },
  methods: {
    async onSave(data) {
      try {
        const response = await create(data)
        if (response && 'id' in response) {
          this.$notify({
            title: 'Success',
            text: 'Page created successfully',
            type: 'success',
          })
          await this.$router.push({ name: 'PagesIndex' })
        }
      } catch (error) {
        console.error('Error occurred when creating a page:', error)
      }
    }
  }
}
</script>
