"use client";
import { Link } from "@/i18n/routing";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

const LoginForm = () => {
    const t = useTranslations("PAGE_LOGIN");
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = () => {};

    const hasErrors = Object.keys(form.formState.errors).length > 0;

    const handleAuthGoogle = () => {
        signIn("google");
    };

    return (
        <>
            <Form {...form}>
                <form className="m-auto w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    {hasErrors && (
                        <div className="p-[6px_12px] bg-[#fff6f6] border border-[#d02e2e] text-[#d02e2e] text-[calc(var(--type-base-size))]">
                            <ul className="list-disc ml-5">
                                <li>{t("LBL_INCORRECT_EMAIL_OR_PASSWORD")}</li>
                            </ul>
                        </div>
                    )}

                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="!text-foreground block cursor-pointer uppercase text-[calc(var(--type-base-size)-4px)] tracking-[.3em] font-normal">{t("LBL_EMAIL")}</FormLabel>
                                <FormControl>
                                    <Input {...field} autoComplete="off" className="text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px] border-[#c0c0c0]" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between">
                                    <FormLabel className="!text-foreground block cursor-pointer uppercase text-[calc(var(--type-base-size)-4px)] tracking-[.3em] font-normal">{t("LBL_PASSWORD")}</FormLabel>
                                    <Link href={`/account/forgot-password`} className="!mt-0 text-[calc(var(--type-base-size)-3px)] text-center">
                                        {t("LBL_FORGOT_PASSWORD")}
                                    </Link>
                                </div>
                                <FormControl>
                                    <Input {...field} autoComplete="off" className="text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px] border-[#c0c0c0]" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button variant={"default"} className="rounded-none p-[13px_20px] h-fit min-w-[90px] w-full uppercase text-[calc(var(--type-base-size)-2px)] tracking-[.3em]">
                        {t("LBL_SIGN_IN")}
                    </Button>

                    <Link href={`/account/register`} className="!mt-2 block text-[calc(var(--type-base-size))] text-center">
                        {t("LBL_CREATE_ACCOUNT")}
                    </Link>
                </form>
            </Form>

            <div className="flex items-center space-x-2 mt-2">
                <span className="w-full h-[1px] bg-border"></span>
                <span className="whitespace-nowrap text-[calc(var(--type-base-size))]">{t("LBL_SIGN_IN_WITH_AUTH")}</span>
                <span className="w-full h-[1px] bg-border"></span>
            </div>

            <div aria-label="social-connect">
                <div aria-label="social-facebook" className="min-h-[44px] mt-2 w-full m-[12px_auto]">
                    <button className="flex justify-evenly items-center w-full bg-white transition border-2 border-[#1877f2] overflow-hidden text-[#1877f2] h-[40px]">
                        <FaFacebook size={26} className="w-[30%] inline-block align-middle" />
                        <span className="w-[70%] inline-block text-left align-middle text-[calc(var(--type-base-size))] p-[0_10px] whitespace-nowrap overflow-hidden text-ellipsis">Continue with Facebook</span>
                    </button>
                </div>

                <div aria-label="social-twitter" className=" min-h-[44px] mt-2 w-full m-[12px_auto]">
                    <button className="block w-full bg-black hover:bg-[#1a1a1a] transition text-white h-[40px]">
                        <FaXTwitter size={26} className="w-[30%] inline-block align-middle" />
                        <span className="w-[70%] inline-block text-left align-middle text-[calc(var(--type-base-size))] p-[0_10px] whitespace-nowrap overflow-hidden text-ellipsis">Twitter</span>
                    </button>
                </div>

                <div aria-label="social-google" className=" min-h-[44px] mt-2 w-full m-[12px_auto]">
                    <button onClick={handleAuthGoogle} className="block w-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,.25)] hover:shadow-[0_0_3px_3px_rgba(66,133,244,.3)] transition text-black h-[40px]">
                        <FcGoogle size={26} className="w-[30%] inline-block align-middle" />
                        <span className="w-[70%] inline-block text-left align-middle text-[calc(var(--type-base-size))] p-[0_10px] whitespace-nowrap overflow-hidden text-ellipsis">Google</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default React.memo(LoginForm);
