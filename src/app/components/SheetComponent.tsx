import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {IoMenu} from "react-icons/io5";
import Link from "next/link";


export default function SheetComponent() {
    return (
        <Sheet>
            <SheetTrigger>
                <IoMenu size={30}/>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Gláucio Cesar</SheetTitle>
                    <SheetDescription>
                        <div className="flex flex-col">
                            <Link href="/#inicio">Inicio</Link>
                            <Link href="/#servicos">Serviços</Link>
                            <Link href="/#avaliacoes">Avaliações</Link>
                            <Link href="/#contato">Contatos</Link>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
}
