import React, { useState } from "react";
import FrenchKissToggle from "./FrenchKissToggle";

export default {
  title: "Components/FrenchKissToggle",
  component: FrenchKissToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <FrenchKissToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <FrenchKissToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
