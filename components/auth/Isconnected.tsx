"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js hook pour navigation

const IsConnected: React.FC = () => {
    interface User {
        firstname: string;
    }

    const [user, setUser] = useState<User | null>(null);
    const router = useRouter(); // Remplace useNavigate

    useEffect(() => {
        fetch("http://localhost:8080/auth/me", {
            credentials: "include",
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    router.push("/login"); // Redirection si non autorisé
                    console.log("Non autorisé");
                    return null;
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    setUser(data);
                    delete data.password;
                    console.log("Utilisateur connecté");
                }
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération de l'utilisateur", err);
            });
    }, [router]);

    if (!user) return <p>Chargement...</p>;

    return null;
};

export default IsConnected;
