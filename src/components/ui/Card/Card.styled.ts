import styled from "styled-components";

export default {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    width: 324px;
    border: 1px solid ${({ theme }) => theme.colors.borders.primary};
    background: ${({ theme }) => theme.colors.background.secondary};
    padding: ${({ theme }) => theme.utils.spacing(4, 6, 4, 4)};
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.span`
    font-size: ${({ theme }) => theme.size.text.sm};
  `,
  Actions: styled.div`
    display: flex;
    align-items: center;
  `,
  ImageContainer: styled.div`
    width: 130px;
    position: relative;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  Content: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(3)};
  `,
} as const;
