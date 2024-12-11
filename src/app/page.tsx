"use client"

import Menu from "@/app/components/Menu";
import ContactForm from "@/app/components/ContactForm";
import Carousel from "@/app/components/Carousel";
import ServiceCard from "@/app/components/serviceCard";
import {BsGraphUp, BsGraphUpArrow} from "react-icons/bs";
import { FaCubesStacked } from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import React from "react";
import Range from "@/app/components/Range";
import FAQ from "@/app/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import CustomerReview from "@/app/components/CustomerReview";

export default function Home() {

    const images = [
        "https://via.placeholder.com/800x400?text=Slide+1",
        "https://via.placeholder.com/800x400?text=Slide+2",
        "https://via.placeholder.com/800x400?text=Slide+3",
    ];

  return (
    <div className="no-scrollbar">
      <main className="flex no-scrollbar">
          <Menu/>
          <div
              className="mx-4 md:ml-20 no-scrollbar shadow-lg bg-gradient-to-r from-[#313a5c] via-[#5e6686] to-[#aab5dc] bg-opacity-70">
              <section id="inicio" className="mt-14 bg-blue-500 mb-10">
                  <h1 className="font-bold text-4xl mb-2">Inicio</h1>
                  <Carousel images={images}/>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim elit libero, quis mollis
                      est
                      vehicula sit amet. In hac habitasse platea dictumst. Duis sem diam, mollis at malesuada quis,
                      sollicitudin a leo. Praesent iaculis, ante nec dignissim congue, odio justo facilisis quam, quis
                      tincidunt velit tellus at lectus. Ut quis tellus fermentum, ullamcorper dui vitae, laoreet leo.
                      Integer consequat lorem enim, a tempus ipsum egestas quis. Pellentesque eget urna id magna dictum
                      eleifend. Mauris vulputate commodo quam, id fringilla lectus pretium ac. Curabitur vitae maximus
                      nunc,
                      id luctus neque. Duis nec rhoncus purus. Sed mauris elit, tempor ac felis sed, ullamcorper maximus
                      lorem. Vestibulum convallis odio aliquet aliquam pretium. Nulla facilisi. Vestibulum a arcu id
                      sapien
                      scelerisque hendrerit.

                      Praesent tincidunt gravida nisl, sit amet facilisis quam tincidunt eget. Morbi turpis ligula,
                      maximus
                      non interdum vitae, ultrices eget arcu. Maecenas feugiat tempus neque, facilisis laoreet felis
                      ultricies non. Aliquam luctus diam non ultrices cursus. Mauris massa dolor, ornare quis magna
                      quis,
                      semper pretium erat. Donec in dignissim ipsum. Maecenas maximus convallis tortor, id imperdiet
                      augue
                      vehicula et. Donec elementum quam non neque pharetra, eu pellentesque lectus consectetur. Quisque
                      sagittis risus id orci placerat semper. Nunc turpis ex, interdum sagittis hendrerit ac, viverra eu
                      risus.

                      Donec viverra vitae enim vel pulvinar. Aenean porttitor, justo vel hendrerit gravida, ipsum lorem
                      imperdiet ex, non bibendum justo tellus id sem. Nunc sed mi risus. In iaculis quam nec metus
                      eleifend,
                      sed blandit elit mattis. Nam vulputate justo ut commodo sodales. Fusce vel dui ac elit tincidunt
                      dictum. Nulla et mauris mattis, scelerisque odio id, mattis orci.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.
                  </p>
              </section>
              <section id="sobremim" className="mt-14 bg-red-500 mb-10">
                  <h1 className="font-bold text-4xl mb-2">Sobre mim</h1>
                  <p>
                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed facilisis sapien sit amet est sagittis, id luctus sem lacinia. Proin a nibh accumsan diam
                      convallis accumsan. Fusce tortor erat, aliquam a congue eget, finibus ac ligula. Fusce quis est
                      quis
                      massa ullamcorper blandit et ac ipsum. Suspendisse potenti. Sed cursus quis arcu et tempor. Nam a
                      vestibulum risus, eu posuere ligula. Mauris rhoncus nisi at pellentesque dapibus. Duis laoreet
                      euismod
                      urna, sed lacinia diam accumsan quis. In commodo ipsum ante, quis vulputate purus tincidunt vitae.
                      Donec auctor, elit placerat rhoncus consectetur, massa augue luctus nisl, vel ullamcorper justo
                      risus
                      vulputate diam. Proin suscipit aliquet orci nec malesuada. Sed ac ligula convallis, imperdiet
                      ligula
                      eget, tempus tortor.
                  </p>
              </section>
              <Range/>
              <section id="servicos" className="mt-14 mb-10">
                  <h1 className="font-bold text-4xl">Services</h1>
                  <div className="flex flex-row gap-10">
                      <ServiceCard title="Análise de Dados e Relatórios">
                          <AiOutlineBarChart size={30} className="font-bold"/>
                      </ServiceCard>
                      <ServiceCard title="Modelagem e Estruturação de Dados">
                          <IoCubeOutline size={30} className="font-bold"/>
                      </ServiceCard>
                      <ServiceCard title="Consultoria Estratégica em BI">
                          <BsGraphUpArrow size={30} className="font-bold"/>
                      </ServiceCard>
                      <ServiceCard title="Automação de Processos de Relatórios">
                          <BsGear size={30} className="font-bold"/>
                      </ServiceCard>
                      <ServiceCard title="Implementação de Ferramentas de BI">
                          <RiToolsFill size={30} className="font-bold"/>
                      </ServiceCard>
                  </div>
              </section>
              <section id="projetos">
                  <h1 className="font-bold text-4xl">Projetos</h1>
                  <p>
                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.


                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.
                  </p>
              </section>
              <section id="contato">
                  <h1 className="font-bold text-4xl">Contato</h1>
                  <ContactForm/>
                  <p>
                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed scelerisque, augue sit amet malesuada condimentum, lorem magna condimentum lectus, eget
                      vulputate
                      ante ex ut ex. Proin in finibus nunc. Mauris venenatis nisl felis, vel fringilla massa molestie
                      at.
                      Cras iaculis consequat accumsan. Duis dapibus tortor viverra nisl volutpat ornare. Nam placerat,
                      lorem
                      in semper elementum, quam tellus ultrices neque, vel fringilla elit sem ac mauris. Nullam eget
                      ullamcorper mi. Nam sollicitudin dignissim nulla, et ornare sem euismod vel. Integer hendrerit
                      viverra
                      tincidunt. Sed sit amet leo id justo mattis pharetra nec ut enim. Quisque gravida scelerisque nisl
                      id
                      gravida. Fusce porttitor elementum dictum. Aliquam congue tempus urna nec lacinia. Ut nibh leo,
                      laoreet tincidunt cursus nec, interdum in justo.

                      Sed facilisis sapien sit amet est sagittis, id luctus sem lacinia. Proin a nibh accumsan diam
                      convallis accumsan. Fusce tortor erat, aliquam a congue eget, finibus ac ligula. Fusce quis est
                      quis
                      massa ullamcorper blandit et ac ipsum. Suspendisse potenti. Sed cursus quis arcu et tempor. Nam a
                      vestibulum risus, eu posuere ligula. Mauris rhoncus nisi at pellentesque dapibus. Duis laoreet
                      euismod
                      urna, sed lacinia diam accumsan quis. In commodo ipsum ante, quis vulputate purus tincidunt vitae.
                      Donec auctor, elit placerat rhoncus consectetur, massa augue luctus nisl, vel ullamcorper justo
                      risus
                      vulputate diam. Proin suscipit aliquet orci nec malesuada. Sed ac ligula convallis, imperdiet
                      ligula
                      eget, tempus tortor.
                  </p>
              </section>
              <section id="perguntasFrequentes">
                  <h1 className="font-bold text-4xl">Perguntas Frequentes</h1>
                  <FAQ/>
              </section>
              <section id="avaliacoes" className="mb-10">
                  <h1 className="font-bold text-4xl ">Clientes e Avaliações</h1>
                  <div className="flex flex-row justify-center mt-10">
                      <CustomerReview
                          review="O serviço foi excelente! Superou minhas expectativas."
                          name="Maria Silva"
                          company="TechCorp Solutions"
                      />
                      <CustomerReview
                          review="O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          O serviço foi excelente! Superou minhas expectativas.
                          "
                          name="Maria Silva"
                          company="TechCorp Solutions"
                      />
                      <CustomerReview
                          review="O serviço foi excelente! Superou minhas expectativas."
                          name="Maria Silva"
                          company="TechCorp Solutions"
                      />
                      <CustomerReview
                          review="Altamente recomendado! Equipe muito atenciosa e profissional."
                          name="João Pereira"
                          company="Finance Plus"
                      />
                  </div>
              </section>
          </div>
      </main>
        <footer className="pl- row-start-3 flex gap-6  items-center justify-center h-64 border-t-2 pt-4">
            <div className="flex flex-col h-full w-60">
                <Image
                    src="/1.png"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                />
                <span className="text-sm">
                A M é uma empresa especializada em serviços de Business Intelligence (BI),
                que transforma dados em insights estratégicos para impulsionar negócios.
            </span>

            </div>

            <div className="flex flex-col h-full w-48 pt-2">
                <span className="font-bold">Institucional</span>
                <div className="flex flex-col gap-1 mt-4">
                    <Link
                        href="/#inicio"
                        className="group relative inline-block hover:text-blue-700 transition"
                    >
                        Inicio
                        <span
                            className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-10"></span>
                    </Link>
                    <Link
                        href="/#sobremim"
                        className="group relative inline-block hover:text-blue-700 transition"
                    >
                        Sobre mim
                        <span
                            className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-10"></span>
                    </Link>
                    <Link
                        href="/#servicos"
                        className="group relative inline-block hover:text-blue-700 transition"
                    >
                        Serviços
                        <span
                            className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-10"></span>
                    </Link>
                    <Link
                        href="/#projetos"
                        className="group relative inline-block hover:text-blue-700 transition"
                    >
                        Projetos
                        <span
                            className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-10"></span>
                    </Link>
                    <Link
                        href="/#contato"
                        className="group relative inline-block hover:text-blue-700 transition"
                    >
                        Contato
                        <span
                            className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-10"></span>
                    </Link>
                </div>
            </div>


            <div className="flex flex-col h-full pt-2">
                <span className="font-bold">Serviços</span>
                <div className="flex flex-col gap-1 mt-4">
                    <Link href="/#inicio">
                        Análise de Dados e Relatórios
                    </Link>
                    <Link href="/#sobremim">
                        Modelagem e Estruturação de Dados
                    </Link>
                    <Link href="/#servicos">
                        Consultoria Estratégica em BI
                    </Link>
                    <Link href="/#projetos">
                        Automação de Processos de Relatórios
                    </Link>
                    <Link href="/#contato">
                        Implementação de Ferramentas de BI
                    </Link>
                </div>
            </div>
            <div className="flex flex-col h-full pt-2">
                <span className="font-bold">Contato</span>
                <div className="flex flex-col gap-1 mt-4">
                    <span>Telefone: (33) 999938459</span>
                    <span>E-mail: wellington.engps@gmail.com</span>
                </div>
            </div>
        </footer>
    </div>
  );
}
""