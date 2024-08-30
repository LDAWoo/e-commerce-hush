"use client";
import { useEffect, useState, useRef } from "react";

const useInView = (options: IntersectionObserverInit = {}) => {
    const [inView, setInView] = useState(false);
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return { inView, elementRef };
};

export default useInView;
