import axios from "axios";
import { NextResponse } from "next/server";
import pluralize from "pluralize";

// Define types for the request entities
type AmountOfMoney = {
    op: "bw" | "eq" | "gt" | "lt";
    amount: {
        from?: number | null;
        to?: number | null;
    };
};

type EntityTokenType = {
    product_category?: {
        op: "eq";
        value: string;
    };
    product_color?: {
        op: "eq";
        value: string;
    };
    amount_of_money?: AmountOfMoney;
};

type WitEntity = {
    value?: string;
    from?: { value: number };
    to?: { value: number };
};

type WitEntities = {
    [key: string]: WitEntity[];
};

// Define the POST request handler
export async function POST(req: Request): Promise<Response> {
    try {
        const { message }: { message: string } = await req.json();

        const witResponse = await axios.get("https://api.wit.ai/message", {
            params: { v: "20241116", q: message },
            headers: {
                Authorization: `Bearer ${process.env.WIT_API_KEY}`, // Store API key in environment variables
                "Content-Type": "application/json",
            },
        });

        const { entities }: { entities: WitEntities } = witResponse.data;

        const entityTokens: EntityTokenType = {};
        let columns = "";
        let expression: Record<string, any> = {};
        let inquiry_type = "";
        let distinctOp: string | null = null;

        Object.keys(entities).forEach((key) => {
            const firstEntity = entities[key][0];
            const token = key.split(":")[1]; // Extract token name
            console.log(token);

            if (token === "product_category" || token === "product_color" || token === "amount_of_money") {
                inquiry_type = "product_specific";
                columns = "name price photo thumb quantity color";

                if (token === "amount_of_money") {
                    const from = firstEntity.from?.value || null;
                    const to = firstEntity.to?.value || null;

                    if (from && to) {
                        entityTokens[token] = { op: "bw", amount: { from, to } };
                    } else if (from) {
                        entityTokens[token] = { op: "gt", amount: { from } };
                    } else if (to) {
                        entityTokens[token] = { op: "lt", amount: { to } };
                    }
                } else {
                    entityTokens[token] = {
                        op: "eq",
                        value: firstEntity.value || "",
                    };
                }

                if (token === "product_category") {
                    expression["category"] = {
                        regex: pluralize.singular(entityTokens.product_category?.value || ""),
                        options: "i",
                    };
                }

                if (token === "product_color") {
                    expression["color"] = {
                        regex: entityTokens.product_color?.value || "",
                        options: "i",
                    };
                }

                if (token === "amount_of_money") {
                    const priceFilter = entityTokens.amount_of_money;
                    expression["price"] = {
                        gt: ((priceFilter?.op === "gt" || priceFilter?.op === "bw") && priceFilter?.amount.from) || 0,
                        lt: (priceFilter?.op === "lt" || priceFilter?.op === "bw") && priceFilter?.amount.to,
                    };
                }
            } else if (token === "product_inquiry") {
                inquiry_type = token;
                columns = "category";
                distinctOp = "category";
            }
        });

        const data = {
            parsed: entityTokens,
            data: [], // Replace with actual data fetching logic
            inquiry_type,
            raw: entities,
        };

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error processing the request:", error);
        return NextResponse.error();
    }
}
