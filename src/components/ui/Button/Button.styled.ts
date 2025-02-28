import styled from "styled-components";

export default {
  Button: styled.button`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(3)};
    padding: ${({ theme }) => theme.utils.spacing(3, 6)};
    color: ${({ theme }) => theme.colors.button.primary};

    &:disabled {
      color: ${({ theme }) => theme.colors.button.disabled};
    }
  `,
} as const;
