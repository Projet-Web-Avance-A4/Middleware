"use client";

import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/header";

export default function Commandes() {
    return (
        <NextUIProvider className="h-screen bg-beige">
            <Header title="Restaurateur - Commandes" showMyAccount={true} showSponsor={true} showStats={true}/>
            <div className="container mx-auto">
                Hello world
            </div>
        </NextUIProvider>
    );
}