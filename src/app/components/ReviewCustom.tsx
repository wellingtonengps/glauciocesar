
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {type} from "node:os";
import {FaQuoteRight} from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type reviewCustomProps = {
    review: string,
    name: string,
    company: string
}

export default function ReviewCustom({ review, name, company }: reviewCustomProps) {

    return (
        <Card className="w-64">
            <div className="flex flex-col justify-between">
                <CardHeader>
                    <FaQuoteRight />
                </CardHeader>
                <CardContent>
                    <CardDescription>{review}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-row items-start">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ml-3">
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{company}</CardDescription>
                    </div>

                </CardFooter>
            </div>
        </Card>
    );
}