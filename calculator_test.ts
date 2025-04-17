import { calculateMoney } from "./calculator";
import { ProductID } from "@phading/price";
import { assertThat, eq } from "@selfage/test_matcher";
import { TEST_RUNNER } from "@selfage/test_runner";

TEST_RUNNER.run({
  name: "CalculatorTest",
  cases: [
    {
      name: "Ceil",
      execute: () => {
        let price = calculateMoney(ProductID.SHOW, "USD", "2024-10", 80000);
        assertThat(price.amount, eq(23), "cent");
      },
    },
    {
      name: "Floor",
      execute: () => {
        let price = calculateMoney(
          ProductID.SHOW_CREDIT,
          "USD",
          "2024-10",
          800000,
        );
        assertThat(price.amount, eq(177), "cent");
      },
    },
  ],
});
