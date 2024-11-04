// src/pages/Login.js
import React from 'react';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login bem-sucedido
                console.log("Usuário logado:", userCredential.user);
            })
            .catch((error) => {
                console.error("Erro ao fazer login:", error);
            });
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
