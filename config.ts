import { DatedPrice, ProductType } from "@phading/price";

// $0.26 per 10 GiB to match https://cloud.google.com/storage/pricing#multi-regions.
export let STORAGE_RPICE: DatedPrice = {
  productType: ProductType.STORAGE,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 26,
      },
      divideBy: 10 * 1024 * 1024 * 1024,
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
// $0.02 per 1 GiB to match https://cloud.google.com/storage/pricing#inter-region-replication.
export let UPLOAD_PRICE: DatedPrice = {
  productType: ProductType.UPLAOD,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 2,
      },
      divideBy: 1024 * 1024 * 1024,
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
// $0.12 per 1 GiB to match https://cloud.google.com/vpc/network-pricing.
export let NETWORK_RPICE: DatedPrice = {
  productType: ProductType.NETWORK,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 12,
      },
      divideBy: 1024 * 1024 * 1024,
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
// $0.10 per 3600 seconds.
export let SHOW_PRICE: DatedPrice = {
  productType: ProductType.SHOW,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 10,
      },
      divideBy: 3600,
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
// 20% cut of SHOW_PRICE.
export let PLATFORM_CUT_SHOW_PRICE: DatedPrice = {
  productType: ProductType.PLATFORM_CUT_SHOW,
  datedAmounts: [
    {
      money: {
        currency: "USD",
        amount: 2,
      },
      divideBy: 3600,
      startMonth: "1970-01",
      endMonth: "9999-12",
    },
  ],
};
