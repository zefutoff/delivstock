import React from "react";
import { Input } from "@nextui-org/react";

export default function InputEmail() {
  return (
    <Input
      type="email"
      variant="faded"
      label="Email"
      placeholder="Entre ton adresse mail"
    />
  );
}
