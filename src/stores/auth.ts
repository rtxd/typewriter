import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  type User as FirebaseUser,
} from 'firebase/auth'
import { auth } from '@/firebase'

interface User {
  loggedIn: boolean
  data: FirebaseUser | null
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>({
    loggedIn: false,
    data: null,
  })

  async function register(email: string, password: string) {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password)
      user.value.data = firebaseUser
      user.value.loggedIn = true
      return firebaseUser
    } catch (error) {
      throw error
    }
  }

  async function login(email: string, password: string) {
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password)
      user.value.data = firebaseUser
      user.value.loggedIn = true
      return firebaseUser
    } catch (error) {
      throw error
    }
  }

  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      const { user: firebaseUser } = await signInWithPopup(auth, provider)
      user.value.data = firebaseUser
      user.value.loggedIn = true
      return firebaseUser
    } catch (error) {
      throw error
    }
  }

  async function logout() {
    try {
      await signOut(auth)
      user.value.data = null
      user.value.loggedIn = false
    } catch (error) {
      throw error
    }
  }

  function init() {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        user.value.loggedIn = true
        user.value.data = firebaseUser
      } else {
        user.value.loggedIn = false
        user.value.data = null
      }
    })
  }

  return {
    user,
    register,
    login,
    loginWithGoogle,
    logout,
    init,
  }
})
