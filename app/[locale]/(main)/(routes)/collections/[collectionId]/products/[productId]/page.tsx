"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { productDetails } from "@/lib/constants";
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import TabReview from "./_components/tab-review";
import { StarIcon } from "@/components/icons";

type Props = {
    params: {
        collectionId: string;
        productId: string;
    };
};

const Page = ({ params }: Props) => {
    const [selectedImagePosition, setSelectedImagePosition] = useState(0);
    const product = useMemo(() => productDetails, []);
    const [color, setColor] = useState("Black");
    const [size, setSize] = useState("L");

    const rating = 5;

    return (
        <div className="pt-[55px] w-full">
            <div className="w-full flex">
                <div className="flex flex-row gap-4 w-[60%] h-[562px]">
                    <div className="flex flex-col gap-4">
                        {product.images.map((image, index) => (
                            <div
                                key={image}
                                className={clsx("relative cursor-pointer w-[80px] h-[80px] before:absolute before:w-[84px] before:-top-[2px] before:-left-[2px] before:h-[84px] before:border-2 before:border-accent-foreground", {
                                    "before:border-0": selectedImagePosition !== index,
                                })}
                                onClick={() => setSelectedImagePosition(index)}
                            >
                                <Image src={image} alt={product.name} fill className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    <div className="w-full relative aspect-square">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={clsx("absolute top-0 left-0 w-full h-full transition-opacity duration-700", {
                                    "opacity-100": selectedImagePosition === index,
                                    "opacity-0": selectedImagePosition !== index,
                                })}
                            >
                                <Image src={image} alt={product.name} fill className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[40%] h-full pl-[45px]">
                    <div className="flex flex-col w-full gap-[10px]">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="capitalize text-[13px] tracking-[.025em]" href="/">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <span>/</span>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="capitalize text-[13px] tracking-[.025em]" href={`/collections/${params.collectionId}`}>
                                        {params.collectionId}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <span>/</span>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="uppercase break-words text-4xl tracking-[.1em]">{`${product.name} - ${color}/Biscuit - ${size}`}</h1>
                        <div>
                            <div className="inline-block leading-[1] cursor-pointer">
                                {Array.from({ length: rating }).map((r, index) => (
                                    <StarIcon key={index} className="text-rating mr-1" size={24} />
                                ))}
                                <span className="text-sm">Review</span>
                            </div>
                            <div className="inline-block leading-[1] cursor-pointer">
                                <span className="ml-1 mr-1">|</span>
                                <span className="text-sm">Ask a question</span>
                            </div>
                        </div>
                        <span aria-label="sku">WB4CY2524E</span>
                        <span aria-label="price" className="text-lg">
                            1.284.000₫
                        </span>
                    </div>

                    <div className="pt-8 pb-8">
                        <div className="border-t"></div>
                    </div>

                    {/* color, size  */}
                    <div className="space-y-6">
                        {/* Color selection */}
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="text-xs tracking-[.3em] uppercase">Color</h3>
                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map((c, index) => (
                                    <Button
                                        key={index}
                                        variant={"outline"}
                                        className={clsx("rounded-none transition-all duration-300 p-[7px_15px]", {
                                            "shadow-shadow-border-sm": color === c,
                                        })}
                                        onClick={() => setColor(c)}
                                    >
                                        <span className="tracking-[.1rem]">{`${c}/Biscuit`}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Size selection */}
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="text-xs tracking-[.3em] uppercase">Size</h3>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((s, index) => (
                                    <Button
                                        key={index}
                                        variant={"outline"}
                                        className={clsx("rounded-none transition-all duration-300 p-[7px_15px]", {
                                            "shadow-shadow-border-sm": size === s,
                                        })}
                                        onClick={() => setSize(s)}
                                    >
                                        <span className="tracking-[.1rem]">{`${s}`}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity selector */}
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="text-xs tracking-[.3em] uppercase">Quantity</h3>
                            <div className="relative max-w-[100px] min-w-[75px] w-full">
                                <Input min={1} value={1} className="text-lg p-[8px_25px] h-fit w-full rounded-none text-center transition-all duration-300 border-0 shadow-shadow-border-xs focus-visible:shadow-shadow-border-sm" />
                                <Button className="bg-transparent h-auto p-[0_5px] absolute top-0 left-0 bottom-0 overflow-hidden hover:bg-primary hover:text-primary-foreground rounded-none text-accent-foreground transition-all duration-300 border-r">
                                    <Minus size={16} />
                                </Button>
                                <Button className="bg-transparent h-auto p-[0_5px] absolute top-0 right-0 bottom-0 overflow-hidden hover:bg-primary hover:text-primary-foreground rounded-none text-accent-foreground transition-all duration-300 border-l">
                                    <Plus size={16} />
                                </Button>
                            </div>
                        </div>

                        {/* Add to cart button */}
                        <Button className="w-full rounded-none" size={"lg"}>
                            <span className="uppercase tracking-[.2em] font-bold"> Add to cart</span>
                        </Button>

                        {/* Add to wishlist button */}
                        <Button variant="outline" className="w-full rounded-none hover:shadow-shadow-border-sm duration-300 transition-all" size={"lg"}>
                            <Heart className="mr-2" size={18} />
                            <span className="uppercase tracking-[.2em] font-bold"> Add to Wishlist</span>
                        </Button>

                        <div>
                            <Accordion type="multiple" className="w-full">
                                <AccordionItem value="reviews">
                                    <AccordionTrigger arrow className="text-center hover:no-underline border border-b-0 p-[11px_15px] data-[state=closed]:border-b">
                                        <div />
                                        <span className="uppercase text-xs tracking-[.2rem]"> Reviews</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="border border-t-0 p-[0_20px] pb-[20px]">
                                        <div className="flex flex-col gap-[10px]">
                                            <div className="uppercase font-bold text-sm tracking-[.1em]">Customer reviews</div>
                                            <div className="flex flex-wrap items-center justify-end w-full">
                                                <div className="flex flex-col items-center mr-[35px]">
                                                    <p className="text-[35px] font-bold leading-[1] pb-3">5.0</p>
                                                    <div>
                                                        {Array.from({ length: rating }).map((r, index) => (
                                                            <StarIcon key={index} className="text-rating" size={24} />
                                                        ))}
                                                    </div>
                                                    <p className="text-foreground text-xs tracking-[.1em] mt-[6px]">Based on 1 review</p>
                                                </div>
                                                <div className="flex-grow mr-[35px] mb-[5px]">
                                                    <div className="flex items-center cursor-pointer whitespace-nowrap w-full hover:opacity-60 transition-opacity duration-300">
                                                        <div>
                                                            {Array.from({ length: rating }).map((r, index) => (
                                                                <StarIcon key={index} className="text-rating mr-1" size={12} />
                                                            ))}
                                                        </div>
                                                        <div className="w-[140px] h-[4px] bg-rating rounded-md"></div>
                                                        <span className="ml-[5px] text-xs">{`(1)`}</span>
                                                    </div>

                                                    <div className="flex items-center cursor-pointer whitespace-nowrap w-full hover:opacity-60 transition-opacity duration-300">
                                                        <div>
                                                            {Array.from({ length: rating }).map((r, index) => (
                                                                <StarIcon
                                                                    key={index}
                                                                    className={clsx("text-rating mr-1", {
                                                                        "!text-input": index > 3,
                                                                    })}
                                                                    size={12}
                                                                />
                                                            ))}
                                                        </div>
                                                        <div className="w-[140px] h-[4px] bg-rating rounded-md"></div>
                                                        <span className="ml-[5px] text-xs">{`(0)`}</span>
                                                    </div>

                                                    <div className="flex items-center cursor-pointer whitespace-nowrap w-full hover:opacity-60 transition-opacity duration-300">
                                                        <div>
                                                            {Array.from({ length: rating }).map((r, index) => (
                                                                <StarIcon
                                                                    key={index}
                                                                    className={clsx("text-rating mr-1", {
                                                                        "!text-input": index > 2,
                                                                    })}
                                                                    size={12}
                                                                />
                                                            ))}
                                                        </div>
                                                        <div className="w-[140px] h-[4px] bg-rating rounded-md"></div>
                                                        <span className="ml-[5px] text-xs">{`(0)`}</span>
                                                    </div>

                                                    <div className="flex items-center cursor-pointer whitespace-nowrap w-full hover:opacity-60 transition-opacity duration-300">
                                                        <div>
                                                            {Array.from({ length: rating }).map((r, index) => (
                                                                <StarIcon
                                                                    key={index}
                                                                    className={clsx("text-rating mr-1", {
                                                                        "!text-input": index > 1,
                                                                    })}
                                                                    size={12}
                                                                />
                                                            ))}
                                                        </div>
                                                        <div className="w-[140px] h-[4px] bg-rating rounded-md"></div>
                                                        <span className="ml-[5px] text-xs">{`(0)`}</span>
                                                    </div>

                                                    <div className="flex items-center cursor-pointer whitespace-nowrap w-full hover:opacity-60 transition-opacity duration-300">
                                                        <div>
                                                            {Array.from({ length: rating }).map((r, index) => (
                                                                <StarIcon
                                                                    key={index}
                                                                    className={clsx("text-rating mr-1", {
                                                                        "!text-input": index > 0,
                                                                    })}
                                                                    size={12}
                                                                />
                                                            ))}
                                                        </div>
                                                        <div className="w-[140px] h-[4px] bg-rating rounded-md"></div>
                                                        <span className="ml-[5px] text-xs">{`(0)`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div>
                                                    <Button variant="outline" className="w-full rounded-none hover:shadow-shadow-border-sm duration-300 transition-all" size={"sm"}>
                                                        <span className="tracking-[.1em] text-xs"> Add a review</span>
                                                    </Button>
                                                </div>
                                            </div>

                                            <TabReview />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    {/* ... rest of your component ... */}
                </div>
            </div>
        </div>
    );
};

export default Page;
