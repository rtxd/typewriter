<template>
  <header>
    <div class="status">
      <div>User Status</div>
      <div>Current: {{ user.data?.displayName }}</div>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { useAuthStore } from './stores/auth'

const { user } = useAuthStore()
</script>

<style>
.status {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 4rem;
  right: 4rem;
}
</style>
