import React from "react";
import styled, { keyframes } from "styled-components";
import FrenchKissIcon from "./FrenchKissIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;


const FloatingFrenchKissIcon = styled(FrenchKissIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
	return (
		<Container>
			<FloatingFrenchKissIcon width={`${size}px`} />
		</Container>
	);
};

export default Spinner;
