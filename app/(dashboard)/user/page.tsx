"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  joined: string;
  verified: boolean;
  activity: string;
  spent: string;
  accountStatus: string;
};

export default function UserPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users: User[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      role: "ATHLETE",
      joined: "2026-01-15",
      verified: true,
      activity: "12 bookings",
      spent: "$840",
      accountStatus: "Active",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.c@email.com",
      role: "COACH",
      joined: "2026-02-03",
      verified: true,
      activity: "45 bookings",
      spent: "$2,100",
      accountStatus: "Active",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.d@email.com",
      role: "ATHLETE",
      joined: "2026-03-20",
      verified: true,
      activity: "5 bookings",
      spent: "$350",
      accountStatus: "Active",
    },
    {
      id: 4,
      name: "Coach Marcus",
      email: "marcus@email.com",
      role: "COACH",
      joined: "2025-12-10",
      verified: true,
      activity: "120 bookings",
      spent: "$8,500",
      accountStatus: "Active",
    },
  ];

  return (
    <div className="space-y-6 text-black relative">
      <h2 className="text-2xl font-bold tracking-tight">User Management</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-bold uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Verified</th>
                <th className="px-6 py-4">Activity</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-5 font-bold text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-5 text-gray-500">{user.email}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase ${
                        user.role === "ATHLETE"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-gray-500">{user.joined}</td>
                  <td className="px-6 py-5 text-emerald-500">
                    {user.verified && <Check className="h-4 w-4 stroke-[3]" />}
                  </td>
                  <td className="px-6 py-5 text-gray-500">{user.activity}</td>
                  <td className="px-6 py-5">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="rounded-lg bg-[#0E1C37] px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm">
          <div className="w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h3 className="text-lg font-bold">User Details</h3>
              <button
                onClick={() => setSelectedUser(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Profile Header */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-2xl font-black text-gray-600">
                  {selectedUser.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{selectedUser.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{selectedUser.email}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase ${
                        selectedUser.role === "ATHLETE"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {selectedUser.role}
                    </span>
                    {selectedUser.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase text-emerald-600">
                        <Check className="h-3 w-3 stroke-[3]" /> VERIFIED
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase text-gray-400">Joined</p>
                  <p className="text-lg font-black">{selectedUser.joined}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase text-gray-400">Total Bookings</p>
                  <p className="text-lg font-black">{parseInt(selectedUser.activity)}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase text-gray-400">Spent</p>
                  <p className="text-lg font-black">{selectedUser.spent}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase text-gray-400">Account Status</p>
                  <p className="text-lg font-black">{selectedUser.accountStatus}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mb-8">
                <h4 className="mb-3 font-bold text-sm">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-500">
                    <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                    Completed booking on 2026-04-25
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-500">
                    <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                    Updated profile information
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-500">
                    <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                    Sent message to coach
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-xl bg-[#EF4444] py-3 text-sm font-bold text-white transition hover:bg-red-600">
                  Suspend Account
                </button>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="flex-1 rounded-xl bg-gray-100 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
