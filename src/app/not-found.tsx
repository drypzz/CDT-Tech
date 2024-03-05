import { Metadata } from 'next';

import Link from 'next/link'
 
export const metadata: Metadata = {
    title: "CDT Tech - Not Found",
    description: "Capacitação Digital para a Terceira Idade - Not Found",
};

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
};