import React, { ReactNode } from 'react';

interface ServiceCardProps {
    children?: ReactNode;
    title: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ children, title }) => {
    return (
        <div
            id="serviceCard"
            className="w-52 h-52 p-4 rounded-lg shadow-lg bg-white/30 backdrop-blur-md border border-white/20 transition-transform transform hover:scale-105
            hover:shadow-2xl flex flex-col justify-evenly items-center"
        >
            {children}
            <h1 className="text-sm font-bold text-center">{title}</h1>
        </div>
    );
};

export default ServiceCard;
