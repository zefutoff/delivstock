"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

const TestPage = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Sélectionnez une catégorie" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les types</SelectItem>
          <SelectItem value="vegetarian">Végétarien</SelectItem>
          <SelectItem value="pescitarian">Pécitarien</SelectItem>
          <SelectItem value="flexitarian">Flexitarien</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default TestPage;
