import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { NewProductSchema } from "@/schemas";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "./ui/input";

interface AddProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: z.infer<typeof NewProductSchema>) => Promise<void>;
  isSubmitting: boolean;
}

const AddProductDialog: React.FC<AddProductDialogProps> = ({
  open,
  onClose,
  onSubmit,
  isSubmitting,
}) => {
  const form = useForm<z.infer<typeof NewProductSchema>>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      name: "",
      selectedOption: "all",
    },
  });
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-11/12 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Ajouter un produit</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription asChild>
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
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous les types</SelectItem>
                          <SelectItem value="vegetarian">Végétarien</SelectItem>
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
            </form>
          </Form>
        </AlertDialogDescription>
        <AlertDialogCancel onClick={onClose}>Annuler</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddProductDialog;
