import styled, { css } from "styled-components";

const VARIANT_COLORS = {
  primary: css`
    background: ${({ theme }) => theme.colors.button.primary};
    color: #fff;
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.button.secondary};
  `,
};

export default {
  Button: styled.button<{ $variant: "primary" | "secondary" }>`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(3)};
    padding: ${({ theme }) => theme.utils.spacing(3, 6)};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    ${({ $variant }) => VARIANT_COLORS[$variant]};

    &:disabled {
      color: ${({ theme }) => theme.colors.button.disabled};
    }
  `,
} as const;
