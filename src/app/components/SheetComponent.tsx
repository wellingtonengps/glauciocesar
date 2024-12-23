import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {IoMenu} from "react-icons/io5";

export default function SheetComponent() {
    return (
        <Sheet>
            <SheetTrigger>
                <IoMenu size={30}/>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
}
