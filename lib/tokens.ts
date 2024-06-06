import { v4 as uuidv4 } from 'uuid'
import { db } from './db'
import { getTokenByEmail } from '@/data/tokenVerification'

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getTokenByEmail(email)

    if (existingToken) {
        db.user.delete({ where: { id: existingToken.id } })
    }

    const verificationToken = await db.verificationToken.create(
        {
            data: {
                token,
                expires,
                email
            }
        }
    )

    return verificationToken;
}