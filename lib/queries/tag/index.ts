"use server";

import { Prisma, Tag } from "@prisma/client";
import { db } from "@/lib/db";
import { v4 } from "uuid";

export const getTags = async (): Promise<Tag[]> => {
    const tags = await db.tag.findMany({
        orderBy: {
            name: "asc",
        },
    });
    return tags;
};

export const upsertTag = async (tag: Prisma.TagUncheckedCreateInput) => {
    const response = await db.tag.upsert({
        where: {
            id: tag.id || v4(),
        },
        update: tag,
        create: {
            ...tag,
        },
    });

    return response;
};

export const deleteTag = async (id: string): Promise<Tag> => {
    const deletedTag = await db.tag.delete({
        where: { id },
    });
    return deletedTag;
};

export const updateTag = async (id: string, name?: string, color?: string): Promise<Tag> => {
    const updatedTag = await db.tag.update({
        where: { id },
        data: {
            ...(name && { name }),
            ...(color && { color }),
        },
    });
    return updatedTag;
};
