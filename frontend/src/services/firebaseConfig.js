// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importando Firestore
import { getAuth } from "firebase/auth"; // Importando Auth

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCjQ4-VMpKz5rMXwiBvvRYdeJGVCUS30SU",
  authDomain: "projeto-barbearia-49fc6.firebaseapp.com",
  projectId: "projeto-barbearia-49fc6",
  storageBucket: "projeto-barbearia-49fc6.firebasestorage.app",
  messagingSenderId: "847828199008",
  appId: "1:847828199008:web:62c9fafda3fbe0b0228505"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firestore e a autenticação
const db = getFirestore(app);
const auth = getAuth(app);

// Exportar o Firestore e a autenticação
export { db, auth };
