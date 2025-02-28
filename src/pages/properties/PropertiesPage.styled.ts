import styled from "styled-components";

export default {
  Page: styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.utils.spacing(30, 12)};

    ${({ theme }) => theme.media.md} {
      margin: ${({ theme }) => theme.utils.spacing(6)};
    }
  `,
} as const;
