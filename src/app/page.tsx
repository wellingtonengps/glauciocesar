"use client"

import React from "react";
import FAQAccordion from "@/app/components/FAQAccordion";
import SheetComponent from "@/app/components/SheetComponent";
import MenuCustom from "@/app/components/MenuCustom";
import MainComponent from "@/app/components/MainComponent";
import CarouselCustom from "@/app/components/CarouselCustom";
import CustomerReview from "@/app/components/CustomerReview";
import ReviewCustom from "@/app/components/ReviewCustom";
import Title from "@/app/components/TitleCustom";
import Services from "@/app/components/Services";
import {AiOutlineBarChart} from "react-icons/ai";
import {IoCubeOutline} from "react-icons/io5";
import {BsGear, BsGraphUpArrow} from "react-icons/bs";
import ServiceCard from "@/app/components/serviceCard";
import {RiToolsFill} from "react-icons/ri";
import {ContactForm} from "@/app/components/ContactForm";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator"
import {Button} from "@/components/ui/button";




export default function Home() {

    return (
        <div className="no-scrollbar">
            <main className="w-full no-scrollbar">
                <MainComponent/>
                {/*<div className="p-6 py-20 px-20 max-ms:px-6">*/}
                    <div className="">
                        <div className="pt-20 pb-10 flex flex-wrap gap-10 justify-start items-center px-[162px]">
                            <Avatar className="flex size-60">
                                <AvatarImage src="https://github.com/glauciocsilva.png"/>
                                <AvatarFallback>GC</AvatarFallback>
                            </Avatar>
                            <Title/>

                        </div>

                        <div className="flex flex-wrap px-[162px] gap-10">
                            <div className="text-[20px]">Transforme dados em decisões estratégicas!
                                Como analista de dados, ofereço criação de relatórios personalizados,
                                dashboards interativos em BI, insights com WeKnow e
                                muito mais para potencializar seus resultados.</div>
                            <Button className="h-16 bg-[#597CB5] text-2xl">Quero orçamento para projetos</Button>
                        </div>

                        <section className="flex flex-col items-center py-10 mt-10 bg-blue-500 px-[162px]">
                            <h1 className="text-2xl text-white">Serviços</h1>

                            <div className="flex flex-wrap mt-10 justify-center gap-10">
                                <Services title="Análise de Dados e Relatórios">
                                    <AiOutlineBarChart size={30} className="font-bold text-blue-500"/>
                                </Services>
                                <Services title="Modelagem e Estruturação de Dados">
                                    <IoCubeOutline size={30} className="font-bold text-blue-500"/>
                                </Services>
                                <Services title="Consultoria Estratégica em BI">
                                    <BsGraphUpArrow size={30} className="font-bold text-blue-500"/>
                                </Services>
                                <Services title="Automação de Processos de Relatórios">
                                    <BsGear size={30} className="font-bold text-blue-500"/>
                                </Services>
                                <Services title="Implementação de Ferramentas de BI">
                                    <RiToolsFill size={30} className="font-bold text-blue-500"/>
                                </Services>
                            </div>
                        </section>

                        <section className="flex flex-col items-center mb-10">
                            <h1 className="text-2xl text-blue-500">Clientes e Avaliações</h1>

                            <div className="grid grid-rows-2 mt-10 justify-center gap-10">
                                <ReviewCustom review="O serviço foi excelente! Superou minhas expectativas."
                                              name="Maria Silva"
                                              company="TechCorp Solutions"/>
                                <ReviewCustom
                                    review="A equipe foi extremamente profissional e entregou o projeto antes do prazo."
                                    name="João Pereira"
                                    company="Finance Plus"/>
                                <ReviewCustom
                                    review="A equipe foi extremamente profissional e entregou o projeto antes do prazo."
                                    name="João Pereira"
                                    company="Finance Plus"/>
                            </div>
                        </section>

                        <section className="flex flex-col items-center mb-10">
                            <h1 className="text-2xl text-blue-500">Entre em Contato</h1>
                            <ContactForm/>
                        </section>

                        <section className="flex flex-col items-center mb-10">
                            <h1 className="text-2xl text-blue-500">Perguntas frequentes</h1>
                            <FAQAccordion/>
                        </section>
                    </div>
            </main>
            <footer>

            </footer>
        </div>
    );
}