import { Stripe, loadStripe, CheckoutLocale } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = (connectedAccountId?: string, locale?: CheckoutLocale) => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "", {
            stripeAccount: connectedAccountId,
            locale: "en",
        });
    }
    return stripePromise;
};
