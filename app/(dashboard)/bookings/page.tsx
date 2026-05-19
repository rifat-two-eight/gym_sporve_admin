"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Booking = {
  id: string;
  athlete: string;
  coach: string;
  sport: string;
  date: string;
  time: string;
  status: "UPCOMING" | "COMPLETED" | "CANCELLED";
  price: string;
};

export default function BookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const stats = [
    { label: "TODAY", value: "156", color: "text-blue-500" },
    { label: "UPCOMING", value: "342", color: "text-emerald-500" },
    { label: "COMPLETED", value: "1,234", color: "text-gray-500" },
    { label: "CANCELLED", value: "45", color: "text-red-500" },
  ];

  const bookings: Booking[] = [
    {
      id: "b1",
      athlete: "Jordan M.",
      coach: "Coach Marcus",
      sport: "Basketball",
      date: "2026-04-28",
      time: "3:00 PM",
      status: "UPCOMING",
      price: "$120",
    },
    {
      id: "b2",
      athlete: "Sarah K.",
      coach: "Tennis Pro",
      sport: "Tennis",
      date: "2026-04-28",
      time: "5:00 PM",
      status: "COMPLETED",
      price: "$90",
    },
    {
      id: "b3",
      athlete: "Mike T.",
      coach: "Soccer Academy",
      sport: "Soccer",
      date: "2026-04-29",
      time: "10:00 AM",
      status: "UPCOMING",
      price: "$150",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "UPCOMING":
        return "bg-blue-50 text-blue-500";
      case "COMPLETED":
        return "bg-emerald-50 text-emerald-500";
      case "CANCELLED":
        return "bg-red-50 text-red-500";
      default:
        return "bg-gray-50 text-gray-500";
    }
  };

  return (
    <div className="space-y-6 text-black relative">
      <h2 className="text-2xl font-bold tracking-tight">Bookings Management</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-center"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {stat.label}
            </p>
            <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search bookings..."
          className="w-48 sm:w-64 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-bold uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Athlete</th>
                <th className="px-6 py-4">Coach</th>
                <th className="px-6 py-4">Sport</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-5 font-bold text-gray-900">
                    {booking.athlete}
                  </td>
                  <td className="px-6 py-5 text-gray-500">{booking.coach}</td>
                  <td className="px-6 py-5 text-gray-500">{booking.sport}</td>
                  <td className="px-6 py-5 text-gray-500">{booking.date}</td>
                  <td className="px-6 py-5 text-gray-500">{booking.time}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black tracking-widest uppercase ${getStatusStyles(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-bold text-gray-900">
                    {booking.price}
                  </td>
                  <td className="px-6 py-5">
                    <button
                      onClick={() => setSelectedBooking(booking)}
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

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-bold">Booking Details</h3>
              <button
                onClick={() => setSelectedBooking(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6">
              {/* Details Grid */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Athlete</p>
                  <p className="font-bold text-sm">{selectedBooking.athlete}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Coach</p>
                  <p className="font-bold text-sm">{selectedBooking.coach}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Sport</p>
                  <p className="font-bold text-sm">{selectedBooking.sport}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Date & Time</p>
                  <p className="font-bold text-sm">{selectedBooking.date} at {selectedBooking.time}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Price</p>
                  <p className="font-bold text-sm">{selectedBooking.price}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Status</p>
                  <p className="font-bold text-sm lowercase">{selectedBooking.status}</p>
                </div>
              </div>

              {/* Booking History */}
              <div className="mb-6">
                <h4 className="mb-3 font-bold text-sm">Booking History</h4>
                <div className="rounded-xl bg-gray-50 p-5 text-sm text-gray-500 space-y-1">
                  <p>Booking created on 2026-04-15</p>
                  <p>Payment processed: {selectedBooking.price}</p>
                  <p>Platform fee: ${parseInt(selectedBooking.price.replace('$', '')) * 0.1}</p>
                  <p>Coach payout: ${parseInt(selectedBooking.price.replace('$', '')) * 0.9}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-xl bg-[#EF4444] py-3.5 text-sm font-bold text-white transition hover:bg-red-600 shadow-sm shadow-red-500/20">
                  Issue Refund
                </button>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="flex-1 rounded-xl bg-gray-100 py-3.5 text-sm font-bold text-gray-600 transition hover:bg-gray-200"
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
