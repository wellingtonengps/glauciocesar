
import Image from 'next/image';



export default function Menu() {
    return (
        <menu className="fixed flex bg-emerald-600 w-full h-14 flex-row justify-around items-center">
            <Image
                src="/src/app/favicon.ico" // Caminho relativo à pasta "public"
                alt="Descrição da imagem"
                width={10}
                height={10}
            />
            <div className="flex flex-row gap-10 ">
                <li>
                    Inicio
                </li>
                <li>
                    Trabalhos
                </li>
                <li>
                    Sobre mim
                </li>
                <li>
                    Contato
                </li>
            </div>
        </menu>
    );
}