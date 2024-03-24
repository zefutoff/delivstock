"use client";
import { useState, useEffect, useRef, useTransition } from "react";
import { Plus } from "react-feather";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./input";
import { Button } from "./button";
import { NewProductTypeSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { addCategoryType } from "@/action/add-category-type";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import revalidateProductType from "@/lib/revalidate";
type Option = "option1" | "addCategorie";

export const CreateButton = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [showAddCategoryDialog, setShowAddCategoryDialog] = useState(false);
  const form = useForm<z.infer<typeof NewProductTypeSchema>>({
    resolver: zodResolver(NewProductTypeSchema),
    defaultValues: {
      name: "",
    },
  });

  //TODO - Revoir l'affichage quand le produit est enregistre avec succes

  const onSubmit = (values: z.infer<typeof NewProductTypeSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      addCategoryType(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });

    setShowAddCategoryDialog(false);
    revalidateProductType();
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
            <AlertDialogTitle>Ajouter un produit</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <Form {...form}>
              <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          disabled={isPending}
                          placeholder="Nom du produit"
                        ></Input>
                      </FormControl>
                      <FormError message={error} />
                      <FormSuccess message={success} />
                      <Button className="w-full">Ajouter</Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </AlertDialogDescription>
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
