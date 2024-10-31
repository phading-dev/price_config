import {
  NETWORK_RPICE,
  PLATFORM_CUT_SHOW_PRICE,
  SHOW_PRICE,
  STORAGE_RPICE,
  UPLOAD_PRICE,
} from "./config";
import { DatedPrice } from "@phading/price";
import { assertThat, eq, gt } from "@selfage/test_matcher";
import { TEST_RUNNER, TestCase } from "@selfage/test_runner";

function toISOMonthString(date: Date): string {
  let year = date.getUTCFullYear().toString().padStart(4, "0");
  let month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
}

class MonthsAreConsecutive implements TestCase {
  public constructor(
    public name: string,
    private datedPrice: DatedPrice,
  ) {}
  public execute() {
    assertThat(
      this.datedPrice.datedAmounts.length,
      gt(0),
      `number of datedAmounts`,
    );
    let startMonth = this.datedPrice.datedAmounts[0].startMonth;
    assertThat(startMonth, eq("1970-01"), "datedAmounts[0].startMonth");
    let lastEndMonth = this.datedPrice.datedAmounts[0].endMonth;
    for (let i = 1; i < this.datedPrice.datedAmounts.length; i++) {
      let date = new Date(lastEndMonth);
      date.setUTCMonth(date.getUTCMonth() + 1);
      assertThat(
        toISOMonthString(date),
        eq(this.datedPrice.datedAmounts[i].startMonth),
        `datedAmount[${i - 1}].endMonth + 1 month`,
      );
      lastEndMonth = this.datedPrice.datedAmounts[i].endMonth;
    }
    assertThat(lastEndMonth, eq("9999-12"), "datedAmounts[last].endMonth");
  }
}

TEST_RUNNER.run({
  name: "PriceConfigTest",
  cases: [
    new MonthsAreConsecutive("StoragePriceMonthsAreConsecutive", STORAGE_RPICE),
    new MonthsAreConsecutive("UploadPriceMonthsAreConsecutive", UPLOAD_PRICE),
    new MonthsAreConsecutive("NetworkPriceMonthsAreConsecutive", NETWORK_RPICE),
    new MonthsAreConsecutive("ShowPriceMonthsAreConsecutive", SHOW_PRICE),
    new MonthsAreConsecutive(
      "PlatformCutShowPriceMonthsAreConsecutive",
      PLATFORM_CUT_SHOW_PRICE,
    ),
  ],
});
