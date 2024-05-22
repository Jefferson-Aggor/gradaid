import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    password: z.string().min(1)
});

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    // contact: z.string(),
    // dateofbirth: z.string().date(),
    email: z.string().email(),
    password: z.string().min(6)
})