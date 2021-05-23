import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0x138856029495292313dCdc43326497cD73D0d3a3"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        currentLang="EN"
        kissPriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c24 {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #BD1C3F;
      -webkit-transition: opacity 0.4s;
      transition: opacity 0.4s;
      opacity: 0;
      z-index: 10;
      pointer-events: none;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c5 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #E23359;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c7 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #BD1C3F;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c13 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #BD1C3F;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-right: 8px;
    }

    .c3 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #1FC7D4;
      box-shadow: none;
      width: sm;
      height: sm;
      margin-right: 24px;
    }

    .c3:hover:not(:disabled):not(.frenchkiss-button--disabled):not(.frenchkiss-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c3:active:not(:disabled):not(.frenchkiss-button--disabled):not(.frenchkiss-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c3:disabled,
    .c3.frenchkiss-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 32px;
      padding: 0 16px;
      background-color: #EFF4F5;
      box-shadow: none;
      color: #1FC7D4;
    }

    .c8:hover:not(:disabled):not(.frenchkiss-button--disabled):not(.frenchkiss-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c8:active:not(:disabled):not(.frenchkiss-button--disabled):not(.frenchkiss-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c8:disabled,
    .c8.frenchkiss-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c21 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #1FC7D4;
      box-shadow: none;
    }

    .c21:hover:not(:disabled):not(.frenchkiss-button--disabled):not(.frenchkiss-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c21:active:not(:disabled):not(.frenchkiss-button--disabled):not(.frenchkiss-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c21:disabled,
    .c21.frenchkiss-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c4 {
      color: #BD1C3F;
      padding: 0 8px;
      border-radius: 8px;
    }

    .c6 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c6 .mobile-icon {
      width: 32px;
    }

    .c6 .desktop-icon {
      width: 156px;
      display: none;
    }

    .c18 {
      color: #ED4B9E;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-size: 14px;
    }

    .c14 {
      color: transparent;
      -webkit-transition: color 0.4s;
      transition: color 0.4s;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    }

    .c12 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      font-size: 16px;
      background-color: transparent;
      color: #E23359;
      box-shadow: inset 4px 0px 0px #1FC7D4;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c12 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c12 svg {
      fill: #E23359;
    }

    .c12:hover {
      background-color: #EFF4F5;
    }

    .c12.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E6FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c16 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      font-size: 16px;
      background-color: transparent;
      color: #E23359;
      box-shadow: none;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c16 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c16 svg {
      fill: #E23359;
    }

    .c16:hover {
      background-color: #EFF4F5;
    }

    .c16.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E6FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c19 {
      border-radius: 16px;
      padding: 0 8px;
      border: 2px solid;
      border-color: #ED4B9E;
      box-shadow: none;
      color: #ED4B9E;
      margin-left: 8px;
    }

    .c15 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c17 {
      max-height: 0;
      -webkit-transition: max-height 0.3s ease-out;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      border-color: transparent;
      border-style: solid;
      border-width: 1px 0;
    }

    .c11 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
    }

    .c22 {
      padding: 0;
      width: 48px;
    }

    .c20 {
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      padding: 8px 4px;
      background-color: #FFFFFF;
      border-top: solid 2px rgba(133,133,133,0.1);
    }

    .c10 {
      position: fixed;
      padding-top: 80px;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      background-color: #FFFFFF;
      width: 0;
      height: 100vh;
      -webkit-transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      border-right: 0;
      z-index: 11;
      overflow: hidden;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      white-space: nowrap;
    }

    .c0 {
      position: relative;
      width: 100%;
    }

    .c1 {
      position: fixed;
      top: 0;
      left: 0;
      -webkit-transition: top 0.2s;
      transition: top 0.2s;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 8px;
      padding-right: 16px;
      width: 100%;
      height: 64px;
      background-color: #FFFFFF;
      border-bottom: solid 2px rgba(133,133,133,0.1);
      z-index: 20;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    .c9 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c23 {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-top: 64px;
      -webkit-transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      max-width: 100%;
    }

    .c25 {
      position: fixed;
      height: 100%;
    }

    @media screen and (min-width:968px) {
      .c6 .mobile-icon {
        display: none;
      }
    }

    @media screen and (min-width:968px) {
      .c6 .desktop-icon {
        display: block;
      }
    }

    @media screen and (min-width:968px) {
      .c10 {
        border-right: 2px solid rgba(133,133,133,0.1);
        width: 56px;
      }
    }

    @media screen and (min-width:968px) {
      .c23 {
        margin-left: 56px;
        max-width: calc(100% - 56px);
      }
    }

    @media screen and (min-width:968px) {
      .c25 {
        display: none;
      }
    }

    <div
        class="c0"
      >
        <nav
          class="c1"
        >
          <div
            class="c2"
          >
            <button
              aria-label="Toggle menu"
              class="c3 c4"
              scale="md"
            >
              <svg
                class="c5"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="FrenchKiss home page"
              class="c6"
              href="/"
            >
              <svg
                class="c7 mobile-icon"
                color="text"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                viewBox="0 0 32 32"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.453,6c1.971,0.013,2.392.79,3.626,1.118,2.085,0.555,2.888-1.485,4.887-.8C24.725,7.61,29.8,14.842,32,18.137c-1.209,3.777-5.251,8.034-9.458,8.783-2.372.422-4.33-.937-6.305-1.278-2.613-.451-3.9,1.285-6.148.958C4.962,25.856,1.907,21.705,0,17.658A38.271,38.271,0,0,1,12.453,6Zm2.207,6.547c-3.209,1.253-6.123,1.246-8.2,3.513L6.778,16.38l18.443,0.479,0.158-.319L24.906,15.9C21.666,14.567,19.461,12.61,14.66,12.548Z"
                  fill="#e64c6d"
                  fill-rule="evenodd"
                />
                <path
                  d="M24.749,15.582c0.384,0.117,6.9,2.817,6.936,2.875H30.739a29.19,29.19,0,0,0-14.345-.16c-1.1.257-4.109-1.445-5.517-1.278l-10.089.958v-0.16l5.675-2.076c0.6,1,16.441,1.445,18.916.958l0.158-.319L25.222,15.9Z"
                  fill="#593233"
                  fill-rule="evenodd"
                />
              </svg>
              <svg
                class="c7 desktop-icon"
                color="text"
                viewBox="0 0 160 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.415,9.738h3.007v3.028H42.415V23.124H38.142V12.766H35.926V9.738h2.216C37.956,4.675,40.88,1.977,45.9,3.364V6.551a6.384,6.384,0,0,0-2.532-.159l-0.95.956v2.39Zm58.241-6.374h4.115v8.127c8.751-7.017,8.766,3.231,8.546,11.633H109.2c0.064-3.349.461-8.075-.791-10.2-4.867-1.312-3.8,5.7-3.64,10.2h-4.115V3.364Zm15.985,0h4.114v12.27l0.317-.159,3.482-5.737L129.46,9.9l-0.633.637-3.957,5.418,4.907,7.012v0.159H124.87l-4.115-6.374v6.374h-4.114V3.364Zm15.984,0c1.407-.075,2.217.084,2.691,0.956a1.9,1.9,0,0,1-.475,2.868c-0.867.8-2.236,0.375-3.165,0l-0.633-.956a3.377,3.377,0,0,1,.791-2.55ZM51.436,23.124H47.321V9.738h4.115v2.072h0.158V11.491c1.033-1.343,1.984-2.442,4.431-1.912v3.665c-1.809-.333-2.728-0.232-3.957.638C51.342,16.212,51.418,19.883,51.436,23.124Zm18.2-5.418H61.09L61.406,19.3c2.113,1.605,4.572,1.2,7.122.319v2.868l-0.475.159c-6.608,4.211-14.123-3.4-10.287-10.039C61.38,6.348,69.946,8.968,69.636,17.706Zm15.352,5.418H80.873c0.04-3.288.175-7.134-.475-9.721a2.969,2.969,0,0,0-3.007-.478c-1.5,2.093-1.158,6.514-1.108,10.2H72.168V9.738h4.115V11.65C84.757,3.512,85.2,15.177,84.988,23.124Zm8.071-13.7a17.719,17.719,0,0,1,4.906.478v3.665c-2.57-1.707-7.478-.813-6.647,3.506,0.64,3.327,3.9,3.72,6.647,2.231v3.346c-5.733,2.853-12.557-1.307-10.6-8.286C88.233,11.244,90.289,10.668,93.059,9.419Zm49.062,0a19.554,19.554,0,0,1,5.065.478v3.346c-1.519-.8-3.578-1.3-5.223-0.319a2.412,2.412,0,0,0,.316,1.275c2.783,0.78,7.992,3.046,5.223,7.171-1.659,2.471-6.452,2.3-9.654,1.434q0.079-1.753.158-3.506c1.425,0.939,4.952,2.214,6.173.159l-0.317-.8C137.481,16.873,135.148,12.685,142.121,9.419Zm11.712,0A19.546,19.546,0,0,1,158.9,9.9v3.346c-1.518-.8-3.578-1.3-5.223-0.319a2.4,2.4,0,0,0,.317,1.275c2.782,0.78,7.992,3.046,5.223,7.171-1.659,2.471-6.453,2.3-9.654,1.434q0.078-1.753.158-3.506c1.424,0.939,4.952,2.214,6.172.159l-0.316-.8C149.192,16.873,146.86,12.685,153.833,9.419Zm-22.474.319h4.115V23.124h-4.115V9.738ZM65.838,15.156c-0.017-2.362-1.406-3.187-3.482-2.55a9.086,9.086,0,0,0-1.424,2.55h4.906Z"
                  fill="#000000"
                  fill-rule="evenodd"
                />
                <path
                  d="M12.5,3.045c1.979,0.013,2.4.788,3.64,1.115,2.094,0.554,2.9-1.482,4.906-.8,3.774,1.288,8.867,8.5,11.079,11.792-1.214,3.768-5.273,8.017-9.5,8.765-2.382.422-4.348-.935-6.331-1.275-2.624-.45-3.915,1.282-6.172.956C4.982,22.859,1.915,18.717,0,14.678A38.33,38.33,0,0,1,12.5,3.045Zm2.216,6.534c-3.222,1.25-6.147,1.243-8.23,3.506L6.805,13.4l18.517,0.478,0.158-.319-0.475-.637C21.752,11.594,19.538,9.641,14.719,9.578Z"
                  fill="#e64c6d"
                  fill-rule="evenodd"
                />
                <path
                  d="M24.373,12.606c0.386,0.117,6.932,2.811,6.964,2.868h-0.95a29.48,29.48,0,0,0-14.4-.159c-1.1.256-4.125-1.442-5.539-1.275L0.317,15V14.837l5.7-2.072c0.6,1,16.506,1.442,18.992.956l0.158-.319-0.317-.478Z"
                  fill="#593233"
                  fill-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div
            class="c2"
          >
            <div>
              <button
                class="c8"
                scale="sm"
              >
                0x13...d3a3
              </button>
            </div>
          </div>
        </nav>
        <div
          class="c9"
        >
          <div
            class="c10"
          >
            <div
              class="c11"
            >
              <div
                class="c12"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Trade
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c16"
                role="button"
              >
                <a
                  href="/farms"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Farms
                  </div>
                  <div
                    class="c18 c19"
                    color="failure"
                    font-size="14px"
                  >
                    LIVE
                  </div>
                </a>
              </div>
              <div
                class="c16"
                role="button"
              >
                <a
                  href="/pools"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Pools
                  </div>
                </a>
              </div>
              <div
                class="c16"
                role="button"
              >
                <a
                  href="https://nft.frenchkiss.finance"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    NFT Marketplace
                  </div>
                </a>
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Info
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    More
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
            </div>
            <div
              class="c20"
            >
              <button
                class="c21 c22"
                scale="md"
              >
                <svg
                  class="c7"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="c23"
          >
            body
          </div>
          <div
            class="c24 c25"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
