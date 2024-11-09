import React from "react";
import { AmericanPaymentIcon, DinersClubIcon, DiscoverIcon, JCBIcon, MaestroIcon, MasterCardIcon, UnionIcon, VisaIcon } from "../icons";

const payments = [
    {
        name: "American Express",
        icon: AmericanPaymentIcon,
    },
    {
        name: "Diners Club",
        icon: DinersClubIcon,
    },
    {
        name: "Discover",
        icon: DiscoverIcon,
    },
    {
        name: "JCB",
        icon: JCBIcon,
    },
    {
        name: "Maestro",
        icon: MaestroIcon,
    },
    {
        name: "MasterCard",
        icon: MasterCardIcon,
    },
    {
        name: "Union",
        icon: UnionIcon,
    },
    {
        name: "Visa",
        icon: VisaIcon,
    },
];

const Payment = () => {
    return (
        <ul className="text-center mt-[30px]">
            {payments.map((payment) => (
                <li key={payment.name} aria-label={payment.name} className="inline-flex m-[0_4px]">
                    <payment.icon />
                </li>
            ))}
        </ul>
    );
};

export default Payment;
