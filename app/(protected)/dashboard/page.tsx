import { KitInfo } from "@/components/kit-info";
import Navbar from "@/components/ui/navbar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-11/12">
        <p className="font-bold">Bienvenue $User</p>
        <KitInfo kits={0} kitsDelivered={1} kitsReady={2} />
      </div>
    </>
  );
};

export default DashboardPage;
