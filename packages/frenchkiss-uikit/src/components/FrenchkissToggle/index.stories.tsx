import React, { useState } from "react";
import FrenchkissToggle from "./FrenchkissToggle";

export default {
  title: "Components/FrenchkissToggle",
  component: FrenchkissToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <FrenchkissToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <FrenchkissToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
