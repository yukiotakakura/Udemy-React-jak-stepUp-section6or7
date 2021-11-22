import styled from "styled-components";

/*
 *atoms粒度な「ボタン」の共通スタイルを定義
 */
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
