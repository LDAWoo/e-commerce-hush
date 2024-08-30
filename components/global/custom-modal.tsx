"use client";

import React from "react";
import { useModal } from "@/provider/modal-provider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface CustomModalProps {
    title: string;
    description: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, description, children, defaultOpen = false }) => {
    const { isOpen, setClose } = useModal();

    return (
        <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
            <DialogContent className="overflow-auto md:max-h-[700px] md:h-fit h-screen bg-card">
                <DialogHeader className="pt-8 text-left">
                    <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default CustomModal;
