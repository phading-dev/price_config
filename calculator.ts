import { DOLLAR_TO_CENTS } from "./amount_conversion";
import { CONFIG } from "./config";
import { resolvePrice } from "./resolver";
import { Price, PriceConfig, ProductID, RoundingType } from "@phading/price";

export function calculateMoney(
  productID: ProductID,
  currency: string,
  monthISOString: string,
  quantity: number,
  config: PriceConfig = CONFIG,
): {
  centAmount: number;
  dollarAmount: number;
  price: Price;
} {
  let price = resolvePrice(productID, currency, monthISOString, config);
  let centAmount = (quantity / price.divideBy) * price.centAmount;
  switch (price.rounding) {
    case RoundingType.CEIL:
      centAmount = Math.ceil(centAmount);
      break;
    case RoundingType.FLOOR:
      centAmount = Math.floor(centAmount);
      break;
    default:
      throw new Error(
        `Unhandled rounding type: ${RoundingType[price.rounding]}`,
      );
  }
  return {
    centAmount,
    dollarAmount: centAmount / DOLLAR_TO_CENTS.get(currency),
    price,
  };
}
