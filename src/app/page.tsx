
import { NextUIProvider } from "@nextui-org/system";
import Header from "./components/header";
import Footer from "./components/footer";
import PortalCard from "./components/portalCard";

export default function Home() {
  return (
    <NextUIProvider className=" flex flex-col min-h-screen bg-beige">
      <Header title="Portail de redirection" showMyAccount={false}/>
      <div className="flex-grow container ">
        <div className="grid place-content-center">
          <PortalCard href="#" btnText="Client" port="3001"/>
          <PortalCard href="#" btnText="Client" port="3001"/>
          <PortalCard href="#" btnText="Client" port="3001"/>
          <PortalCard href="#" btnText="Client" port="3001"/>
        </div>
      </div>
      <Footer/>
    </NextUIProvider>
  );
}
