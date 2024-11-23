"use client";
import dynamic from "next/dynamic";
import { useModal } from "@/provider/modal-provider";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { CartIcon, UserIcon } from "../icons";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useRouter } from "@/i18n/routing";
import ThemeToggler from "../global/theme-toggle";
import CartItem from "../cart/cart-item";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { GiButtonFinger } from "react-icons/gi";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

const CustomModal = dynamic(() => import("../global/custom-modal"), { ssr: false });
const AuthenticationForm = dynamic(() => import("../forms/authentication-form"), { ssr: false });

const InfoRight = () => {
    const { setOpen } = useModal();
    const router = useRouter();

    const handleForwardPageLogin = () => {
        router.push(`/account/login`);
    };

    const handleLogout = () => {
        signOut({
            callbackUrl: "/en/account/login",
        });
    };
    return (
        <>
            <ThemeToggler />
            <Button onClick={handleForwardPageLogin} variant={"ghost"} className="hidden md:flex bg-transparent p-[7.5px_15px] h-auto text-current hover:bg-transparent hover:text-current duration-0">
                <UserIcon size={28} />
            </Button>
            <Button
                onClick={() => {
                    setOpen(
                        <CustomModal className="md:w-[600px] p-0 gap-0 !rounded-none shadow-container !bg-card border-0 !w-[80%] sm:!w-[70%]">
                            <AuthenticationForm />
                        </CustomModal>
                    );
                }}
                variant={"ghost"}
                className="bg-transparent p-[7.5px_15px] h-auto text-current hover:bg-transparent hover:text-current duration-0"
            >
                <CiHeart size={28} />
            </Button>

            <Sheet>
                <SheetTrigger className="p-[7.5px_15px] h-auto flex items-center justify-center duration-0">
                    <CartIcon size={28} />
                </SheetTrigger>
                <SheetContent
                    className="p-0 h-full min-w-[490px]"
                    options={{
                        classClosedContent: "top-6",
                        classClosed: "h-7 w-7",
                    }}
                >
                    <div className="flex flex-col h-full">
                        <div className="p-[12px_30px] h-[80px] flex justify-start items-center">
                            <div className="text-3xl uppercase font-normal">
                                <h3 className="text-3xl">Cart</h3>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 overflow-y-auto p-[30px] pb-0">
                            <div>
                                <CartItem />
                            </div>
                            <div>
                                <Label className="text-[calc(var(--type-base-size)-3px)] text-foreground tracking-[.3em] uppercase mb-[10px] block ">Order note</Label>
                                <Textarea className="text-[calc(var(--type-base-size)-2px)] p-[8px_10px] focus-visible:ring-offset-0 focus-visible:ring-0 duration-300 focus-visible:shadow-shadow-border-sm rounded-[4px]" />
                            </div>
                        </div>
                        <div className="flex-grow-0 p-[0_30px] pt-[22px] pb-[30px]">
                            <div className="flex flex-col gap-[10px]">
                                <div className="flex flex-row justify-between items-center">
                                    <p className="uppercase text-sm tracking-[.3rem]">Subtotal</p>
                                    <p className="text-[calc(var(--type-base-size)-4px)]">$89.95</p>
                                </div>

                                <p className="text-[calc(var(--type-base-size)-4px)] opacity-80">Shipping, taxes, and discount codes calculated at checkout.</p>

                                <div></div>
                                <Button className="uppercase rounded-none p-[11px_20px] text-[calc(var(--type-base-size)-4px)] tracking-[.3em]">CHECK OUT</Button>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            <Button onClick={handleLogout} variant={"ghost"} className="hidden md:flex bg-transparent p-[7.5px_15px] h-auto text-current hover:bg-transparent hover:text-current duration-0">
                <LogOutIcon size={28} />
            </Button>
        </>
    );
};

export default React.memo(InfoRight);
