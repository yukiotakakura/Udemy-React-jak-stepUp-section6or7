import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import { useSetRecoilState } from "recoil";

/*
 *pages粒度な「Topページ」コンポーネントを定義
 */
export const Top = () => {
  const history = useHistory();
  // グローバルなstateからセット関数を取得する（userContext編）
  //const { setUserInfo } = useContext(UserContext);

  // グローバルなstate管理(Recoil編)
  // 使うメリットは、Recoilを使うと再レンダリングを気にしなくても良くなる
  const setUserInfo = useSetRecoilState(userState);

  // 「管理者ユーザー」を押されたら
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    // 画面遷移(jsを使った画面遷移)
    history.push("/users");
    // ※ツライ実装例
    //history.push({ pathname: "/users", state: { isAdmin: true } });
  };

  // 「一般ユーザー」を押されたら
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    // 画面遷移(jsを使った画面遷移)
    history.push("/users");
    // ※ツライ実装例
    //history.push({ pathname: "/users", state: { isAdmin: false } });
  };

  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

// 中央寄せ
const SContainer = styled.div`
  text-align: center;
`;
