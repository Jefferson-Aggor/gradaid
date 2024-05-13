"use client"

import { LucideCheck } from "lucide-react";

interface AlertSuccessProps {
    message?: string;
}
const AlertSuccess = ({ message }: AlertSuccessProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center p-3 gap-x-2 rounded-sm w-full bg-emerald-500/15 text-emerald-500">
            <LucideCheck />
            {message}
        </div>
    );
}

export default AlertSuccess;