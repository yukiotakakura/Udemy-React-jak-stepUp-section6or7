import styled from "styled-components"; // cssライブラリ
import { BaseButton } from "./BaseButton"; // ボタンの共通スタイル

/*
 *atoms粒度な「ボタン」コンポーネントを定義
 */
export const PrimaryButton = (props) => {
  const { children } = props;
  // buttonタグ
  return <SButton>{children}</SButton>;
};

// 上記のボタンを整えるcss。BaseButton(共通スタイル)コンポーネントを呼び出す。
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
