import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cn("px-64 h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-white", font.className)}>
            {children}
        </div>
    );
}

export default AuthLayout;