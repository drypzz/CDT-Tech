import { Metadata } from 'next';
import { Suspense } from "react";
import LoginPage from "../components/Login";

export const metadata: Metadata = {
    title: "CDT Tech - Login",
    description: "Capacitação Digital para a Terceira Idade - Login",
};

export default function Login() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
        </Suspense>
    );
};