import React, { useState, useEffect } from 'react';

const Title = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [speed, setSpeed] = useState(150);

    const words = ['Data Science', 'Business Intelligence', 'Big Data'];

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[loopIndex % words.length];
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
                setSpeed(75); // Speed up when deleting
            } else {
                setText((prev) => currentWord.slice(0, prev.length + 1));
                setSpeed(150); // Normal speed when typing
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause at full word
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopIndex((prev) => prev + 1);
            }
        };

        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, speed, loopIndex]);

    return (
        <div>
            <span className="text-4xl font-bold text-center text-gray-800 items-start">Hello,<br/> I'm Gláucio Cesar<br/></span>
            <span className="text-4xl font-bold text-center text-blue-500">{text}</span>
            <span className="text-blue-500 text-4xl">|</span>
        </div>
    );
};

export default Title;
