import { Button, ButtonAnchor, ButtonGroup } from "~/components";
import { configPricingPlans } from "~/configs";
import { useState } from "~/hooks";

import type { Currencies, CurrencyCode } from "~/types";

interface PricingTableProps {
  code: CurrencyCode;
}

const currencies: Currencies = [
  { code: "USD", symbol: "US$", name: "$ USD" },
  { code: "EUR", symbol: "€", name: "€ EUR" },
  { code: "SGD", symbol: "S$", name: "$ SGD" },
  { code: "IDR", symbol: "Rp", name: "Rp IDR" },
  { code: "MYR", symbol: "RM", name: "RM MYR" },
  { code: "PHP", symbol: "₱", name: "₱ PHP" },
];

export const PricingContent = () => {
  const [code, setCurrency] = useState<CurrencyCode>("USD");

  const changeCurrency = (currencySymbol: CurrencyCode) => {
    setCurrency(currencySymbol);
  };

  return (
    <div className="stack-v items-center gap-10">
      <ButtonGroup className="justify-center">
        {currencies.map((item) => {
          return (
            <Button
              key={item.code}
              color={item.code === code ? "primary" : "none"}
              variant={item.code === code ? "light" : "ghost"}
              onClick={() => {
                return changeCurrency(item.code);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </ButtonGroup>

      <PricingPlans code={code} />
    </div>
  );
};

export const PricingPlans = ({ code }: PricingTableProps) => {
  return (
    <div className="grid min-h-[500px] w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {configPricingPlans.map((plan) => {
        const currency = currencies.find((c) => c.code === code);
        const price = plan.price[code];
        const priceText = `${currency?.symbol} ${price}`;

        return (
          <div
            key={plan.name}
            className="bg-panel border-panel stack-v w-full gap-5 rounded-base p-5"
          >
            <PlanButton plan={plan} />

            <div className="stack-v gap-1 font-bold">
              <span className="text-lg">{plan.name}</span>
              <span className="text-4xl text-primary-500">
                {price ? priceText : "Contact Us"}
              </span>
              <span>{plan.note}</span>
            </div>

            <div className="flex-1">
              <span>{plan.info}</span>

              <div className="mt-5">
                <h4>Features:</h4>
                <ul className="ul-checklist">
                  {plan.features.map((feature) => {
                    return <li key={feature}>{feature}</li>;
                  })}
                </ul>
              </div>

              <div className="mt-5">
                <h4>Benefits:</h4>
                <ul className="ul-checklist">
                  {plan.benefits.map((benefit) => {
                    return <li key={benefit}>{benefit}</li>;
                  })}
                </ul>
              </div>
            </div>

            <PlanButton plan={plan} />
          </div>
        );
      })}
    </div>
  );
};

export const PlanButton = ({ plan }: { plan: any }) => {
  return (
    <div>
      {plan.button?.to ? (
        <ButtonAnchor
          href={plan.button.to}
          variant="light"
          size="lg"
          className="w-full"
        >
          {plan.button.text}
        </ButtonAnchor>
      ) : (
        <ButtonAnchor
          href="/demo"
          size="lg"
          className="w-full"
          variant="outline"
        >
          {plan.button.text}
        </ButtonAnchor>
      )}
    </div>
  );
};
