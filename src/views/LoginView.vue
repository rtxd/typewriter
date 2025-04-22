<template>
  <div>
    <h1>Sign In</h1>
    <div v-if="error">{{ error }}</div>
    <p-button
      label="Sign in with Google"
      icon="pi pi-google"
      @click="signinWithGoogle"
      :loading="loading"
    />
    <div>
      <span>Don't have an account?</span>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const error = ref<string | null>(null)
const loading = ref(false)

authStore.init()

const signinWithGoogle = async () => {
  loading.value = true
  error.value = null

  try {
    await authStore.loginWithGoogle()
    router.push('/dashboard')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Google login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
