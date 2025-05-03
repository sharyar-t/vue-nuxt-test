<script setup lang="ts">
import { SidebarProvider, SidebarInset } from "~/components/ui/sidebar";
import { AppSidebar, AppHeader } from "~/components/app";

const links = ref([]);

const { data: pages } = await useFetch('/api/pages');

links.value = pages.value || [];
</script>

<template>
  <SidebarProvider>
    <AppSidebar :links="links" />
    <SidebarInset>
      <AppHeader />
      <main class="container mx-auto p-6">
        <NuxtPage />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
