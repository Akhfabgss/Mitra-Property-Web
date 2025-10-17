import Sidebar from "@/components/layout/Sidebar";
import HeaderDashboard from "@/components/layout/HeaderDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      {/* Area utama */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Header tetap di atas semua halaman */}
        <div className="sticky top-0 z-50 px-8 py-4">
          <HeaderDashboard />
        </div>

        {/* Konten halaman */}
        <main className="flex-1 px-8 py-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
