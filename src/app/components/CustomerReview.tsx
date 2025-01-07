import { FaQuoteRight } from "react-icons/fa";


const CustomerReview = (review: string, name: string, company: string) => {
    return (
        <div className="max-w-[280px] mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200 min-h-[200px]">
            <div className="flex items-center justify-between">
                <span className="text-gray-300 text-3xl">
                    <FaQuoteRight />
                </span>
            </div>
            <p className="text-gray-700 italic mt-4 line-clamp-5">
                "{review}"
            </p>
            <div className="mt-6">
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{company}</p>
            </div>
        </div>
    );
};

export default CustomerReview;
