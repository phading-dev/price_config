import { PriceConfig, ProductType } from "@phading/price";

// To match https://cloud.google.com/storage/pricing#multi-regions.
export let STORAGE_RPICE: PriceConfig = {
  productType: ProductType.STORAGE,
  description: "storage per 10 GiB per month (30 days)",
  pricesInCurrency: [
    {
      currency: "USD",
      pricesInMonth: [
        {
          amount: 26,
          startMonth: "1970-01",
          endMonth: "9999-12",
        },
      ],
    },
  ],
};
// To match https://cloud.google.com/storage/pricing#inter-region-replication.
export let UPLOAD_PRICE: PriceConfig = {
  productType: ProductType.UPLAOD,
  description: "uploaded content per 1 GiB",
  pricesInCurrency: [
    {
      currency: "USD",
      pricesInMonth: [
        {
          amount: 2,
          startMonth: "1970-01",
          endMonth: "9999-12",
        },
      ],
    },
  ],
};
// To match https://cloud.google.com/vpc/network-pricing.
export let NETWORK_RPICE: PriceConfig = {
  productType: ProductType.NETWORK,
  description: "network delivery per 1 GiB",
  pricesInCurrency: [
    {
      currency: "USD",
      pricesInMonth: [
        {
          amount: 12,
          startMonth: "1970-01",
          endMonth: "9999-12",
        },
      ],
    },
  ],
};
export let SHOW_PRICE: PriceConfig = {
  productType: ProductType.SHOW,
  description: "shows watched per hour",
  pricesInCurrency: [
    {
      currency: "USD",
      pricesInMonth: [
        {
          amount: 10,
          startMonth: "1970-01",
          endMonth: "9999-12",
        },
      ],
    },
  ],
};
export let PLATFORM_CUT_SHOW_PRICE: PriceConfig = {
  productType: ProductType.PLATFORM_CUT_SHOW,
  description: "platform fee for shows watched per hour",
  pricesInCurrency: [
    {
      currency: "USD",
      pricesInMonth: [
        {
          amount: 2,
          startMonth: "1970-01",
          endMonth: "9999-12",
        },
      ],
    },
  ],
};
