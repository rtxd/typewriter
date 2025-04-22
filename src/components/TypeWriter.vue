<template>
  <p-textarea v-model="text" />
  <p-button @click="save" label="Save" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const text = ref('')

const save = async () => {
  try {
    const docRef = await addDoc(collection(db, 'documents'), {
      content: text.value,
      createdAt: Timestamp.now(),
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (error) {
    console.error('Error saving document: ', error)
  }
}
</script>
