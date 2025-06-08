<template>
  <header class="toolbar">
    <div class="toolbar__left">
      <Button
        class="toolbar__hamburger p-button-text p-button-rounded"
        icon="pi pi-bars"
        aria-label="Toggle Sidebar"
        @click="$emit('toggle-sidebar')"
        size="large"
      />
      <span class="toolbar__title">Typewriter</span>
    </div>
    <div class="toolbar__right">
      <span class="toolbar__user-status"> User: {{ user.data?.displayName || 'Guest' }} </span>
      <Button @click="redirectToLogin"> Login </Button>
      <!-- Placeholder for settings or user menu -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

defineEmits(['toggle-sidebar'])

const { user } = useAuthStore()
const router = useRouter()

const redirectToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--toolbar-height);
  padding: 0 24px;
  background: #f5c16c;
  color: #23222a;
  border-bottom: 1px solid #e6a157;
}
.toolbar__left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.toolbar__title {
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.toolbar__right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.toolbar__hamburger {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
}
</style>
