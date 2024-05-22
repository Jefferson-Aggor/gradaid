"use client"

import { z } from 'zod'
import { useState, useTransition } from 'react'
import { RegisterSchema } from "@/schemas";
import { CardWrapper } from "@/components/card";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { register } from '@/actions/register';
import AlertError from '@/components/alert-error';
import AlertSuccess from '@/components/alert-success';

const SignUpPage = () => {
    const [isPending, setTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError('')
        setSuccess('')
        setTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (
        <CardWrapper headerLabel="Register account" description="Sign up with Aurora" backButtonLabel="Already have an account? Login" backButtonHref="/api/login" showSocial showGrid>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type='text' {...field} disabled={isPending} />
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
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' {...field} disabled={isPending} />
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
                                        <Input type='password' {...field} disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full bg-purple-900" type="submit">Create an account</Button>
                        <AlertError message={error} />
                        <AlertSuccess message={success} />
                    </div>
                </form>
            </Form>
        </CardWrapper>
    );
}

export default SignUpPage;