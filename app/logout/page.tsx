'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';




const LogoutPage = () => {
    const router = useRouter();

    useEffect(() => {
        const logout = async () => {
            try {
                const response = await fetch('http://localhost:8080/auth/logout', {
                    method: 'POST',
                    credentials: 'include',
                });

                if (response.ok) {
                    router.push('/signin'); 
                } else {
                    console.error('Failed to logout');
                }
            } catch (error) {
                console.error('An error occurred during logout:', error);
            }
        };

        logout();
    }, [router]);

    return <p>Logging out...</p>;
};

export default LogoutPage;