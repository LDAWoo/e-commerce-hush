"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserButton } from "@clerk/nextjs";
import { Bell, CreditCard, LogOut, MessageSquare, Moon, Search, Settings, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

type HeaderProps = {
    name?: string;
    avatar?: string;
};

const Header: React.FC<HeaderProps> = ({ name, avatar }) => {
    const { setTheme } = useTheme();
    return (
        <div className="w-full bg-background sticky top-0">
            <div className="flex w-full justify-between gap-4 p-3">
                <div className="flex gap-2 items-center bg-accent w-full p-2 rounded-md">
                    <Search size={20} />
                    <Button className="justify-start bg-transparent hover:bg-transparent p-0 h-6 w-full text-accent-foreground">Search product...</Button>
                </div>

                <div className="flex flex-row gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" size="icon">
                        <Bell size={18} />
                    </Button>

                    <Button variant="ghost" size="icon">
                        <MessageSquare size={18} />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-2 items-center">
                            <Avatar>
                                <AvatarImage src={avatar} alt="user-avatar" />
                                <AvatarFallback>{name}</AvatarFallback>
                            </Avatar>

                            <span className="w-fit whitespace-nowrap text-center font-medium text-sm">Vu Lee</span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Header;
