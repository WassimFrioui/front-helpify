"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  firstname: string;
    lastname: string;
    mail: string;
    createdAt: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    id: number;
}

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useRouter();

  useEffect(() => {
    fetch("http://localhost:8080/auth/me", {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          navigate.push("/signin");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setUser(data);
        }
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération de l'utilisateur", err);
        navigate.push("/signin");
      });
  }, [navigate]);

  if (!user) return <p>Chargement...</p>;

  return (
    <main className="p-4" suppressHydrationWarning>
      <h1 className="text-2xl font-bold">Bienvenue, {user.firstname}</h1>
        <p className="mt-4">Voici vos informations :</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Nom : {user.lastname}</li>
          <li>Email : {user.mail}</li>
          <li>Téléphone : {user.phone}</li>
          <li>Adresse : {user.address}</li>
            <li>Créé le : {new Date(user.createdAt).toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</li>
          <li>Pays : {user.country}</li>
            <li>ID : {user.id}</li>
        </ul>
        <p className="mt-4">Vous êtes connecté !</p>

        <a href="/logout" className="mt-4 inline-block bg-blue-950 text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-900">

            Se déconnecter
        </a>

    </main>
  );
}
