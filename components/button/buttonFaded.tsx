import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonFadedProps {
  title: string;
}

const ButtonFaded: React.FC<ButtonFadedProps> = ({ title }) => {
  return (
    <Button className="" color="primary" variant="faded">
      {title}
    </Button>
  );
};

export default ButtonFaded;
