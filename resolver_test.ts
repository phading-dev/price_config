import { resolvePrice } from "./resolver";
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
        let price = resolvePrice(ProductType.SHOW, "USD", "2024-10");
        assertThat(
          price,
          eqMessage(
            {
              productType: ProductType.SHOW,
              description: "shows watched",
              currency: "USD",
              amount: 10,
              divideBy: 3600,
              unit: "seconds",
            },
            PRICE,
          ),
          "show price",
        );
      },
    },
  ],
});
