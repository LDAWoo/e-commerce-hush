import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { colorOptions, discountOptions, sizeOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React from "react";

const CollectionsFilter = () => {
    const [priceRange, setPriceRange] = React.useState([0, 100]);
    const [colors, setColors] = React.useState(["yellow", "red"]);
    const handlePriceChange = (value: number[]) => {
        setPriceRange(value);
    };
    return (
        <div className="hidden md:flex flex-col w-[260px] max-w-[260px] mr-10">
            <Accordion type="multiple" className="border-t" defaultValue={["price", "availability", "brand", "color", "size", "discount"]}>
                <AccordionItem value="price">
                    <AccordionTrigger className="hover:no-underline text-[calc(var(--type-base-size)-2px)] text-muted-foreground">
                        <span className="text-foreground"> Price, $</span>
                        <>
                            <Plus id="plus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                            <Minus id="minus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                        </>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col pb-[30px]">
                            <div className="flex gap-2 items-center">
                                <Input value={priceRange[0]} onChange={(e) => setPriceRange([Math.min(Number(e.target.value), priceRange[1])])} placeholder="Min" pattern="[0-9]" className="tracking-[.1rem] text-[calc(var(--type-base-size)-4px)] placeholder:text-[calc(var(--type-base-size)-4px)] placeholder:opacity-50 border-border p-[5px_8px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:!shadow-none text-muted-foreground outline-none rounded-none h-[29px]" />
                                <span>–</span>
                                <Input value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Math.max(Number(e.target.value))])} placeholder="Max" pattern="[0-9]" className="tracking-[.1rem] text-[calc(var(--type-base-size)-4px)] placeholder:text-[calc(var(--type-base-size)-4px)] placeholder:opacity-50 border-border p-[5px_8px] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:!shadow-none text-muted-foreground outline-none rounded-none h-[29px]" />
                            </div>

                            <div className="mt-6 w-full">
                                <Slider defaultValue={[0, 100]} max={100} step={1} onValueChange={handlePriceChange} />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="availability">
                    <AccordionTrigger className="hover:no-underline text-[calc(var(--type-base-size)-2px)] text-muted-foreground">
                        <span className="text-foreground">Availability</span>
                        <>
                            <Plus id="plus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                            <Minus id="minus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                        </>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-[8px] mb-[46px]">
                            <div className="flex relative space-x-[6px] items-center w-full mt-1">
                                <Checkbox id="stock" />
                                <label htmlFor="stock" className="flex-1 text-[calc(var(--type-base-size)-4px)] text-muted-foreground tracking-[.1rem] cursor-pointer">
                                    In Stock
                                </label>
                                <div className="text-[calc(var(--type-base-size)-4px)] text-muted-foreground">9</div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="brand">
                    <AccordionTrigger className="hover:no-underline text-[calc(var(--type-base-size)-2px)] text-muted-foreground">
                        <span className="text-foreground">Brand</span>
                        <>
                            <Plus id="plus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                            <Minus id="minus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                        </>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-[8px] mb-[46px]">
                            <div className="flex relative space-x-[6px] items-center w-full mt-1">
                                <Checkbox id="Bella" />
                                <label htmlFor="Bella" className="flex-1 text-[calc(var(--type-base-size)-4px)] text-muted-foreground tracking-[.1rem] cursor-pointer">
                                    Bebe Bella
                                </label>
                                <div className="text-[calc(var(--type-base-size)-4px)] text-muted-foreground">4</div>
                            </div>
                            <div className="flex relative space-x-[6px] items-center w-full mt-1">
                                <Checkbox id="space" />
                                <label htmlFor="space" className="flex-1 text-[calc(var(--type-base-size)-4px)] text-muted-foreground tracking-[.1rem] cursor-pointer">
                                    Space Grey
                                </label>
                                <div className="text-[calc(var(--type-base-size)-4px)] text-muted-foreground">1</div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="color">
                    <AccordionTrigger className="hover:no-underline text-[calc(var(--type-base-size)-2px)] text-muted-foreground">
                        <span className="text-foreground">Color</span>
                        <>
                            <Plus id="plus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                            <Minus id="minus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                        </>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="block mb-[46px]">
                            {colorOptions.map((color) => (
                                <div key={color.hexCode} className="w-[22px] h-[22px] m-[5px_8px_4px_4px] inline-block">
                                    <div className="relative w-full h-full inline-block">
                                        <input type="checkbox" value={color.id} checked={colors.includes(color.id)} className="hidden" />
                                        <span
                                            onClick={() => setColors((prev) => (prev.includes(color.id) ? prev.filter((c) => c !== color.id) : [...prev, color.id]))}
                                            className={cn("cursor-pointer relative inline-block w-[22px] h-[22px] rounded-full before:absolute before:border before:w-[26px] before:h-[26px] before:rounded-full before:-left-[2px] before:-top-[2px] before:border-border", {
                                                "before:border-primary": colors.includes(color.id),
                                            })}
                                            style={{
                                                backgroundColor: color.hexCode,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="size">
                    <AccordionTrigger className="hover:no-underline text-[calc(var(--type-base-size)-2px)] text-muted-foreground">
                        <span className="text-foreground">Size</span>
                        <>
                            <Plus id="plus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                            <Minus id="minus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                        </>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-[8px] mb-[46px] max-h-[215px] overflow-y-auto overflow-x-hidden">
                            {sizeOptions.map((size) => (
                                <div key={size.id} className="flex relative space-x-[6px] items-center w-full mt-1">
                                    <Checkbox id={size.id} />
                                    <label htmlFor={size.id} className="flex-1 text-[calc(var(--type-base-size)-4px)] text-muted-foreground tracking-[.1rem] cursor-pointer capitalize">
                                        {size.name}
                                    </label>
                                    <div className="text-[calc(var(--type-base-size)-4px)] text-muted-foreground">{size.count}</div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="discount" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline text-[calc(var(--type-base-size)-2px)] text-muted-foreground">
                        <span className="text-foreground">Discount</span>
                        <>
                            <Plus id="plus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                            <Minus id="minus" className="h-5 w-5 shrink-0 transition-transform duration-200 " />
                        </>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-[8px] mb-[46px] max-h-[215px] overflow-y-auto overflow-x-hidden">
                            {discountOptions.map((discount) => (
                                <div key={discount.id} className="flex relative space-x-[6px] items-center w-full mt-1">
                                    <Checkbox id={discount.id} />
                                    <label htmlFor={discount.id} className="flex-1 text-[calc(var(--type-base-size)-4px)] text-muted-foreground tracking-[.1rem] cursor-pointer capitalize">
                                        {discount.label}
                                    </label>
                                    <div className="text-[calc(var(--type-base-size)-4px)] text-muted-foreground">{discount.count}</div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default React.memo(CollectionsFilter);
