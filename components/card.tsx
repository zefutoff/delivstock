import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";

interface CardCustomProps {
  content: string;
}

const CardCustom: React.FC<CardCustomProps> = ({ content }) => {
  return (
    <Card>
      <CardBody className="items-center">
        <div className="flex h-5 items-center space-x-4">
          <div>
            <p>Kit Dispo</p>
            <p>0</p>
          </div>
          <Divider orientation="vertical" />
          <div>
            <p>Kit pret</p>
            <p>0</p>
          </div>
          <Divider orientation="vertical" />
          <div>
            <p>Kit Possible</p>
            <p>0</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardCustom;
