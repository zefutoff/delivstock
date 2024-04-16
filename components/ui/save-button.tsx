"use client";

import { ShoppingBag } from "react-feather";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { CartItem } from "../kit-tab";

export const CheckKitButton = ({ cart }: { cart: CartItem[] }) => {
  const [showKitRecapDrawer, setshowKitRecapDrawer] = useState(false);

  const handleCloseKitRecapDrawer = () => {
    setshowKitRecapDrawer(false);
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
          </DrawerHeader>
          <DrawerFooter>
            <Button>Valider</Button>
            <DrawerClose>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleCloseKitRecapDrawer}
              >
                Annuler
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
