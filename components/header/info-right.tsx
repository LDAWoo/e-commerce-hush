"use client";
import dynamic from "next/dynamic";
import { useModal } from "@/provider/modal-provider";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { CartIcon, UserIcon } from "../icons";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useRouter } from "@/i18n/routing";

const CustomModal = dynamic(() => import("../global/custom-modal"), { ssr: false });
const AuthenticationForm = dynamic(() => import("../forms/authentication-form"), { ssr: false });

const InfoRight = () => {
    const { setOpen } = useModal();
    const router = useRouter();

    const handleForwardPageLogin = () => {
        router.push(`/account/login`);
    };
    return (
        <>
            <Button onClick={handleForwardPageLogin} variant={"ghost"} className="bg-transparent p-[7.5px_15px] h-auto text-current hover:bg-transparent hover:text-current duration-0">
                <UserIcon size={28} />
            </Button>
            <Button
                onClick={() => {
                    setOpen(
                        <CustomModal className="md:w-[600px] p-0 gap-0 !rounded-none shadow-[0_5px_15px_rgba(0,0,0,.5)] !bg-transparent border-0 !w-[80%] sm:!w-[70%]">
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
                    className="p-[0_30px] h-full"
                    options={{
                        classClosedContent: "top-12",
                        classClosed: "h-7 w-7",
                    }}
                >
                    <SheetHeader className="p-[12px_0] h-[120px] flex justify-center">
                        <SheetTitle className="text-3xl uppercase font-normal">Cart</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col">
                        <div className="flex pt-[15px] pb-0"></div>
                    </div>
                    <SheetFooter>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex flex-row justify-between items-center]">
                                <p className="uppercase text-sm tracking-[.3rem]">Subtotal</p>
                                <p className="text-[13.6px] ">$89.95</p>
                            </div>

                            <p className="text-[13.6px] opacity-80">Shipping, taxes, and discount codes calculated at checkout.</p>

                            <Button className="bg-[#5A31f4]">Shop</Button>

                            <div></div>
                            <Button className=" uppercase">CHECK OUT</Button>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default React.memo(InfoRight);
