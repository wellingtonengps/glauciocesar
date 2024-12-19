// components/CustomLink.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

type CustomLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

const CustomLink = ({ href, children, className = '' }: CustomLinkProps) => {
    const defaultClasses = "group relative inline-block hover:text-blue-700 transition";
    const combinedClasses = `${defaultClasses} ${className}`.trim();

    return (
        <Link href={href} className={combinedClasses}>
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-10"></span>
        </Link>
    );
};

export default CustomLink;
