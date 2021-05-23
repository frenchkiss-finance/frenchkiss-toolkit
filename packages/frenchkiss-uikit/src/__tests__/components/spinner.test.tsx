import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c1 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #BD1C3F;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c0 {
      position: relative;
    }

    .c2 {
      -webkit-animation: fIyWYW 6s ease-in-out infinite;
      animation: fIyWYW 6s ease-in-out infinite;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    <div
        class="c0"
      >
        <svg
          class="c1 c2"
          color="text"
          viewBox="0 0 256 256"
          width="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79,2c12.5,0.084,15.173,4.945,23,7,13.229,3.473,18.321-9.3,31-5,23.848,8.084,56.023,53.369,70,74-7.673,23.649-33.314,50.309-60,55-15.05,2.645-27.471-5.868-40-8-16.578-2.821-24.735,8.045-39,6-32.519-4.663-51.9-30.655-64-56C21.566,43.67,45.757,22.1,79,2ZM93,43c-20.356,7.846-38.84,7.8-52,22l2,2,117,3,1-2-3-4C137.441,55.648,123.452,43.39,93,43Z"
            fill="#e64c6d"
            fill-rule="evenodd"
          />
          <path
            d="M157,62c2.439,0.733,43.8,17.637,44,18h-6c-28.654-8.629-63.562-7.328-91-1-6.971,1.608-26.066-9.049-35-8L5,77V76L41,63c3.79,6.253,104.3,9.047,120,6l1-2-2-3Z"
            fill="#593233"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </DocumentFragment>
  `);
});
