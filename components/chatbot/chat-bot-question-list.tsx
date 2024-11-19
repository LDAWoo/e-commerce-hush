import React from "react";
import { Button } from "../ui/button";

const ChatBotQuestionList = () => {
    const questionList = [
        {
            question: "What is your shipping policy?",
            answer: "Visit our website's Customization section to learn about various features and options.",
        },
        {
            question: "What payment methods are available?",
            answer: "We support multiple payment methods, including PayPal, Stripe, and more.",
        },
        {
            question: "How do I handle customer support?",
            answer: "Visit our website's Customer Support section to find answers to your questions.",
        },
        {
            question: "What is the best way to promote my e-commerce website?",
            answer: "Use social media, email marketing, and SEO to increase visibility and reach your target audience.",
        },
    ];

    return (
        <div className="pt-0 p-2 bg-background text-foreground">
            <div className="m-[20px_0] mb-1 text-center text-[1.17em] font-semibold">Instant answers</div>

            {questionList.map((question) => (
                <Button key={question.question} className="text-[calc(var(--type-base-size)-2)] font-semibold justify-start w-full mt-3 p-[10px_12px] rounded-[10px] h-auto border-[#6a6a6a] hover:text-white hover:bg-[#6a6a6a]" variant={"outline"}>
                    <p>{question.question}</p>
                </Button>
            ))}
        </div>
    );
};

export default ChatBotQuestionList;
