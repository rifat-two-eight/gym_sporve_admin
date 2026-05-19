"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function OTPPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset");
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0E1C37]">
      {/* Left side: Form with Gradient */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-[#0E1C37] via-[#0C2C69] to-[#0E1C37] text-white">
        <div className="mx-auto w-full max-w-[400px]">
          <div className="mb-8 flex flex-col items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-3xl text-left">Verify OTP</h2>
            <p className="text-left text-sm text-gray-300">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <label className="mb-3 block text-sm font-medium">
                OTP Code
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="h-12 w-12 rounded-lg border border-white/20 bg-transparent text-center text-xl text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-4 py-3 text-center text-base font-bold text-[#0E1C37] transition hover:bg-gray-100"
            >
              Verify OTP
            </button>
            
            <div className="text-center mt-4">
              <Link href="/login" className="text-white hover:text-white/80 text-sm">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side: Auth Image */}
      <div className="hidden w-1/2 md:block relative">
        <Image
          src="/auth.png"
          alt="Authentication Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
