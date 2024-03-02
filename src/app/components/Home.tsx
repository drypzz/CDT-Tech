"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CDT Tech",
    description: "Capacitação Digital para a Terceira Idade",
};

export default function HomePage(){
    return (
        <div>
            <h1>CDT Texh</h1>
            <p>Capacitação Digital para a Terceira Idade</p>
        </div>
    );
};