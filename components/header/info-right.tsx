import React from "react";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const InfoRight = () => {
    return (
        <div className="flex items-center ">
            <Button className="bg-transparent text-current hover:bg-transparent">
                <Search size={20} />
            </Button>
            <Button className="bg-transparent text-current hover:bg-transparent">
                <Heart size={20} />
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger className="w-10 h-10 items-center flex justify-center">
                    <UserRound size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <span>View Order</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>View Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>My Wishlist</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>Edit Profile</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
                <SheetTrigger className="w-10 h-10 flex items-center justify-center">
                    <ShoppingCart size={20} />
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
        </div>
    );
};

export default React.memo(InfoRight);
