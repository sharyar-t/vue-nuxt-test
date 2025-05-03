<template>
  <div v-if="page" class="mt-4">
    <div v-html="page.content" class="prose lg:prose-xl"></div>
  </div>
  <div v-else>
    <p>Page not found</p>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: page } = await useFetch(`/api/${route.params.slug}`);

useHead({
  title: page.value.title,
  meta: [
    { name: 'keywords', content: page.value.keywords.join(', ') },
  ],
})
</script>
