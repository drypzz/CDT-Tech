import { Suspense } from "react";
import DashboardPage from "../components/Dashboard";

export default function Dashboard() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
        </Suspense>
    );
};