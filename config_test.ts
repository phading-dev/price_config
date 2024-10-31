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

function assertTimeMsIsUTCMonth(timeMs: number, context: string): Date {
  let date = new Date(timeMs);
  assertThat(timeMs, eq(new Date(toISOMonthString(date)).valueOf()), context);
  return date;
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
    let startMonthMs = this.datedPrice.datedAmounts[0].startMonthMs;
    assertThat(startMonthMs, eq(0), "datedAmounts[0].startMonthMs");
    let lastEndMonthMs = this.datedPrice.datedAmounts[0].endMonthMs;
    for (let i = 1; i < this.datedPrice.datedAmounts.length; i++) {
      let lastEndMonth = assertTimeMsIsUTCMonth(
        lastEndMonthMs,
        `datedAmount[${i - 1}].endMonthMs`,
      );
      assertTimeMsIsUTCMonth(
        this.datedPrice.datedAmounts[i].startMonthMs,
        `datedAmount[${i}].startMonthMs`,
      );
      lastEndMonth.setUTCMonth(lastEndMonth.getUTCMonth() + 1);
      assertThat(
        lastEndMonth.valueOf(),
        eq(this.datedPrice.datedAmounts[i].startMonthMs),
        `datedAmount[${i - 1}].endMonthMs + 1 month`,
      );
      lastEndMonthMs = this.datedPrice.datedAmounts[i].endMonthMs;
    }
    assertThat(
      lastEndMonthMs,
      eq(Number.MAX_SAFE_INTEGER),
      "datedAmounts[last].endMonthMs",
    );
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
