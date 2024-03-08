"use client";

import { logout } from "@/action/logout";
import { TitlePage } from "@/components/title-page";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <>
      <Navbar />
      <TitlePage label="Paramètre" />
      <Card className="mt-2 w-11/12">
        <CardContent className="items-center">
          <p>Nom {user?.name}</p>
          <p>adresse mail {user?.email}</p>
          <p>Thème</p>
          <p>Langue</p>
        </CardContent>
      </Card>
      <button onClick={onClick} className="font-semibold text-red-600">
        Déconnexion
      </button>
    </>
  );
};

export default SettingsPage;
