import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewInventorySchema } from "@/schemas";
import { StockInventoryCard } from "@/components/stock-inventory-card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "./ui/separator";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form } from "@/components/ui/form";
import { CartItem } from "./kit-tab";

interface AddInventoryDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: z.infer<typeof NewInventorySchema>) => Promise<void>;
  isSubmitting: boolean;
  products: CartItem[];
}

const AddInventoryDialog: React.FC<AddInventoryDialogProps> = ({
  open,
  onClose,
  onSubmit,
  isSubmitting,
  products,
}) => {
  const form = useForm<z.infer<typeof NewInventorySchema>>({
    resolver: zodResolver(NewInventorySchema),
    defaultValues: {
      items: products
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const handleFormSubmit = async (data: any) => {
    await onSubmit(data);
    if (!isSubmitting) {
      form.reset();
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="w-11/12 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Inventaire</AlertDialogTitle>
          <Separator className="bg-Grey mb-2.5" />
        </AlertDialogHeader>
        <AlertDialogDescription asChild>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              {fields.map((field, index) => (
                <Controller
                  key={field.id}
                  name={`items.${index}`}
                  control={form.control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <StockInventoryCard
                      name={value.name}
                      quantity={value.quantity}
                      onChange={(e) =>
                        onChange({
                          ...value,
                          quantity: parseInt(e.target.value, 10) || 0,
                        })
                      }
                      onBlur={onBlur}
                    />
                  )}
                />
              ))}
              <div className="flex flex-col justify-end mt-4">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "En cours..." : "Ajouter"}
                </Button>
                <AlertDialogCancel
                  type="button"
                  className="ml-2"
                  onClick={onClose}
                >
                  Annuler
                </AlertDialogCancel>
              </div>
            </form>
          </Form>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddInventoryDialog;
