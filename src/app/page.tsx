"use client";

import { NextUIProvider } from "@nextui-org/system";
import Header from "./components/header";
import Footer from "./components/footer";
import CustomCard from "./components/customcard";

export default function Home() {
  return (
    <NextUIProvider className=" flex flex-col min-h-screen bg-beige">
      <Header/>
      <div className="flex-grow container mx-auto">
        <div className="flex flex-wrap place-content-center">
          <CustomCard title="Commandes" description="Suivre et valider des commandes" href="#" btnText="Accéder" />
          
        </div>
      </div>
      <Footer/>
    </NextUIProvider>
  );
}
