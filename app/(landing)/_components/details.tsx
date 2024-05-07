import { Tag } from "@/components/tags"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { appName } from "@/config"

import { AlarmCheck, Fingerprint, Headset, LocateFixedIcon, Rocket, ShieldQuestion, Target, UserRoundPlus } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const font = Poppins({
    subsets: ['latin'],
    weight: ["600"]
})

export const Details = () => {
    return (
        <div className={font.className}>
            <div className="container mx-auto p-24">
                <div className="mx-20 mb-10">
                    <Tag label="Why Aurora?" icon={<ShieldQuestion />} className="bg-purple-800 gap-x-2 uppercase" />
                    <h2 className="tracking-tight text-7xl w-11/12 font-extrabold mt-5">
                        AI can write well, but does it get your grad school goals? <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-500">
                            {appName} does.
                        </span>
                    </h2>
                </div>
                <div className="grid mb-20 gap-x-5">
                    <Image src={'/SOP.png'} height='1200' width='1200' alt="dashboard-bg" />
                </div>

                <div className="flex flex-col bg-purple-400 pt-32 px-10 rounded-lg gap-y-5 ">
                    <Tag label="All in one platform" icon={<LocateFixedIcon />} className="bg-purple-800 gap-x-2 uppercase" />

                    <h2 className="text-6xl text-white">
                        Access all your graduate school application essentials <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-500">in one place.</span>
                    </h2>

                    <p>
                        Streamline your graduate school application process with {appName}. Gather all your essentials —transcripts, recommendation letters, personal statements, CVs and more — in one organized spot. Simplify your journey to higher education with everything you need at your fingertips.
                    </p>

                    <div className="flex justify-center">
                        <Image src='/dashboard.png' width='1200' height='1200' alt="" className="mt-10" />
                    </div>
                </div>
            </div>

            <div id="performance" className="bg-radial-gradient from-purple-100 to-white">
                <div className="p-16 flex flex-col gap-y-5 items-center text-center">
                    <Tag label="Boost Your Profile!!" icon={<Rocket />} className="bg-purple-800 gap-x-2 uppercase" />
                    <h2 className="text-6xl font-extrabold">
                        {appName} offers <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-500">customized mentorship</span> to boost your profile.
                    </h2>
                    <p className="text-muted-foreground w-8/12 mt-5">
                        {appName} enhances your graduate school applications with personalized, data-driven suggestions. Improve key areas and highlight your strengths to stand out in the admissions process.
                    </p>
                </div>
                <div className="grid grid-cols-2 px-20 gap-x-5">
                    <Image src='/aurora.png' width='1200' height='1200' alt="" />
                    <Image src='/aurora.png' width='1200' height='1200' alt="" />
                </div>
            </div>

            <div className="container mx-auto p-32">
                <h2 className="text-8xl font-bold w-9/12">
                    Why does <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500">{appName} </span>matter?
                </h2>
                <div className="mt-10 grid grid-cols-2 gap-x-10">
                    <div className="divide-y">
                        <div className="flex flex-col py-5 gap-y-2">
                            <AlarmCheck size="80px" className="text-purple-500" />
                            <p className="font-semibold text-3xl capitalize">Never miss deadlines</p>
                            <p className="text-muted-foreground">Stay on top of your schedule with {appName}'s timely deadline reminders and never miss a crucial date.</p>
                        </div>
                        <div className="flex flex-col py-5 gap-y-2">
                            <Fingerprint size="80px" className="text-purple-500" />
                            <p className="font-semibold text-3xl capitalize">Unique customization</p>
                            <p className="text-muted-foreground">
                                Experience personalized solutions with {appName}'s unique customization tailored to each school's specific requirements.</p>
                        </div>

                        <div className="flex flex-col py-5 gap-y-2">
                            <Headset size="80px" className="text-purple-500" />
                            <p className="font-semibold text-3xl capitalize">Custom mentorship</p>
                            <p className="text-muted-foreground">Experience personalized mentorship designed to meet your specific goals.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="rounded-t-2xl bg-gradient-to-br from-purple-400 to-white p-10 text-3xl">
                            “{appName}'s <span className="text-purple-600 italic">interactive community enables liked-minded applicants</span> to collaborate effectively"
                        </div>
                        <div>
                            <Image src='/people3.jpg' height='600' width='600' alt="" className="rounded-b-2xl object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                    <div className="container mx-auto w-10/12 flex flex-col items-center gap-y-10">
                        <Tag label="Join the train!!!" icon={<UserRoundPlus />} className="bg-purple-500 gap-x-2 uppercase" />
                        <h1 className="text-8xl text-center text-white">
                            Get started with {appName} today
                        </h1>
                        <Button variant='outline' size='lg' className="bg-purple-500">JOIN THE WAITLIST</Button>
                    </div>
                </div>
            </BackgroundGradientAnimation>
        </div>
    )
}