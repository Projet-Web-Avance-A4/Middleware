
import { NextUIProvider } from "@nextui-org/system";
import Header from "./components/header";
import Footer from "./components/footer";
import CustomCard from "./components/customcard";
import PortalCard from "./components/portalCard";

export default function Home() {
  return (
    <NextUIProvider className=" flex flex-col min-h-screen bg-beige">
      <Header title="Portail de redirection" showStats={false} showSponsor={false}/>
      <div className="flex-grow container ">
        <div className="grid place-content-center">
          <PortalCard href="#" btnText="Client" />
          <PortalCard href="#" btnText="Restaurateur" />
          <PortalCard href="#" btnText="Livreur" />
          <PortalCard href="#" btnText="Développeur" />
          <PortalCard href="#" btnText="Service technique" />
          <PortalCard href="#" btnText="Service commercial" />
        </div>
      </div>
      <Footer/>
    </NextUIProvider>
  );
}
