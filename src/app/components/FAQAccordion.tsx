import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
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
    },
];

export default function FAQAccordion() {
    return (
        <Accordion type="single" collapsible>
            {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
