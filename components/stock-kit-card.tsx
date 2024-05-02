import { useCallback, useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Image } from "react-feather";

interface StockKitCardProps {
  icon?: string;
  name: string;
  quantity: number;
  productId: string;
  onQuantityChange: (productId: string, quantity: number, name: string) => void;
  resetTrigger: boolean;
  getQuantity: (productId: string) => number;
}

export const StockKitCard = ({
  name,
  quantity,
  productId,
  onQuantityChange,
  resetTrigger,
  getQuantity,
}: StockKitCardProps) => {
  const [localQuantity, setLocalQuantity] = useState(() =>
    getQuantity(productId)
  );

  useEffect(() => {
    setLocalQuantity(getQuantity(productId));
  }, [resetTrigger, productId, getQuantity]);

  const increment = useCallback(() => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onQuantityChange(productId, newQuantity, name);
  }, [localQuantity, productId, name, onQuantityChange]);

  const decrement = useCallback(() => {
    const newQuantity = Math.max(0, localQuantity - 1);
    setLocalQuantity(newQuantity);
    onQuantityChange(productId, newQuantity, name);
  }, [localQuantity, productId, name, onQuantityChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = parseInt(e.target.value, 10) || 0;
      setLocalQuantity(newQuantity);
      onQuantityChange(productId, newQuantity, name);
    },
    [productId, name, onQuantityChange]
  );

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
            onChange={handleInputChange}
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
