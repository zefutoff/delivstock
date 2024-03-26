import { TitlePage } from "@/components/title-page";
import { Navbar } from "@/components/ui/navbar";
import { SaveButton } from "@/components/ui/save-button";
import { NewProductSchema } from "@/schemas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import db from "@/lib/prisma";
import { StockCard } from "@/components/stock-card";
type ProductType = "all" | "vegetarian" | "flexitarian" | "pescitarian";

const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  return `${currentHour}:${currentMinute < 10 ? "0" + currentMinute : currentMinute}`;
};

const KitPage = async () => {
  const getVegetarianProductByType = await db.products.findMany({
    where: {
      OR: [{ type: { typeName: "all" } }, { type: { typeName: "vegetarian" } }],
    },
  });

  const getFlexitarianProductByType = await db.products.findMany({
    where: {
      OR: [
        { type: { typeName: "all" } },
        { type: { typeName: "flexitarian" } },
      ],
    },
  });

  const getPescitarianProductByType = await db.products.findMany({
    where: {
      OR: [
        { type: { typeName: "all" } },
        { type: { typeName: "flexitarian" } },
      ],
    },
  });
  return (
    <>
      <Navbar />
      <TitlePage label="Kit" />

      <Tabs defaultValue="vegetarian" className="flex flex-col w-11/12 h-5/6">
        <TabsList className="flex justify-center">
          <TabsTrigger value="vegetarian">Vegé</TabsTrigger>
          <TabsTrigger value="flexitarian">Viande</TabsTrigger>
          <TabsTrigger value="pescitarian">Poisson</TabsTrigger>
        </TabsList>

        <TabsContent className="overflow-auto w-full" value="vegetarian">
          <div className="flex flex-col items-center">
            {getVegetarianProductByType.map((products, index) => (
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
        </TabsContent>
        <TabsContent className="overflow-auto w-full" value="flexitarian">
          <div className="flex flex-col items-center">
            {getFlexitarianProductByType.map((products, index) => (
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
        </TabsContent>
        <TabsContent className="overflow-auto w-full " value="pescitarian">
          <div className="flex flex-col items-center">
            {getPescitarianProductByType.map((products, index) => (
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
        </TabsContent>
      </Tabs>

      <SaveButton />
    </>
  );
};

export default KitPage;
