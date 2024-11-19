"use client";
import React from "react";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string().email(),
});

const ForgotPasswordForm = () => {
    const t = useTranslations("PAGE_FORGOT_PASSWORD");
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
                                {form.getValues("email").length === 0 && <li>{t("LBL_EMAIL_CANT_BE_BLANK")}</li>}
                                {form.getValues("email").length > 0 && !form.getValues("email").match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && <li>{t("LBL_INVALID_EMAIL")}</li>}
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
                        {t("LBL_SUBMIT")}
                    </Button>

                    <Link href={`/account/login`} className="!mt-2 block text-center hover:underline">
                        {t("LBL_BACK_TO_LOGIN")}
                    </Link>
                </form>
            </Form>
        </>
    );
};

export default React.memo(ForgotPasswordForm);
