import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Link } from "@/i18n/routing";

type SignInFlow = "signIn" | "signUp";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

const AuthenticationForm = () => {
    const [state, setState] = React.useState<SignInFlow>("signIn");
    const [translate, setTranslate] = React.useState(false);
    const firstRender = React.useRef(true);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const isLoading = form.formState.isSubmitting;

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            setTranslate(true);
            const timer = setTimeout(() => {
                setTranslate(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [state]);

    const onSubmit = () => {};

    const handleAuthGoogle = () => {
        signIn("google");
    };

    return (
        <div
            className={cn("bg-card overflow-hidden transition-all ease-in-out duration-300", {
                "animate-slide-down": translate,
            })}
        >
            <div className="p-[15px] mt-8">
                <div className="mb-5">
                    <div className="text-[25px] text-center font-bold leading-[22px]">{state === "signIn" ? "Log in to your account" : "Create your account"}</div>
                </div>

                <div aria-label="social-connect">
                    <div aria-label="social-facebook" className="max-w-[86%] sm:max-w-[56%] min-h-[44px] mt-5 w-full m-[10px_auto]">
                        <button className="block w-full bg-background border border-input hover:bg-background transition-all hover:border-b-4 hover:border-primary/30 hover:text-accent-foreground h-[40px]">
                            <div className="w-[30%] inline-block align-middle">
                                <div className="flex items-center justify-center w-full relative">
                                    <div className="w-[17px] h-[17px] absolute bg-white rounded-full overflow-hidden -z-1" />
                                    <FaFacebook size={18} className="text-[#1877f2] absolute z-0" />
                                </div>
                            </div>
                            <span className="w-[70%] inline-block text-left align-middle text-[calc(var(--type-base-size)-3)] p-[0_10px] whitespace-nowrap overflow-hidden text-ellipsis">Facebook</span>
                        </button>
                    </div>

                    <div aria-label="social-twitter" className="max-w-[86%] sm:max-w-[56%] min-h-[44px] mt-2 w-full m-[10px_auto]">
                        <button className="block w-full bg-background border border-input hover:bg-background transition-all hover:border-b-4 hover:border-primary/30 hover:text-accent-foreground h-[40px]">
                            <FaXTwitter size={18} className="w-[30%] inline-block align-middle" />
                            <span className="w-[70%] inline-block text-left align-middle text-[calc(var(--type-base-size)-3)] p-[0_10px] whitespace-nowrap overflow-hidden text-ellipsis">Twitter</span>
                        </button>
                    </div>

                    <div aria-label="social-google" className="max-w-[86%] sm:max-w-[56%] min-h-[44px] mt-2 w-full m-[10px_auto]">
                        <button className="block w-full bg-background border border-input hover:bg-background transition-all hover:border-b-4 hover:border-primary/30 hover:text-accent-foreground h-[40px]">
                            <FcGoogle size={18} className="w-[30%] inline-block align-middle" />
                            <span className="w-[70%] inline-block text-left align-middle text-[calc(var(--type-base-size)-3)] p-[0_10px] whitespace-nowrap overflow-hidden text-ellipsis">Google</span>
                        </button>
                    </div>
                </div>

                <div>
                    <Form {...form}>
                        <form className="m-auto w-[86%] sm:w-[56%] space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} autoComplete="off" placeholder="Email address" className="text-[13px] placeholder:text-[13px] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[36px] border-[#c0c0c0] dark:border-input" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} autoComplete="off" placeholder="Password" className="text-[13px] placeholder:text-[13px] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[36px] border-[#c0c0c0] dark:border-input" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div>
                                <div className="flex justify-end">
                                    <Button variant={"default"} className="rounded-none p-[8px_16px] h-fit min-w-[90px]">
                                        <span className="uppercase leading-[18px]">{state === "signIn" ? "Log in" : "Sign up"}</span>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                    <div className="w-[86%] sm:w-[56%] m-auto text-right mt-2">
                        <Link href={`/account/forgot-password`} className="text-[15px]">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-[19px_20px_20px] border-t border-[#e2e2e2] dark:border-input">
                <div className="flex justify-end whitespace-nowrap items-center gap-1">
                    {state === "signIn" ? " No account?" : "Already have an account?"}
                    <Button
                        onClick={() => {
                            setState(state === "signIn" ? "signUp" : "signIn");
                        }}
                        className="text-[15px] h-fit p-0 bg-transparent hover:bg-transparent text-foreground"
                        variant={"ghost"}
                    >
                        {state === "signIn" ? "Sign up" : "Sign in"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationForm;
