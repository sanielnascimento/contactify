import { useState, useEffect, useRef } from "react";
import { SDeletePopup } from "./styles";
import { iDeletePopupProps } from "./types";
import { createPortal } from "react-dom";
import { StyledButton } from "../../Button";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { useAuth, useContact } from "../../../hooks";

export const SlideDeletePopUp = ({
  children,
  togglePopup,
  currentId,
}: iDeletePopupProps) => {
  const { deleteProfile } = useAuth();
  const { deleteContact } = useContact();
  const [showWindow, setShowWindow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const deleting = async () => {
    currentId ? await deleteContact(currentId) : await deleteProfile();
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!event.target) return;

      if (!ref.current.contains(event.target as HTMLElement)) {
        togglePopup();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [togglePopup]);

  useEffect(() => {
    setShowWindow(true);
    return () => {
      setShowWindow(false);
    };
  }, []);

  return createPortal(
    <SDeletePopup>
      <div ref={ref} className={`slide-window ${showWindow ? "show" : "hide"}`}>
        <div className="delete-identification">
          <AiOutlineUsergroupDelete className="delete-img" />
          {children}
        </div>
        <div className="buttonbox">
          <StyledButton
            buttoncolor="red-50"
            buttonsize="small"
            onClick={() => deleting()}
          >
            Confirmar
          </StyledButton>
          <StyledButton
            buttoncolor="red-50"
            buttonsize="small"
            onClick={togglePopup}
          >
            Cancelar
          </StyledButton>
        </div>
      </div>
    </SDeletePopup>,
    document.body
  );
};
