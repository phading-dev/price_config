import { CONFIG } from "./config";
import { Price, PriceConfig, ProductID } from "@phading/price";

export function resolvePrice(
  productID: ProductID,
  currency: string,
  monthISOString: string,
  config: PriceConfig = CONFIG,
): Price {
  let priceOfProduct = config.pricesOfProduct.find(
    (value) => value.productID === productID,
  );
  if (!priceOfProduct) {
    `Product ${ProductID[productID]} is not found in the config.`;
  }
  let priceInCurrency = priceOfProduct.pricesInCurrency.find(
    (value) => value.currency === currency,
  );
  if (!priceInCurrency) {
    `Currency ${currency} is not found in the product ${ProductID[productID]}`;
  }
  let timeMs = new Date(monthISOString).valueOf();
  let priceInMonth = priceInCurrency.pricesInMonth.find(
    (value) =>
      new Date(value.startMonth).valueOf() <= timeMs &&
      timeMs <= new Date(value.endMonth).valueOf(),
  );
  if (!priceInMonth) {
    `Month ${monthISOString} is not found in the product ${ProductID[productID]} and currency ${currency}.`;
  }
  return {
    productID: priceOfProduct.productID,
    amountType: priceOfProduct.amountType,
    description: priceOfProduct.description,
    currency: priceInCurrency.currency,
    amount: priceInMonth.amount,
    divideBy: priceInMonth.divideBy,
    rounding: priceInMonth.rounding,
    unit: priceInMonth.unit,
  };
}
