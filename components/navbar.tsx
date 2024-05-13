import { appName } from "@/config"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { getServerSession } from "next-auth"
import { Options } from "../app/api/auth/[...nextauth]/options"
import { LogInIcon, LogOutIcon } from "lucide-react"

export const Navbar = async () => {
    // const session = await getServerSession(Options)
    // console.log(session)
    return (
        <div className=" text-white py-2 w-full">
            <div className="flex items-center justify-between container mx-auto w-9/12">
                <div className="uppercase">
                    <Link href='/'>
                        {appName}
                    </Link>
                </div>
                <div className="flex gap-x-2">
                    {/* {
                        !session ? <Link href='/api/auth/signin'><Button variant='ghost' size='sm'><LogInIcon size='20px' className="mr-2" /> Login</Button></Link>
                            : <Link href="/api/auth/signout?callbackUrl=/"><Button variant='default' size='sm'><LogOutIcon size='20px' className="mr-2" /> Logout</Button></Link>
                    } */}
                    <Link href='/login'><Button variant='ghost' size='sm'><LogInIcon size='20px' className="mr-2" /> Login</Button></Link>



                </div>
            </div>
        </div>
    )
}