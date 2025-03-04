import styled from "styled-components";

export default {
  Layout: styled.div`
    display: flex;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background.primary};
  `,
  Header: styled.header`
    height: 68px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders.primary};
    background: ${({ theme }) => theme.colors.background.secondary};
  `,
  Sidebar: styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.utils.spacing(14, 6)};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    background: ${({ theme }) => theme.colors.background.secondary};
    z-index: 1;

    ${({ theme }) => theme.media.md} {
      display: none;
    }
  `,
  Content: styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
} as const;
