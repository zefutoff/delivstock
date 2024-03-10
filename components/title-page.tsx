import { Separator } from "@/components/ui/separator";

interface TitlePageProps {
  label: string;
}

export const TitlePage = ({ label }: TitlePageProps) => {
  return (
    <div className="flex flex-col w-full items-center -mb-7 md:hidden">
      <p className="font-bold items-center m-3">{label}</p>
      <Separator className="bg-Grey" />
    </div>
  );
};
