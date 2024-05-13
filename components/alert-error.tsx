"use client"

import { LucideAlertTriangle } from "lucide-react";

interface AlertErrorProps {
    message?: string;
}
const AlertError = ({ message }: AlertErrorProps) => {
    if (!message) return null

    return (
        <div className="flex items-center p-3 gap-x-2 rounded-sm w-full bg-destructive/15 text-destructive">
            <LucideAlertTriangle />
            {message}
        </div>
    );
}

export default AlertError;