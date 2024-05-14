"use client"
import { z } from "zod"
import { LoginSchema } from "@/schemas";
import { CardWrapper } from "@/components/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";

import { login } from '@/actions/login'

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            setError('')
            setSuccess('')
            login(values)
                .then(data => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonHref="/api/signup"
            backButtonLabel="Don't have an account?"
            description="Log in to your account."
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder="eg: joe.doe@gmail.com" {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder="Enter password" {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full bg-purple-900" type="submit" disabled={isPending}>Login</Button>
                        <AlertError message={error} />
                        <AlertSuccess message={success} />
                    </div>
                </form>
            </Form>
        </CardWrapper>
    );
}

export default LoginForm;