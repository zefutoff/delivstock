import { Card, CardContent } from "@/components/ui/card";

interface KitInfoProps {
  kits: number;
  kitsReady: number;
  kitsDelivered: number;
}

export const KitInfo = ({ kits, kitsReady, kitsDelivered }: KitInfoProps) => {
  return (
    <>
      <Card className="bg-darkBlue text-white rounded-lg shadow-none">
        <CardContent className="">
          <div>
            <p className="font-bold text-2xl ">{kitsReady}</p>
            <p className="text-whiteGrey">Kit Prets</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="items-center">
            <p className="font-bold text-2xl">{kits}</p>
            <p className="text-whiteGrey">Kit en stock</p>
          </div>
        </CardContent>
        <CardContent>
          <div>
            <p className="font-bold text-2xl">{kitsDelivered}</p>
            <p className="text-whiteGrey">Kit Livrés</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
