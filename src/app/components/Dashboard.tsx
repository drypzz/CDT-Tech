"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase/connection";

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                router.push("/login");
            }
        });

        return unsubscribe;
    }, [router]);

    const handleLogout = async () => {
        await auth.signOut();
        router.push("/login");
    };

    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};