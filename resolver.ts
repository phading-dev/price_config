import { DatedPrice, Price } from "@phading/price";

export function resolvePriceOfMonth(
  datedPrice: DatedPrice,
  monthISOString: string,
): Price {
  let timeMs = new Date(monthISOString).valueOf();
  for (let datedAmount of datedPrice.datedAmounts) {
    if (
      new Date(datedAmount.startMonth).valueOf() <= timeMs &&
      timeMs <= new Date(datedAmount.endMonth).valueOf()
    ) {
      return {
        productType: datedPrice.productType,
        money: datedAmount.money,
        description: datedAmount.description,
      };
    }
  }
  throw new Error(`${timeMs} doesn't match any configured price.`);
}
