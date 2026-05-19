"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Ticket = {
  id: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "OPEN" | "IN-PROGRESS" | "RESOLVED";
  title: string;
  user: string;
  time: string;
  message: string;
};

export default function SupportPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const stats = [
    { label: "OPEN TICKETS", value: "1", color: "text-red-500" },
    { label: "IN PROGRESS", value: "1", color: "text-amber-500" },
    { label: "RESOLVED TODAY", value: "48", color: "text-emerald-500" },
    { label: "AVG RESPONSE TIME", value: "2.3h", color: "text-blue-500" },
  ];

  const tickets: Ticket[] = [
    {
      id: "t1",
      priority: "HIGH",
      status: "OPEN",
      title: "Payment not received",
      user: "User #4521",
      time: "1 hr ago",
      message:
        "Hi, I made a payment for my training session but it's not showing up in my account. Can you please help me resolve this? The booking was for April 28th at 3:00 PM. Thank you!",
    },
    {
      id: "t2",
      priority: "MEDIUM",
      status: "IN-PROGRESS",
      title: "Can't login to account",
      user: "User #3892",
      time: "3 hrs ago",
      message:
        "I'm trying to log in but it keeps saying invalid password even though I just reset it.",
    },
    {
      id: "t3",
      priority: "LOW",
      status: "RESOLVED",
      title: "Question about booking",
      user: "User #7234",
      time: "1 day ago",
      message:
        "Do you offer group discounts for training sessions?",
    },
  ];

  const getPriorityBadgeStyles = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-100 text-red-600";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-600";
      case "LOW":
        return "bg-gray-100 text-gray-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case "OPEN":
        return "bg-red-100 text-red-600";
      case "IN-PROGRESS":
        return "bg-yellow-100 text-yellow-600";
      case "RESOLVED":
        return "bg-emerald-50 text-emerald-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const getCardBorderColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "border-red-100";
      case "MEDIUM":
        return "border-yellow-200";
      case "LOW":
        return "border-gray-200";
      default:
        return "border-gray-200";
    }
  };

  return (
    <div className="space-y-8 text-black relative">
      <h2 className="text-2xl font-bold tracking-tight">Support Center</h2>

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

      {/* Ticket Queue */}
      <div>
        <h3 className="mb-4 text-lg font-bold">Ticket Queue</h3>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`rounded-xl border ${getCardBorderColor(
                ticket.priority
              )} bg-white p-5 shadow-sm transition-shadow hover:shadow-md`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase ${getPriorityBadgeStyles(
                      ticket.priority
                    )}`}
                  >
                    {ticket.priority}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase ${getStatusBadgeStyles(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-400">
                  {ticket.time}
                </span>
              </div>
              
              <h4 className="font-bold text-base mb-1">{ticket.title}</h4>
              <p className="mb-4 text-sm text-gray-500">
                User: <span className="font-medium text-gray-700">{ticket.user}</span>
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedTicket(ticket)}
                  className="rounded-lg bg-[#0E1C37] px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
                >
                  View Ticket
                </button>
                <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50">
                  Assign to Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-bold">Support Ticket</h3>
              <button
                onClick={() => setSelectedTicket(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6">
              {/* Header Badges */}
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase ${getPriorityBadgeStyles(
                    selectedTicket.priority
                  )}`}
                >
                  {selectedTicket.priority}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase ${getStatusBadgeStyles(
                    selectedTicket.status
                  )}`}
                >
                  {selectedTicket.status}
                </span>
              </div>

              {/* Title Info */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-1">{selectedTicket.title}</h4>
                <p className="text-sm text-gray-500">
                  {selectedTicket.user} • Created {selectedTicket.time}
                </p>
              </div>

              {/* User Message */}
              <div className="mb-6 rounded-xl border border-gray-100 p-5 bg-white shadow-sm">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  User Message
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {selectedTicket.message}
                </p>
              </div>

              {/* Internal Notes */}
              <div className="mb-6 rounded-xl bg-gray-50 p-5 border border-gray-50">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Internal Notes
                </p>
                <textarea
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
                  rows={4}
                  placeholder="Add notes about this ticket..."
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 shadow-sm shadow-emerald-500/20">
                  Mark Resolved
                </button>
                <button className="flex-1 rounded-xl bg-[#0E1C37] py-3 text-sm font-bold text-white transition hover:bg-slate-800 shadow-sm">
                  Assign to Me
                </button>
                <button
                  onClick={() => setSelectedTicket(null)}
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
