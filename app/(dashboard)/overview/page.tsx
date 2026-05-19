export default function OverviewPage() {
  const stats = [
    {
      title: "TOTAL USERS",
      value: "12,847",
      trend: "+12% vs last week",
      trendColor: "text-green-500",
    },
    {
      title: "ACTIVE COACHES",
      value: "1,234",
      trend: "+8% vs last week",
      trendColor: "text-blue-500",
    },
    {
      title: "TODAY'S BOOKINGS",
      value: "156",
      trend: "+15% vs last week",
      trendColor: "text-orange-500",
    },
    {
      title: "REVENUE (MTD)",
      value: "$124.5K",
      trend: "+22% vs last week",
      trendColor: "text-purple-500",
    },
  ];

  const quickActions = [
    { label: "Approve pending listings", count: 5 },
    { label: "Review flagged content", count: 3 },
    { label: "Process support tickets", count: 12 },
    { label: "Verify new coaches", count: 7 },
  ];

  const systemStatus = [
    { label: "Platform", status: "ONLINE" },
    { label: "Stripe API", status: "ONLINE" },
    { label: "AI Service", status: "ONLINE" },
    { label: "Database", status: "ONLINE" },
  ];

  return (
    <div className="space-y-8 text-black">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Platform Overview
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
                {stat.title}
              </p>
              <p className="text-3xl font-extrabold mb-3">{stat.value}</p>
              <p className={`text-xs font-medium ${stat.trendColor}`}>
                {stat.trend}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-lg font-bold">Quick Actions</h3>
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 space-y-3">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-gray-50/50 p-4 hover:bg-gray-50 transition border border-gray-100 cursor-pointer"
              >
                <span className="text-sm font-semibold text-gray-700">
                  {action.label}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-sm">
                  {action.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">System Status</h3>
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 space-y-4">
            {systemStatus.map((sys, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 last:pb-0"
              >
                <span className="text-sm font-medium text-gray-600">
                  {sys.label}
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  {sys.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
