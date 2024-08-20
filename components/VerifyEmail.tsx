"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

const VerifyEmail = () => {

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          setMessage("Verification token is missing.");
          setStatus("error");
          return;
        }

        const response = await axios.get("/api/user/verify-email", {
          params: { token },
        });

        if (response.status === 200) {
          setMessage("Your email has been successfully verified!");
          setStatus("success");
          router.push("/login");
        }
      } catch (error: any) {
        setMessage(
          error.response?.data?.message ||
            "An error occurred during verification."
        );
        setStatus("error");
      }
    };

    verifyEmail();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000924] text-white">
      <div className="bg-[#111e3a] p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          {status === "loading" ? "Verifying your email..." : message}
        </h1>
        {status === "loading" && (
          <div className="flex justify-center items-center">
            {/* <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" /> */}
          </div>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center">{message}</p>
        )}
        {status === "success" && (
          <p className="text-green-400 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
