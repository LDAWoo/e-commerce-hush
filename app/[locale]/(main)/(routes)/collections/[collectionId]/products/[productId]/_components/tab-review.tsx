"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "@/components/icons";

const TabReview = () => {
    return (
        <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="relative grid w-full grid-cols-2 bg-transparent p-0">
                <TabsTrigger value="reviews" className="p-[20px_28px] data-[state=active]:before:absolute data-[state=inactive]:before:w-0 transition-all duration-300 before:bottom-0 before:w-full before:h-[2px] before:bg-foreground font-bold text-xs tracking-[.2em]">
                    Reviews(1)
                </TabsTrigger>
                <TabsTrigger value="questions" className="p-[20px_28px] data-[state=active]:before:absolute data-[state=inactive]:before:w-0 transition-all duration-300 before:bottom-0 before:w-full before:h-[2px] before:bg-foreground font-bold text-xs tracking-[.2em]">
                    Questions(0)
                </TabsTrigger>
            </TabsList>
            <TabsContent value="reviews">
                <div className="w-full flex flex-col gap-[20px] mt-[20px]">
                    <p className="text-xs tracking-[.2em] text-foreground">You have already reviewed this product. If you would like to edit your existing review then please contact us directly.</p>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                                <span>Lee V</span>
                                <div className="flex items-center">
                                    <StarIcon className="text-rating" size={13} />
                                    <StarIcon className="text-rating" size={13} />
                                    <StarIcon className="text-rating" size={13} />
                                    <span className="ml-2 text-foreground text-xs font-medium tracking-[.1em]">Sep 4, 2024</span>
                                </div>
                            </div>
                        </div>

                        <div className="break-words mt-[22px]">
                            <p className="tracking-[.2em]">Very good</p>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default TabReview;
