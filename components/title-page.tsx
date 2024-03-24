import { Separator } from "@/components/ui/separator";

interface TitlePageProps {
  label: string;
}

export const TitlePage = ({ label }: TitlePageProps) => {
  return (
    <div className="flex flex-col w-full items-center  md:hidden">
      <p className="font-bold items-center m-3">{label}</p>
      <Separator className="bg-Grey mb-2.5" />
    </div>
  );
};
