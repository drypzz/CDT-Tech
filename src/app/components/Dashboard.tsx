"use client";

import type { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { auth } from "@/firebase/connection";

export const metadata: Metadata = {
    title: "CDT Tech - Dashboard",
    description: "Capacitação Digital para a Terceira Idade - Dashboard",
};

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
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};