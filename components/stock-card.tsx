"use client";

import { Card } from "./ui/card";
import { Image } from "react-feather";

interface StockCardProps {
  icon?: string;
  name: string;
  quantity: number;
}

export const StockCard = ({ name, quantity }: StockCardProps) => {
  return (
    <Card className="w-11/12 m-1">
      <div className="m-3 flex justify-between text-base">
        <div className="flex">
          <Image size={40} />
          <p className="ml-1">{name}</p>
        </div>

        <p>{quantity}</p>
      </div>
    </Card>
  );
};
