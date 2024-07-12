"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { Session } from "inspector";

const signUpFormSchema = z
  .object({
    email: z
      .string()
      .email()
      .refine(
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        {
          message: "Invalid email format", // Custom error message
        }
      ),
    password: z.string().min(8, "Please check again"),
    confirmPassword: z.string().min(1, "Please check again"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This specifies which field the error should be associated with
  });

export const SignUpSubmit = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>, e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const userId = uuidv4();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userId }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, please try again");
      console.log(error);
    }
  };

  return { onSubmit, error, form };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const loginFormSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      {
        message: "Invalid email", // Custom error message
      }
    ),
  password: z.string().min(8, "Please check again"),
});

export const LoginSubmit = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>, e: any) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const email = e.target[0].value;
      const password = e.target[1].value;

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      localStorage.setItem("email", email);
      window.location.reload();

      if (res?.error) {
        setError("Invalid email or password");
        if (res?.url) {
          router.replace("/profile");
        }
      } else {
        setError("");
      }
    } finally {
      setIsLoading(false); // End loading regardless of signIn outcome
    }
  };
  return { onSubmit, error, isLoading, form };
};
