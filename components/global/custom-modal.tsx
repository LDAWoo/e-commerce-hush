"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useModal } from "@/provider/modal-provider";
import React from "react";

interface CustomModalProps {
    title?: string;
    description?: string;
    className?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, description, className, children, defaultOpen = false }) => {
    const { isOpen, setClose } = useModal();

    return (
        <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
            <DialogContent className={cn("overflow-auto md:max-h-[700px] md:h-fit  bg-card", className)}>
                {title && (
                    <DialogHeader className="pt-8 text-left">
                        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                )}
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default React.memo(CustomModal);
