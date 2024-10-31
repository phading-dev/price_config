import { SHOW_PRICE } from "./config";
import { resolvePriceOfMonth } from "./resolver";
import { PRICE, ProductType } from "@phading/price";
import { eqMessage } from "@selfage/message/test_matcher";
import { assertThat } from "@selfage/test_matcher";
import { TEST_RUNNER } from "@selfage/test_runner";

TEST_RUNNER.run({
  name: "ResolverTest",
  cases: [
    {
      name: "Default",
      execute: () => {
        let price = resolvePriceOfMonth(SHOW_PRICE, "2024-10");
        assertThat(
          price,
          eqMessage(
            {
              productType: ProductType.SHOW,
              money: {
                currency: "USD",
                amount: 10,
              },
              divideBy: 3600,
            },
            PRICE,
          ),
          "show price",
        );
      },
    },
  ],
});
