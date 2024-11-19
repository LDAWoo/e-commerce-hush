import axios from "axios";
import { NextResponse } from "next/server";
import pluralize from "pluralize";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const witResponse = await axios("https://api.wit.ai/message?v=20241116&q=" + message, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.WIT_API_KEY}`, // Make sure to store the API key in an environment variable
                "Content-Type": "application/json",
            },
        });

        const { entities } = witResponse.data;
        const entityTokens = {};
        let columns = "";
        let expression = {};
        let inquiry_type = "";
        let distinctOp = null;

        Object.keys(entities).forEach(async (key) => {
            const firstEntity = entities[key][0];
            const token = key.split(":")[1];
            console.log(token);
            // these are specific queries
            if (token === "product_category" || token === "product_color" || token === "amount_of_money") {
                inquiry_type = "product_specific";

                columns = "name price photo thumb quantity color";

                // money is structured differently
                if (token === "amount_of_money") {
                    const from = firstEntity["from"] || null;
                    const to = firstEntity["to"] || null;

                    if (from && to) {
                        entityTokens[token] = { op: "bw", amount: { from: from.value, to: to.value } };
                    } else if (from) {
                        entityTokens[token] = { op: "gt", amount: { from: from.value } };
                    } else if (to) {
                        entityTokens[token] = { op: "lt", amount: { to: to.value } };
                    } else {
                    }
                } else {
                    entityTokens[token] = firstEntity.value || null;
                }

                if (token === "product_category") {
                    expression["category"] = { regex: pluralize.singular(entityTokens["product_category"]), options: "i" };
                }

                if (token === "product_color") {
                    expression["color"] = { regex: entityTokens["product_color"], options: "i" };
                }

                if (token === "amount_of_money") {
                    expression["price"] = {
                        gt: ((entityTokens["amount_of_money"].op === "gt" || entityTokens["amount_of_money"].op === "bw") && entityTokens["amount_of_money"].amount.from) || 0,

                        lt: (entityTokens["amount_of_money"].op === "lt" || entityTokens["amount_of_money"].op === "bw") && entityTokens["amount_of_money"].amount.to,
                    };
                }
            } else if (token === "product_inquiry") {
                inquiry_type = token;
                columns = "category";
                distinctOp = "category";
            }
        });

        // let products = [];
        // if( distinctOp ) {
        //     products = []
        // } else {
        //     products = []
        // }

        // send request to wit ai service
        //const productsFound = products.length > 0 ? products : "Sorry, we don't have this specific product. Please try a different search."
        const data = { parsed: entityTokens, data: [], inquiry_type: inquiry_type, raw: entities };

        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
    }
}
