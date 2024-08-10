"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signup', {
                name,
                email,
                password
            });
            const result = response.data;
            if(result.success) {
                alert('User created successfully!');
                router.push('/signin');
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <>
            <div className="flex min-h-screen bg-[#000924] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign Up your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border border-white outline-none bg-[#000924] py-2 shadow-sm text-white sm:text-sm px-3 sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="block w-full rounded-md border border-white outline-none bg-[#000924] py-2 shadow-sm text-white sm:text-sm px-3 sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="block w-full rounded-md border px-3 border-white outline-none bg-[#000924] py-2 shadow-sm sm:text-sm text-white sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-3">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have a account?{' '}
                        <a
                            href="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Sign In to continue
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Signup;
