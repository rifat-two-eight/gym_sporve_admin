"use client";

import { useState } from "react";
import { X } from "lucide-react";

type ContentItem = {
  id: string;
  title: string;
  coach: string;
  sport: string;
  submittedAgo: string;
  description: string;
};

export default function ContentPage() {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);

  const stats = [
    { label: "PENDING LISTINGS", value: "2", color: "text-amber-500" },
    { label: "FLAGGED PHOTOS", value: "2", color: "text-red-500" },
    { label: "REPORTED REVIEWS", value: "3", color: "text-blue-500" },
  ];

  const pendingApprovals: ContentItem[] = [
    {
      id: "c1",
      title: "Elite Basketball Training",
      coach: "Coach Marcus",
      sport: "Basketball",
      submittedAgo: "2 hrs ago",
      description:
        "Professional training program designed for athletes looking to improve their skills. Includes personalized coaching, video analysis, and customized drills tailored to individual needs.",
    },
    {
      id: "c2",
      title: "Youth Soccer Camp",
      coach: "Soccer Pro",
      sport: "Soccer",
      submittedAgo: "5 hrs ago",
      description:
        "A fun and engaging soccer camp for youth players. We focus on fundamentals, teamwork, and having fun on the field.",
    },
  ];

  return (
    <div className="space-y-8 text-black relative">
      <h2 className="text-2xl font-bold tracking-tight">Content Moderation</h2>

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

      {/* Pending Approvals */}
      <div>
        <h3 className="mb-4 text-lg font-bold">Pending Approvals</h3>
        <div className="space-y-4">
          {pendingApprovals.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-base">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    by {item.coach} • {item.sport}
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-400">
                  {item.submittedAgo}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-600">
                  Approve
                </button>
                <button className="rounded-lg bg-red-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-red-600">
                  Reject
                </button>
                <button
                  onClick={() => setSelectedContent(item)}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Listing Review Modal */}
      {selectedContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <h3 className="text-lg font-bold">Listing Review</h3>
              <button
                onClick={() => setSelectedContent(null)}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-gray-500 transition hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6">
              {/* Header Info */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-1">{selectedContent.title}</h4>
                <p className="text-sm text-gray-500">
                  by {selectedContent.coach} • {selectedContent.sport}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Submitted {selectedContent.submittedAgo}
                </p>
              </div>

              {/* Grid Data */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-50">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Sport</p>
                  <p className="font-bold text-sm">{selectedContent.sport}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-50">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Coach</p>
                  <p className="font-bold text-sm">{selectedContent.coach}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-50">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Status</p>
                  <p className="font-bold text-sm lowercase">pending</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-50">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Submitted</p>
                  <p className="font-bold text-sm">{selectedContent.submittedAgo}</p>
                </div>
              </div>

              {/* Listing Description */}
              <div className="mb-6 rounded-xl border border-gray-100 p-5 bg-white">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Listing Description
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  {selectedContent.description}
                </p>
              </div>

              {/* Review Notes */}
              <div className="mb-6 rounded-xl bg-gray-50 p-5 border border-gray-50">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Review Notes
                </p>
                <textarea
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
                  rows={3}
                  placeholder="Add review notes..."
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-600 shadow-sm shadow-emerald-500/20">
                  Approve Listing
                </button>
                <button className="flex-1 rounded-xl bg-[#EF4444] py-3.5 text-sm font-bold text-white transition hover:bg-red-600 shadow-sm shadow-red-500/20">
                  Reject
                </button>
                <button
                  onClick={() => setSelectedContent(null)}
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
