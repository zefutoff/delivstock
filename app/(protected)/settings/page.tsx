"use client";

import { TitlePage } from "@/components/title-page";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "react-feather";
import { LogoutButton } from "@/components/auth/logout-button";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <>
      <Navbar />
      <TitlePage label="Paramètre" />
      <Card className="w-11/12">
        <div className="m-1.5 flex cursor-pointer justify-between">
          <p className="mb-0">Nom</p>
          <div className="flex items-center">
            <p className="font-semibold mb-0">{user?.name}</p>
            <ChevronRight color="Grey" />
          </div>
        </div>

        <Separator className="bg-Grey" />
        <div className="m-1.5 flex cursor-pointer justify-between">
          <p>adresse mail</p>
          <div className="flex items-center">
            <p className="font-semibold">{user?.email}</p>
            <ChevronRight color="Grey" />
          </div>
        </div>
        <Separator className="bg-Grey" />
        <div className="m-1.5">
          <label className="flex cursor-pointer items-center justify-between">
            <p>Thème</p>
          </label>
        </div>
        <Separator className="bg-Grey" />
        <div className="m-1.5">
          <label className="flex cursor-pointer items-center justify-between">
            <p>Langue</p>
            <ChevronRight color="Grey" />
          </label>
        </div>
      </Card>
      <LogoutButton>Déconnexion</LogoutButton>
    </>
  );
};

export default SettingsPage;
