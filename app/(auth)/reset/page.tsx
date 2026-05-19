"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
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
            <h2 className="mb-2 text-3xl text-left">Reset Password</h2>
            <p className="text-left text-sm text-gray-300">
              Enter your new password below
            </p>
          </div>

          <form onSubmit={handleReset} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="block w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="block w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-4 py-3 text-center text-base font-bold text-[#0E1C37] transition hover:bg-gray-100"
            >
              Reset Password
            </button>
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
