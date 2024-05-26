import React from "react";
import { CartItem, KitTab } from "@/components/kit-tab";

interface KitDataComponentProps {
  vege: CartItem[];
  pesce: CartItem[];
  flexi: CartItem[];
}

export const KitDataComponent: React.FC<KitDataComponentProps> = ({
  vege,
  pesce,
  flexi,
}) => {
  return <KitTab vege={vege} pesce={pesce} flexi={flexi} />;
};
