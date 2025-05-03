<template>
  <div>
    <AppPageBack />
    <AppPageTitle title="Edit page"></AppPageTitle>

    <PageForm v-if="initialValues && initialValues.id" :initial-values="initialValues" @save="onUpdate" />
  </div>
</template>

<script>
import PageForm from '../../../components/forms/PageForm'
import { getOne, update } from '../services/PagesService'

export default {
  components: { PageForm },
  data() {
    return {
      initialValues: {},
    }
  },
  beforeRouteEnter(to, from, next) {
    if ('id' in to.params) {
      next()
    } else {
      next({ name: 'PagesIndex' })
    }
  },
  created() {
    const { id } = this.$route.params
    getOne(id).then(data => {
      if (data && 'id' in data) {
        this.initialValues = data
      } else {
        this.$router.push({ name: 'PagesIndex' })
      }
    })
  },
  methods: {
    async onUpdate(data) {
      try {
        const response = await update(data)
        if (response && 'id' in response) {
          this.$notify({
            title: 'Success',
            text: 'Page updated successfully',
            type: 'success',
          })
          await this.$router.push({ name: 'PagesIndex' })
        }
      } catch (error) {
        console.error('Error occurred when updating a page:', error)
      }
    }
  }
}
</script>
