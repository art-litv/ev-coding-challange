import ReactModal from "react-modal";
import { useEffect } from "react";
import Styled from "./Modal.styled";

if (typeof window !== "undefined") {
  ReactModal.setAppElement("#root");
}

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={Styled.modalStyles}
      closeTimeoutMS={300}
    >
      <Styled.Container>
        {title && (
          <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            <Styled.CloseButton onClick={onClose}>×</Styled.CloseButton>
          </Styled.Header>
        )}
        <Styled.Content>{children}</Styled.Content>
      </Styled.Container>
    </ReactModal>
  );
};

export default Modal;
