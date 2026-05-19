"use client";

import { useState } from "react";
import { X } from "lucide-react";

type Flag = {
  id: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  reason: string;
  user: string;
  time: string;
};

export default function TrustAndSafetyPage() {
  const [selectedFlag, setSelectedFlag] = useState<Flag | null>(null);

  const stats = [
    { label: "PENDING FLAGS", value: "3", color: "text-red-500" },
    { label: "RESOLVED TODAY", value: "12", color: "text-emerald-500" },
    { label: "BANNED USERS", value: "3", color: "text-gray-900" },
  ];

  const flags: Flag[] = [
    {
      id: "f1",
      priority: "HIGH",
      reason: "inappropriate message",
      user: "Jordan Smith",
      time: "2 hrs ago",
    },
    {
      id: "f2",
      priority: "MEDIUM",
      reason: "suspicious activity",
      user: "Alex Turner",
      time: "5 hrs ago",
    },
    {
      id: "f3",
      priority: "LOW",
      reason: "payment dispute",
      user: "Taylor Brown",
      time: "1 day ago",
    },
  ];

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return {
          border: "border-red-100",
          bg: "bg-red-50/30",
          badge: "bg-red-100 text-red-600",
        };
      case "MEDIUM":
        return {
          border: "border-yellow-200",
          bg: "bg-yellow-50/30",
          badge: "bg-yellow-100 text-yellow-600",
        };
      case "LOW":
        return {
          border: "border-gray-200",
          bg: "bg-gray-50/30",
          badge: "bg-gray-100 text-gray-500",
        };
      default:
        return {
          border: "border-gray-200",
          bg: "bg-white",
          badge: "bg-gray-100 text-gray-500",
        };
    }
  };

  return (
    <div className="space-y-8 text-black">
      <h2 className="text-2xl font-bold tracking-tight">Trust & Safety</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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

      {/* Queue */}
      <div>
        <h3 className="mb-4 text-lg font-bold">Flag Queue</h3>
        <div className="space-y-4">
          {flags.map((flag) => {
            const styles = getPriorityStyles(flag.priority);
            return (
              <div
                key={flag.id}
                className={`rounded-xl border ${styles.border} ${styles.bg} p-5`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold uppercase ${styles.badge}`}
                    >
                      {flag.priority}
                    </span>
                    <span className="font-bold">{flag.reason}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-400">
                    {flag.time}
                  </span>
                </div>
                
                <p className="mb-4 text-sm text-gray-500">
                  User: <span className="font-medium text-gray-700">{flag.user}</span>
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedFlag(flag)}
                    className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-600"
                  >
                    Review
                  </button>
                  <button className="rounded-lg bg-red-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-600">
                    Ban User
                  </button>
                  <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50">
                    Dismiss
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review Modal */}
      {selectedFlag && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <h3 className="text-lg font-bold">Safety Flag Review</h3>
              <button
                onClick={() => setSelectedFlag(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 pb-6 space-y-4">
              {/* Highlight Box */}
              <div className="rounded-xl bg-red-50 p-5">
                <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-black tracking-widest text-red-500 shadow-sm">
                  {selectedFlag.priority} PRIORITY
                </span>
                <h4 className="mb-1 text-lg font-bold">{selectedFlag.reason}</h4>
                <p className="text-sm text-red-400/80">
                  Reported {selectedFlag.time} by system
                </p>
              </div>

              {/* User Box */}
              <div className="rounded-xl bg-gray-50 p-5">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Flagged User
                </p>
                <p className="font-bold">{selectedFlag.user}</p>
              </div>

              {/* Details Box */}
              <div className="rounded-xl bg-gray-50 p-5">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Violation Details
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  This content has been automatically flagged for review. Please
                  assess the severity and take appropriate action. View the full
                  context and user history before making a decision.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex gap-3">
                <button className="flex-1 rounded-xl bg-red-500 py-3.5 text-sm font-bold text-white transition hover:bg-red-600 shadow-sm shadow-red-500/20">
                  Ban User
                </button>
                <button
                  onClick={() => setSelectedFlag(null)}
                  className="flex-1 rounded-xl bg-gray-100 py-3.5 text-sm font-bold text-gray-600 transition hover:bg-gray-200"
                >
                  Dismiss Flag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
