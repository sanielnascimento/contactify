import { StyledLoading } from "./styles";

export const LoadingPage = () => {
  return (
    <StyledLoading>
      <div className="loading-box">
        <img src="/img/balloons-red-nobg.png" className="spinner" alt="logo" />
        <img src="/img/contactify-brand-nobg.png" className="logoname" alt="logoname" />
      </div>
    </StyledLoading>
  );
};
