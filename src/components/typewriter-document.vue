<template>
  <p-textarea v-model="text" />
  <p-button @click="save" label="Save" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const save = () => {
  console.log(text.value)
}
</script>
