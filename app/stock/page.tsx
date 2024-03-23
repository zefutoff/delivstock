"use client";

import { StockCard } from "@/components/stock-card";
import { TitlePage } from "@/components/title-page";
import { CreateButton } from "@/components/ui/create-button";
import { Navbar } from "@/components/ui/navbar";

const StockPage = () => {
  return (
    <>
      <Navbar />
      <TitlePage label="Stock" />
      <StockCard quantity={1} name="test" />
      <CreateButton />
    </>
  );
};

export default StockPage;
