import React, { useEffect, useState } from "react";
import noop from "lodash/noop";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Flex from "../../components/Box/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { MenuEntry } from "./components/MenuEntry";
import Menu from "./Menu";
import { links } from "./config";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {},
};

// This hook is used to simulate a props change, and force a re rendering
const useProps = () => {
  const [props, setProps] = useState({
    account: "0x138856029495292313dCdc43326497cD73D0d3a3",
    login: noop,
    logout: noop,
    isDark: false,
    toggleTheme: noop,
    currentLang: "EN",
    kissPriceUsd: 0.023158668932877668,
    links,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProps({
        account: "0x138856029495292313dCdc43326497cD73D0d3a3",
        login: noop,
        logout: noop,
        isDark: false,
        toggleTheme: noop,
        currentLang: "EN",
        kissPriceUsd: 0.023158668932877668,
        links,
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return props;
};

export const Connected: React.FC = () => {
  const props = useProps();
  return (
    <BrowserRouter>
      <Menu {...props}>
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const NotConnected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account={null}
        login={noop}
        logout={noop}
        isDark
        toggleTheme={noop}
        currentLang="EN"
        links={links}
      >
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const MenuEntryComponent: React.FC = () => {
  return (
    <Flex justifyContent="space-between" p="16px" style={{ backgroundColor: "wheat" }}>
      <MenuEntry>Default</MenuEntry>
      <MenuEntry secondary>Secondary</MenuEntry>
      <MenuEntry isActive>isActive</MenuEntry>
    </Flex>
  );
};

export const WithSubmenuSelected: React.FC = () => {
  return (
    <MemoryRouter initialEntries={["https://exchange.frenchkiss.finance"]}>
      <Menu
        account="0x138856029495292313dCdc43326497cD73D0d3a3"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        currentLang="EN"
        kissPriceUsd={0.23158668932877668}
        links={links}
      >
        <div>
          <Heading as="h1" mb="8px">
            Submenu exchange selected
          </Heading>
        </div>
      </Menu>
    </MemoryRouter>
  );
};
