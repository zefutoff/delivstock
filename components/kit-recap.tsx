"use client";

import { useState } from "react";
import { Drawer } from "./ui/drawer";

export const KitRecap = () => {
  const [showAddCategoryDialog, setShowAddCategoryDialog] = useState(false);

  return <Drawer open={showAddCategoryDialog}></Drawer>;
};
