import React from "react";
import { FrenchkissStack, FrenchkissInput, FrenchkissLabel } from "./StyledFrenchkissToggle";
import { FrenchkissToggleProps, scales } from "./types";

const FrenchkissToggle: React.FC<FrenchkissToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <FrenchkissStack scale={scale}>
    <FrenchkissInput id={props.id || "frenchkiss-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <FrenchkissLabel scale={scale} checked={checked} htmlFor={props.id || "frenchkiss-toggle"}>
      <div className="frenchkisses">
        <div className="frenchkiss" />
        <div className="frenchkiss" />
        <div className="frenchkiss" />
        <div className="butter" />
      </div>
    </FrenchkissLabel>
  </FrenchkissStack>
);

FrenchkissToggle.defaultProps = {
  scale: scales.MD,
};

export default FrenchkissToggle;
