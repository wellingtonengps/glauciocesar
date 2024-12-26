import { useEffect, useState } from "react";
import MenuCustom from "./MenuCustom";
import FAQAccordion from "./FAQAccordion";
import SheetComponent from "./SheetComponent";
import Image from "next/image";

export default function MainComponent() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 550px)");

        const handleResize = () => setIsMobileView(mediaQuery.matches);
        handleResize();

        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <div className="no-scrollbar">
            <main className="w-full no-scrollbar">
                <menu
                    className="fixed top-0 left-0 z-50 flex shadow-lg backdrop-blur-md w-full h-14 flex-row justify-between items-center px-20 max-ms:px-6">
                    <Image
                        src="/1.png"
                        width={40}
                        height={40}
                        alt="Picture of the author"
                    />
                    {isMobileView ? <SheetComponent/> : <MenuCustom/>}
                    </menu>
            </main>
            <footer></footer>
        </div>
);
}
