import styled from "styled-components";

export default {
  IconButton: styled.button`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(3)};
    padding: ${({ theme }) => theme.utils.spacing(3, 6)};
  `,
} as const;
