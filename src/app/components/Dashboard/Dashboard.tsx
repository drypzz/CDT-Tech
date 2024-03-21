"use client";

import { useDashboardRules } from "./Dashboard.rules";
import {
    DashboardContainer,
    DashboardTitleH1,
    DashboardButtonLogin   
} from "./Dashboard.style";

export default function DashboardPage() {
    const {
        isLoggedIn,
        handleLogout,
    } = useDashboardRules();

    return (
        <>
            {isLoggedIn && (
                <DashboardContainer>
                    <DashboardTitleH1>
                        Dashboard
                    </DashboardTitleH1>
                    <DashboardButtonLogin onClick={handleLogout}>Logout</DashboardButtonLogin>
                </DashboardContainer>
            )}
        </>
    );
};