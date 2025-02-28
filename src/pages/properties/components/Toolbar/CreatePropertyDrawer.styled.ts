import styled from "styled-components";
import Drawer from "react-modern-drawer";

export default {
  Drawer: styled(Drawer)`
    width: 900px !important;

    ${({ theme }) => theme.media.md} {
      width: 100% !important;
    }
  `,
  DrawerContent: styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100%;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.background.secondary};
  `,
  Title: styled.h2`
    font-size: 20px;
    font-weight: 600;
  `,
  CloseButton: styled.button`
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  `,
  Form: styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  FormContent: styled.div`
    flex: 1;
  `,
  SectionTitle: styled.h3`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 16px;
  `,
  InputGroup: styled.div`
    margin-bottom: 16px;
  `,
  Label: styled.label`
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 4px;
  `,
  Input: styled.input`
    width: -webkit-fill-available;
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  `,
  ButtonContainer: styled.div`
    margin-top: auto;
    margin-bottom: 42px;
  `,
};
