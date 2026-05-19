export default function SystemHealthPage() {
  const stats = [
    {
      label: "UPTIME",
      value: "99.98%",
      status: "EXCELLENT",
      statusColor: "text-emerald-500",
      dotColor: "bg-emerald-500",
    },
    {
      label: "AVG RESPONSE TIME",
      value: "124ms",
      status: "GOOD",
      statusColor: "text-blue-500",
      dotColor: "bg-blue-500",
    },
    {
      label: "ERROR RATE",
      value: "0.02%",
      status: "EXCELLENT",
      statusColor: "text-emerald-500",
      dotColor: "bg-emerald-500",
    },
    {
      label: "ACTIVE SESSIONS",
      value: "2,847",
      status: "",
      statusColor: "",
      dotColor: "",
    },
  ];

  const services = [
    { name: "Web Platform", latency: "98ms", status: "OPERATIONAL" },
    { name: "Stripe API", latency: "145ms", status: "OPERATIONAL" },
    { name: "AI Service", latency: "230ms", status: "OPERATIONAL" },
    { name: "Maps API", latency: "67ms", status: "OPERATIONAL" },
    { name: "Database", latency: "12ms", status: "OPERATIONAL" },
  ];

  const errors = [
    { name: "Payment timeout", time: "5h ago", occurrences: 3 },
    { name: "Image upload failed", time: "8h ago", occurrences: 1 },
    { name: "API rate limit", time: "1d ago", occurrences: 2 },
  ];

  const aiCosts = [
    { label: "THIS MONTH", value: "$2,345", trend: "+12%", trendColor: "text-red-500" },
    { label: "AVG PER REQUEST", value: "$0.023", trend: "-5%", trendColor: "text-emerald-500" },
    { label: "TOTAL REQUESTS", value: "102K", trend: "+18%", trendColor: "text-red-500" },
  ];

  return (
    <div className="space-y-8 text-black">
      <h2 className="text-2xl font-bold tracking-tight">System Health</h2>

      {/* Top Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-center"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {stat.label}
            </p>
            <p className="text-3xl font-black mb-3">{stat.value}</p>
            {stat.status && (
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${stat.dotColor}`}></span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${stat.statusColor}`}>
                  {stat.status}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Service Status */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
          <h3 className="mb-6 text-lg font-bold">Service Status</h3>
          <div className="space-y-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 border border-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="font-bold text-sm text-gray-700">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-gray-400">
                    {service.latency}
                  </span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-emerald-500 w-24 text-right">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Errors */}
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
          <h3 className="mb-6 text-lg font-bold">Recent Errors</h3>
          <div className="space-y-3">
            {errors.map((error, i) => (
              <div
                key={i}
                className="rounded-xl bg-amber-50/50 px-4 py-3 border-l-4 border-amber-400"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-amber-700">
                    {error.name}
                  </span>
                  <span className="text-xs font-medium text-amber-600/60">
                    {error.time}
                  </span>
                </div>
                <p className="text-xs font-medium text-amber-600/80">
                  {error.occurrences} occurrence{error.occurrences !== 1 ? 's' : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Cost Tracking */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-6">
        <h3 className="mb-6 text-lg font-bold">AI Cost Tracking</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {aiCosts.map((cost, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-50 p-6 border border-gray-50"
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {cost.label}
              </p>
              <p className="text-2xl font-black mb-2">{cost.value}</p>
              <p className={`text-xs font-bold ${cost.trendColor}`}>
                {cost.trend}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
