import styled from "styled-components";

export default {
  PropertyData: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.utils.spacing(2)};
    flex: 1;
  `,
  Divider: styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider.primary};
  `,
  Price: styled.span`
    font-size: ${({ theme }) => theme.size.text.md};
  `,
} as const;
