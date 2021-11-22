import { Link } from "react-router-dom";
import styled from "styled-components";

/*
 *atoms粒度な「Header」コンポーネントを定義
 */
export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

// ヘッダーのスタイルを整えるcss
const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

// リンクを整えるcss
const SLink = styled(Link)`
  margin: 0 8px;
`;
