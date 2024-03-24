import { StockCard } from "@/components/stock-card";
import { TitlePage } from "@/components/title-page";
import { CreateButton } from "@/components/ui/create-button";
import { Navbar } from "@/components/ui/navbar";
import db from "@/lib/prisma";

const StockPage = async () => {
  const numberProductType = await db.productType.findMany();
  return (
    <>
      <Navbar />
      <TitlePage label="Stock" />
      {numberProductType.map((productType, index) => (
        <StockCard key={index} quantity={1} name={productType.typeName} />
      ))}

      <CreateButton />
    </>
  );
};

export default StockPage;
