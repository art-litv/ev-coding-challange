import styled from "styled-components";

export default {
  IconButton: styled.button`
    display: flex;
    gap: ${({ theme }) => theme.utils.spacing(3)};
    padding: 0;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: transparent;

    &:hover {
      background: rgb(0, 0, 0, 0.1);
    }

    &:active {
      background: rgb(0, 0, 0, 0.2);
    }
  `,
} as const;
