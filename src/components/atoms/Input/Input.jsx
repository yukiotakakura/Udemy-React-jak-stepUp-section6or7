import styled from "styled-components";

/*
 * atoms粒度な「テキストボックス」コンポーネントを定義
 */
export const Input = (props) => {
  // プレスホルダが渡されていない場合の初期値
  const { placdholder = "" } = props;
  // inputタグ
  return <SInput type="text" placeholder={placdholder}></SInput>;
};

// 上記のテキストボックスを整えるcss
const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
