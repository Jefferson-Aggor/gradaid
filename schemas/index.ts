import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    password: z.string().min(1)
});

export const RegisterSchema = z.object({
    firstname: z.string().min(1, { message: "Firstname is required" }),
    lastname: z.string().min(1, { message: "Lastname is required" }),
    // contact: z.string(),
    // dateofbirth: z.string().date(),
    email: z.string().email(),
    password: z.string().min(6)
})