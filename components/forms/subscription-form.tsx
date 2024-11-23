"use client";
import { getStripe } from "@/lib/stripe/stripe-client";
import { StripeElementsOptions } from "@stripe/stripe-js";
import React from "react";
import { CardElement, Elements, EmbeddedCheckout, EmbeddedCheckoutProvider, PaymentElement } from "@stripe/react-stripe-js";
import { stripe } from "@/lib/stripe";
import axios from "axios";

const SubscriptionForm = ({ clientSecret }) => {
    const [subscription, setSubscription] = React.useState<{
        subscriptionId: string;
        clientSecret: string;
    }>({
        subscriptionId: "",
        clientSecret: "cs_test_b1bAowToJy6kjCeH01nlftgNSUw1J1flOZTHdenJPDZIjy0S7NihWZMZSr_secret_fidwbEhqYWAnPydgaGdgYWFgYScpJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknd2BhbHdgZnFKa0ZqaHVpYHFsamsnPydrYHNgdyd4JSUl",
    });

    const options: StripeElementsOptions = React.useMemo(
        () => ({
            clientSecret: subscription.clientSecret,
            appearance: {
                theme: "night",
            },
        }),
        [subscription]
    );

    return (
        <form>
            {options.clientSecret && (
                <>
                    <h1 className="text-xl">Payment Method</h1>
                    <EmbeddedCheckoutProvider stripe={getStripe()} options={options}>
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                </>
            )}
        </form>
    );
};

export default SubscriptionForm;
