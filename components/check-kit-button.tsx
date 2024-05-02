"use client";

import { ShoppingBag } from "react-feather";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { CartItem } from "./kit-tab";
import { StockCard } from "./stock-card";
import { toast } from "sonner";

export const CheckKitButton = ({
  cart,
  onResetCart,
  onResetTrigger,
}: {
  cart: CartItem[];
  onResetCart: () => void;
  onResetTrigger: () => void;
}) => {
  const [showKitRecapDrawer, setshowKitRecapDrawer] = useState(false);
  const [isPending, startTansition] = useTransition();

  const handleValidateKitRecapDrawer = () => {
    startTansition(async () => {
      try {
        const response = await fetch("/api/kit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message);
          setshowKitRecapDrawer(false);
          onResetCart();
          onResetTrigger();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Une erreur est survenue lors de la validation du kit !");
      }
    });
  };

  return (
    <>
      <button
        className="fixed rounded-full bottom-20 bg-darkBlue text-white right-4 z-50 shadow-md md:hidden"
        onClick={() => setshowKitRecapDrawer(!showKitRecapDrawer)}
      >
        <ShoppingBag className="m-4" />
      </button>
      <Drawer open={showKitRecapDrawer}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Récape du kit !</DrawerTitle>
            <DrawerDescription>
              Vérifie bien les articles séléctionnées pour ne pas fausser les
              stocks !
            </DrawerDescription>
            <div className="flex flex-col items-center overflow-y-auto max-h-96">
              {cart.map((products, index) => (
                <StockCard
                  key={index}
                  quantity={products.quantity}
                  name={products.name}
                />
              ))}
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              disabled={isPending || cart.length === 0}
              onClick={handleValidateKitRecapDrawer}
            >
              Valider
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
