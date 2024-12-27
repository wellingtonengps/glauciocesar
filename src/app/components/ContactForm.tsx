"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

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
import { Textarea } from "@/components/ui/textarea"

import {Input} from "@/components/ui/input"
import {Card} from "@/components/ui/card";

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
        <Card className="p-6">
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
                                { /*<FormDescription>
                                    This is your public display name.
                                </FormDescription>*/}
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-center">
                        <Button className="bg-blue-500" type="submit">Enviar</Button>
                    </div>

                </form>
            </Form>
        </Card>
    )
}
