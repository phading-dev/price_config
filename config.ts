import { PriceConfig, ProductType } from "@phading/price";

export let CONFIG: PriceConfig = {
  pricesOfProduct: [
    {
      // To match Cloudflare R2 storage https://developers.cloudflare.com/r2/pricing/#r2-pricing without free tier nor cost of operations.
      productType: ProductType.STORAGE,
      description: "storage per 10 GiB per month (30 days)",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 15,
              divideBy: 10 * 1024 * 30 * 24,
              unit: "MiB x hour",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      // To match egress cost https://cloud.google.com/vpc/network-pricing, incurred by copy from GCS to Cloudflare R2.
      productType: ProductType.UPLAOD,
      description: "uploaded per 1 GiB",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 12,
              divideBy: 1024,
              unit: "MiB",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      // No egress cost for Cloudflare R2 https://developers.cloudflare.com/r2/pricing/#r2-pricing.
      productType: ProductType.NETWORK,
      description: "network delivery per 1 GiB",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 0,
              divideBy: 1024,
              unit: "MiB",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      productType: ProductType.SHOW,
      description: "shows watched per hour",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 10,
              divideBy: 3600,
              unit: "seconds",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
    {
      productType: ProductType.PLATFORM_CUT_SHOW,
      description: "platform fee for shows watched per hour",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 2,
              divideBy: 3600,
              unit: "seconds",
              startMonth: "1970-01",
              endMonth: "9999-12",
            },
          ],
        },
      ],
    },
  ],
};
