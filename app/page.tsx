'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
    name: string;
    email: string;
}

export default function Home() {
    const [data, setData] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('/api/user/profile');
                if (response.data.success) {
                    setData(response.data.user);
                } else {
                    setError('Failed to fetch user details.');
                }
                
            } catch (err: any) {
                setError('Failed to fetch user details.');
                console.error('Error fetching user details:', err);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <div className="bg-[#000924] text-white">
            <nav className="border-b flex fixed top-0 justify-between items-center border-white border-opacity-10 w-full lg:px-20 px-6 h-20">
                <h1>Logo</h1>
                <button className="bg-blue-600 rounded-full px-3 lg:px-5 py-2">
                    Logout
                </button>
            </nav>
            <div className="flex justify-center bg-[#000924] h-screen items-center">
                <div className="border p-8 rounded">
                    {error && <div className="text-red-500">{error}</div>}
                    {data ? (
                        <>
                            <div>Name: {data.name}</div>
                            <div>Email: {data.email}</div>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
}
