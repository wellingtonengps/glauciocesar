"use client"

import React from "react";

import Menu from "@/app/components/Menu";
import ReviewCustom from "@/app/components/ReviewCustom";
import Title from "@/app/components/TitleCustom";
import Services from "@/app/components/Services";
import {ContactForm} from "@/app/components/ContactForm";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

import {GrInfo, GrLineChart} from "react-icons/gr";
import {AiOutlineBarChart} from "react-icons/ai";
import {IoCubeOutline} from "react-icons/io5";
import {BsGear, BsGraphUpArrow} from "react-icons/bs";
import {RiToolsFill} from "react-icons/ri";
import {TbTargetArrow} from "react-icons/tb";

import services from '@/data/services.json';
import reviews from '@/data/reviews.json';

import {IconType} from "react-icons";
import MapContainer from "@/app/components/Maps";

const iconMap: Record<string, IconType> = {
    AiOutlineBarChart: AiOutlineBarChart,
    IoCubeOutline: IoCubeOutline,
    BsGraphUpArrow: BsGraphUpArrow,
    BsGear: BsGear,
    RiToolsFill: RiToolsFill,
};

export default function Home() {

    return (
        <div className="no-scrollbar ">
            <main className="w-full no-scrollbar">
                <Menu/>
                <div className="">
                    <section id="inicio" className="max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
                        <div
                            className="pt-20 pb-10 flex flex-wrap gap-10 justify-center mobile-l:justify-start items-center">
                            <Avatar className="flex size-60">
                                <AvatarImage src="https://github.com/glauciocsilva.png"/>
                                <AvatarFallback>GC</AvatarFallback>
                            </Avatar>
                            <Title/>
                        </div>

                        <div className="flex flex-wrap gap-10 justify-center items-center mobile-l:justify-start">
                            <div className="text-[20px]">Transforme dados em decisões estratégicas!
                                Como analista de dados, ofereço criação de relatórios personalizados,
                                dashboards interativos em BI, insights com WeKnow e
                                muito mais para potencializar seus resultados.
                            </div>
                            <Button className="py-6 bg-[#597CB5] text-1xl" onClick={() => {
                                const section = document.getElementById('contato')
                                if (section) {
                                    section.scrollIntoView({behavior: "smooth"})
                                }
                            }}>Quero orçamento para projetos</Button>
                        </div>
                    </section>

                    <section
                        id="servicos"
                        className="scroll-mt-14 flex flex-col  items-center py-10 mt-10 bg-blue-500 max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
                        <h1 className="text-2xl text-white">Serviços</h1>

                        <div className="flex flex-wrap mt-10 justify-center gap-10">
                            {services.services.map((service, index) => {
                                const IconComponent = iconMap[service.icon];
                                return (
                                    <Services key={index} title={service.title} description={service.description}>
                                        <IconComponent size={30} className="font-bold text-blue-500"/>
                                    </Services>
                                );
                            })}
                        </div>
                    </section>

                    <section id="avaliacoes"
                             className="scroll-mt-14 flex flex-col items-center py-10 max-tablet:px-8 tablet:px-10 laptop:px-20 desktop:px-40">
                        <h1 className="text-2xl text-blue-500">Clientes e Avaliações</h1>

                        <div className="flex flex-wrap mt-10 justify-center gap-10">
                            {reviews.reviews.map((review, index) => (
                                <ReviewCustom
                                    key={index}
                                    review={review.review}
                                    name={review.name}
                                    company={review.company}
                                />
                            ))}
                        </div>
                    </section>

                    <section id="contato" className="scroll-mt-14 flex flex-wrap justify-center bg-[#597CB5] items-center py-10 mt-10
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
                        <div>
                            <ContactForm/>
                        </div>
                        <MapContainer />
                    </section>
                </div>
            </main>
            <footer className="flex w-full justify-center  bg-[#597CB5]">
                <span
                    className="text-[10px] text-white">Desenvolvido por Wellington P. Silva - Contato: wellington.engps@gmail.com</span>
            </footer>
        </div>
    )
        ;
}