import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React, {ReactNode} from "react";

type ServiceProps = {
    children?: ReactNode;
    title: string,
    description: string

}

export default function Services({ title, children, description }: ServiceProps) {

    return (
        <Card className="w-64 h-60 flex flex-col justify-around items-center text-center p-6 ">
            {children}
            <span className="text-sm font-bold">{title}</span>
            <span className="text-sm">{description}</span>
        </Card>
    );
}