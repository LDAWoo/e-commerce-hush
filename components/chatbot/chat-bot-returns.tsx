import React from "react";
import { Button } from "../ui/button";

type ChatBotReturnsProps = {
    onClick?: () => void;
};

const ChatBotReturns = ({ onClick }: ChatBotReturnsProps) => {
    return (
        <div className="text-background bg-foreground p-[20px_16px_20px]">
            <div>
                <span className="text-[1.5em] font-semibold">Chat with us</span>
                <p className="text-[calc(var(--type-base-size)-2)]">👋 Hi, message us with any questions. We&apos;re happy to help!</p>
                <Button onClick={onClick} className="mt-3 h-[44px] w-full text-[calc(var(--type-base-size))] font-semibold border border-input bg-transparent hover:bg-transparent">
                    Return to chat
                </Button>
            </div>
        </div>
    );
};

export default ChatBotReturns;
