"use client";

import { logout } from "@/action/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span
      onClick={onClick}
      className="font-semibold text-red-600 cursor-pointer"
    >
      {children}
    </span>
  );
};
