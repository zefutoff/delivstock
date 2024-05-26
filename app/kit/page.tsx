import { fetchKitData } from "@/action/fecth-kit-data";
import { KitDataComponent } from "@/components/kit-data";
import { TitlePage } from "@/components/title-page";
import { Navbar } from "@/components/ui/navbar";

const KitPage = async () => {
  const data = await fetchKitData();
  return (
    <>
      <Navbar />
      <TitlePage label="Kit" />
      <KitDataComponent {...data} />
    </>
  );
};

export default KitPage;
