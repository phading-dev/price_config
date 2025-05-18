import { PriceConfig, ProductID, RoundingType } from "@phading/price";
import { AmountType } from "@phading/price/amount_type";

export let CONFIG: PriceConfig = {
  pricesOfProduct: [
    {
      // To match Cloudflare R2 storage https://developers.cloudflare.com/r2/pricing/#r2-pricing without free tier nor cost of operations.
      productID: ProductID.STORAGE,
      amountType: AmountType.DEBIT,
      description: "storage",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 15,
              divideBy: 10 * 1024 * 30 * 24, // 10 GiB per month (30 days)
              unit: "MIB_HOUR",
              rounding: RoundingType.CEIL,
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      // To match egress cost https://cloud.google.com/vpc/network-pricing, incurred by copy from GCS to Cloudflare R2.
      productID: ProductID.UPLOAD,
      amountType: AmountType.DEBIT,
      description: "upload",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 12,
              divideBy: 1024, // 1 GiB
              rounding: RoundingType.CEIL,
              unit: "MIB",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      // No egress cost for Cloudflare R2 https://developers.cloudflare.com/r2/pricing/#r2-pricing.
      productID: ProductID.NETWORK,
      amountType: AmountType.DEBIT,
      description: "network delivery",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 0,
              divideBy: 1024, // 1 GiB
              rounding: RoundingType.CEIL,
              unit: "MIB",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      productID: ProductID.SHOW,
      amountType: AmountType.DEBIT,
      description: "shows watched",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 10,
              divideBy: 10 * 3600, // 10 hours
              rounding: RoundingType.CEIL,
              unit: "SECOND",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      productID: ProductID.SHOW_CREDIT,
      amountType: AmountType.CREDIT,
      description: "payout for shows watched",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 8,
              divideBy: 10 * 3600, // 10 hours
              rounding: RoundingType.FLOOR,
              unit: "SECOND",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
  ],
};
