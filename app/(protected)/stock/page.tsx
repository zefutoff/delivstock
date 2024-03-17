"use client";

import { TitlePage } from "@/components/title-page";
import { CreateButton } from "@/components/ui/create-button";
import { Navbar } from "@/components/ui/navbar";

const StockPage = () => {
  return (
    <>
      <Navbar />
      <TitlePage label="Stock" />
      <p>test</p>
      <CreateButton />
    </>
  );
};

export default StockPage;
