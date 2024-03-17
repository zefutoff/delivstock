"use client";

import { KitInfo } from "@/components/kit-info";
import { TitlePage } from "@/components/title-page";
import { Navbar } from "@/components/ui/navbar";
import { useCurrentUser } from "@/hooks/use-current-user";

const DashboardPage = () => {
  const user = useCurrentUser();
  return (
    <>
      <Navbar />
      <TitlePage label="Dashboard" />

      <div className="w-11/12">
        <KitInfo kits={0} kitsDelivered={1} kitsReady={2} />
      </div>
    </>
  );
};

export default DashboardPage;
