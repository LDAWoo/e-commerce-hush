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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

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
                "scale-0": translate,
            })}
        >
            <div className="p-[15px] mt-8">
                <div className="mb-5">
                    <div className="text-[25px] text-center font-bold leading-[22px]">{state === "signIn" ? "Log in to your account" : "Create your account"}</div>
                </div>

                <div aria-label="social-connect">
                    <div aria-label="social-facebook" className="max-w-[56%] min-h-[44px] mt-5 w-full m-[10px_auto]">
                        <button className="flex justify-evenly items-center w-full bg-white transition border-2 border-[#1877f2] overflow-hidden text-[#1877f2] h-[40px]">
                            <div>
                                <FaFacebook size={26} />
                            </div>

                            <span className="text-[13px] p-[0_2px] w-[58%]">Continue with Facebook</span>
                        </button>
                    </div>

                    <div aria-label="social-twitter" className="max-w-[56%] min-h-[44px] mt-2 w-full m-[10px_auto]">
                        <button className="block w-full bg-black hover:bg-[#1a1a1a] transition text-white h-[40px]">
                            <FaXTwitter size={18} className="w-[30%] inline-block align-middle" />
                            <span className="w-[70%] inline-block text-left align-middle text-[15px] p-[0_10px]">Twitter</span>
                        </button>
                    </div>

                    <div aria-label="social-google" className="max-w-[56%] min-h-[44px] mt-2 w-full m-[10px_auto]">
                        <button onClick={handleAuthGoogle} className="block w-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,.25)] hover:shadow-[0_0_3px_3px_rgba(66,133,244,.3)] transition text-black h-[40px]">
                            <FcGoogle size={18} className="w-[30%] inline-block align-middle" />
                            <span className="w-[70%] inline-block text-left align-middle text-[15px] p-[0_10px]">Google</span>
                        </button>
                    </div>
                </div>

                <div>
                    <Form {...form}>
                        <form className="m-auto w-[56%] space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} autoComplete="off" placeholder="Email address" className="text-[13px] placeholder:text-[13px] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[36px] border-[#c0c0c0]" />
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
                                            <Input {...field} autoComplete="off" placeholder="Password" className="text-[13px] placeholder:text-[13px] placeholder:opacity-80 border-accent-foreground p-[8px_16px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none rounded-none h-[36px] border-[#c0c0c0]" />
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
                    <div className="w-[56%] m-auto text-right mt-2">
                        <Link href={`/account/login`} className="text-[15px]">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-[19px_20px_20px] border-t border-[#e2e2e2]">
                <div className="flex justify-end whitespace-nowrap items-center gap-1">
                    {state === "signIn" ? " No account?" : "Already have an account?"}
                    <Button
                        onClick={() => {
                            setState(state === "signIn" ? "signUp" : "signIn");
                        }}
                        className="text-[15px] h-fit p-0 bg-transparent hover:bg-transparent text-foreground"
                    >
                        {state === "signIn" ? "Sign up" : "Sign in"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthenticationForm;
