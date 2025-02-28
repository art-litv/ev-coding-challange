import styled from "styled-components";
import { Styles } from "react-modal";

const modalStyles: Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    padding: 0,
    border: "none",
    background: "none",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "visible",
  },
};

export default {
  modalStyles,
  Container: styled.div`
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    max-height: 90vh;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.utils.spacing(6)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders.primary};
  `,
  Title: styled.h2`
    margin: 0;
    font-size: ${({ theme }) => theme.size.text.md};
    color: ${({ theme }) => theme.colors.text.secondary};
  `,
  CloseButton: styled.button`
    background: none;
    border: none;
    font-size: 24px;
    line-height: 1;
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  `,
  Content: styled.div`
    padding: ${({ theme }) => theme.utils.spacing(6)};
    overflow-y: auto;
  `,
} as const;
