<template>
  <v-form ref="form" @submit.prevent="onSave">
    <AppInput label="Title" v-model="title" :rules="[rules.required]" />
    <AppInput label="URL Slug" v-model="slug" :rules="[rules.required]" />
    <AppCombobox
      label="Meta Keywords"
      v-model="keywords"
      multiple
      chips
      small-chips
      hint="hit enter"
    />
    <AppTiptap v-model="content" class="mb-4" />
    <AppButton color="primary" @click="onSave">
      <AppIcon left>mdi-file-document-outline</AppIcon>
      <span>{{ buttonTitle }}</span>
    </AppButton>
  </v-form>
</template>

<script>
import slugify from 'slugify'

export default {
  name: 'PageForm',
  props: ['initialValues'],
  data() {
    return {
      id: null,
      title: null,
      slug: null,
      keywords: null,
      content: null,

      rules: {
        required: (v) => !!v || 'This field is required'
      }
    }
  },
  created() {
    if (this.initialValues) {
      this.id = this.initialValues.id
      this.title = this.initialValues.title
      this.slug = this.initialValues.slug
      this.keywords = this.initialValues.keywords
      this.content = this.initialValues.content
    }
  },
  methods: {
    async onSave() {
      if (!this.$refs.form.validate()) return

      const data = {
        title: this.title,
        slug: this.slug,
        keywords: this.keywords,
        content: this.content
      }

      if (this.initialValues) {
        data.id = this.id
      }

      this.$emit('save', data)
    }
  },
  watch: {
    title(newTitle) {
      if (newTitle) {
        this.slug = slugify(newTitle, {
          lower: true,
          strict: true,
        })
      }
    }
  },
  computed: {
    buttonTitle() {
      return this.initialValues ? 'Update' : 'Save'
    }
  }
}
</script>
