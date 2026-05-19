export default function FinancialsPage() {
  const stats = [
    {
      title: "GMV (THIS MONTH)",
      value: "$124.5K",
      trend: "+22%",
      trendColor: "text-emerald-500",
    },
    {
      title: "PLATFORM REVENUE",
      value: "$12.4K",
      trend: "+18%",
      trendColor: "text-blue-500",
    },
    {
      title: "PENDING PAYOUTS",
      value: "$8.2K",
      trend: "",
      trendColor: "",
    },
    {
      title: "REFUNDS",
      value: "$1.2K",
      trend: "+5%",
      trendColor: "text-red-500",
    },
  ];

  const topEarners = [
    { name: "Coach Marcus", bookings: 120, revenue: "$18.6K" },
    { name: "Tennis Pro", bookings: 89, revenue: "$12.4K" },
    { name: "Soccer Academy", bookings: 67, revenue: "$9.8K" },
  ];

  const revenueBySport = [
    { name: "Basketball", revenue: "$45.2K", percentage: 70 },
    { name: "Soccer", revenue: "$32.8K", percentage: 50 },
    { name: "Tennis", revenue: "$28.4K", percentage: 40 },
    { name: "Baseball", revenue: "$18.1K", percentage: 20 },
  ];

  return (
    <div className="space-y-8 text-black">
      <h2 className="text-2xl font-bold tracking-tight">Financial Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-center"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {stat.title}
            </p>
            <p className="text-3xl font-black mb-1">{stat.value}</p>
            {stat.trend && (
              <p className={`text-xs font-bold ${stat.trendColor}`}>
                {stat.trend}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Earners */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
          <h3 className="mb-6 text-lg font-bold">Top Earners</h3>
          <div className="space-y-4">
            {topEarners.map((earner, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-gray-50/80 p-4 border border-gray-50"
              >
                <div>
                  <p className="font-bold text-sm">{earner.name}</p>
                  <p className="text-[11px] font-medium text-gray-400 mt-0.5">
                    {earner.bookings} bookings
                  </p>
                </div>
                <p className="font-black text-emerald-500 text-lg">
                  {earner.revenue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Sport */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
          <h3 className="mb-6 text-lg font-bold">Revenue by Sport</h3>
          <div className="space-y-6">
            {revenueBySport.map((sport, i) => (
              <div key={i}>
                <div className="mb-2 flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-500">{sport.name}</span>
                  <span>{sport.revenue}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${sport.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
