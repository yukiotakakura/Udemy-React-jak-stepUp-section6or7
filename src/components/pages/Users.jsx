import React, { useContext } from "react";
import styled from "styled-components";
//import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil"; // Recoil(グローバルなstate管理)
import { userState } from "../../store/userState";

// UserCardコンポーネントに渡す変数(props)を定義
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "03-1234-5678",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

/*
 *pages粒度な「ユーザー一覧」コンポーネントを定義
 */
export const Users = () => {
  // 再レンダリング確認用
  console.log("Users");
  // useContextを使用したグローバルなstate管理
  //const { userInfo, setUserInfo } = useContext(UserContext);

  // Recoilを使用したグローバルなstate管理
  // 使うメリットは、Recoilを使うと再レンダリングを気にしなくても良くなる
  const [userInfo, setUserInfo] = useRecoilState(userState);
  // 切り替えボタンが押された場合
  const onClickSwitch = () => {
    // 編集ボタンを表示・非表示を切り替える
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

// 中央寄せ
const SContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

// UserCardのスタイルを整えるcss
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
