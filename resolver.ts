import { Price, PriceConfig } from "@phading/price";

export function resolvePriceOfMonth(
  priceConfig: PriceConfig,
  currency: string,
  monthISOString: string,
): Price {
  for (let priceInCurrency of priceConfig.pricesInCurrency) {
    if (priceInCurrency.currency === currency) {
      let timeMs = new Date(monthISOString).valueOf();
      for (let priceInMonth of priceInCurrency.pricesInMonth) {
        if (
          new Date(priceInMonth.startMonth).valueOf() <= timeMs &&
          timeMs <= new Date(priceInMonth.endMonth).valueOf()
        ) {
          return {
            productType: priceConfig.productType,
            description: priceConfig.description,
            currency: priceInCurrency.currency,
            amount: priceInMonth.amount,
          };
        }
      }
    }
  }
  throw new Error(
    `Currency ${currency} and month ${monthISOString} doesn't match any configured price for product ${priceConfig.productType}.`,
  );
}
