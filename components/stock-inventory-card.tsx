"use client";

import { Card } from "./ui/card";
import { Image } from "react-feather";
import { Input } from "./ui/input";

interface StockCardProps {
  icon?: string;
  name: string;
  quantity: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const StockInventoryCard: React.FC<StockCardProps> = ({
  name,
  quantity,
  onChange,
  onBlur,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 3) {
      onChange(e);
    }
  };
  return (
    <Card className="w-11/12 m-1">
      <div className="m-3 flex justify-between text-base">
        <div className="flex items-center">
          <Image size={40} />
          <p className="ml-1">{name}</p>
        </div>
        <Input
          className="text-center w-14"
          type="number"
          value={quantity}
          onChange={handleOnChange}
          onBlur={onBlur}
        />
      </div>
    </Card>
  );
};
