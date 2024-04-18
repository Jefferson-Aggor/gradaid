import { Tag } from "@/components/tags"
import { appName } from "@/config"

import { ShieldQuestion } from "lucide-react"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"

const font = Poppins({
    subsets: ['latin'],
    weight: ["600"]
})

export const Details = () => {
    return (
        <div className={cn("container mx-auto", font.className)}>
            <div className="mx-10 mb-10">
                <Tag label="Why Aurora?" icon={<ShieldQuestion />} className="bg-purple-800 gap-x-2 uppercase" />
                <h2 className="tracking-tight text-7xl w-10/12 font-extrabold mt-5">
                    {appName}'s grad school guides are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-500">customized for each school.</span>
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
                <Image src={'/aurora.png'} height='1200' width='1200' alt="aurora-bg" />
                <Image src={'/aurora.png'} height='1200' width='1200' alt="aurora-bg" />
            </div>


        </div>
    )
}