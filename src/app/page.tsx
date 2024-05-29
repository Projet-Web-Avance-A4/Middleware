"use client";

import { NextUIProvider } from "@nextui-org/system";
import Header from "./components/header";
import CustomCard from "./components/customcard";

export default function Home() {
  return (
    <NextUIProvider className="h-screen bg-beige">
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-wrap place-content-center">
          <CustomCard title="Composants" description="Télécharger le composant de votre choix" href="/download-components"
            btnText="Accéder" />
        </div>
      </div>
    </NextUIProvider>
  );
}
