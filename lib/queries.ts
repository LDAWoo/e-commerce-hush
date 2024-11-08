"use server";

import { redirect } from "next/navigation";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
import { User } from "@prisma/client";
import { Prisma } from "@prisma/client";

export const createUser = async (user: User) => {
    if (user.role === "ADMIN") return;
    const response = await db.user.create({
        data: {
            ...user,
        },
    });
    return response;
};

export const verifyUser = async () => {
    const user = await currentUser();

    if (!user) {
        return redirect("/dashboard/sign-in");
    }

    const exitsUser = await getAuthUserDetails();

    if (exitsUser) {
        return exitsUser;
    }

    const userDetails = await createUser({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
        avatarUrl: user.imageUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: "CUSTOMER",
        isActive: true,
        passwordHash: "",
        country: "",
        phone: "",
        address: "",
    });

    await saveActivityLogsNotification({
        userId: userDetails?.id,
        description: "Joined",
        productId: undefined,
    });

    if (userDetails) {
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                role: userDetails.role || "CUSTOMER",
            },
        });
        return userDetails;
    } else {
        return null;
    }
};

export const getAuthUserDetails = async () => {
    const user = await currentUser();

    if (!user) {
        return;
    }

    const userData = await db.user.findUnique({
        where: {
            email: user.emailAddresses[0].emailAddress,
        },
        include: {
            permissions: true,
        },
    });

    return userData;
};

export const saveActivityLogsNotification = async ({ userId, description, productId }: { userId?: string; description?: string; productId?: string }) => {
    const user = await currentUser();
    let userData;

    if (!user) {
        userData = await db.user.findFirst({
            where: {
                id: userId,
            },
        });
    } else {
        userData = await db.user.findUnique({
            where: {
                email: user.emailAddresses[0].emailAddress,
            },
        });
    }

    if (!userData) {
        console.log("Could not find a user");
        return;
    }

    if (productId) {
        const product = await db.product.findUnique({
            where: {
                id: productId,
            },
        });

        if (product) {
            await db.notification.create({
                data: {
                    notification: `${userData.name} | ${description}`,
                    userId: userData.id,
                    productId: product.id,
                },
            });
        } else {
            await db.notification.create({
                data: {
                    notification: `${userData.name} | ${description}`,
                    userId: userData.id,
                },
            });
        }
    } else {
        await db.notification.create({
            data: {
                notification: `${userData.name} | ${description}`,
                userId: userData.id,
            },
        });
    }
};

export const getUsers = async () => {
    const users = await db.user.findMany();
    return users;
};

export const getUser = async (userId: string) => {
    const user = await db.user.findUnique({
        where: {
            id: userId,
        },
    });
    return user;
};

export const getProducts = async (page: number = 1, limit: number = 10, sort: string = "createdAt", order: "asc" | "desc" = "desc", filter: Record<string, any> = {}) => {
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
        name: filter.name,
        category: filter.category || undefined,
        status: filter.status || undefined,
    };

    const [products, total] = await Promise.all([
        db.product.findMany({
            where,
            skip,
            take: limit,
            orderBy: { [sort]: order },
        }),
        db.product.count({ where }),
    ]);

    return {
        products,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
};
