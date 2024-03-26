"use client";

import { Check } from "react-feather";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const SaveButton = () => {
  const [showConfirmKitReady, setShowConfirmKitReady] = useState(false);

  const handleCloseConfirmKitReady = () => {
    setShowConfirmKitReady(false);
  };
  return (
    <>
      <button
        className="fixed rounded-full bottom-20 bg-darkBlue text-white right-4 z-50 shadow-md md:hidden"
        onClick={() => setShowConfirmKitReady(!showConfirmKitReady)}
      >
        <Check className="m-4" />
      </button>

      <AlertDialog open={showConfirmKitReady}>
        <AlertDialogTrigger></AlertDialogTrigger>
        <AlertDialogContent className="w-11/12 rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Enregistrer le kit ?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="text-center">
            Tu n'a pas oublié de produit ? Sinon tu risque d'avoir à faire à la
            colère du respo inventaire !
          </AlertDialogDescription>
          <Button className="w-full">Ouin je suis sure !</Button>
          <AlertDialogCancel
            className="-mt-2"
            onClick={handleCloseConfirmKitReady}
          >
            Heu... attend je verifie ^^
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
