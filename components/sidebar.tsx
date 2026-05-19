"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShieldAlert,
  CalendarDays,
  CircleDollarSign,
  FileText,
  Headset,
  BarChart3,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/overview", icon: LayoutDashboard },
    { name: "User", href: "/user", icon: Users },
    { name: "Trust & Safety", href: "/trust-and-safety", icon: ShieldAlert },
    { name: "Bookings", href: "/bookings", icon: CalendarDays },
    { name: "Financials", href: "/financials", icon: CircleDollarSign },
    { name: "Content", href: "/content", icon: FileText },
    { name: "Support", href: "/support", icon: Headset },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "System Health", href: "/system-health", icon: Activity },
    { name: "Compliance", href: "/compliance", icon: ShieldCheck },
  ];

  return (
    <aside className="w-72 flex-shrink-0 flex flex-col justify-between overflow-y-auto text-white pb-4">
      <div>
        <div className="flex flex-col items-center justify-center py-8">
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
        </div>

        <nav className="flex flex-col px-4 gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                  isActive
                    ? "bg-white text-[#0E2043] rounded-3xl font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/10 rounded-3xl"
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-4 mt-8 flex flex-col gap-4">
        <Link
          href="/login"
          className="flex w-full items-center justify-center rounded-3xl bg-red-600 py-2.5 text-center font-medium text-white transition hover:bg-red-700"
        >
          Logout
        </Link>
        <div className="border-t border-white/40 pt-4 flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-500">
            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-xs">Admin</div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-xs text-gray-400">admin@Sporve.app</span>
            <span className="truncate font-medium">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
