"use client";

import { TitlePage } from "@/components/title-page";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Globe, Mail, Sun, User } from "react-feather";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <>
      <Navbar />
      <TitlePage label="Paramètre" />
      <Card className="w-11/12 md:w-5/12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="ml-3 mr-3 flex justify-between text-base">
              <User className="mr-2" />
              <span>Nom</span>
              <span className="ml-auto mr-2">{user?.name}</span>
            </AccordionTrigger>
            <AccordionContent className="m-4">
              Nouveau nom
              <Input
                className="mt-2"
                type="text"
                placeholder={user?.name || ""}
              ></Input>
              <div className="flex justify-end mt-4">
                <Button variant="secondary">Enregistrer</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="ml-3 mr-3 flex justify-between text-base">
              <Mail className="mr-2" />
              <span>Adresse mail</span>
              <span className="ml-auto mr-2">{user?.email}</span>
            </AccordionTrigger>
            <AccordionContent className="m-4">
              Change ton adresse mail
              <Input
                className="mt-2"
                type="email"
                placeholder={user?.email || ""}
              ></Input>
              <div className="flex justify-end mt-4">
                <Button variant="secondary">Enregistrer</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="ml-3 mr-3 flex justify-between text-base">
              <span className="flex">
                {" "}
                <Sun className="mr-2" />
                Thème
              </span>
            </AccordionTrigger>
            <AccordionContent className="m-4">
              <RadioGroup defaultValue="white">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem disabled value="option-one" id="option-one" />
                  <Label htmlFor="white">Clair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Sombre</Label>
                </div>
                <div className="flex justify-end mt-4">
                  <Button disabled variant="secondary">
                    Enregistrer
                  </Button>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-none" value="item-4">
            <AccordionTrigger className="ml-3 mr-3 text-base">
              <span className="flex">
                {" "}
                <Globe className="mr-2" />
                Langue
              </span>
            </AccordionTrigger>
            <AccordionContent className="m-4">
              <RadioGroup defaultValue="fr">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fr" id="option-one" />
                  <Label htmlFor="option-one">Français</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="en" disabled id="option-two" />
                  <Label htmlFor="option-two">English</Label>
                </div>
              </RadioGroup>
              <div className="flex justify-end mt-4">
                <Button disabled variant="secondary">
                  Enregistrer
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <LogoutButton>Déconnexion</LogoutButton>
    </>
  );
};

export default SettingsPage;
