import { StyledText } from "../../styles/typography";
import { ImSpinner3 } from "react-icons/im";

import { StyledLoading } from "./styles";


export const LoadingPage = () => {
  return (
    <StyledLoading>
      <div className="loading-box">
        <ImSpinner3 className="spinner" />
        <StyledText
          tag="h1"
          text="three"
          color="--color-primary"
          lineHeight="1"
          className=""
        >
          Aguarde...
        </StyledText>
      </div>
    </StyledLoading>
  );
};
