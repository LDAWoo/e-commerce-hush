import { stripe } from "@/lib/stripe";
import { BasketItem } from "@/lib/types";
import { NextResponse } from "next/server";

export type Metadata = {
    orderNumber: number | string;
    customerName: string;
    customerEmail: string;
    userId: string;
};

export type GroupedBasketItem = {
    product: BasketItem["product"];
    quantity: number;
};
export async function POST(req: Request) {
    const {
        items,
        metadata,
        locale,
    }: {
        items: GroupedBasketItem[];
        metadata: Metadata;
        locale: string;
    } = await req.json();

    try {
        const origin = req.headers.get("origin");

        const itemsWithoutPrice = items.filter((item) => !item.product.price);

        if (itemsWithoutPrice.length > 0) {
            throw new Error("Some items do not have a price");
        }

        const customers = await stripe.customers.list({
            email: metadata.customerEmail,
            limit: 1,
        });

        let customerId: string | undefined;
        if (customers.data.length > 0) {
            customerId = customers.data[0].id;
        }

        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            customer_creation: customerId ? undefined : "always",
            customer_email: !customerId ? metadata.customerEmail : undefined,
            client_reference_id: metadata.userId,
            metadata,
            mode: "payment",
            allow_promotion_codes: true,
            payment_method_types: ["card"],
            shipping_address_collection: {
                allowed_countries: ["US", "VN"],
            },
            shipping_options: [
                {
                    shipping_rate: "shr_1QOCHKDu4ZXFkxrTT5BYeLZ1",
                },
                {
                    shipping_rate: "shr_1QOCGTDu4ZXFkxrTTajAtRip",
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/payment-success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cart`,
            line_items: items.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.product.name || "Unnamed Product",
                        images: item.product.image ? [item.product.image] : undefined,
                        description: item.product.description,
                        metadata: {
                            productId: item.product.id,
                            ...(item.product.color && { color: item.product.color }),
                            ...(item.product.size && { size: item.product.size }),
                        },
                    },
                    unit_amount: Math.round(item.product.price! * 100),
                },
                quantity: item.quantity,
            })),
        });

        // Return the session id for client-side handling
        return NextResponse.json(
            {
                url: session.url,
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": origin || "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS, PATCH, DELETE, POST, PUT",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                },
            }
        );
    } catch (error) {
        console.error("🔴 Error", error);
        return NextResponse.json({ error: error });
    }
}
