"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductType = {
  typeId: string;
  typeName: string;
};

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "typeId",
    header: "ID",
  },
  {
    accessorKey: "typeName",
    header: "Nom",
  },
];
