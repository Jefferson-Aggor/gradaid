"use server"
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { RegisterSchema } from "@/schemas"
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/lib/tokens'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) return { error: 'Invalid fields' }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if (existingUser) return { error: "Email alredy taken!!" }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    const verificationToken = await generateVerificationToken(email)
    console.log(verificationToken)
    // Send Verification token Email
    return { success: 'Verification Email Sent!' }
}