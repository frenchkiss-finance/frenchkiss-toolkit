import React from "react";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
    currentLang: string;
}

const LangSelector: React.FC<Props> = ({ currentLang }) => (
    <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
    </Button>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);