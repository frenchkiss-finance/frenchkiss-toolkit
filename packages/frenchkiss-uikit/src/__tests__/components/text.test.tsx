import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>frenchkiss</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      color: #BD1C3F;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    <div
        class="c0"
        color="text"
      >
        frenchkiss
      </div>
    </DocumentFragment>
  `);
});
