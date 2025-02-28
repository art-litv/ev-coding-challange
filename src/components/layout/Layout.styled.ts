import styled from "styled-components";

export default {
  Layout: styled.div`
    display: flex;
    min-height: 100vh;
  `,
  Header: styled.header`
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders.primary};
  `,
  Sidebar: styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${({ theme }) => theme.utils.spacing(14)};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    width: 72px;
  `,
  Content: styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
} as const;
