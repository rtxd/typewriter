<template>
  <Toolbar @toggle-sidebar="collapsed = !collapsed" />
  <main class="main-layout">
    <Sidebar :collapsed="collapsed" />
    <RouterView />
    <!-- <router-view /> can be restored later if needed -->
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Toolbar from './components/ToolBar.vue'
import TypeWriter from './components/TypeWriter.vue'
import Sidebar from './components/SidebarDrawer.vue'

const collapsed = ref(false)
</script>

<style>
/* Remove old .status styles, as Toolbar handles header layout now */
.main-layout {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 56px); /* Subtract toolbar height */
}
main,
.main-layout {
  width: 100vw;
  min-height: 0;
}
</style>
