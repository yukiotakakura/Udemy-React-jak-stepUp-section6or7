import { Link } from "react-router-dom";
import styled from "styled-components";

/*
 *atoms粒度な「Footer」コンポーネントを定義
 */
export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

// ヘッダーのスタイルを整えるcss
const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
