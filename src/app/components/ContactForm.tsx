import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";


const schema = z.object({
    email: z.string().email("E-mail inválido"),
    firstName: z.string().min(3, "Nome é obrigatório"),
    lastName: z.string().min(3, "Sobrenome é obrigatório"),
    phone: z.string().min(3, "Telefone obrigatório"),
    message: z.string().min(3, "Mensagem obrigatória"),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col bg-emerald-600 p-6 w-80  rounded-lg justify-around">
                <div className="flex flex-col">
                     <div className="flex justify-between">
                         <Input
                             name="firstName"
                             placeholder="Nome"
                             register={register('firstName', { required: 'Nome é obrigatório.' })}
                             error={errors.firstName}
                             className="w-32"
                         />

                         <Input
                             name="lastName"
                             placeholder="Sobrenome"
                             register={register('lastName', { required: 'Sobrenome é obrigatório.' })}
                             error={errors.lastName}
                             className="w-32"
                         />
                     </div>


                    <Input
                        name="phone"
                        placeholder="Telefone"
                        register={register('phone', { required: 'O telefone é obrigatório.' })}
                        error={errors.phone}
                        className="w-52 mt-6"
                    />

                    <Input
                        name="email"
                        placeholder="E-mail"
                        register={register('email', { required: 'E-mail inválido.' })}
                        error={errors.email}
                        className="w-full mt-6"
                    />

                    <Input
                        name="mesagem"
                        placeholder="Mensagem"
                        register={register('message', { required: 'Mensagem é obrigatória.' })}
                        error={errors.message}
                        className="w-full h-40 mt-6"
                    />
                </div>

                <div className="flex justify-center">
                    <Button type="submit" variant="primary" className="w-48 mt-4">Enviar</Button>
                </div>
            </div>
        </form>
    )
}