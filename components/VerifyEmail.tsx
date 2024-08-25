'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const VerifyEmail = () => {
    const [verifycode, setVerifycode] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const router = useRouter();

    const verifyEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/user/verify-email', {
                verifycode
            });

            if (response.status === 200) {
                setStatus('success');
                setMessage('Your email has been successfully verified!');
                setTimeout(() => {
                    router.push('/signin');
                }, 2000);
            }
        } catch (error: any) {
            setStatus('error');
            setMessage(
                error.response?.data?.message ||
                    'An error occurred during verification.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#000924] text-white">
            <div className="bg-[#111e3a] px-8 py-8 rounded-lg shadow-md max-w-lg w-full">
                <form className="mt-4" onSubmit={verifyEmail}>
                    <label
                        htmlFor="verifyCode"
                        className="block text-xl font-semibold mb-8 text-center"
                    >
                        Enter Verification Code
                    </label>
                    <input
                        type="text"
                        id="verifyCode"
                        name="verifyCode"
                        value={verifycode}
                        onChange={(e) => setVerifycode(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-[#22335b] text-white border border-white border-opacity-25 focus:outline-none focus:ring-2"
                        placeholder="Enter your code"
                    />
                    <button
                        type="submit"
                        className={`mt-7 w-full py-3 text-sm bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Verify Code...' : 'Verify Code'}
                    </button>
                </form>
                {status === 'error' && (
                    <p className="text-red-400 text-center mt-4">{message}</p>
                )}
                {status === 'success' && (
                    <p className="text-green-400 text-center mt-4">{message}</p>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
