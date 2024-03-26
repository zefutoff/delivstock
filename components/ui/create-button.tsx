"use client";
import { useState, useEffect, useRef } from "react";
import { Plus } from "react-feather";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "./input";
import { Button } from "./button";
import { NewProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { addProduct } from "@/action/add-product";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import revalidateProductType from "@/lib/revalidate";
type Option = "option1" | "addCategorie";

export const CreateButton = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddCategoryDialog, setShowAddCategoryDialog] = useState(false);

  const form = useForm<z.infer<typeof NewProductSchema>>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      name: "",
      selectedOption: "all",
    },
  });

  //TODO - Revoir l'affichage quand le produit est enregistre avec succes

  const onSubmit = async (values: z.infer<typeof NewProductSchema>) => {
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const data = await addProduct(values);
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.success);
        setTimeout(() => setShowAddCategoryDialog(false), 500);
        revalidateProductType();
      }
    } catch (error) {
      setError("Une erreur est survenue lors de l'ajout du produit.");
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
      case "option1":
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
              Une categorie
            </li>
          </ul>
        </div>
      )}

      <AlertDialog open={showAddCategoryDialog}>
        <AlertDialogContent className="w-11/12 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Ajouter un produit</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => onSubmit(data))}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isSubmitting}
                          placeholder="Nom du produit"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
                <Controller
                  control={form.control}
                  name="selectedOption"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Sélectionnez une catégorie" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="all">Tous les types</SelectItem>
                            <SelectItem value="vegetarian">
                              Végétarien
                            </SelectItem>
                            <SelectItem value="pescitarian">
                              Pécitarien
                            </SelectItem>
                            <SelectItem value="flexitarian">
                              Flexitarien
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                {isSubmitting ? (
                  <Button disabled className="w-full">
                    En cours...
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Ajouter
                  </Button>
                )}
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
              </form>
            </Form>
          </AlertDialogDescription>
          <AlertDialogCancel onClick={() => setShowAddCategoryDialog(false)}>
            Annuler
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
