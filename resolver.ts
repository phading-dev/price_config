import { CONFIG } from "./config";
import { Price, PriceConfig, ProductType } from "@phading/price";

export function resolvePrice(
  productType: ProductType,
  currency: string,
  monthISOString: string,
  config: PriceConfig = CONFIG,
): Price {
  let priceOfProduct = config.pricesOfProduct.find(
    (value) => value.productType === productType,
  );
  if (!priceOfProduct) {
    `Product ${ProductType[productType]} is not found in the config.`;
  }
  let priceInCurrency = priceOfProduct.pricesInCurrency.find(
    (value) => value.currency === currency,
  );
  if (!priceInCurrency) {
    `Currency ${currency} is not found in the product ${ProductType[productType]}`;
  }
  let timeMs = new Date(monthISOString).valueOf();
  let priceInMonth = priceInCurrency.pricesInMonth.find(
    (value) =>
      new Date(value.startMonth).valueOf() <= timeMs &&
      timeMs <= new Date(value.endMonth).valueOf(),
  );
  if (!priceInMonth) {
    `Month ${monthISOString} is not found in the product ${ProductType[productType]} and currency ${currency}.`;
  }
  return {
    productType: priceOfProduct.productType,
    description: priceOfProduct.description,
    currency: priceInCurrency.currency,
    amount: priceInMonth.amount,
    divideBy: priceInMonth.divideBy,
    unit: priceInMonth.unit,
  };
}
