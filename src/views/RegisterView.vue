<template>
  <div>
    <h1>Create Account</h1>
    <div v-if="error">{{ error }}</div>
    <p-button
      label="Sign up with Google"
      icon="pi pi-google"
      @click="registerWithGoogle"
      :loading="loading"
    />
    <div>
      <span>Already have an account?</span>
      <router-link to="/login">Sign in</router-link>
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

const registerWithGoogle = async () => {
  loading.value = true
  error.value = null

  try {
    await authStore.loginWithGoogle()
    router.push('/dashboard')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
