"use client"
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { appName } from "@/config";
import { ArrowRightCircle } from "lucide-react";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

const font = Poppins({
    subsets: ['latin'],
    weight: ['500']
})

export const Hero = () => {
    return (
        <div className="bg-[url('/aurora-bg-1.jpg')] flex flex-col items-center justify-center py-10">
            <Navbar />
            <div className="mx-auto text-center">
                <HeroHighlight className={font.className}>
                    <h1 className="text-2xl sm:text-5xl md:text-7xl font-normal text-center mt-12 mb-5 text-white mx-auto">
                        Graduate School Applications
                    </h1>
                    <h1 className="text-2xl sm:text-5xl md:text-8xl font-bold text-center mb-7 text-white mx-auto"><Highlight>revolutionized by AI</Highlight></h1>
                </HeroHighlight>
                <p className="w-1/2 mx-auto text-white ">
                    {appName} is an AI copilot to Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, distinctio similique voluptatibus facilis magnam, odio dicta eaque ex ad cum qui odit est, aliquid numquam. Dolores quos vel enim possimus!
                </p>
                <div className="mt-10">
                    <Button size='lg' className=" bg-purple-800">
                        <ArrowRightCircle className="mr-2" /> Join The Waitlist
                    </Button>
                </div>
            </div>

            <div className="mt-12">
                <Image src={'/aurora.png'} alt="" height='1200' width='1200' className="object-contain rounded-xl" />
            </div>
        </div>

    )
}