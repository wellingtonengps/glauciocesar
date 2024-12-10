import React from 'react';

const Range: React.FC = () => {
    return (
        <div className="w-full h-14 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
            <div className="text-white text-lg whitespace-nowrap animate-marquee">
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
