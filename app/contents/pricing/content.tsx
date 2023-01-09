import { Button, ButtonAnchor, ButtonGroup } from "~/components";
import { configPricingPlans } from "~/configs";
import { useState } from "~/hooks";

import type { Currencies, CurrencySymbol } from "~/types";

interface PricingTableProps {
  symbol: CurrencySymbol;
}

export const PricingContent = () => {
  const [symbol, setCurrency] = useState<CurrencySymbol>("USD");

  const currencies: Currencies = [
    { symbol: "USD", name: "$ USD" },
    { symbol: "IDR", name: "Rp IDR" },
    { symbol: "MYR", name: "RM MYR" },
    { symbol: "SGD", name: "$ SGD" },
    { symbol: "PHP", name: "₱ PHP" },
  ];

  const changeCurrency = (currencySymbol: CurrencySymbol) => {
    setCurrency(currencySymbol);
  };

  return (
    <div className="stack-v items-center gap-10">
      <ButtonGroup className="justify-center">
        {currencies.map((item) => {
          return (
            <Button
              key={item.symbol}
              color={item.symbol === symbol ? "primary" : "none"}
              variant={item.symbol === symbol ? "light" : "ghost"}
              onClick={() => {
                return changeCurrency(item.symbol);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </ButtonGroup>

      <PricingPlans symbol={symbol} />
    </div>
  );
};

export const PricingPlans = ({ symbol }: PricingTableProps) => {
  return (
    <div className="grid min-h-[500px] w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {configPricingPlans.map((plan) => {
        const price = plan.price[symbol];
        const priceText = `${symbol} ${price}`;

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
