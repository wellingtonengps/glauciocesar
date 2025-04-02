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
import React, {useState} from "react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    phone: z.string().min(1, "O telefone é obrigatório"),
    email: z.string().email("E-mail inválido"),
    message: z.string().min(1, "A mensagem é obrigatória")
});

export function ContactForm() {
    const [message, setMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setMessage(null);

        try {
            const response = await fetch("https://formspree.io/f/xkgnovne", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                setMessage("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                throw new Error("Erro ao enviar a mensagem.");
            }
        } catch (error) {
            setMessage("Erro ao enviar a mensagem. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card className="p-6 w-[320px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="seuemail@exemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                    <Input placeholder="(xx) xxxxx-xxxx" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensagem</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Descreva sua necessidade"
                                        rows={3}
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-center py-2">
                        <Button
                            className="bg-blue-500 w-full"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar"}
                        </Button>
                    </div>

                    {message && (
                        <div
                            className={`mt-4 p-2 text-center rounded ${
                                message.includes("sucesso") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}
                        >
                            {message}
                        </div>
                    )}

                    <Separator />

                    <div className="flex pt-3 justify-evenly">
                        <Link href={contacts.whatsapp} passHref target="_blank">
                            <FaWhatsapp className="size-8 text-[#212833]" />
                        </Link>
                        <Link
                            href={contacts.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-[#212833] hover:text-[#597CB5]"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin className="size-8" />
                        </Link>
                        <Link
                            href={contacts.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-[#212833] hover:text-[#597CB5]"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub className="size-8" />
                        </Link>
                    </div>
                </form>
            </Form>
        </Card>
    );
}
