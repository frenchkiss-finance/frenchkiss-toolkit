import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useWalletModal from "./useWalletModal";

export default {
  title: "Widgets/WalletModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    () => null,
    () => null,
    "0x138856029495292313dCdc43326497cD73D0d3a3"
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
      <Button onClick={onPresentAccountModal}>Open account modal</Button>
    </Flex>
  );
};
