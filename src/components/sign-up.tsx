"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmailIcon, Logo, PasswordIcon } from "./svgs";
import Link from "next/link";
import { SignUpSubmit } from "@/utils/form-utils";

const SignUp = () => {
  const { onSubmit, error, form } = SignUpSubmit();

  return (
    <div className="w-full">
      <div className="w-full min-h-screen max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-y-[51px]">
        <Logo />
        <div className="w-full max-w-[476px] h-auto p-10 bg-white rounded-xl flex flex-col gap-y-10">
          <div className="w-full flex flex-col gap-y-2">
            <div className="text-[32px] leading-[150%] font-bold text-primary-darkGrey">
              Create account
            </div>
            <div className="text-[16px] leading-[150%] text-primary-grey">
              Let&apos;s get you started sharing your links!
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1 relative">
                    <FormLabel className="text-[12px] leading-[150%] text-primary-darkGrey">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className={`relative z-10 h-[48px] px-[44px] rounded-lg bg-transparent  ${
                          form.formState.errors.email || error
                            ? "focus-visible:ring-[1px] focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:shadow-[0_10px_30px_rgba(255,_57,_57,_0.1)] border-primary-red"
                            : "focus-visible:ring-[1px] focus-visible:ring-primary-violet focus-visible:ring-offset-0 focus-visible:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)]"
                        }`}
                        placeholder="e.g. alex@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <EmailIcon className="absolute z-0 top-[41px] left-[16px]" />
                    <FormMessage className="absolute z-0 top-[38px] right-[15px]" />
                    <FormDescription className="text-primary-red text-[12px] leading-[150%]">
                      {error && error}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1 relative">
                    <FormLabel className="text-[12px] leading-[150%] text-primary-darkGrey">
                      Create password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className={`relative z-10 h-[48px] px-[44px] rounded-lg bg-transparent  ${
                          form.formState.errors.password
                            ? "focus-visible:ring-[1px] focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:shadow-[0_10px_30px_rgba(255,_57,_57,_0.1)] border-primary-red"
                            : "focus-visible:ring-[1px] focus-visible:ring-primary-violet focus-visible:ring-offset-0 focus-visible:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)]"
                        }`}
                        placeholder="Atleast 8 characters"
                        {...field}
                      />
                    </FormControl>
                    <PasswordIcon className="absolute z-0 top-[39.2px] left-[16px]" />
                    <FormMessage className="absolute z-0 top-[39px] right-[15px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-1 relative">
                    <FormLabel className="text-[12px] leading-[150%] text-primary-darkGrey">
                      Confirm password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className={`relative z-10 h-[48px] px-[44px] rounded-lg bg-transparent  ${
                          form.formState.errors.confirmPassword
                            ? "focus-visible:ring-[1px] focus-visible:ring-red-500 focus-visible:ring-offset-0 focus-visible:shadow-[0_10px_30px_rgba(255,_57,_57,_0.1)] border-primary-red"
                            : "focus-visible:ring-[1px] focus-visible:ring-primary-violet focus-visible:ring-offset-0 focus-visible:shadow-[0_10px_30px_rgba(99,_60,_255,_0.2)]"
                        }`}
                        placeholder="Atleast 8 characters"
                        {...field}
                      />
                    </FormControl>
                    <PasswordIcon className="absolute z-0 top-[39.2px] left-[16px]" />
                    <FormMessage className="absolute z-0 top-[39px] right-[15px]" />
                  </FormItem>
                )}
              />
              <div className="text-[12px] leading-[150%] text-primary-grey">
                Password must contain at least 8 characters
              </div>
              <Button
                type="submit"
                className="w-full h-[46px] bg-primary-violet hover:bg-primary-pastelPurple rounded-lg transition ease-in-out duration-300"
              >
                Create new account
              </Button>
              <div className="w-full flex items-center justify-center">
                <div className="text-primary-grey text-[16px] leading-[150%]">
                  Already have an account?{" "}
                  <span className="text-primary-violet">
                    <Link href="/login" className="hover:underline">
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
