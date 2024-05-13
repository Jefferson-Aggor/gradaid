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

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    description: string;
    showSocial?: boolean;
    className?: string;
}
export const CardWrapper = (
    {
        children, headerLabel, description, backButtonLabel, backButtonHref, showSocial, className
    }: CardWrapperProps) => {
    return (
        <Card className="w-full grid grid-cols-2">
            <div className="bg-[url('/aurora-bg-1.jpg')] rounded-tl-lg rounded-bl-lg bg-no-repeat bg-cover"></div>
            <div>
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

