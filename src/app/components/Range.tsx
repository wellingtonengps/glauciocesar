import React from 'react';

const Range: React.FC = () => {
    return (
        <div className=" h-14 flex w-full items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
            <div className="flex text-white text-lg animate-marquee w-full">
                <span className="px-8">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
                <span className="px-8">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
                <span className="px-8">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
                <span className="px-8">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
                <span className="px-8">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
            </div>
        </div>
    );
};

export default Range;
