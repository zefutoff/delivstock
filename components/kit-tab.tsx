"use client";

import { FC, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StockKitCard } from "@/components/stock-kit-card";
import { CheckKitButton } from "./save-button";

const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  return `${currentHour}:${currentMinute < 10 ? "0" + currentMinute : currentMinute}`;
};

export interface CartItem {
  productId: string;
  quantity: number;
  name: string;
}

interface KitTabProps {
  vege: ProductData[];
  pesce: ProductData[];
  flexi: ProductData[];
}

interface ProductData {
  productId: string;
  productName: string;
  quantity: number;
}

export const KitTab: FC<KitTabProps> = ({ vege, pesce, flexi }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productId: string, quantity: number, name: string) => {
    setCart((currentCart: CartItem[]) => {
      const productIndex = currentCart.findIndex(
        (item) => item.productId === productId
      );

      if (productIndex > -1) {
        return currentCart
          .map((item, index) => {
            if (index === productIndex) {
              return { ...item, quantity, name };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
      } else {
        if (quantity > 0) {
          return [...currentCart, { productId, quantity, name }];
        }
        return currentCart;
      }
    });
  };
  return (
    <>
      <Tabs defaultValue="vegetarian" className="flex flex-col w-11/12 h-5/6">
        <TabsList className="flex justify-center">
          <TabsTrigger value="vegetarian">Vegé</TabsTrigger>
          <TabsTrigger value="flexitarian">Viande</TabsTrigger>
          <TabsTrigger value="pescitarian">Poisson</TabsTrigger>
        </TabsList>

        <TabsContent className="overflow-auto w-full" value="vegetarian">
          <div className="flex flex-col items-center">
            {vege.map((products, index) => (
              <StockKitCard
                key={index}
                quantity={products.quantity}
                name={products.productName}
                productId={products.productId}
                onQuantityChange={addToCart}
              />
            ))}
            <p className="p-5 italic text-gray-500 text-sm">
              Synchronisé à {getCurrentTime()}
            </p>
          </div>
        </TabsContent>
        <TabsContent className="overflow-auto w-full" value="flexitarian">
          <div className="flex flex-col items-center">
            {pesce.map((products, index) => (
              <StockKitCard
                key={index}
                quantity={products.quantity}
                name={products.productName}
                productId={products.productId}
                onQuantityChange={addToCart}
              />
            ))}
            <p className="p-5 italic text-gray-500 text-sm">
              Synchronisé à {getCurrentTime()}
            </p>
          </div>
        </TabsContent>
        <TabsContent className="overflow-auto w-full " value="pescitarian">
          <div className="flex flex-col items-center">
            {flexi.map((products, index) => (
              <StockKitCard
                key={index}
                quantity={products.quantity}
                name={products.productName}
                productId={products.productId}
                onQuantityChange={addToCart}
              />
            ))}
            <p className="p-5 italic text-gray-500 text-sm">
              Synchronisé à {getCurrentTime()}
            </p>
          </div>
        </TabsContent>
      </Tabs>
      <CheckKitButton cart={cart} />
    </>
  );
};
