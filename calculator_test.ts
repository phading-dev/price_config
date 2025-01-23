import { calculateMoney } from "./calculator";
import { ProductType } from "@phading/price";
import { assertThat, eq } from "@selfage/test_matcher";
import { TEST_RUNNER } from "@selfage/test_runner";

TEST_RUNNER.run({
  name: "CalculatorTest",
  cases: [
    {
      name: "Ceil",
      execute: () => {
        let price = calculateMoney(ProductType.SHOW, "USD", "2024-10", 8000);
        assertThat(price.amount, eq(23), "money");
      },
    },
    {
      name: "Floor",
      execute: () => {
        let price = calculateMoney(
          ProductType.SHOW_PAYOUT,
          "USD",
          "2024-10",
          8000,
        );
        assertThat(price.amount, eq(17), "money");
      },
    },
  ],
});
