'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import Link from "next/link";

interface Header {
    title: string
    showMyAccount?: boolean
    showStats?: boolean
    showSponsor?: boolean
}

// Composant Header (entête)
export default function Header(props: Header) {
    return (
        <Navbar className="bg-red">
            <NavbarBrand>
                <Link href={"/"}><p className="font-bold text-inherit">CES&apos;Eat</p></Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <p>{props.title}</p>
            </NavbarContent>
            <NavbarContent justify="end">
                {props.showStats &&
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Statistiques</Link>
                    </NavbarItem>
                }
                <NavbarItem>
                    {props.showMyAccount &&
                        <Dropdown className="text-black">
                            <DropdownTrigger>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    Mon compte
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Account dropdown menu with description">
                                <DropdownSection title="Actions" showDivider>
                                    <DropdownItem
                                        key="consult"
                                        description="Mes informations"
                                        href="/account"
                                    >
                                        Mon compte
                                    </DropdownItem>
                                    <DropdownItem
                                        key="sponsor"
                                        description="Parrainer un ami"
                                        href="/sponsor"
                                    >
                                        Parrainage
                                    </DropdownItem>
                                </DropdownSection>
                                <DropdownSection title="Danger">
                                    <DropdownItem
                                        key="delete"
                                        className="text-danger"
                                        color="danger"
                                        description="Supprimer définitivement mon compte"
                                    >
                                        Effacer mon compte
                                    </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}