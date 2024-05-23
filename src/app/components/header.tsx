import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";

// Composant Header (entête)
export default function Header() {
    return (
        <Navbar className="bg-red">
            <NavbarBrand>
                <p className="font-bold text-inherit">CES&apos;Eat</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Commandes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page">
                        Livraisons
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Articles
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Menu
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Statistiques</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="secondary" href="#">
                        Mon compte
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}