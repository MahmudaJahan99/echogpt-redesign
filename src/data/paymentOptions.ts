import stripeLogo from "../assets/images/stripe.svg";
import sslCommerz from "../assets/images/sslCommerz.png";

export type PaymentMethod = "usd" | "bdt";

interface PaymentOptionData {
  value: PaymentMethod;
  logo: string;
  logoAlt: string;
  label: string;
}

export const paymentOptions: PaymentOptionData[] = [
  {
    value: "usd",
    logo: stripeLogo,
    logoAlt: "Pay in USD",
    label: "Pay in USD",
  },
  {
    value: "bdt",
    logo: sslCommerz,
    logoAlt: "Pay in BDT",
    label: "Pay in BDT",
  },
];
