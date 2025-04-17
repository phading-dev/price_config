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
  amount: number;
  price: Price;
} {
  let price = resolvePrice(productID, currency, monthISOString, config);
  let amount = (quantity / price.divideBy) * price.amount;
  switch (price.rounding) {
    case RoundingType.CEIL:
      amount = Math.ceil(amount);
      break;
    case RoundingType.FLOOR:
      amount = Math.floor(amount);
      break;
    default:
      throw new Error(
        `Unhandled rounding type: ${RoundingType[price.rounding]}`,
      );
  }
  return {
    amount,
    price,
  };
}
