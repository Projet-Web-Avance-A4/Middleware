
import { NextUIProvider } from "@nextui-org/system";
import Header from "./components/header";
import Footer from "./components/footer";
import PortalCard from "./components/portalCard";


export default function Home() {
  const baseURL = "http://localhost";

  return (
    <NextUIProvider className=" flex flex-col min-h-screen bg-beige">
      <Header title="Portail de redirection" showMyAccount={false}/>
      <div className="flex-grow container ">
        <div className="grid place-content-center">
          <PortalCard href={baseURL} port="3001" btnText="Client" />
          <PortalCard href={baseURL} port="3006" btnText="Restaurateur" />
          <PortalCard href={baseURL} port="3004" btnText="Livreur" />
          <PortalCard href={baseURL} port="3003" btnText="Développeur" />
          <PortalCard href={baseURL} port="3007" btnText="Service technique" />
          <PortalCard href={baseURL} port="3002" btnText="Service commercial" />
        </div>
      </div>
      <Footer />
    </NextUIProvider>
  );
}
