import styled from "styled-components";

export default {
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.utils.spacing(6)};

    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.text.primary};
    }
  `,
  Actions: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.utils.spacing(3)};
  `,
} as const;
