"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Image } from "react-feather";

interface StockKitCardProps {
  icon?: string;
  name: string;
  quantity: number;
  productId: string;
  onQuantityChange: (productId: string, quantity: number, name: string) => void;
}

export const StockKitCard = ({
  name,
  quantity,
  productId,
  onQuantityChange,
}: StockKitCardProps) => {
  const [localQuantity, setLocalQuantity] = useState(0);

  const increment = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onQuantityChange(productId, newQuantity, name);
  };

  const decrement = () => {
    const newQuantity = Math.max(0, localQuantity - 1);
    if (newQuantity !== localQuantity) {
      setLocalQuantity(newQuantity);
      onQuantityChange(productId, newQuantity, name);
    }
  };

  return (
    <Card className="w-11/12 m-1">
      <div className="m-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image size={40} />
          <div className="ml-2">
            <p>{name}</p>
            <p className="text-sm text-gray-500">{quantity} en stock</p>
          </div>
        </div>
        <div className="flex items-center">
          <button type="button" className="mr-2" onClick={decrement}>
            -
          </button>
          <input
            type="number"
            value={localQuantity}
            readOnly
            className="text-center w-14"
          />
          <button type="button" className="ml-2" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </Card>
  );
};
