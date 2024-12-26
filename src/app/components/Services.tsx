import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React, {ReactNode} from "react";

type ServiceProps = {
    children?: ReactNode;
    title: string,

}

export default function Services({ title, children }: ServiceProps) {

    return (
        <Card className="w-48 h-48 flex flex-col justify-around items-center text-center p-6 ">
            {children}
            <span className="text-sm">{title}</span>
        </Card>
    );
}