"use client"; // Ceci est nécessaire pour indiquer que ce composant doit s'exécuter côté client

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Utiliser 'next/navigation' dans Next.js 13+ si vous avez des erreurs

const SignIn = () => {
    const [form, setForm] = useState({
        mail: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isClient, setIsClient] = useState(false); // Nouvel état pour vérifier si le client est monté
    const router = useRouter();

    // Vérification du montage côté client
    useEffect(() => {
        setIsClient(true); // Le client est monté
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.password.length < 8) {
            setError('Le mot de passe doit contenir au moins 8 caractères.');
            return;
        }

        const authDTO = {
            mail: form.mail,
            password: form.password,
        };

        try {
            const res = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(authDTO),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText || 'Connexion échouée');
            }

            // Redirection vers la page d'accueil après connexion réussie
            router.push('/home');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Une erreur inconnue s\'est produite');
            }
        }
    };

    // Si le composant n'est pas encore monté, on retourne rien
    if (!isClient || !router) {
        return null;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Connexion</h2>
                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="mail"
                            name="mail"
                            value={form.mail}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Pas encore inscrit ?{' '}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Créer un compte
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
