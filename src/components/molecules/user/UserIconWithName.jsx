import React, { memo, useContext } from "react"; // コンテキストを使う為のhooks
import styled from "styled-components";
//import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

/*
 *molecules粒度な「画像+名前」コンポーネントを定義
 */
export const UserIconWithName = memo((props) => {
  // 再レンダリング確認用
  console.log("UserIconWithName");
  const { image, name } = props;

  // グローバルなstate管理(UserContext編)
  // 使うメリットは、Recoilを使うと再レンダリングを気にしなくても良くなる
  //const { userInfo } = useContext(UserContext);

  // グローバルなstate管理(Recoil編)
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImag height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {/*  trueの場合のみ「編集」が表示される */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

// 名前と写真を中寄せするcss
const SContainer = styled.div`
  text-align: center;
`;

// 写真を丸くするcss
const SImag = styled.img`
  border-radius: 50%;
`;

// 名前のスタイルを変更するcss
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

// 編集リンクのスタイルを整えるcss ※ツライ実装例
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
