import { StyledText } from "../../styles/typography";
import { StyledLoading } from "./styles";
import { ImSpinner3 } from "react-icons/im";

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
