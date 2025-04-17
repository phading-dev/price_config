export let DOLLAR_TO_CENTS = new Map<string, number>([["USD", 100]]);

export function getDollarAmount(centAmount: number, currency: string): number {
  let dollarToCents = DOLLAR_TO_CENTS.get(currency);
  if (!dollarToCents) {
    throw new Error(`Currency ${currency} is not found.`);
  }
  return centAmount / dollarToCents;
}
