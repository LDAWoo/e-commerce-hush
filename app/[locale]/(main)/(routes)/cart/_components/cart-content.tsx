import CartItem from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Separator } from "@/components/ui/separator";
const CartContent = () => {
    return (
        <div className="flex flex-wrap flex-col md:flex-row justify-between w-full">
            <div className="flex-[1_1_60%] md:pr-[100px]">
                <CartItem />
                <Separator className="my-4" />
                <CartItem />
                <Separator className="my-4" />
                <CartItem />
                <Separator className="my-4" />
                <CartItem />
                <Separator className="my-4" />
                <CartItem />
                <Separator className="my-4" />
                <CartItem />
            </div>
            <div className="flex-[0_1_35%] p-[30px] h-fit sticky top-[30%] bg-secondary">
                <div>
                    <Label className="text-[calc(var(--type-base-size)-3px)] text-foreground tracking-[.3em] uppercase mb-[10px] block ">Order note</Label>
                    <Textarea className="bg-transparent dark:border-secondary-foreground/30 text-[calc(var(--type-base-size)-2px)] p-[8px_10px] focus-visible:ring-offset-0 focus-visible:ring-0 duration-300 focus-visible:shadow-shadow-border-sm rounded-[4px]" />
                </div>

                <div className="flex flex-row justify-between items-center mt-[10px] mb-5">
                    <p className="text-[calc(var(--type-base-size))] ">Subtotal</p>
                    <p className="text-[calc(var(--type-base-size))]">$89.95</p>
                </div>

                <Button className="mb-5 uppercase rounded-none w-full p-[11px_20px] text-[calc(var(--type-base-size)-4px)] tracking-[.3em]">CHECK OUT</Button>
                <p className="mb-5 text-center text-[calc(var(--type-base-size)-4px)] opacity-80">Shipping, taxes, and discount codes calculated at checkout.</p>
            </div>
        </div>
    );
};

export default CartContent;
