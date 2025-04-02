"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {IoMenu} from "react-icons/io5";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";

export default function SheetComponent() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Sheet>
            <SheetTrigger>
                <IoMenu size={30}/>
            </SheetTrigger>
            <SheetContent className="pt-10 items-center w-[230px]">
                <SheetHeader>
                    <SheetTitle/>
                    <SheetDescription/>
                    <Avatar className="flex size-40">
                        <AvatarImage src="https://github.com/glauciocsilva.png"/>
                        <AvatarFallback>GC</AvatarFallback>
                    </Avatar>
                </SheetHeader>
                <div className="flex flex-col gap-3 mt-10">
                    <SheetClose asChild>
                        <button
                            onClick={() => scrollToSection('inicio')}
                            className="text-2xl text-left"
                        >
                            Inicio
                        </button>
                    </SheetClose>
                    <SheetClose asChild>
                        <button
                            onClick={() => scrollToSection('servicos')}
                            className="text-2xl text-left"
                        >
                            Serviços
                        </button>
                    </SheetClose>
                    <SheetClose asChild>
                        <button
                            onClick={() => scrollToSection('avaliacoes')}
                            className="text-2xl text-left"
                        >
                            Avaliações
                        </button>
                    </SheetClose>
                    <SheetClose asChild>
                        <button
                            onClick={() => scrollToSection('contato')}
                            className="text-2xl text-left"
                        >
                            Contatos
                        </button>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
}