<script setup lang="ts">
import { ArrowLeftToLine } from 'lucide-vue-next'
import {
  useSidebar,

  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '~/components/ui/sidebar'

interface Props {
  links: {
    id: string
    title: string
    slug: string
  }[]
}

defineProps<Props>()

const route = useRoute()
const { toggleSidebar } = useSidebar()
</script>

<template>
  <Sidebar class="rounded-lg">
    <SidebarHeader class="p-5 text-xl">
      Nuxt Pages
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem v-for="link in links" :key="link.id">
            <SidebarMenuButton as-child :is-active="link.slug === route.params.slug">
              <RouterLink :to="link.slug">
                {{ link.title }}
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="border-t border-neutral-200">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton @click="toggleSidebar">
            <ArrowLeftToLine class="size-4" />
            Minimize Sidebar
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
