'use client';

import { z } from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signupValidation } from '@/validations/auth.validation';

type FormField = z.infer<typeof signupValidation>;

const Signup = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormField>({
        resolver: zodResolver(signupValidation)
    });

    const router = useRouter();

    const onSubmit: SubmitHandler<FormField> = async (data) => {
        setIsSubmitting(true);

        try {
            const response = await axios.post('/api/user/signup', data);
            const result = response.data;
            if (result.success) {
                toast.success('User created successfully!');
                router.push('/verify-email');
            }
        } catch (error: any) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || 'Signup failed.');
            } else {
                toast.error('An unexpected error occurred. Please try again.');
            }
            console.error('Error signing up:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="flex min-h-screen bg-[#000924] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign Up your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
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
                                    type="text"
                                    {...register('name')}
                                    required
                                    autoComplete="name"
                                    className="block w-full rounded-md border border-white outline-none bg-[#000924] py-2 shadow-sm text-white sm:text-sm px-3 sm:leading-6"
                                />
                                {errors.name && (
                                    <p className="text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
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
                                    type="email"
                                    {...register('email')}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border border-white outline-none bg-[#000924] py-2 shadow-sm text-white sm:text-sm px-3 sm:leading-6"
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
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
                                    type="password"
                                    {...register('password')}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border px-3 border-white outline-none bg-[#000924] py-2 shadow-sm sm:text-sm text-white sm:leading-6"
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-3">
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Signing up...' : 'Sign up'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have a account?{' '}
                        <a
                            href="/signin"
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
