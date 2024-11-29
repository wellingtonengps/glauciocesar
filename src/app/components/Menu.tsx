import Image from 'next/image';
import Link from "next/link";

export default function Menu() {
    return (
        <menu className="fixed flex bg-emerald-600 w-full h-14 flex-row justify-around items-center">
            <Image
                src="/1.png"
                width={40}
                height={40}
                alt="Picture of the author"
            />
            <div className="flex flex-row gap-10 ">
                <Link href="/#inicio">
                    Inicio
                </Link>
                <Link href="/#trabalhos">
                    Trabalhos
                </Link>
                <Link href="/#sobremim">
                    Sobre mim
                </Link>
                <Link href="/#contato">
                    Contato
                </Link>
            </div>
        </menu>
    );
}