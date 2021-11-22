import React, { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/Input/Input";

/*
 *molecules粒度な「検索ボックス(inputタグ + buttonタグ)」コンポーネントを定義
 */
export const SearchInput = memo(() => {
  // 再レンダリング確認用
  console.log("SearchInput");
  return (
    <SContainer>
      {/*  inputタグ */}
      <Input placdholder="検索条件を入力" />
      <SButtonWrapper>
        {/*  buttonタグ */}
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

// テキストボックス(input)と検索ボタンを横並びにするcss
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

// テキストボックス(input)と検索ボタンの間に余白を設定するcss
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
