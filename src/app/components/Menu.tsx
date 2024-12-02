import Image from 'next/image';
import Link from "next/link";
import {useEffect, useState} from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <menu className="fixed flex bg-emerald-600 w-full h-14 flex-row justify-between items-center px-10 md:px-20">
            <Image
                src="/1.png"
                width={40}
                height={40}
                alt="Picture of the author"
            />
            <div className="flex-row hidden gap-7 sm:flex">
                <Link href="/#inicio">
                    Inicio
                </Link>
                <Link href="/#sobremim">
                    Sobre mim
                </Link>
                <Link href="/#servicos">
                    Serviços
                </Link>
                <Link href="/#projetos">
                    Projetos
                </Link>
                <Link href="/#contato">
                    Contato
                </Link>
            </div>
            <button className="sm:hidden" onClick={() => {
                setIsOpen(!isOpen)
                console.log(isOpen)
            }}>
                <IoMenu size={30} />
            </button>

            <div
                className={`fixed h-full w-60 top-0 right-0 z-30 bg-amber-500 p-3 transition-transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <IoClose size={30}/>
                </button>
                <div className="w-full justify-center flex">
                    <Image
                        src="/1.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"

                    />
                </div>
                <nav className="mt-10 flex flex-col gap-5 items-center">
                    <Link href="/#inicio" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link href="/#sobremim" onClick={() => setIsOpen(false)}>Sobre mim</Link>
                    <Link href="/#servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
                    <Link href="/#projetos" onClick={() => setIsOpen(false)}>Trabalhos</Link>
                    <Link href="/#contato" onClick={() => setIsOpen(false)}>Contato</Link>
                </nav>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </menu>
    );
}