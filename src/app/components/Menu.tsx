import {useEffect, useState} from "react";
import MenuCustom from "./MenuCustom";
import SheetComponent from "./SheetComponent";
import Image from "next/image";
import { LuTrendingUp } from "react-icons/lu";

export default function Menu() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 550px)");

        const handleResize = () => setIsMobileView(mediaQuery.matches);
        handleResize();

        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <menu
            className="fixed top-0 left-0 z-50 flex shadow-lg backdrop-blur-md w-full h-14 flex-row justify-between items-center  max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
            <LuTrendingUp className="text-4xl font-bold"/>
            {isMobileView ? <SheetComponent/> : <MenuCustom/>}
        </menu>
    );
}
