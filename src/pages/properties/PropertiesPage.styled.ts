import styled from "styled-components";

export default {
  Page: styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.utils.spacing(30, 12)};
  `,
} as const;
