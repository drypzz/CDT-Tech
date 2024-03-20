"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase/connection";
import { isLogged } from "@/utils/user";

export default function DashboardPage() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const checkAuth = useCallback(async () => {
        const logged = await isLogged();
        if (!logged) {
            router.push("/login");
        } else {
            setIsLoggedIn(true);
        }
    }, [router]);

    const handleLogout = async () => {
        await auth.signOut();
        router.push("/login");
    };

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return (
        <>
            {isLoggedIn && (
                <div>
                    <h1>Dashboard</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </>
    );
};