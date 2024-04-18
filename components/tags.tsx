"use client";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagProps {
    icon?: any;
    label: string
    className?: string
}

export const Tag = ({ icon, label, className }: TagProps) => {
    return (
        <div>
            <Badge className={className}>{icon}{label}</Badge>
        </div>
    )
}