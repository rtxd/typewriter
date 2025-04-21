// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQbUAVL3NWAkwsL9svJ1AHpiJgTokk6Kw',
  authDomain: 'typewriter-e094b.firebaseapp.com',
  projectId: 'typewriter-e094b',
  storageBucket: 'typewriter-e094b.firebasestorage.app',
  messagingSenderId: '248295082280',
  appId: '1:248295082280:web:761e402685aafe17d2281d',
  measurementId: 'G-4LZYLZJ9LP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { app, analytics, db, auth }
