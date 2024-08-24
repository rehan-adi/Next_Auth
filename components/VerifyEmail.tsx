"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const VerifyEmail = () => {

  const [verifycode, setVerifycode] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const router = useRouter();

    const verifyEmail = async (e: React.FormEvent) => {

      e.preventDefault();
      try {
        const response = await axios.post("/api/user/verify-email", {verifycode});

        if (response.status === 200) {
          setMessage("Your email has been successfully verified!");
          router.push("/signin");
        }
      } catch (error: any) {
        setStatus("error");
        setMessage(
          error.response?.data?.message ||
            "An error occurred during verification."
        );
      }
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000924] text-white">
  <div className="bg-[#111e3a] p-8 rounded-lg shadow-md max-w-lg w-full">
    <h1 className="text-3xl font-semibold mb-4 text-center">
      {message}
    </h1>
    <form className="mt-4" onSubmit={verifyEmail}>
      <label htmlFor="verifyCode" className="block text-lg font-medium mb-2 text-center">
        Enter Verification Code
      </label>
      <input
        type="text"
        id="verifyCode"
        name="verifyCode"
        value={verifycode}
        onChange={(e) => setVerifycode(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-[#22335b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your code"
      />
      <button
        type="submit"
        className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Verify Code
      </button>
    </form>
    {status === "error" && (
      <p className="text-red-400 text-center mt-4">{message}</p>
    )}
    {status === "success" && (
      <p className="text-green-400 text-center mt-4">{message}</p>
    )}
  </div>
</div>
  );
};

export default VerifyEmail;
