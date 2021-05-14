import React from "react";
import { FrenchKissStack, FrenchKissInput, FrenchKissLabel } from "./StyledFrenchKissToggle";
import { FrenchKissToggleProps, scales } from "./types";

const FrenchKissToggle: React.FC<FrenchKissToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <FrenchKissStack scale={scale}>
    <FrenchKissInput id={props.id || "frenchkiss-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <FrenchKissLabel scale={scale} checked={checked} htmlFor={props.id || "frenchkiss-toggle"}>
      <div className="frenchkisses">
        <div className="frenchkiss" />
        <div className="frenchkiss" />
        <div className="frenchkiss" />
        <div className="butter" />
      </div>
    </FrenchKissLabel>
  </FrenchKissStack>
);

FrenchKissToggle.defaultProps = {
  scale: scales.MD,
};

export default FrenchKissToggle;
