import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqData: FAQItem[] = [
        {
            question: "Quais ferramentas são mais usadas em projetos de BI?",
            answer:
                "As ferramentas mais comuns incluem Power BI, Tableau, Looker, QlikView e ferramentas de visualização integradas a plataformas como Excel ou Google Data Studio.",
        },
        {
            question: "Quais dados são necessários para implementar uma solução de BI?",
            answer:
                "Depende do objetivo do projeto, mas geralmente são necessários dados financeiros, de vendas, de marketing, de operações e qualquer informação relevante para análise.",
        },
        {
            question: "O que é necessário para criar um dashboard personalizado?",
            answer:
                "Você precisa de dados organizados, uma ferramenta de visualização (como Power BI ou Tableau) e um entendimento claro dos KPIs que deseja monitorar.",
        },
        {
            question: "Qual a diferença entre relatórios tradicionais e BI?",
            answer:
                "Relatórios tradicionais mostram dados estáticos e históricos, enquanto BI fornece análises dinâmicas, em tempo real e preditivas para suporte à decisão.",
        }
    ];


    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="perguntasFrequentes"
            className="p-8 min-h-screen flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-3xl">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl mb-4 shadow-lg transition-transform duration-300"
                    >
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left text-xl font-medium text-white flex justify-between items-center"
                        >
                            <span>{item.question}</span>
                            {activeIndex === index ? (
                                <IoIosArrowUp className="" />
                            ) : (
                                <IoIosArrowDown className="" />
                            )}
                        </button>
                        <div
                            className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                                activeIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                            style={{ maxHeight: activeIndex === index ? "10rem" : "0" }}
                        >
                            <p className="text-white text-base">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
