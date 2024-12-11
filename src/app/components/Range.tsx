import React from 'react';

const Range: React.FC = () => {
    return (
        <div className="flex h-14 items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
            <div className="flex flex-row animate-marquee whitespace-nowrap">
                <span className="px-6 text-white">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
                <span className="px-6 text-white">
                    Este é o texto que fica passando! Aproveite o efeito de rolagem! 🚀
                </span>
            </div>
        </div>
    );
};

export default Range;
