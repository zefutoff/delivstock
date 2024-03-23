"use client";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { TitlePage } from "@/components/title-page";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
  const role = useCurrentRole();

  return (
    <>
      <TitlePage label="Administration" />
      <Card className="w-[600px]">
        <CardHeader>
          <p className="text-2xl font font-semibold text-center">Admin</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormSuccess message="Tu est admin !" />
          </RoleGate>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminPage;
