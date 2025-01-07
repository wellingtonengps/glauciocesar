import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {IoMenu} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";


export default function SheetComponent() {
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
                        <Link href="/#inicio" className="text-2xl">Inicio</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#servicos" className="text-2xl">Serviços</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#avaliacoes" className="text-2xl">Avaliações</Link>
                    </SheetClose >
                    <SheetClose asChild>
                        <Link href="/#contato" className="text-2xl">Contatos</Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>

    );
}
