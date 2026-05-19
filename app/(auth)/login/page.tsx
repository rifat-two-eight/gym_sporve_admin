"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/overview");
  };

  return (
    <div className="flex min-h-screen bg-[#0E1C37]">
      {/* Left side: Login Form with Gradient */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-[#0E1C37] via-[#0C2C69] to-[#0E1C37] text-white">
        <div className="mx-auto w-full max-w-[400px]">
          <div className="mb-8 flex flex-col items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />

          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-3xl text-left">Admin Login</h2>
            <p className="text-left text-sm text-gray-300">
              Enter your Credentials to access your dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="block w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-transparent text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-300 text-xs">Remember for 30 days</span>
              </label>
              <Link href="#" className="text-white hover:text-white/80 text-xs">
                forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-4 py-3 text-center text-base font-bold text-[#0E1C37] transition hover:bg-gray-100"
            >
              Login
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
