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
import { cn } from "@/lib/utils";

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});
const RegisterForm = () => {
    const t = useTranslations("PAGE_REGISTER");
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = () => {};

    const hasErrors = Object.keys(form.formState.errors).length > 0;

    return (
        <>
            <Form {...form}>
                <form className="m-auto w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    {hasErrors && (
                        <div className="p-[6px_12px] bg-[#fff6f6] border border-[#d02e2e] text-[#d02e2e] text-[calc(var(--type-base-size))]">
                            <ul className="list-disc ml-5">
                                {form.getValues("password").length === 0 && <li>{t("LBL_PASSWORD_CANT_BE_BLANK")}</li>}
                                {form.getValues("password").length < 8 && form.getValues("password").length > 1 && <li>{t("LBL_PASSWORD_TOO_SHORT", { length: 8 })}</li>}
                                {form.getValues("email").length === 0 && <li>{t("LBL_EMAIL_CANT_BE_BLANK")}</li>}
                                {form.getValues("email").length > 0 && !form.getValues("email").match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && <li>{t("LBL_INVALID_EMAIL")}</li>}
                            </ul>
                        </div>
                    )}
                    <FormField
                        name="firstName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="!text-foreground block cursor-pointer uppercase text-[calc(var(--type-base-size)-4px)] tracking-[.3em] font-normal">{t("LBL_FIRST_NAME")}</FormLabel>
                                <FormControl>
                                    <Input {...field} autoComplete="off" className="text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px] border-[#c0c0c0]" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="lastName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="!text-foreground block cursor-pointer uppercase text-[calc(var(--type-base-size)-4px)] tracking-[.3em] font-normal">{t("LBL_LAST_NAME")}</FormLabel>
                                <FormControl>
                                    <Input {...field} autoComplete="off" className="text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px] border-[#c0c0c0]" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="!text-foreground block cursor-pointer uppercase text-[calc(var(--type-base-size)-4px)] tracking-[.3em] font-normal">{t("LBL_EMAIL")}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        autoComplete="off"
                                        className={cn("text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px] border-[#c0c0c0]", {
                                            "bg-[#fff6f6] border border-[#d02e2e] text-[#d02e2e] focus-visible:shadow-transparent": form.formState.errors[field.name],
                                        })}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="!text-foreground block cursor-pointer uppercase text-[calc(var(--type-base-size)-4px)] tracking-[.3em] font-normal">{t("LBL_PASSWORD")}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        autoComplete="off"
                                        className={cn("text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px] border-[#c0c0c0]", {
                                            "bg-[#fff6f6] border border-[#d02e2e] text-[#d02e2e] focus-visible:shadow-transparent": form.formState.errors[field.name],
                                        })}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <Button variant={"default"} className="rounded-none p-[13px_20px] h-fit min-w-[90px] w-full uppercase text-[calc(var(--type-base-size)-2px)] tracking-[.3em]">
                        {t("LBL_CREATE")}
                    </Button>

                    <div className="flex justify-end items-center text-[calc(var(--type-base-size))] !mt-2">
                        <p>{t("LBL_ALREADY_HAVE_ACCOUNT")}</p>
                        <Link href={`/account/login`} className="ml-1 hover:underline">
                            {t("LBL_SIGN_IN")}
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default React.memo(RegisterForm);
