import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <image width="512" height="512" x="0" y="0" xlinkHref="data:image/png;base64,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" />
    </Svg>
  );
};

export default Icon;
