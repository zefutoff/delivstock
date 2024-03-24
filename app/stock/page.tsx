import { StockCard } from "@/components/stock-card";
import { TitlePage } from "@/components/title-page";
import { CreateButton } from "@/components/ui/create-button";
import { Navbar } from "@/components/ui/navbar";
import db from "@/lib/prisma";

const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  return `${currentHour}:${currentMinute < 10 ? "0" + currentMinute : currentMinute}`;
};

const StockPage = async () => {
  const numberProductType = await db.products.findMany();
  return (
    <>
      <Navbar />
      <TitlePage label="Stock" />
      <div className="overflow-auto flex flex-col w-full h-5/6 items-center">
        {numberProductType.map((products, index) => (
          <StockCard
            key={index}
            quantity={products.quantity}
            name={products.productName}
          />
        ))}
        <p className="p-5 italic text-gray-500 text-sm">
          Synchronisé à {getCurrentTime()}
        </p>
      </div>

      <CreateButton />
    </>
  );
};

export default StockPage;
