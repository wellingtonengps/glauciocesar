import React, {useEffect, useState} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface CarouselProps {
    images: string[];
    interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const autoSlide = setInterval(handleNext, interval);

        return () => clearInterval(autoSlide);
    }, [interval, currentIndex]);

    return (
        <div className="relative mx-auto overflow-hidden">
            <div className="w-full h-80 flex items-center justify-center">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>

            <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white p-2  transition"
            >
                <FaArrowLeft />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white p-2 transition"
            >
                <FaArrowRight />
            </button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition ${
                            currentIndex === index ? "bg-white" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
