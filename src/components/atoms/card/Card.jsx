import styled from "styled-components";

/*
 *atoms粒度な「カードの枠デザイン」コンポーネントを定義
 */
export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

// カードの枠を整えるcss
// ここではheightやwidthを指定しない。理由はこのコンポーネントを使う側がheightやwidthを指定する方が責務として良いから
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
