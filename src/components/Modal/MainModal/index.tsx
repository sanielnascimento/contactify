import { StyledCraateContactModal } from "./styles";
import { MdClose } from "react-icons/md";
import { iMainModalProps } from "./types";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const MainModal = ({ toggleModal, children }: iMainModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!event.target) return;

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <StyledCraateContactModal>
      <div ref={ref}>
        <button className="close-modal" type="button" onClick={toggleModal}>
          <MdClose />
        </button>
        {children}
      </div>
    </StyledCraateContactModal>,
    document.body
  );
};
