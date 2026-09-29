export type PlanName = "Monthly" | "Quarterly" | "Semi-Annual" | "Annual";

const plans: Record<
  PlanName,
  {
    price: string;
    description: string;
  }
> = {
  Monthly: {
    price: "USD $9.99",
    description:
      "Experience the benefits of Pro membership with unlimited chats for one month.",
  },

  Quarterly: {
    price: "USD $27.99",
    description:
      "Experience the benefits of Pro membership with unlimited chats for three months.",
  },

  "Semi-Annual": {
    price: "USD $49.99",
    description:
      "Experience the benefits of Pro membership with unlimited chats for six months.",
  },

  Annual: {
    price: "USD $89.99",
    description:
      "Experience the benefits of Pro membership with unlimited chats for one year.",
  },
};

export default plans;