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
        let price = resolvePriceOfMonth(SHOW_PRICE, "USD", "2024-10");
        assertThat(
          price,
          eqMessage(
            {
              productType: ProductType.SHOW,
              description: "shows watched per hour",
              currency: "USD",
              amount: 10,
            },
            PRICE,
          ),
          "show price",
        );
      },
    },
  ],
});
