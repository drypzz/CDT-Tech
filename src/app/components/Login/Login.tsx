"use client";

import { useLoginRules } from "./Login.rules";
import {
    LoginContainer,
    LoginTitleH1,
    LoginButton
} from "./Login.style";

export default function LoginPage() {
    const {
        isLoggedIn,
        handleSubmit
    } = useLoginRules();

    return (
        <>
            {!isLoggedIn && (
                <LoginContainer>
                    <LoginTitleH1>
                        Login
                    </LoginTitleH1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <LoginButton type="submit">Login</LoginButton>
                        </div>
                    </form>
                </LoginContainer>
            )}
        </>
    );
};