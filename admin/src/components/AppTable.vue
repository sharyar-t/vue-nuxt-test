<template>
  <v-data-table v-bind="$attrs" v-on="$listeners">
    <template #top="{ item }">
      <slot name="top" :item="item"></slot>
    </template>
    <template #[`item.slug`]="{ item }">
      <slot name="slug" :item="item"></slot>
    </template>
    <template #[`item.keywords`]="{ item }">
      <slot name="keywords" :item="item"></slot>
    </template>
    <template #[`item.actions`]="{ item }">
      <slot name="actions" :item="item"></slot>
    </template>
  </v-data-table>
</template>

<script>
export default {}
</script>
