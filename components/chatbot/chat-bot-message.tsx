import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SendHorizonal } from "lucide-react";
import React, { ElementRef } from "react";
import { useForm } from "react-hook-form";
import { FaRobot } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi2";
import { SlOptions } from "react-icons/sl";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
type ChatBotMessageProps = {
    onClick?: () => void;
};
const chatOriginEnum = {
    AI: "ai",
    CUSTOMER: "customer",
};

const formSchema = z.object({
    message: z.string(),
});

const ChatBotMessage = ({ onClick }: ChatBotMessageProps) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [messages, setMessages] = React.useState([
        {
            id: Date.now(),
            origin: chatOriginEnum.AI,
            text: "Hey, tell me what you are looking for",
            data: [],
            inquirytype: "",
        },
    ]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    });

    const messageRef = React.useRef<ElementRef<"div">>(null);
    const bottomRef = React.useRef<ElementRef<"div">>(null);

    const isLoadingForm = form.formState.isSubmitting;

    const sendChatMessage = async (values: z.infer<typeof formSchema>) => {
        const message = values.message;
        if (!messageRef.current || message.length === 0) return;
        const existingMessages = [...messages];

        existingMessages.push({
            id: Date.now(),
            origin: chatOriginEnum.CUSTOMER,
            text: message,
            data: [],
            inquirytype: "",
        });

        setMessages(existingMessages);
        form.reset();
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
        try {
            setIsLoading(true);
            const botResponse = await axios.post("/api/chat", {
                message,
            });
            const data = botResponse.data;

            existingMessages.push({
                id: Date.now(),
                origin: chatOriginEnum.AI,
                text: Array.isArray(data) ? "This is what I found" : data.parsed.message || "Here is the information",
                inquirytype: data.inquiry_type,
                data: data,
            });

            setMessages(existingMessages);
            setIsLoading(false);
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        } catch (error) {
            console.log("error", error);
        }
    };

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    return (
        <div className="flex flex-col bg-background text-foreground ">
            <div className="bg-foreground text-background p-3 flex-1">
                <div className="relative p-[8px_28px]">
                    <HiArrowLeft size={24} className="ml-1 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={onClick} />
                    <div className="text-[1.2em] text-center font-semibold">Hush Ai</div>
                </div>
            </div>

            <div className="flex flex-col h-[425px]">
                <div className="flex-[1] min-h-0 relative">
                    <div ref={messageRef} className="flex flex-col py-4 overflow-y-auto no-scrollbar h-full p-0">
                        <div className="flex flex-col mt-auto">
                            {messages.map((message) => {
                                const isChatBot = message.origin === "ai";

                                if (isChatBot) {
                                    return <RenderResponse key={message.id} message={message} data={message.data} inquirytype={message.inquirytype} />;
                                }

                                if (!isChatBot) {
                                    return <RenderMessage key={message.id} message={message} />;
                                }

                                return null;
                            })}

                            {isLoading && (
                                <div className="m-[12px_auto_0_12px] text-foreground flex gap-2 self-start items-end animate-fade-in">
                                    <FaRobot size={24} className="min-w-6 min-h-6" />
                                    <div className="bg-[#eeeef1] dark:bg-muted p-[10px_16px] rounded-[12px]">
                                        <SlOptions size={18} className="animate-ping" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div ref={bottomRef} />
                    </div>
                </div>

                <div className="m-[8px_0]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(sendChatMessage)}>
                            <FormField
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="flex gap-2 items-center m-[0_12px_4px]">
                                        <FormControl>
                                            <Input
                                                {...field}
                                                ref={(el) => {
                                                    inputRef.current = el;
                                                }}
                                                autoComplete="off"
                                                placeholder="Write messages..."
                                                className="text-[calc(var(--type-base-size)-2)] focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-none outline-none"
                                            />
                                        </FormControl>
                                        <Button disabled={isLoadingForm} className="h-fit p-[0_12px] hover:bg-transparent" variant={"ghost"}>
                                            <SendHorizonal size={22} />
                                        </Button>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ChatBotMessage;

const RenderResponse = ({ message, data, inquirytype }) => {
    return (
        <div key={message.id} className={cn("flex gap-2 flex-row m-[12px_auto_0_12px] self-start items-end max-w-[272px] animate-fade-in")}>
            <FaRobot size={24} className="min-w-6 min-h-6" />
            <div className={cn("p-[10px_0_8px] rounded-[12px] text-[16px] leading-[20px] bg-[#eeeef1] text-foreground dark:bg-muted whitespace-pre-wrap break-words")}>
                <span className="ml-4 mr-4 block">{message.text}</span>
                <span className="ml-4 mr-4 mt-1 block text-[14px] leading-[22px] opacity-85">5:02PM</span>
            </div>
        </div>
    );
};

const RenderMessage = ({ message }) => {
    return (
        <div key={message.id} className={cn("flex gap-2 flex-row m-[12px_12px_0_auto] self-end max-w-[240px] animate-fade-in")}>
            <div className={cn("bg-foreground text-foreground dark:bg-muted p-[10px_0_8px] rounded-[12px] text-[16px] leading-[20px]  whitespace-pre-wrap break-words")}>
                <span className="ml-4 mr-4 block">{message.text}</span>
                <span className="ml-4 mr-4 mt-1 block text-[14px] leading-[22px] opacity-85">5:02PM</span>
            </div>
        </div>
    );
};
