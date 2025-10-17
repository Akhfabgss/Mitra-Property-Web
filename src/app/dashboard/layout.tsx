import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar tetap */}
      <Sidebar />

      {/* Area konten utama */}
      <main className="flex-1 ml-64 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}
