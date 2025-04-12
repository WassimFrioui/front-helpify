'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    mail: '',
    phone: '',
    address: '',
    password: '',
    passwordConfirm: '',
    firstname: '',
    lastname: '',
    showPassword: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (form.password.length < 8 || form.passwordConfirm.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      setLoading(false);
      return;
    }
    if (form.password !== form.passwordConfirm) {
      setError('Les mots de passe ne correspondent pas.');
      setLoading(false);
      return;
    }
    if (!form.mail || !form.phone || !form.address || !form.firstname || !form.lastname) {
      setError('Veuillez remplir tous les champs obligatoires.');
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.mail)) {
      setError('Adresse e-mail invalide.');
      setLoading(false);
      return;
    }
    if (!/^\d+$/.test(form.phone)) {
      setError('Numéro de téléphone invalide.');
      setLoading(false);
      return;
    }

    const authDTO = {
      mail: form.mail,
      phone: form.phone,
      address: form.address,
      password: form.password,
      firstname: form.firstname,
      lastname: form.lastname,
    };

    try {
      const res = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authDTO),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || 'Registration failed');
      }

      router.push('/signin');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-12 justify-center min-h-screen bg-gray-100 bg-[url(/sign_bg.png)] bg-cover bg-center">
      <Link href="/"
          className="md:hidden items-center justify-center flex p-4 text-white rounded-lg shadow-lg border bg-blue-500 hover:underline"
      >
          <FaHome className="inline mr-2" />
          Retour à l&apos;accueil
      </Link>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200 sm:max-w-lg md:max-w-xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">Inscription</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Prénom"
                value={form.firstname}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                Lastname
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                value={form.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="mail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="Email"
              value={form.mail}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Téléphone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Adresse
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Adresse"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
              Confirmer le mot de passe
            </label>
            <input
              type={form.showPassword ? 'text' : 'password'}
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirmer le mot de passe"
              value={form.passwordConfirm}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Chargement...' : "S'inscrire"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 sm:text-base">
          Déjà inscrit ?{' '}
          <a href="/signin" className="text-blue-500 hover:underline">
            Se connecter
          </a>
        </p>
      </div>

      {error && (
        <div className="absolute top-12 right-12 w-auto p-4 bg-red-500 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
          <p className="text-white">{error}</p>
        </div>
      )}
      <Link href="/"
      className="md:flex items-center justify-center hidden absolute top-4 left-4 p-4 text-white rounded-lg shadow-lg border bg-blue-500 hover:underline"
      >
        <FaHome className="inline mr-2" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
