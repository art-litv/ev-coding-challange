import styled from "styled-components";

export default {
  List: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px 8px;
  `,
} as const;
