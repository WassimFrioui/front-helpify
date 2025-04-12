"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import Link from 'next/link';

const SignIn = () => {
    const [form, setForm] = useState({
        mail: '',
        password: '',
        showPassword: false,
    });
    const [error, setError] = useState('');
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
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

            router.push('/home');
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Une erreur inconnue s\'est produite');
            }
        }
    };

    if (!isClient || !router) {
        return null;
    }

    return (
        <div className="relative flex flex-col items-center gap-12 justify-center min-h-screen bg-gray-100 bg-[url(/sign_bg.png)] bg-cover bg-center">
            <Link href="/"
                className="md:hidden items-center justify-center flex p-4 text-white rounded-lg shadow-lg border bg-blue-950 hover:underline"
            >
                <FaHome className="inline mr-2" />
                Retour à l&apos;accueil
            </Link>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:text-3xl lg:text-4xl">Connexion</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="mail" className="block text-sm font-medium text-gray-700 sm:text-base">
                            Email
                        </label>
                        <input
                            type="email"
                            id="mail"
                            name="mail"
                            value={form.mail}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 sm:text-base"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 sm:text-base">
                            Mot de passe
                        </label>
                        <div className="relative">
              <input
                type={form.showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Mot de passe"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-500"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setForm({ ...form, showPassword: !form.showPassword })}
              >
                {form.showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
              </div>
            </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-950 rounded-md hover:bg-blue-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 sm:text-base"
                        >
                            Se connecter
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600 sm:text-base">
                    Pas encore inscrit ?{' '}
                    <a href="/signup" className="text-blue-950 hover:underline">
                        Créer un compte
                    </a>
                </p>
            </div>
            {error && (
                <div className="absolute top-12 right-12 w-auto p-4 bg-red-500 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
                <p className="text-white">{error}</p>
                </div>
            )}
            <Link href="/"
                className="md:flex items-center justify-center hidden absolute top-4 left-4 p-4 text-white rounded-lg shadow-lg border bg-blue-950 hover:underline"
            >
                <FaHome className="inline mr-2" />
                Retour à l&apos;accueil
            </Link>
        </div>
    );
};

export default SignIn;
