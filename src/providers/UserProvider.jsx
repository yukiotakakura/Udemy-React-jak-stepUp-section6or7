import React, { createContext, useState } from "react";

// Reactのコンテキストを使う為の前準備
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  // state変数を配列形式で定義
  const [userInfo, setUserInfo] = useState(null);
  return (
    // コンテキストで囲って上げて返却する
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
