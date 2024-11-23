"use client";

import useMounted from "@/hooks/useMounted";
import { User } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface ModalProviderProps {
    children: React.ReactNode;
}

export type ModalData = {
    user?: User;
};

type ModalContextType = {
    data: ModalData;
    isOpen: boolean;
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<Partial<ModalData>>) => Promise<void>;
    setClose: () => void;
};

export const ModalContext = createContext<ModalContextType>({
    data: {},
    isOpen: false,
    setOpen: async () => {},
    setClose: () => {},
});

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<ModalData>({});
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
    const mounted = useMounted();

    const setOpen = async (modal: React.ReactNode, fetchData?: () => Promise<Partial<ModalData>>): Promise<void> => {
        if (modal) {
            if (fetchData) {
                const fetchedData = await fetchData();
                setData((prevData) => ({ ...prevData, ...fetchedData }));
            }
            setShowingModal(modal);
            setIsOpen(true);
        }
    };

    const setClose = (): void => {
        setIsOpen(false);
        setData({});
    };

    if (!mounted) return null;

    return (
        <ModalContext.Provider
            value={{
                data,
                isOpen,
                setOpen,
                setClose,
            }}
        >
            {mounted && showingModal}
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within a ModalProvider");
    return context;
};
