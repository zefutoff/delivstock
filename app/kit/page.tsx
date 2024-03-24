"use client";

import { TitlePage } from "@/components/title-page";
import { Navbar } from "@/components/ui/navbar";

const KitPage = async () => {
  return (
    <>
      <Navbar />
      <TitlePage label="Kit" />
    </>
  );
};

export default KitPage;
