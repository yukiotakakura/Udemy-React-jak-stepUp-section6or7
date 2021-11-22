import React, { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

/*
 *organisms粒度な「ユーザ情報」コンポーネントを定義
 */
export const UserCard = memo((props) => {
  // 再レンダリング確認用
  console.log("UserCard");
  // ※ツライ実装例
  const { user } = props;
  return (
    <Card>
      {/*  ※ツライ実装例 */}
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDl>
    </Card>
  );
});

// ｄｌタグのレイアウトを整えるcss
const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;

  dt {
    float: left;
  }

  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
