import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Component } from "react";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />

      <div className="bg-beige">
        <div className="container mx-auto">
          <div className="flex flex-wrap place-content-center">
            <Card className="m-8">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Commandes</h4>
                <small className="text-default-500">Suivre et valider des commandes</small>
              </CardHeader>
              <CardBody>
                <Button as={Link} href="#">
                  <p>Accéder</p>
                </Button>
              </CardBody>
            </Card>

            <Card className="m-8">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Articles</h4>
                <small className="text-default-500">Créer, modifier, supprimer et consulter un article</small>
              </CardHeader>
              <CardBody>
                <Button as={Link} href="#">
                  <p>Accéder</p>
                </Button>
              </CardBody>
            </Card>
            <Card className="m-8">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Menus</h4>
                <small className="text-default-500">Créer, modifier, supprimer et consulter un menu</small>
              </CardHeader>
              <CardBody>
                <Button as={Link} href="#">
                  <p>Accéder</p>
                </Button>
              </CardBody>
            </Card>
            <Card className="m-8">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Livraisons</h4>
                <small className="text-default-500">Suivre des livraisons</small>
              </CardHeader>
              <CardBody>
                <Button as={Link} href="#">
                  <p>Accéder</p>
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
