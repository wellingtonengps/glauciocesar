"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import Image from "next/image";

export default function MenuCustom() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                            onClick={() => scrollToSection('inicio')}
                        >
                            Início
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                            onClick={() => scrollToSection('servicos')}
                        >
                            Serviços
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                            onClick={() => scrollToSection('avaliacoes')}
                        >
                            Avaliações
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                            onClick={() => scrollToSection('contato')}
                        >
                            Contato
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}