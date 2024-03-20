import { auth } from "@/firebase/connection";

export const isLogged = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, reject);
    });
};