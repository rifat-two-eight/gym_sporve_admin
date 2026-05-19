export default function AnalyticsPage() {
  const stats = [
    {
      title: "WEEKLY ACTIVE",
      value: "8,234",
      trend: "+15% vs last period",
      trendColor: "text-emerald-500",
    },
    {
      title: "MONTHLY ACTIVE",
      value: "12,847",
      trend: "+12% vs last period",
      trendColor: "text-blue-500",
    },
    {
      title: "RETENTION RATE",
      value: "72%",
      trend: "+3% vs last period",
      trendColor: "text-purple-500",
    },
    {
      title: "TIME TO 1ST BOOKING",
      value: "2.4d",
      trend: "-8% vs last period",
      trendColor: "text-amber-500",
    },
  ];

  const funnel = [
    { label: "Visits", count: "45,234", percentage: 100 },
    { label: "Signups", count: "8,420", percentage: 19 },
    { label: "Profile Complete", count: "6,234", percentage: 14 },
    { label: "First Booking", count: "3,456", percentage: 8 },
  ];

  const regions = [
    { name: "Chicago", coaches: 234, athletes: 1842, ratio: "1:7.9" },
    { name: "New York", coaches: 189, athletes: 1523, ratio: "1:8.1" },
    { name: "Los Angeles", coaches: 156, athletes: 1234, ratio: "1:7.9" },
    { name: "Boston", coaches: 98, athletes: 743, ratio: "1:7.6" },
  ];

  return (
    <div className="space-y-8 text-black">
      <h2 className="text-2xl font-bold tracking-tight">Growth Analytics</h2>

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
            <p className={`text-xs font-bold ${stat.trendColor}`}>
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      {/* Acquisition Funnel */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-bold">Acquisition Funnel</h3>
        <div className="space-y-5">
          {funnel.map((item, i) => (
            <div key={i}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-500">
                  {item.label}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold">{item.count}</span>
                  <span className="text-xs font-bold text-emerald-500">
                    {item.percentage}%
                  </span>
                </div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supply-Demand by Region */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-bold">Supply-Demand by Region</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {regions.map((region, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-50 p-5 border border-gray-50"
            >
              <h4 className="font-bold mb-4">{region.name}</h4>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Coaches: {region.coaches}</span>
                <span>Athletes: {region.athletes}</span>
              </div>
              <p className="text-xs font-bold text-emerald-500">
                Ratio: {region.ratio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
