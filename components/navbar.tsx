"use client"

import { appName } from "@/config"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className=" text-white py-2 w-full">
            <div className="flex items-center justify-between container mx-auto w-9/12">
                <div className="uppercase">
                    <Link href='/'>
                        {appName}
                    </Link>
                </div>
                <div className="flex gap-x-2">
                    <Button variant='ghost' size='sm'>Login</Button>
                    <Button variant='default' size='sm'>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}