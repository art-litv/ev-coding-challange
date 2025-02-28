import { Button } from "@/components/ui/Button";
import styled from "styled-components";

export default {
  Container: styled.div`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  FiltersContainer: styled.div`
    display: flex;
    gap: 16px;
    flex: 1;
    margin-right: 16px;

    ${({ theme }) => theme.media.md} {
      flex-direction: column;
    }
  `,
  Group: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  Button: styled(Button)<{ $mobile?: boolean }>`
    ${({ $mobile }) => $mobile && `display: none;`}

    ${({ theme }) => theme.media.md} {
      display: none;

      ${({ $mobile }) => $mobile && `display: block;`}
    }
  `,
  Select: styled.select`
    padding: ${({ theme }) => theme.utils.spacing(3, 6)};
    border: 1px solid ${({ theme }) => theme.colors.borders.primary};
    border-radius: 4px;
    background: white;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.borders.primary};
    }
  `,
  SelectGroup: styled.div`
    display: flex;
    gap: 16px;
  `,
  SearchInput: styled.input`
    padding: ${({ theme }) => theme.utils.spacing(6, 8)};
    border: 1px solid ${({ theme }) => theme.colors.borders.primary};
    border-radius: 4px;
    background: white;
    width: 100%;
    max-width: 462px;
    height: fit-content;

    ${({ theme }) => theme.media.md} {
      max-width: 100%;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.borders.primary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.borders.primary};
    }
  `,
};
