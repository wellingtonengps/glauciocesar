"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import contacts from '@/data/contacts.json'
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Textarea} from "@/components/ui/textarea"

import {Input} from "@/components/ui/input"
import {Card} from "@/components/ui/card";
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import React from "react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

const formSchema = z.object({
    name: z.string(),
    phone: z.number(),
    email: z.string().email(),
    message: z.string()
})

export function ContactForm() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Card className="p-6 w-[320px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                { /*<FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                { /*<FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                { /*<FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Menssagem</FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        rows={3}
                                        className="resize-none"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-center py-2">
                        <Button className="bg-blue-500 w-full" type="submit">Enviar</Button>
                    </div>

                    <Separator/>

                    <div className="flex pt-3 justify-evenly">
                        <Link href="" passHref>
                            <FaWhatsapp className="size-8 text-[#212833]"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/glauciocsilva/" passHref>
                            <FaLinkedin className="size-8 text-[#212833]"/>
                        </Link>
                        <Link href="https://github.com/Glauciocsilva" passHref>
                            <FaGithub className="size-8 text-[#212833]"/>
                        </Link>
                    </div>
                </form>
            </Form>
        </Card>
    )
}
