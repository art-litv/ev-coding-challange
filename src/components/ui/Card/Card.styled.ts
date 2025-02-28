import styled from "styled-components";

export default {
  Card: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.h2`
    margin: 0;
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
    gap: ${({ theme }) => theme.spacing.sm};
  `,
} as const;
