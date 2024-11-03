import { CONFIG } from "./config";
import { assertThat, eq, gt } from "@selfage/test_matcher";
import { TEST_RUNNER } from "@selfage/test_runner";

function toISOMonthString(date: Date): string {
  let year = date.getUTCFullYear().toString().padStart(4, "0");
  let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
}

TEST_RUNNER.run({
  name: "ConfigTest",
  cases: [
    {
      name: "Validation",
      execute: () => {
        for (let priceOfProduct of CONFIG.pricesOfProduct) {
          assertThat(
            priceOfProduct.pricesInCurrency.length,
            gt(0),
            `number of currencies`,
          );
          for (let priceInCurrency of priceOfProduct.pricesInCurrency) {
            assertThat(
              priceInCurrency.pricesInMonth.length,
              gt(0),
              `number of prices in month for ${priceInCurrency.currency}`,
            );
            let startMonth = priceInCurrency.pricesInMonth[0].startMonth;
            assertThat(
              startMonth,
              eq("1970-01"),
              `pricesInMonth[0].startMonth for ${priceInCurrency.currency}`,
            );
            let lastEndMonth = priceInCurrency.pricesInMonth[0].endMonth;
            for (let i = 1; i < priceInCurrency.pricesInMonth.length; i++) {
              let date = new Date(lastEndMonth);
              date.setUTCMonth(date.getUTCMonth() + 1);
              assertThat(
                toISOMonthString(date),
                eq(priceInCurrency.pricesInMonth[i].startMonth),
                `pricesInMonth[${i - 1}].endMonth + 1 month for ${priceInCurrency.currency}`,
              );
              lastEndMonth = priceInCurrency.pricesInMonth[i].endMonth;
            }
            assertThat(
              lastEndMonth,
              eq("9999-12"),
              `pricesInMonth[last].endMonth for ${priceInCurrency.currency}`,
            );
          }
        }
      },
    },
  ],
});
