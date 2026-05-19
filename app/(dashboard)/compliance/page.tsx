export default function CompliancePage() {
  const stats = [
    {
      label: "DSAR REQUESTS",
      value: "2",
      color: "text-blue-500",
    },
    {
      label: "ADMIN ACTIONS (TODAY)",
      value: "47",
      color: "text-gray-600",
    },
    {
      label: "DATA RETENTION JOBS",
      value: "Active",
      color: "text-emerald-500",
    },
  ];

  const adminActions = [
    { admin: "Admin #1", action: "Approved listing #4532", time: "5 min ago" },
    { admin: "Admin #2", action: "Banned user #8921", time: "23 min ago" },
    { admin: "Admin #1", action: "Resolved support ticket #7834", time: "1 hr ago" },
    { admin: "Admin #3", action: "Updated platform settings", time: "2 hrs ago" },
    { admin: "Admin #2", action: "Reviewed flagged content #2341", time: "3 hrs ago" },
  ];

  const dsarQueue = [
    {
      type: "Data Export",
      user: "User #4521",
      time: "1 day ago",
      status: "PENDING",
      showButton: true,
    },
    {
      type: "Account Deletion",
      user: "User #7832",
      time: "3 days ago",
      status: "COMPLETED",
      showButton: false,
    },
  ];

  const consentRecords = [
    { name: "Terms of Service", users: "12,847 users", percentage: "100%" },
    { name: "Privacy Policy", users: "12,847 users", percentage: "100%" },
    { name: "Marketing Emails", users: "8,234 users", percentage: "64%" },
    { name: "SMS Notifications", users: "6,123 users", percentage: "48%" },
  ];

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-600";
      case "COMPLETED":
        return "bg-emerald-50 text-emerald-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <div className="space-y-8 text-black">
      <h2 className="text-2xl font-bold tracking-tight">Compliance & Audit</h2>

      {/* Top Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-center"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {stat.label}
            </p>
            <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Admin Actions */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
        <h3 className="mb-6 text-lg font-bold">Recent Admin Actions</h3>
        <div className="space-y-3">
          {adminActions.map((item, i) => (
            <div
              key={i}
              className="flex items-start justify-between rounded-xl bg-gray-50 p-4 border border-gray-50"
            >
              <div>
                <p className="font-bold text-sm text-gray-900">{item.admin}</p>
                <p className="text-xs font-medium text-gray-500 mt-0.5">
                  {item.action}
                </p>
              </div>
              <span className="text-[11px] font-medium text-gray-400 mt-1">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* DSAR Queue */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
          <h3 className="mb-6 text-lg font-bold">DSAR Queue</h3>
          <div className="space-y-4">
            {dsarQueue.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-sm">{item.type}</h4>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase ${getStatusBadgeStyles(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-500 mb-4">
                  {item.user} • {item.time}
                </p>
                {item.showButton && (
                  <button className="rounded-lg bg-[#0E1C37] px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800">
                    Process Request
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Consent Records */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
          <h3 className="mb-6 text-lg font-bold">Consent Records</h3>
          <div className="space-y-3">
            {consentRecords.map((record, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-gray-50 p-4 border border-gray-50"
              >
                <div>
                  <p className="font-bold text-sm text-gray-900">{record.name}</p>
                  <p className="text-xs font-medium text-gray-400 mt-0.5">
                    {record.users}
                  </p>
                </div>
                <span className="font-black text-emerald-500 text-sm">
                  {record.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
