"use client";
import CartItem from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "@/i18n/routing";
import { useAppSelector } from "@/lib/shared/hook";
import { RootState } from "@/lib/shared/store";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { useLocale } from "next-intl";
import React from "react";

const items = [
    {
        product: {
            id: 1,
            name: "Baby Boy",
            description: "Comfortable cotton t-shirt",
            price: 19.99,
            category: "Tops",
            image: "https://hush.shop/cdn/shop/files/IMG_1427_1512x.jpg?v=1721845295",
            rating: 4.5,
            stock: 100,
            size: "S",
            color: "White",
        },
        quantity: 1,
    },
    {
        product: {
            id: 2,
            name: "Baby Girl",
            description: "Stylish slim fit denim jeans",
            price: 59.99,
            category: "Bottoms",
            image: "https://hush.shop/cdn/shop/files/IMG_1923_1512x.jpg?v=1721845278",
            rating: 4.3,
            stock: 80,
            size: "28",
            color: "Blue",
        },
        quantity: 1,
    },
];

const CartContent = () => {
    const router = useRouter();
    const locale = useLocale();

    const { user } = useAppSelector((state: RootState) => state.user);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleCheckout = async () => {
        try {
            setIsLoading(true);
            const metadata = {
                userId: user!.id,
                orderNumber: nanoid(11),
                customerEmail: user?.email ?? "unknown",
                customerName: user?.name ?? "unknown",
            };

            const response = await axios.post(`/api/stripe/checkout`, {
                items,
                metadata,
                locale,
            });
            if (response) {
                setIsLoading(false);
                window.location.href = response.data.url;
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

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

                <Button disabled={isLoading} className="mb-5 uppercase rounded-none w-full p-[11px_20px] text-[calc(var(--type-base-size)-4px)] tracking-[.3em]" onClick={handleCheckout}>
                    CHECK OUT
                </Button>
                <p className="mb-5 text-center text-[calc(var(--type-base-size)-4px)] opacity-80">Shipping, taxes, and discount codes calculated at checkout.</p>
            </div>
        </div>
    );
};

export default React.memo(CartContent);
