"use client"

import React from "react";
import FAQAccordion from "@/app/components/FAQAccordion";
import SheetComponent from "@/app/components/SheetComponent";
import MenuCustom from "@/app/components/MenuCustom";
import Menu from "@/app/components/Menu";
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
import {Separator} from "@/components/ui/separator"
import {Button} from "@/components/ui/button";

import {GrInfo, GrLineChart} from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";



export default function Home() {

    return (
        <div className="no-scrollbar ">
            <main className="w-full no-scrollbar">
                <Menu/>
                <div className="">
                    <section className="max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
                        <div className="pt-20 pb-10 flex flex-wrap gap-10 justify-center max-mobile-l:justify-start items-center">
                            <Avatar className="flex size-60">
                                <AvatarImage src="https://github.com/glauciocsilva.png"/>
                                <AvatarFallback>GC</AvatarFallback>
                            </Avatar>
                            <Title/>

                        </div>

                        <div className="flex flex-wrap  gap-10">
                            <div className="text-[20px]">Transforme dados em decisões estratégicas!
                                Como analista de dados, ofereço criação de relatórios personalizados,
                                dashboards interativos em BI, insights com WeKnow e
                                muito mais para potencializar seus resultados.
                            </div>
                            <Button className="py-6 bg-[#597CB5] text-1xl">Quero orçamento para projetos</Button>
                        </div>
                    </section>

                    <section
                        className="flex flex-col  items-center py-10 mt-10 bg-blue-500 max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
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

                    <section
                        className="flex flex-col items-center py-10 max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
                        <h1 className="text-2xl text-blue-500">Clientes e Avaliações</h1>

                        <div className="flex flex-wrap mt-10 justify-center gap-10">
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

                    <section className="flex flex-wrap justify-center bg-[#597CB5] items-center py-10 mt-10
                                           max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
                        <div className="flex-1 text-left mb-10 tablet:mr-5">
                            <h2 className="text-white text-3xl mb-4">Conte me sobre seu próximo projeto</h2>
                            <span className="text-black text-2xl">
                                Estou aqui para ajudar a transformar suas ideias em realidade. Preencha o formulário e vamos criar algo incrível juntos!
                            </span>
                            <div className="flex flex-wrap justify-center pt-16 gap-10 text-white">
                                <div className="flex flex-col items-center gap-4">
                                    <GrLineChart className="size-10"/>
                                    <span>+ Desempenho</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <GrInfo className="size-10"/>
                                    <span>+ Foco estratégico</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <TbTargetArrow className="size-10"/>
                                    <span>+ Inteligência</span>
                                </div>
                            </div>
                        </div>
                        <ContactForm/>
                    </section>
                </div>
            </main>
            <footer className="flex w-full justify-center">
                <span className="text-[10px]">Desenvolvido por Wellington P. Silva - Contato: wellington.engps@gmail.com</span>
            </footer>
        </div>
    );
}