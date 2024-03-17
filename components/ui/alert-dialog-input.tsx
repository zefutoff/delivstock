import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "./alert-dialog";
import React from "react";

interface AlertDialogInputProps {
  title?: string;
  description: string;
}

export const AlertDialogInput = ({
  title,
  description,
}: AlertDialogInputProps) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <AlertDialog open={isDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCloseDialog}>
            Annuler
          </AlertDialogCancel>
          <AlertDialogAction>Enregistrer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
