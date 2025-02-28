import styled from "styled-components";

export default {
  DataRow: styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.size.text.sm};
  `,
  DataLabel: styled.span``,
  DataValue: styled.span`
    color: ${({ theme }) => theme.colors.text.secondary};
  `,
};
