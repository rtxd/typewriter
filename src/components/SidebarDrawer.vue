<template>
  <Transition name="sidebar-slide">
    <aside v-if="!props.collapsed" class="sidebar" key="sidebar">
      <div class="sidebar__header">
        <Button
          v-if="!props.collapsed"
          class="sidebar__new-doc p-button-rounded p-button-primary"
          icon="pi pi-plus"
          aria-label="New Document"
        />
      </div>
      <div v-if="!props.collapsed" class="sidebar__list">
        <div class="sidebar__placeholder">No documents yet</div>
      </div>
    </aside>
    <aside v-else class="sidebar__collapse"></aside>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  collapsed: Boolean,
})
const emit = defineEmits(['toggle-sidebar'])
</script>

<style scoped>
.sidebar {
  width: 240px;
  min-width: 48px;
  max-width: 320px;
  height: 100%;
  background: var(--surface-card);
  border-right: 2px solid var(--surface-ground);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  transform-origin: left;
}
.sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px 8px 12px;
  gap: 8px;
}
.sidebar__collapse {
  position: fixed;
  left: 0;
  top: var(--toolbar-height);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 16px 12px;
  background: var(--surface-card);
  border-right: 2px solid var(--surface-ground);
  z-index: 1;
}
.sidebar__collapse:hover {
  color: var(--primary-color);
}
.sidebar__new-doc {
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
}
.sidebar__list {
  flex: 1;
  padding: 12px;
  overflow-y: auto;
}
.sidebar__placeholder {
  color: #808080;
  font-style: italic;
  text-align: center;
  margin-top: 40px;
}
.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
