import { CardWrapper } from "@/components/card";

const AuthError = () => {
    return (
        <CardWrapper
            headerLabel="Error"
            description="Sorry, you cannot access this page"
            backButtonHref="/api/login"
            backButtonLabel="Go to login"
        >
            Error
        </CardWrapper>
    );
}

export default AuthError;