import { useState, useEffect, useRef } from "react";
import { Plus, Smile } from "react-feather";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./input";
import { Button } from "./button";
type Option = "option1" | "addCategorie";

export const CreateButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [showAddCategoryDialog, setShowAddCategoryDialog] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showOptions]);

  const handleOptionClick = (option: Option) => {
    switch (option) {
      case "option1":
        // Gérer l'action pour l'option 1
        break;
      case "addCategorie":
        setShowOptions(false);
        setShowAddCategoryDialog(true);
        break;
      default:
        break;
    }
  };

  const handleAddCategory = () => {
    setShowAddCategoryDialog(false);
  };

  const handleCloseAddCategoryDialog = () => {
    setShowAddCategoryDialog(false);
  };

  return (
    <>
      <button
        className="fixed rounded-full bottom-20 bg-darkBlue text-white right-4 z-50 shadow-md md:hidden"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Plus className="m-4" />
      </button>

      {showOptions && (
        <div ref={optionsRef} className="fixed bottom-36 right-4 z-50">
          <ul className="bg-white shadow-md rounded-md">
            <li
              className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleOptionClick("option1")}
            >
              Inventaire
            </li>
            <li
              className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleOptionClick("addCategorie")}
            >
              Une categorie
            </li>
          </ul>
        </div>
      )}

      <AlertDialog open={showAddCategoryDialog}>
        <AlertDialogTrigger></AlertDialogTrigger>
        <AlertDialogContent className="w-11/12 rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Ajouter une catégorie</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="flex">
            <Button disabled variant={"outline"} className="mt-2 mb-2">
              <Smile size={20} />
            </Button>
            <Input
              className="mt-2 mb-2 ml-2"
              type="text"
              placeholder="Nom de la categorie"
            ></Input>
          </AlertDialogDescription>
          <AlertDialogAction onClick={handleAddCategory}>
            Ajouter
          </AlertDialogAction>
          <AlertDialogCancel
            className="-mt-2"
            onClick={handleCloseAddCategoryDialog}
          >
            Annuler
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
