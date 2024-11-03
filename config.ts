import { PriceConfig, ProductType } from "@phading/price";

export let CONFIG: PriceConfig = {
  pricesOfProduct: [
    {
      // To match https://cloud.google.com/storage/pricing#multi-regions.
      productType: ProductType.STORAGE,
      description: "storage per 10 GiB per month (30 days)",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 26,
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
      // To match https://cloud.google.com/storage/pricing#inter-region-replication.
      productType: ProductType.UPLAOD,
      description: "uploaded content",
      pricesInCurrency: [
        {
          currency: "USD",
          pricesInMonth: [
            {
              amount: 2,
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
      // To match https://cloud.google.com/vpc/network-pricing.
      productType: ProductType.NETWORK,
      description: "network delivery per 1 GiB",
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
      productType: ProductType.SHOW,
      description: "shows watched",
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
      description: "platform fee for shows watched",
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
