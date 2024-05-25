"use client";

import { useState, useEffect, useRef } from "react";
import { Plus } from "react-feather";

import { NewInventorySchema, NewProductSchema } from "@/schemas";

import { set, z } from "zod";

import { addProduct } from "@/action/add-product";
import revalidateProductType from "@/lib/revalidate";
import { toast } from "sonner";
import AddProductDialog from "./add-product-dialog";
import AddInventoryDialog from "./add-inventory-dialog";
import { CartItem } from "./kit-tab";
import { addInventory } from "@/action/edit-quantity-product";

type Option = "addInventory" | "addCategorie";

export const CreateButton = ({ products }: { products: CartItem[] }) => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddCategoryDialog, setShowAddCategoryDialog] = useState(false);
  const [showAddInventoryDialog, setShowAddInventoryDialog] = useState(false);

  const onSubmitProduct = async (values: z.infer<typeof NewProductSchema>) => {
    setIsSubmitting(true);

    try {
      const data = await addProduct(values);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Produit ajouté avec succès.");
        setTimeout(() => setShowAddCategoryDialog(false), 500);
        revalidateProductType();
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'ajout du produit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitInventory = async (
    values: z.infer<typeof NewInventorySchema>
  ) => {
    console.log(values);
    setIsSubmitting(true);

    try {
      const data = await addInventory(values);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Inventaire ajouté avec succès.");
        setTimeout(() => setShowAddInventoryDialog(false), 500);
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'ajout de l'inventaire.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      case "addInventory":
        setShowOptions(false);
        setShowAddInventoryDialog(true);
        break;
      case "addCategorie":
        setShowOptions(false);
        setShowAddCategoryDialog(true);
        break;
      default:
        break;
    }
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
              onClick={() => handleOptionClick("addCategorie")}
            >
              Un produit
            </li>
            <li
              className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleOptionClick("addInventory")}
            >
              Un inventaire
            </li>
          </ul>
        </div>
      )}

      <AddInventoryDialog
        open={showAddInventoryDialog}
        onClose={() => setShowAddInventoryDialog(false)}
        onSubmit={onSubmitInventory}
        isSubmitting={isSubmitting}
        products={products}
      />

      <AddProductDialog
        open={showAddCategoryDialog}
        onClose={() => setShowAddCategoryDialog(false)}
        onSubmit={onSubmitProduct}
        isSubmitting={isSubmitting}
      />
    </>
  );
};
