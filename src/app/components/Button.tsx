import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           isLoading = false,
                                           variant = 'primary',
                                           className = '',
                                           disabled,
                                           ...props
                                       }) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'secondary':
                return 'bg-gray-500 hover:bg-gray-600 text-white';
            case 'danger':
                return 'bg-red-500 hover:bg-red-600 text-white';
            default:
                return 'bg-blue-500 hover:bg-blue-600 text-white';
        }
    };

    return (
        <button
            className={`px-4 py-2 rounded transition-colors duration-200 ${
                isLoading || disabled ? 'opacity-50 cursor-not-allowed' : ''
            } ${getVariantStyles()} ${className}`}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? <span className="loader">Carregando...</span> : children}
        </button>
    );
};

export default Button;
