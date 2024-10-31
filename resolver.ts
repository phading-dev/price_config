import { DatedPrice, Price } from "@phading/price";

export function resolvePriceOfTimeMs(
  datedPrice: DatedPrice,
  timeMs: number,
): Price {
  for (let datedAmount of datedPrice.datedAmounts) {
    if (
      datedAmount.startMonthMs <= timeMs &&
      timeMs <= datedAmount.endMonthMs
    ) {
      return {
        productType: datedPrice.productType,
        money: datedAmount.money,
        divideBy: datedAmount.divideBy,
      };
    }
  }
  throw new Error(`${timeMs} doesn't match any configured price.`);
}

export function resolvePriceOfMonth(
  datedPrice: DatedPrice,
  monthISOString: string,
): Price {
  return resolvePriceOfTimeMs(datedPrice, new Date(monthISOString).valueOf());
}
