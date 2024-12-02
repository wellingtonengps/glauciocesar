import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
    name: string;
    placeholder?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
    className?: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, register, error, className }) => {
    return (
        <div className="flex flex-col">
            <input
                id={name}
                {...register}
                placeholder={placeholder}
                className={`border text-sm rounded-lg px-2 py-1 ${className} ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
            {error && <p className="text-red-500 text-[10px]">{error.message}</p>}
        </div>
    );
};

export default Input;
