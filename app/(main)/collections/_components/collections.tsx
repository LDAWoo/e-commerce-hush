"use client";
import { collections } from "@/lib/constants";
import React, { useMemo } from "react";
import CollectionsItem from "./collections-item";

const Collections = () => {
    const data = useMemo(() => collections, []);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full">
            {collections.map((collection) => (
                <CollectionsItem key={collection.id} item={collection} />
            ))}
        </div>
    );
};

export default Collections;
