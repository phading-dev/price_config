import { DatedPrice, ProductType } from "@phading/price";

// To match https://cloud.google.com/storage/pricing#multi-regions.
export let STORAGE_RPICE: DatedPrice = {
  productType: ProductType.STORAGE,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 26,
      },
      description: "Storage at $0.26 per 10 GiB per month (30 days)",
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
// To match https://cloud.google.com/storage/pricing#inter-region-replication.
export let UPLOAD_PRICE: DatedPrice = {
  productType: ProductType.UPLAOD,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 2,
      },
      description: "Upload at $0.02 per 1 GiB",
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
// To match https://cloud.google.com/vpc/network-pricing.
export let NETWORK_RPICE: DatedPrice = {
  productType: ProductType.NETWORK,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 12,
      },
      description: "Network delivery at $0.12 per 1 GiB",
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
export let SHOW_PRICE: DatedPrice = {
  productType: ProductType.SHOW,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 10,
      },
      description: "Watch shows at $0.10 per hour",
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
export let PLATFORM_CUT_SHOW_PRICE: DatedPrice = {
  productType: ProductType.PLATFORM_CUT_SHOW,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 2,
      },
      description: "20% service fees for shows watched",
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
