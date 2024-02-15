"use client";

import { logout } from "@/action/logout";
import { UserButton } from "@/components/auth/user-button";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="p-10 rounded-xl">
      <UserButton />
    </div>
  );
};

export default SettingsPage;
