import React from "react";
import styled from "styled-components";
import { FrenchKissRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  kissPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const KissPrice: React.FC<Props> = ({ kissPriceUsd }) => {
  return kissPriceUsd ? (
    <PriceLink href="https://info.frenchkiss.finance/token/0x3b44b0cFe3a290906F3C6479df56457db9d7cd59" target="_blank">
      <FrenchKissRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${kissPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(KissPrice);
