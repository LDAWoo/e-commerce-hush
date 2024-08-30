"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useModal } from "@/provider/modal-provider";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import FileUpload from "../upload/file-upload";

type Props = {
    id?: string;
    userData?: Partial<User>;
};

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    avatarUrl: z.string().url().optional(),
});

const UserDetails = ({ id, userData }: Props) => {
    const { data, setClose } = useModal();
    const user = data.user;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            email: user?.email || "",
            avatarUrl: user?.avatarUrl || "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    useEffect(() => {
        if (data.user) {
            form.reset(data.user);
        }
        if (userData) {
            form.reset(userData);
        }
    }, [userData, data]);

    function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO: Implement the update logic here
        setClose();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="avatarUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Avatar</FormLabel>
                            <FormControl>
                                <FileUpload apiEndpoint="avatar" onChange={field.onChange} value={field.value} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="johndoe@example.com" {...field} />
                            </FormControl>
                            <FormDescription>This is your email address.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <FormField
                    control={form.control}
                    name="agencyLogo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Avatar URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com/avatar.jpg" {...field} />
                            </FormControl>
                            <FormDescription>The URL of your avatar image.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <Button type="submit">Update Details</Button>
            </form>
        </Form>
    );
};

export default UserDetails;
