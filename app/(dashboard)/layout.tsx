import Sidebar from "@/components/sidebar";

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#0E2043] overflow-hidden text-sm">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 bg-[#FAFAFA] overflow-hidden flex flex-col">
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
