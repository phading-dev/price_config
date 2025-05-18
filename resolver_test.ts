import { resolvePrice } from "./resolver";
import { PRICE, ProductID, RoundingType } from "@phading/price";
import { AmountType } from "@phading/price/amount_type";
import { eqMessage } from "@selfage/message/test_matcher";
import { assertThat } from "@selfage/test_matcher";
import { TEST_RUNNER } from "@selfage/test_runner";

TEST_RUNNER.run({
  name: "ResolverTest",
  cases: [
    {
      name: "Default",
      execute: () => {
        let price = resolvePrice(ProductID.SHOW, "USD", "2024-10");
        assertThat(
          price,
          eqMessage(
            {
              productID: ProductID.SHOW,
              amountType: AmountType.DEBIT,
              description: "shows watched",
              unit: "SECOND",
              rounding: RoundingType.CEIL,
              currency: "USD",
              amount: 1,
              divideBy: 36000,
            },
            PRICE,
          ),
          "show price",
        );
      },
    },
  ],
});
