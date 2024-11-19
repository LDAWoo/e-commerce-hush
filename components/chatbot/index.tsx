"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { Button } from "../ui/button";
import ChatBotReturns from "./chat-bot-returns";
import ChatBotQuestionList from "./chat-bot-question-list";
import ChatBotMessage from "./chat-bot-message";
const Chatbot = () => {
    const [openChat, setOpenChat] = React.useState(false);
    const [isChatMessage, setIsChatMessage] = React.useState(false);

    return (
        <div className="fixed bottom-4 right-4 h-[65px] z-[29]">
            <div className="relative">
                <Button
                    onClick={() => setOpenChat(!openChat)}
                    className={cn("text-[24px] font-semibold bg-foreground text-background h-[60px] p-[0_12px_0_3px] rounded-[16px] shadow-[0_0_5px_rgba(0,0,0,.15)] m-[0_6px]", {
                        "rounded-full w-[60px] p-0": openChat,
                    })}
                >
                    {!openChat && (
                        <>
                            <TbMessageChatbot size={46} />
                            <span className="ml-1">Chat</span>
                        </>
                    )}

                    {openChat && (
                        <>
                            <X size={32} />
                        </>
                    )}
                </Button>

                {openChat && (
                    <div className="absolute bottom-full right-0 mb-2 animate-slide-down">
                        <div className="max-h-[600px] w-[364px] flex flex-col overflow-y-auto shadow-container bg-background text-foreground border border-input rounded-[12px]">
                            {!isChatMessage && (
                                <>
                                    <ChatBotReturns onClick={() => setIsChatMessage(true)} />
                                    <ChatBotQuestionList />
                                </>
                            )}

                            {isChatMessage && <ChatBotMessage onClick={() => setIsChatMessage(false)} />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(Chatbot);
