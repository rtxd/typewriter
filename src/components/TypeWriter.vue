<template>
  <div class="editor-outer">
    <div class="editor-container">
      <textarea
        v-model="text"
        class="editor-textarea"
        spellcheck="false"
        placeholder="Start writing..."
      />
    </div>
  </div>
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

<style scoped>
.editor-outer {
  flex: 1;
  height: 100%;
  display: flex;
}
.editor-container {
  max-width: 70ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: var(--surface-ground);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  box-sizing: border-box;
}
.editor-textarea {
  width: 100%;
  height: 100vh;
  min-height: 400px;
  background: var(--surface-ground);
  color: var(--text-color);
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.1rem;
  border: none;
  outline: none;
  resize: none;
  padding: 24px;
  box-sizing: border-box;
  line-height: 1.5;
  border-radius: 0;
  box-shadow: 0 0 0 1px var(--surface-card);
  transition: box-shadow 0.2s;
  margin: 0 auto;
}
.editor-textarea:focus {
  box-shadow: none;
}
</style>
