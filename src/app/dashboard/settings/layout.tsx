// dashboard/settings/layout.tsx
import ProfilSidebar from "@/components/layout/ProfilSidebar";
import InfoBox from "@/components/ui/InfoBox";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='text-2xl font-bold text-biru mb-6'>Request Payment</h1>
  
      <InfoBox />

    <div className="flex gap-8 mt-8"> {/* kasih mt agar tidak nempel ke h1/infobox */}
      <ProfilSidebar />
      <main className="flex-1 bg-white rounded-xl shadow-sm p-6">
        {children}
      </main>
    </div>

    </div>


  );
}
