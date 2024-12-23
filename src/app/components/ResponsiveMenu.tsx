import { useEffect, useState } from "react";


import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import MenuCustom from "@/app/components/MenuCustom";

export default function ResponsiveMenu() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Verifica o tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 320 && width <= 425); // xs, sm, ms
        };

        handleResize(); // Checar tamanho inicial
        window.addEventListener("resize", handleResize); // Atualiza ao redimensionar

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile && (
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-xl bg-gray-800 text-white rounded-md">
                                ☰ {/* Ícone do menu hambúrguer */}
                            </button>
                        </SheetTrigger>
                        <SheetContent>
                            <MenuCustom />
                        </SheetContent>
                    </Sheet>
                </div>
            )}
        </>
    );
}
