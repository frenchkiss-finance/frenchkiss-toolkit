import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        d="M12.453,6c1.971,0.013,2.392.79,3.626,1.118,2.085,0.555,2.888-1.485,4.887-.8C24.725,7.61,29.8,14.842,32,18.137c-1.209,3.777-5.251,8.034-9.458,8.783-2.372.422-4.33-.937-6.305-1.278-2.613-.451-3.9,1.285-6.148.958C4.962,25.856,1.907,21.705,0,17.658A38.271,38.271,0,0,1,12.453,6Zm2.207,6.547c-3.209,1.253-6.123,1.246-8.2,3.513L6.778,16.38l18.443,0.479,0.158-.319L24.906,15.9C21.666,14.567,19.461,12.61,14.66,12.548Z"
        fill="#e64c6d"
        fillRule="evenodd"
      />
      <path
        d="M24.749,15.582c0.384,0.117,6.9,2.817,6.936,2.875H30.739a29.19,29.19,0,0,0-14.345-.16c-1.1.257-4.109-1.445-5.517-1.278l-10.089.958v-0.16l5.675-2.076c0.6,1,16.441,1.445,18.916.958l0.158-.319L25.222,15.9Z"
        fill="#593233"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default Icon;
