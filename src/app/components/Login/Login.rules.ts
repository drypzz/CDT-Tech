"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/connection";

import { isLogged } from "@/utils/user";

export const useLoginRules = () => {
   const router = useRouter();
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

   const checkAuth = useCallback(async () => {
      const logged = await isLogged();
      if (logged) {
         router.push("/");
      } else {
         setIsLoggedIn(false);
      }
   }, [router]);

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.currentTarget;

      const email = form.elements.namedItem("email") as HTMLInputElement;
      const password = form.elements.namedItem("password") as HTMLInputElement;

      if (!email.value || !password.value) {
         console.log("Email and password are required");
         return;
      };

      try {
         await signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
               router.push("/dashboard");
         }).catch((error) => {
               console.log(error.message);
               form.reset();
         });
      } catch (error) {
         console.log(error);
      };
   };

   useEffect(() => {
      checkAuth()
   }, [checkAuth]);

   return {
   isLoggedIn,
   handleSubmit
   }

}