"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { colorOptions, discountOptions, filterCollections, products, sizeOptions } from "@/lib/constants";
import clsx from "clsx";
import { LayoutGrid, ListFilter } from "lucide-react";
import React, { useState } from "react";
import CollectionItem from "./_components/collection-item";

type Props = {
    params: {
        collectionId: string;
    };
};

const Page = ({ params }: Props) => {
    const collectionsTotal = 56;
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [colors, setColors] = useState(["yellow", "red"]);

    const handlePriceChange = (value: number[]) => {
        setPriceRange(value);
    };

    return (
        <div className="flex flex-col items-center p-[40px_17px] md:p-[75px_40px] h-full">
            <Breadcrumb className="mb-[10px]">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <span className="text-muted-foreground text-lg">/</span>
                </BreadcrumbList>
            </Breadcrumb>

            <h1 className="tracking-[.3rem]">{params.collectionId}</h1>

            <div className="w-full h-full flex flex-col mt-[45px]">
                <div className="w-full tex-center flex items-center justify-center mt-[15px] mb-[60px]">
                    <span className="text-[26px]  tracking-[.2rem] font-medium capitalize">{params.collectionId}</span>
                </div>

                <div className="flex items-center justify-between w-full pt-3 mb-[35px]">
                    <div className="flex-1">
                        <span className="inline-flex items-center tracking-[.1rem] text-xs h-[34px] text-muted-foreground whitespace-pre-wrap">
                            Showing {collectionsTotal} results for
                            <p className="tracking-[.2rem]"> {`"${params.collectionId}"`}</p>
                        </span>
                    </div>

                    <div className="flex flex-row gap-6">
                        <div className="flex flex-row gap-2">
                            <Toggle aria-label="layout grid" variant={"outline"} className="rounded-none w-8 h-8 p-0 hover:bg-transparent">
                                <LayoutGrid size={20} />
                            </Toggle>
                            <Toggle aria-label="layout grid" variant={"outline"} className="rounded-none w-8 h-8 p-0 hover:bg-transparent">
                                <ListFilter size={20} />
                            </Toggle>
                        </div>

                        <Select>
                            <SelectTrigger className="h-8 w-[166px] rounded-none">
                                <SelectValue placeholder="Date: New to Old" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {filterCollections.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-[260px] max-w-[260px]">
                        <Accordion type="multiple" className="border-t" defaultValue={["price", "availability", "brand", "color", "size", "discount"]}>
                            <AccordionItem value="price">
                                <AccordionTrigger className="hover:no-underline text-xs tracking-[.2rem]">Price, $</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col pb-[30px]">
                                        <div className="flex gap-2 items-center">
                                            <Input value={priceRange[0]} onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1])])} placeholder="Min" className="tracking-[.1rem] text-[10px] italic placeholder:text-[10px] placeholder:opacity-50 border-accent-foreground p-[5px_8px] focus-visible:ring-offset-0 focus-visible:ring-0 outline-none rounded-none h-[29px]" />
                                            <span>–</span>
                                            <Input value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value))])} placeholder="Max" className="tracking-[.1rem] text-[10px] italic placeholder:text-[10px] placeholder:opacity-50 border-accent-foreground p-[5px_8px] focus-visible:ring-offset-0 focus-visible:ring-0 outline-none rounded-none h-[29px]" />
                                        </div>

                                        <div className="mt-6 w-full">
                                            <Slider defaultValue={[0, 100]} max={100} step={1} onValueChange={handlePriceChange} />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="availability">
                                <AccordionTrigger className="hover:no-underline text-xs tracking-[.2rem]">Availability</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-[8px] mb-[46px]">
                                        <div className="flex relative space-x-[6px] items-center w-fit mt-1">
                                            <Checkbox id="stock" />
                                            <label htmlFor="stock" className="text-[10px] tracking-[.1rem] cursor-pointer">
                                                In Stock
                                            </label>
                                            <span className="absolute -right-[8px] -top-[8px] text-[10px] text-muted-foreground opacity-50">9</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="brand">
                                <AccordionTrigger className="hover:no-underline text-xs tracking-[.2rem]">Brand</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-[8px] mb-[46px]">
                                        <div className="flex relative space-x-[6px] items-center w-fit mt-1">
                                            <Checkbox id="bebe" />
                                            <label htmlFor="bebe" className="text-[10px] tracking-[.1rem] cursor-pointer">
                                                Bebe Bella
                                            </label>
                                            <span className="absolute -right-[8px] -top-[8px] text-[10px] text-muted-foreground opacity-50">7</span>
                                        </div>
                                        <div className="flex relative space-x-[6px] items-center w-fit mt-1">
                                            <Checkbox id="space" />
                                            <label htmlFor="space" className="text-[10px] tracking-[.1rem] cursor-pointer">
                                                Space Grey
                                            </label>
                                            <span className="absolute -right-[8px] -top-[8px] text-[10px] text-muted-foreground opacity-50">1</span>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="color">
                                <AccordionTrigger className="hover:no-underline text-xs tracking-[.2rem]">Color</AccordionTrigger>
                                <AccordionContent>
                                    <div className="block mb-[46px]">
                                        {colorOptions.map((color) => (
                                            <div key={color.hex} className="w-[22px] h-[22px] m-[5px_8px_4px_4px] inline-block">
                                                <div className="relative w-full h-full inline-block">
                                                    <input type="checkbox" value={color.id} checked={colors.includes(color.id)} className="hidden" />
                                                    <span
                                                        onClick={() => setColors((prev) => (prev.includes(color.id) ? prev.filter((c) => c !== color.id) : [...prev, color.id]))}
                                                        className={clsx("cursor-pointer relative inline-block w-[22px] h-[22px] rounded-full before:absolute before:border before:w-[26px] before:h-[26px] before:rounded-full before:-left-[2px] before:-top-[2px]", colors.includes(color.id) ? "before:border-[#ffb700]" : "before:border-accent-input")}
                                                        style={{
                                                            backgroundColor: color.hex,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="size">
                                <AccordionTrigger className="hover:no-underline text-xs tracking-[.2rem]">Size</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-[8px] mb-[46px] max-h-[215px] overflow-y-auto overflow-x-hidden">
                                        {sizeOptions.map((size) => (
                                            <div key={size.id} className="flex relative space-x-[6px] items-center w-fit mt-1">
                                                <Checkbox id={size.id} />
                                                <label htmlFor={size.id} className="text-[10px] tracking-[.1rem] cursor-pointer capitalize">
                                                    {size.label}
                                                </label>
                                                <span className="absolute -right-[8px] -top-[8px] text-[10px] text-muted-foreground opacity-50">{size.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="discount" className="border-b-0">
                                <AccordionTrigger className="hover:no-underline text-xs tracking-[.2rem]">Discount</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-[8px] mb-[46px] max-h-[215px] overflow-y-auto overflow-x-hidden">
                                        {discountOptions.map((discount) => (
                                            <div key={discount.id} className="flex relative space-x-[6px] items-center w-fit mt-1">
                                                <Checkbox id={discount.id} />
                                                <label htmlFor={discount.id} className="text-[10px] tracking-[.1rem] cursor-pointer capitalize">
                                                    {discount.label}
                                                </label>
                                                <span className="absolute -right-[8px] -top-[8px] text-[10px] text-muted-foreground opacity-50">{discount.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full ml-10">
                        {products.map((product) => (
                            <CollectionItem key={product.id} collectionId={params.collectionId} item={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
