"use client";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

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
                        <div className="p-[6px_12px] bg-destructive border border-destructive-foreground text-destructive-foreground text-[calc(var(--type-base-size))]">
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
                                    <Input {...field} autoComplete="off" className="text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-[#c0c0c0] dark:border-input p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px]" />
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
                                    <Input {...field} autoComplete="off" className="text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-[#c0c0c0] dark:border-input p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px]" />
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
                                        className={cn("text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-[#c0c0c0] dark:border-input p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px]", {
                                            "bg-destructive border border-destructive-foreground text-destructive-foreground focus-visible:shadow-transparent": form.formState.errors[field.name],
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
                                        className={cn("text-[calc(var(--type-base-size))] placeholder:text-[calc(var(--type-base-size))] placeholder:opacity-80 border-[#c0c0c0] dark:border-input p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[42px]", {
                                            "bg-destructive border border-destructive-foreground text-destructive-foreground focus-visible:shadow-transparent": form.formState.errors[field.name],
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
