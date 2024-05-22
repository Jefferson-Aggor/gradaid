"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Social } from "./socials";
import { BackButton } from "./back-button";
import { cn } from "@/lib/utils";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    description: string;
    showSocial?: boolean;
    className?: string;
    showGrid?: boolean
}
export const CardWrapper = (
    {
        children, headerLabel, description, backButtonLabel, backButtonHref, showSocial, className, showGrid
    }: CardWrapperProps) => {
    return (
        <Card className={cn(showGrid ? 'w-full grid grid-cols-2' : 'w-[460px]')}>
            <div className={cn(showGrid ? "bg-[url('/aurora-bg-1.jpg')] rounded-tl-lg rounded-bl-lg bg-no-repeat bg-cover" : 'hidden')}></div>
            <div className={cn(!showGrid && 'flex flex-col justify-center items-center text-center')}>
                <CardHeader>
                    <CardTitle>{headerLabel}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {
                    showSocial && (
                        <CardFooter>
                            <Social />
                        </CardFooter>
                    )
                }
                <CardFooter className="flex justify-center">
                    <BackButton href={backButtonHref} label={backButtonLabel} />
                </CardFooter>
            </div>
        </Card>
    );
}

