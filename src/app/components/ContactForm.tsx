import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


const schema = z.object({
    email: z.string().email("E-mail inválido"),
    firstName: z.string().min(3, "Nome é obrigatório"),
    lastName: z.string().min(3, "Sobrenome é obrigatório"),
    phone: z.string(),
    message: z.string()
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
            <div className="flex flex-col bg-emerald-600 p-6 w-80 h-[400px] rounded-lg justify-around">
                <div className="flex flex-col">
                    <input {...register('firstName')} placeholder="Nome"/>
                    {errors.firstName && <p className="p-0 font">{errors.firstName.message}</p>}

                    <input {...register('lastName')}  placeholder="Sobrenome"/>
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <input {...register('phone')}  placeholder="Telefone"/>
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <input {...register('email')}  placeholder="E-mail"/>
                    {errors.email && <p>{errors.email.message}</p>}

                    <input {...register('message')}  placeholder="Mensagem"/>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>

                <button type="submit" className="bg-amber-500">
                    Enviar
                </button>
            </div>
        </form>
    )
}